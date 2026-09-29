import { careersData } from '../data/careersData';

/**
 * AI Career Recommendation Engine
 * 
 * Modular multi-factor scoring architecture:
 * 1. Skill Match Weight: 35%
 * 2. Interest Alignment Weight: 30%
 * 3. Academic Background Weight: 15%
 * 4. Work Preferences & Personality Weight: 10%
 * 5. Long-term Career Goals Weight: 10%
 * 
 * Easily swapped with LLM / Gemini API prompt-based evaluation.
 */
export function calculateCareerRecommendations(assessmentData) {
  const {
    academic = {},
    skills = [],
    interests = [],
    preferences = {},
    goals = {}
  } = assessmentData;

  const skillMap = {};
  skills.forEach(s => {
    // s can be string or { name: 'Python', level: 4 }
    if (typeof s === 'string') {
      skillMap[s.toLowerCase()] = 4; // default good level
    } else if (s && s.name) {
      skillMap[s.name.toLowerCase()] = s.level || 3;
    }
  });

  const lowerInterests = (interests || []).map(i => i.toLowerCase());
  const favoriteSubjects = (academic.favoriteSubjects || []).map(s => s.toLowerCase());
  const degree = (academic.degree || '').toLowerCase();

  const scoredCareers = careersData.map(career => {
    let skillScore = 0;
    let skillMax = 0;
    const matchedReasons = [];

    // 1. Skill evaluation
    career.requiredSkills.forEach(req => {
      skillMax += 100;
      const lowerReq = req.name.toLowerCase();
      
      let userLevel = 0;
      // Exact or partial match in user skills
      for (const [userSkill, level] of Object.entries(skillMap)) {
        if (lowerReq.includes(userSkill) || userSkill.includes(lowerReq)) {
          userLevel = Math.max(userLevel, (level / 5) * 100);
        }
      }

      // Check default fallback baseline if user is student
      if (userLevel === 0 && (lowerReq.includes('problem') || lowerReq.includes('communication') || lowerReq.includes('teamwork'))) {
        userLevel = 70;
      }

      skillScore += Math.min(100, userLevel > 0 ? (userLevel / req.requiredLevel) * 100 : 25);

      if (userLevel >= 70) {
        matchedReasons.push(`Strong demonstrated aptitude in ${req.name}`);
      }
    });

    const normalizedSkillScore = skillMax > 0 ? (skillScore / skillMax) * 100 : 60;

    // 2. Interest evaluation
    let interestScore = 50;
    const careerKeywords = [
      career.name.toLowerCase(),
      career.category.toLowerCase(),
      ...(career.toolsAndTech || []).map(t => t.toLowerCase())
    ];

    let interestMatches = 0;
    lowerInterests.forEach(interest => {
      const match = careerKeywords.some(kw => kw.includes(interest) || interest.includes(kw));
      if (match) {
        interestMatches++;
        interestScore += 12;
        matchedReasons.push(`High affinity for ${interest}`);
      }
    });

    if (lowerInterests.includes('artificial intelligence') && career.id.includes('ai')) interestScore += 15;
    if (lowerInterests.includes('machine learning') && career.id.includes('ml')) interestScore += 15;
    if (lowerInterests.includes('cybersecurity') && career.id.includes('security')) interestScore += 20;
    if (lowerInterests.includes('design') && career.id.includes('ui-ux')) interestScore += 25;
    if (lowerInterests.includes('web development') && career.id.includes('developer')) interestScore += 20;

    interestScore = Math.min(100, interestScore);

    // 3. Academic background
    let academicScore = 65;
    if (favoriteSubjects.includes('mathematics') || favoriteSubjects.includes('statistics')) {
      if (['ai-ml-engineer', 'data-scientist'].includes(career.id)) {
        academicScore += 25;
        matchedReasons.push("Strong mathematics & analytical coursework background");
      }
    }
    if (favoriteSubjects.includes('computer science') || favoriteSubjects.includes('programming')) {
      academicScore += 20;
      matchedReasons.push("Direct alignment with computer science curriculum");
    }
    if (degree.includes('computer') || degree.includes('it') || degree.includes('data') || degree.includes('ai')) {
      academicScore += 15;
    }
    academicScore = Math.min(100, academicScore);

    // 4. Personality & Work preferences
    let prefScore = 70;
    if (preferences.workStyle === 'analytical' && ['data-scientist', 'ai-ml-engineer', 'cybersecurity-analyst'].includes(career.id)) {
      prefScore += 15;
      matchedReasons.push("Analytical and diagnostic mindset matches role demands");
    }
    if (preferences.workStyle === 'creative' && career.id === 'ui-ux-designer') {
      prefScore += 25;
      matchedReasons.push("Creative design-driven temperament");
    }
    if (preferences.researchInterest && ['ai-ml-engineer', 'data-scientist'].includes(career.id)) {
      prefScore += 15;
      matchedReasons.push("Eagerness to explore state-of-the-art research papers & experimental models");
    }
    prefScore = Math.min(100, prefScore);

    // 5. Goals alignment
    let goalScore = 70;
    if (goals.industry && career.category.toLowerCase().includes(goals.industry.toLowerCase())) {
      goalScore += 20;
    }
    goalScore = Math.min(100, goalScore);

    // Composite Weighted Calculation
    const compositeScore = Math.round(
      (normalizedSkillScore * 0.35) +
      (interestScore * 0.30) +
      (academicScore * 0.15) +
      (prefScore * 0.10) +
      (goalScore * 0.10)
    );

    // Clamp score to realistic and motivating college range (65% - 96%)
    const finalMatch = Math.min(96, Math.max(62, compositeScore));

    // Deduplicate and pick top 4 personalized reasons
    const uniqueReasons = Array.from(new Set(matchedReasons));
    if (uniqueReasons.length === 0) {
      uniqueReasons.push("Good foundational problem solving capability");
      uniqueReasons.push("High potential for rapid skill growth in this domain");
    }

    return {
      ...career,
      match: finalMatch,
      personalizedReasons: uniqueReasons.slice(0, 4)
    };
  });

  // Sort descending by match score
  scoredCareers.sort((a, b) => b.match - a.match);

  const topCareer = scoredCareers[0];

  // Calculate detailed Skill Gap for the top career
  const skillGapAnalysis = topCareer.requiredSkills.map(req => {
    const lowerReq = req.name.toLowerCase();
    let currentLevel = 45; // baseline student familiarity

    for (const [userSkill, level] of Object.entries(skillMap)) {
      if (lowerReq.includes(userSkill) || userSkill.includes(lowerReq)) {
        currentLevel = Math.round((level / 5) * 100);
      }
    }

    return {
      skill: req.name,
      currentLevel: Math.min(100, currentLevel),
      requiredLevel: req.requiredLevel,
      gap: Math.max(0, req.requiredLevel - currentLevel),
      category: req.category
    };
  });

  const totalCurrent = skillGapAnalysis.reduce((acc, curr) => acc + curr.currentLevel, 0);
  const totalRequired = skillGapAnalysis.reduce((acc, curr) => acc + curr.requiredLevel, 0);
  const readinessScore = Math.round((totalCurrent / totalRequired) * 100);

  // Identify top skills to focus on
  const sortedGaps = [...skillGapAnalysis].sort((a, b) => b.gap - a.gap);
  const topFocusSkills = sortedGaps.slice(0, 2).map(s => s.skill);

  return {
    topCareer,
    recommendations: scoredCareers,
    skillGapAnalysis,
    readinessScore,
    recommendedFocus: `You should prioritize mastering ${topFocusSkills.join(' and ')} next to bridge your highest skill gaps.`,
    analyzedAt: new Date().toISOString()
  };
}

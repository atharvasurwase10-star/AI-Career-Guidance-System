import { careersData } from '../../src/data/careersData.js';

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
    if (typeof s === 'string') {
      skillMap[s.toLowerCase()] = 4;
    } else if (s && s.name) {
      skillMap[s.name.toLowerCase()] = s.level || 3;
    }
  });

  const lowerInterests = (interests || []).map(i => i.toLowerCase());
  const favoriteSubjects = (academic.favoriteSubjects || []).map(s => s.toLowerCase());

  const scoredCareers = careersData.map(career => {
    let skillScore = 0;
    let skillMax = 0;
    const matchedReasons = [];

    career.requiredSkills.forEach(req => {
      skillMax += 100;
      const lowerReq = req.name.toLowerCase();
      let userLevel = 0;

      for (const [userSkill, level] of Object.entries(skillMap)) {
        if (lowerReq.includes(userSkill) || userSkill.includes(lowerReq)) {
          userLevel = Math.max(userLevel, (level / 5) * 100);
        }
      }

      if (userLevel === 0 && (lowerReq.includes('problem') || lowerReq.includes('communication'))) {
        userLevel = 70;
      }

      skillScore += Math.min(100, userLevel > 0 ? (userLevel / req.requiredLevel) * 100 : 25);
      if (userLevel >= 70) {
        matchedReasons.push(`Strong aptitude in ${req.name}`);
      }
    });

    const normalizedSkillScore = skillMax > 0 ? (skillScore / skillMax) * 100 : 60;

    let interestScore = 50;
    const careerKeywords = [career.name.toLowerCase(), career.category.toLowerCase(), ...(career.toolsAndTech || []).map(t => t.toLowerCase())];

    lowerInterests.forEach(interest => {
      if (careerKeywords.some(kw => kw.includes(interest) || interest.includes(kw))) {
        interestScore += 12;
        matchedReasons.push(`High affinity for ${interest}`);
      }
    });
    interestScore = Math.min(100, interestScore);

    let academicScore = 65;
    if (favoriteSubjects.includes('mathematics') && ['ai-ml-engineer', 'data-scientist'].includes(career.id)) {
      academicScore += 25;
      matchedReasons.push("Strong mathematics & analytical coursework background");
    }
    academicScore = Math.min(100, academicScore);

    let prefScore = 70;
    if (preferences.workStyle === 'analytical' && ['data-scientist', 'ai-ml-engineer'].includes(career.id)) {
      prefScore += 15;
    }
    prefScore = Math.min(100, prefScore);

    let goalScore = 70;
    if (goals.industry && career.category.toLowerCase().includes(goals.industry.toLowerCase())) {
      goalScore += 20;
    }
    goalScore = Math.min(100, goalScore);

    const compositeScore = Math.round(
      (normalizedSkillScore * 0.35) +
      (interestScore * 0.30) +
      (academicScore * 0.15) +
      (prefScore * 0.10) +
      (goalScore * 0.10)
    );

    const finalMatch = Math.min(96, Math.max(62, compositeScore));

    return {
      ...career,
      match: finalMatch,
      personalizedReasons: Array.from(new Set(matchedReasons)).slice(0, 4)
    };
  });

  scoredCareers.sort((a, b) => b.match - a.match);
  const topCareer = scoredCareers[0];

  const skillGapAnalysis = topCareer.requiredSkills.map(req => {
    const lowerReq = req.name.toLowerCase();
    let currentLevel = 45;
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

  return {
    topCareer,
    recommendations: scoredCareers,
    skillGapAnalysis,
    readinessScore,
    analyzedAt: new Date().toISOString()
  };
}

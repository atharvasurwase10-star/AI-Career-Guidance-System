import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  GraduationCap, 
  BrainCircuit, 
  Heart, 
  Briefcase, 
  Target, 
  Star,
  CheckCircle2,
  Cpu,
  Layers,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export function AssessmentPage({ onNavigate, onAssessmentComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisPhase, setAnalysisPhase] = useState('');

  // Assessment State
  const [academic, setAcademic] = useState({
    educationLevel: 'Bachelor of Technology (B.Tech / B.E)',
    degree: 'Computer Science & Engineering',
    favoriteSubjects: ['Mathematics', 'Programming', 'Data Structures'],
    performance: '8.0 - 9.0 CGPA (First Class with Distinction)'
  });

  const availableSkillsList = [
    'Python',
    'Java',
    'C++',
    'Data Analysis',
    'Machine Learning',
    'Communication',
    'Leadership',
    'Problem Solving',
    'Creativity',
    'Teamwork',
    'Mathematics',
    'Programming',
    'SQL',
    'Cloud Basics',
    'Networking',
    'UI/UX Design'
  ];

  // User skills with proficiency levels 1 to 5
  const [selectedSkills, setSelectedSkills] = useState({
    'Python': 4,
    'Programming': 4,
    'Problem Solving': 4,
    'Mathematics': 4,
    'Machine Learning': 3,
    'Data Analysis': 3
  });

  const availableInterests = [
    'Artificial Intelligence',
    'Software Development',
    'Data Science',
    'Cybersecurity',
    'Web Development',
    'Robotics',
    'Finance',
    'Design',
    'Business',
    'Research',
    'Cloud Computing',
    'DevOps'
  ];

  const [selectedInterests, setSelectedInterests] = useState([
    'Artificial Intelligence',
    'Machine Learning',
    'Software Development'
  ]);

  const [preferences, setPreferences] = useState({
    teamStructure: 'balanced', // individual, teams, balanced
    workStyle: 'analytical', // creative, analytical, blend
    workEnvironment: 'hybrid', // remote, hybrid, office
    researchInterest: true,
    entrepreneurshipInterest: false
  });

  const [goals, setGoals] = useState({
    industry: 'AI & Data',
    pathType: 'Both Job & Research',
    shortTerm: 'Master modern Machine Learning & full-stack development',
    longTerm: 'Lead high-impact AI technology products and research teams'
  });

  // Step 2 Skill Toggles
  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => {
      const next = { ...prev };
      if (next[skill]) {
        delete next[skill];
      } else {
        next[skill] = 3; // default intermediate
      }
      return next;
    });
  };

  const handleProficiencyChange = (skill, level) => {
    setSelectedSkills(prev => ({
      ...prev,
      [skill]: level
    }));
  };

  // Step 3 Interest Toggles
  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  // Step 1 Subject Toggles
  const subjectsList = [
    'Mathematics',
    'Programming',
    'Data Structures',
    'Statistics',
    'Database Systems',
    'Computer Networks',
    'Artificial Intelligence',
    'Physics',
    'Operating Systems',
    'Software Engineering'
  ];

  const handleSubjectToggle = (subj) => {
    setAcademic(prev => ({
      ...prev,
      favoriteSubjects: prev.favoriteSubjects.includes(subj)
        ? prev.favoriteSubjects.filter(s => s !== subj)
        : [...prev.favoriteSubjects, subj]
    }));
  };

  // Submit and Run AI Engine
  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate high-tech multi-stage AI analysis animation
    setAnalysisPhase('Synthesizing academic profile and core subject strengths...');
    await new Promise(r => setTimeout(r, 700));

    setAnalysisPhase('Embedding technical skills into multidimensional competency space...');
    await new Promise(r => setTimeout(r, 700));

    setAnalysisPhase('Matching cognitive interests across 50+ industry career tracks...');
    await new Promise(r => setTimeout(r, 700));

    setAnalysisPhase('Generating personalized skill gap matrix & custom roadmap...');
    await new Promise(r => setTimeout(r, 600));

    // Convert skills to list of objects
    const skillsPayload = Object.entries(selectedSkills).map(([name, level]) => ({
      name,
      level
    }));

    const result = await api.assessment.submit({
      academic,
      skills: skillsPayload,
      interests: selectedInterests,
      preferences,
      goals
    });

    setIsAnalyzing(false);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    if (onAssessmentComplete) {
      onAssessmentComplete(result.data);
    }
    onNavigate('recommendation-result');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Multi-Factor Diagnostic</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          AI Career Assessment
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Complete the 5 quick sections below. Our AI engine evaluates your answers to match you with top-fitting career paths.
        </p>
      </div>

      {/* Stepper Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 -z-10" 
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />

          {[
            { num: 1, label: 'Academic' },
            { num: 2, label: 'Skills' },
            { num: 3, label: 'Interests' },
            { num: 4, label: 'Workstyle' },
            { num: 5, label: 'Goals' }
          ].map((st) => (
            <div key={st.num} className="flex flex-col items-center">
              <div 
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  currentStep > st.num
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : currentStep === st.num
                    ? 'bg-indigo-600 text-white shadow-glow ring-4 ring-indigo-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-500'
                }`}
              >
                {currentStep > st.num ? <Check className="w-4 h-4" /> : st.num}
              </div>
              <span className={`text-[11px] font-medium mt-2 hidden sm:block ${
                currentStep === st.num ? 'text-indigo-400 font-semibold' : 'text-slate-500'
              }`}>
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Questionnaire Box */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
        
        {/* Loading Overlay while analyzing */}
        {isAnalyzing && (
          <div className="absolute inset-0 z-50 bg-slate-950/95 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center p-8 text-center space-y-6 animate-fadeIn">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-glow animate-pulse">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400"></span>
              </span>
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white">AI is analyzing your profile...</h3>
              <p className="text-xs sm:text-sm text-indigo-300 font-medium animate-pulse min-h-[40px]">
                {analysisPhase}
              </p>
            </div>

            <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full animate-pulse" style={{ width: '85%' }}></div>
            </div>
          </div>
        )}

        {/* STEP 1: Academic Background */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Step 1 – Academic Background</h2>
                <p className="text-xs text-slate-400">Your current study level, curriculum, and subject preferences</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Current Education Level
                </label>
                <select
                  value={academic.educationLevel}
                  onChange={(e) => setAcademic(prev => ({ ...prev, educationLevel: e.target.value }))}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>Bachelor of Technology (B.Tech / B.E)</option>
                  <option>Bachelor of Computer Applications (BCA)</option>
                  <option>Bachelor of Science (B.Sc CS / IT / Math)</option>
                  <option>Master of Technology (M.Tech)</option>
                  <option>Master of Computer Applications (MCA)</option>
                  <option>Diploma in Engineering</option>
                  <option>High School / 12th Grade</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Degree / Branch of Study
                </label>
                <input
                  type="text"
                  value={academic.degree}
                  onChange={(e) => setAcademic(prev => ({ ...prev, degree: e.target.value }))}
                  placeholder="e.g. Computer Science, Artificial Intelligence, ECE"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Academic Performance (CGPA or Percentage)
              </label>
              <select
                value={academic.performance}
                onChange={(e) => setAcademic(prev => ({ ...prev, performance: e.target.value }))}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                <option>9.0 - 10.0 CGPA / 85%+ (Outstanding / Honors)</option>
                <option>8.0 - 9.0 CGPA / 75-85% (First Class with Distinction)</option>
                <option>7.0 - 8.0 CGPA / 65-75% (First Class)</option>
                <option>6.0 - 7.0 CGPA / 55-65% (Second Class)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Favorite Subjects (Select all that you genuinely enjoy):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {subjectsList.map((subj, idx) => {
                  const isSelected = academic.favoriteSubjects.includes(subj);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSubjectToggle(subj)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300 font-semibold shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{subj}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Skills with Interactive Proficiency */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <Layers className="w-6 h-6 text-purple-400" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Step 2 – Skills & Proficiencies</h2>
                <p className="text-xs text-slate-400">Click to select skills and rate your confidence (1 to 5 stars)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
              {availableSkillsList.map((skill) => {
                const isSelected = !!selectedSkills[skill];
                const level = selectedSkills[skill] || 0;

                return (
                  <div
                    key={skill}
                    className={`p-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-slate-900/90 border-indigo-500/40 shadow-sm'
                        : 'bg-slate-900/40 border-slate-800 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <button
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className="text-xs font-semibold text-white flex items-center gap-2 hover:text-indigo-400"
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-700'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span>{skill}</span>
                      </button>

                      {isSelected && (
                        <span className="text-[10px] font-semibold text-indigo-300">
                          Level {level}/5
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-1 pl-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleProficiencyChange(skill, star)}
                            className="p-1 focus:outline-none"
                            title={`Proficiency: ${star}/5`}
                          >
                            <Star
                              className={`w-3.5 h-3.5 ${
                                star <= level 
                                  ? 'text-amber-400 fill-amber-400' 
                                  : 'text-slate-700'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-500">
              Selected: <strong className="text-white">{Object.keys(selectedSkills).length} skills</strong>. Be honest with ratings — the AI calculates realistic skill gap targets based on these.
            </p>
          </div>
        )}

        {/* STEP 3: Interests */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <Heart className="w-6 h-6 text-rose-400" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Step 3 – Cognitive Interests</h2>
                <p className="text-xs text-slate-400">Select topics and fields that inspire your curiosity</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableInterests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-3.5 rounded-xl text-xs font-semibold text-left transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-rose-500/10 border-rose-500/40 text-rose-300 shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span>{interest}</span>
                    {isSelected && <Check className="w-4 h-4 text-rose-400" />}
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
              Tip: Choosing distinct interests helps the AI generate more divergent and creative multi-disciplinary recommendations.
            </div>
          </div>
        )}

        {/* STEP 4: Work Preferences & Personality */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Step 4 – Work Preferences & Personality</h2>
                <p className="text-xs text-slate-400">How you prefer to collaborate, solve problems, and structure your workplace</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Collaboration Style:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'individual', label: 'Individually (Deep focus)' },
                    { id: 'teams', label: 'In Teams (Collaborative)' },
                    { id: 'balanced', label: 'Balanced (Both)' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPreferences(p => ({ ...p, teamStructure: opt.id }))}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        preferences.teamStructure === opt.id
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-semibold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Nature of Work:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'analytical', label: 'Analytical & Logical' },
                    { id: 'creative', label: 'Creative & Visual' },
                    { id: 'blend', label: 'Blend of Both' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPreferences(p => ({ ...p, workStyle: opt.id }))}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        preferences.workStyle === opt.id
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-semibold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Workplace Setting:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'remote', label: 'Remote / Work from Anywhere' },
                    { id: 'hybrid', label: 'Hybrid (Best of both)' },
                    { id: 'office', label: 'On-Site / Office' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPreferences(p => ({ ...p, workEnvironment: opt.id }))}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        preferences.workEnvironment === opt.id
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-semibold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.researchInterest}
                    onChange={(e) => setPreferences(p => ({ ...p, researchInterest: e.target.checked }))}
                    className="w-4 h-4 rounded text-indigo-600 bg-slate-950 border-slate-700"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Interested in Research?</span>
                    <span className="text-[11px] text-slate-400">Papers, experimental algorithms, novelty</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.entrepreneurshipInterest}
                    onChange={(e) => setPreferences(p => ({ ...p, entrepreneurshipInterest: e.target.checked }))}
                    className="w-4 h-4 rounded text-indigo-600 bg-slate-950 border-slate-700"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Startup / Entrepreneurship?</span>
                    <span className="text-[11px] text-slate-400">Building products, venture creation</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Career Goals */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
              <Target className="w-6 h-6 text-emerald-400" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Step 5 – Career Goals</h2>
                <p className="text-xs text-slate-400">Define your short-term ambitions and long-term vision</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Desired Target Industry
                </label>
                <select
                  value={goals.industry}
                  onChange={(e) => setGoals(g => ({ ...g, industry: e.target.value }))}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>AI & Data</option>
                  <option>Software & Cloud Tech</option>
                  <option>Cybersecurity & Defense</option>
                  <option>FinTech & Quantitative Finance</option>
                  <option>Product Design & UX</option>
                  <option>Healthcare Tech</option>
                  <option>Robotics & Hardware</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Immediate Direction
                </label>
                <select
                  value={goals.pathType}
                  onChange={(e) => setGoals(g => ({ ...g, pathType: e.target.value }))}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>Industry Software Job / Internship</option>
                  <option>Higher Studies (MS / M.Tech / PhD)</option>
                  <option>Both Job & Research</option>
                  <option>Launching an AI Startup</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Short-Term Goal (Next 6-12 Months)
              </label>
              <input
                type="text"
                value={goals.shortTerm}
                onChange={(e) => setGoals(g => ({ ...g, shortTerm: e.target.value }))}
                placeholder="e.g. Master PyTorch and build 2 real-world portfolio projects"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Long-Term Career Vision (3-5 Years)
              </label>
              <input
                type="text"
                value={goals.longTerm}
                onChange={(e) => setGoals(g => ({ ...g, longTerm: e.target.value }))}
                placeholder="e.g. Work as a Staff Machine Learning Engineer or Solutions Architect"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Diagnostic complete note */}
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs flex items-center gap-3">
              <Sparkles className="w-5 h-5 flex-shrink-0 text-indigo-400" />
              <span>
                All 5 diagnostic sections are primed. Clicking below will compute your personalized career vector match and skill gap score.
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons between Steps */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-800/80 mt-6">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center gap-1.5"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAnalyze}
              className="px-8 py-3 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 shadow-glow transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Analyze My Career</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}

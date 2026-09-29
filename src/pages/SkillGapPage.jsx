import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  ArrowRight, 
  TrendingUp, 
  Compass, 
  Target,
  RefreshCw
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { api } from '../services/api';
import { careersData } from '../data/careersData';
import { SkillProgressBar } from '../components/SkillProgressBar';

export function SkillGapPage({ careerId, onNavigate, onSelectResourceSkill }) {
  const [selectedCareerId, setSelectedCareerId] = useState(careerId || 'ai-ml-engineer');
  const [assessment, setAssessment] = useState(null);
  const [completedSkills, setCompletedSkills] = useState([]);

  useEffect(() => {
    const data = api.assessment.getLatest();
    setAssessment(data);
    setCompletedSkills(api.progress.getCompletedSkills());
  }, []);

  const career = careersData.find(c => c.id === selectedCareerId) || careersData[0];

  // Map user skill levels
  const userSkillMap = {
    'python': 80,
    'sql': 45,
    'machine learning': 30,
    'statistics & math': 60,
    'deep learning': 25,
    'tensorflow / pytorch': 30,
    'mlops & docker': 20,
    'javascript / typescript': 85,
    'react.js / next.js': 75,
    'node.js / express': 65,
    'computer networking': 40,
    'linux / unix': 55,
    'figma & prototyping': 40
  };

  const handleToggleComplete = (skillName) => {
    const updated = api.progress.toggleSkillCompleted(skillName);
    setCompletedSkills([...updated]);
  };

  const handleLearnSkill = (skillName) => {
    if (onSelectResourceSkill) {
      onSelectResourceSkill(skillName);
    }
    onNavigate('resources');
  };

  // Build comparison rows
  const skillRows = career.requiredSkills.map(req => {
    const isCompleted = completedSkills.includes(req.name);
    const lower = req.name.toLowerCase();
    let current = userSkillMap[lower] || 40;
    if (isCompleted) current = req.requiredLevel;

    return {
      skill: req.name,
      currentLevel: current,
      requiredLevel: req.requiredLevel,
      gap: Math.max(0, req.requiredLevel - current),
      isCompleted
    };
  });

  const totalCurrent = skillRows.reduce((a, b) => a + (b.isCompleted ? b.requiredLevel : b.currentLevel), 0);
  const totalRequired = skillRows.reduce((a, b) => a + b.requiredLevel, 0);
  const readinessScore = Math.round((totalCurrent / totalRequired) * 100);

  // Highest gaps
  const sortedGaps = [...skillRows].filter(s => !s.isCompleted).sort((a, b) => b.gap - a.gap);
  const topFocus = sortedGaps.slice(0, 2).map(s => s.skill);

  // Chart data
  const chartData = skillRows.map(s => ({
    name: s.skill.length > 15 ? s.skill.slice(0, 13) + '..' : s.skill,
    fullName: s.skill,
    'Your Level': s.isCompleted ? s.requiredLevel : s.currentLevel,
    'Target Benchmark': s.requiredLevel
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Quantitative Competency Matrix</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skill Gap Analysis
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Evaluate your current abilities against exact industry hiring criteria
          </p>
        </div>

        {/* Career Selector Dropdown */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <label className="text-xs text-slate-400 font-medium">Target Role:</label>
          <select
            value={selectedCareerId}
            onChange={(e) => setSelectedCareerId(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-indigo-500"
          >
            {careersData.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Score & Targeted Recommendations Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800">
        
        {/* Readiness Meter */}
        <div className="md:col-span-4 text-center md:border-r md:border-slate-800 md:pr-6 space-y-2">
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            Overall Readiness Score
          </div>
          <div className="text-5xl font-black text-gradient">
            {readinessScore}%
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-700" 
              style={{ width: `${readinessScore}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            {completedSkills.length} skills marked as verified
          </p>
        </div>

        {/* Targeted Advice */}
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              AI Action Directive
            </h3>
          </div>

          <p className="text-slate-200 text-sm sm:text-base font-medium">
            {topFocus.length > 0 ? (
              <>
                You should focus on <strong className="text-amber-400">{topFocus.join(' and ')}</strong> next to close your largest readiness gaps.
              </>
            ) : (
              <span className="text-emerald-400">
                Outstanding! You have met or exceeded all target skill thresholds for this role.
              </span>
            )}
          </p>

          <p className="text-xs text-slate-400 leading-relaxed">
            Targeting high-gap competencies yields the fastest promotion in interview readiness. Use our integrated learning resource catalog to study recommended modules.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => onNavigate('resources')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Browse Learning Resources</span>
            </button>
            <button
              onClick={() => onNavigate('roadmap')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>View Milestone Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Comparison Chart: Current vs Benchmark */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>Your Current Skills vs Required Skills</span>
            </h3>
            <p className="text-xs text-slate-400">Side-by-side benchmark comparison</p>
          </div>
        </div>

        <div className="h-[300px] w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                labelFormatter={(name, payload) => payload?.[0]?.payload?.fullName || name}
              />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Bar dataKey="Your Level" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Target Benchmark" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Interactive Skill Progress Bars List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Skill Matrix Breakdown</h3>
          <span className="text-xs text-slate-400">Click checkboxes to mark competencies completed</span>
        </div>

        <div className="space-y-3">
          {skillRows.map((row) => (
            <SkillProgressBar
              key={row.skill}
              skill={row.skill}
              currentLevel={row.currentLevel}
              requiredLevel={row.requiredLevel}
              isCompleted={row.isCompleted}
              onToggleComplete={handleToggleComplete}
              onLearnSkill={handleLearnSkill}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

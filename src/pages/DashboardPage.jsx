import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BarChart3, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Compass, 
  GitBranch, 
  Layers, 
  BookOpen,
  ChevronRight,
  ExternalLink,
  Target
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useAuth } from '../services/authContext';
import { api } from '../services/api';
import { CareerCard } from '../components/CareerCard';

export function DashboardPage({ onNavigate, onSelectCareer }) {
  const { user } = useAuth();
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    const data = api.assessment.getLatest();
    setAssessment(data);
  }, []);

  const topCareer = assessment?.topCareer;
  const recommendations = assessment?.recommendations || [];
  const skillGapAnalysis = assessment?.skillGapAnalysis || [];
  const readinessScore = assessment?.readinessScore || 78;

  // Prepare radar chart data for Recharts
  const radarData = skillGapAnalysis.slice(0, 6).map(s => ({
    subject: s.skill,
    current: s.currentLevel,
    required: s.requiredLevel,
    fullMark: 100
  }));

  // Prepare bar chart data for top 5 matches
  const matchBarData = recommendations.slice(0, 5).map(r => ({
    name: r.name.length > 14 ? r.name.slice(0, 12) + '...' : r.name,
    match: r.match,
    fullName: r.name
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Welcome Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-glow opacity-50 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Student Intelligence Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="text-gradient">{user?.name || 'Student'}!</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              {user?.educationLevel} • {user?.college}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
              Your AI profile is aligned with <strong className="text-white">{topCareer?.name || 'AI/ML Engineering'}</strong>. You have bridged <strong className="text-emerald-400">{readinessScore}%</strong> of the foundational skills required.
            </p>
          </div>

          {/* Quick Actions in Banner */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <button
              onClick={() => onNavigate('assessment')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Retake Assessment</span>
            </button>
            <button
              onClick={() => onNavigate('report')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Career Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Top Career Match */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Career Match Score</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">{topCareer?.match || 94}%</span>
            <span className="text-xs text-emerald-400 font-semibold">High Match</span>
          </div>
          <p className="text-slate-400 text-xs truncate">
            Top fit: <strong className="text-slate-200">{topCareer?.name || 'AI/ML Engineer'}</strong>
          </p>
        </div>

        {/* Card 2: Skills Analyzed */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Skills Analyzed</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">{skillGapAnalysis.length || 7}</span>
            <span className="text-xs text-slate-400 font-medium">Core proficiencies</span>
          </div>
          <p className="text-slate-400 text-xs truncate">
            Readiness Index: <strong className="text-emerald-400">{readinessScore}%</strong>
          </p>
        </div>

        {/* Card 3: Recommended Careers */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Recommended Careers</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Compass className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">{recommendations.length || 6}</span>
            <span className="text-xs text-cyan-400 font-medium">Pathways matched</span>
          </div>
          <p className="text-slate-400 text-xs truncate">
            Across AI, Software, & Security
          </p>
        </div>

        {/* Card 4: Assessment Progress */}
        <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-semibold uppercase tracking-wider">Assessment Status</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-400">100%</span>
            <span className="text-xs text-slate-400 font-medium">Completed</span>
          </div>
          <p className="text-slate-400 text-xs truncate">
            Diagnostic evaluated via AI engine
          </p>
        </div>

      </div>

      {/* Visual Analytics Grid: Radar & Match Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Radar Chart: Skill Benchmark */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>Skill Readiness vs Industry Benchmark</span>
              </h3>
              <p className="text-xs text-slate-400">Compares your current ratings with target thresholds</p>
            </div>
            <button
              onClick={() => onNavigate('skill-gap')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Full Breakdown →
            </button>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                <Radar name="Your Level" dataKey="current" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
                <Radar name="Required Level" dataKey="required" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.15} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-indigo-500 inline-block"></span>
              <span>Your Current Level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-cyan-400 inline-block"></span>
              <span>Industry Benchmark</span>
            </div>
          </div>
        </div>

        {/* Bar Chart: Career Match Distribution */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span>Top Career Fit Comparison</span>
              </h3>
              <p className="text-xs text-slate-400">Match score % across top career categories</p>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
            >
              Browse All →
            </button>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchBarData} margin={{ top: 15, right: 10, left: -20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#94a3b8', fontSize: 11 }} 
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis domain={[50, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip 
                  formatter={(val) => [`${val}% Match`, 'Compatibility']}
                  labelFormatter={(name, payload) => payload?.[0]?.payload?.fullName || name}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="match" fill="#818cf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            Recommendations derived from multi-factor analysis (Skills, Goals, Interests & Academics).
          </div>
        </div>

      </div>

      {/* Section: Recommended Careers List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Recommended Careers</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Personalized matches ranked by your diagnostic profile
            </p>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Explore All 50+ Roles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Recommended Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.slice(0, 6).map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              onSelect={(id) => {
                onSelectCareer(id);
                onNavigate('career-detail');
              }}
              onViewRoadmap={(id) => {
                onSelectCareer(id);
                onNavigate('roadmap');
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  GitBranch, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Compass, 
  Cpu, 
  Target, 
  Layers,
  ChevronRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { api } from '../services/api';
import { CareerCard } from '../components/CareerCard';

export function RecommendationResultPage({ onNavigate, onSelectCareer }) {
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    const data = api.assessment.getLatest();
    setAssessment(data);
  }, []);

  const topCareer = assessment?.topCareer;
  const recommendations = assessment?.recommendations || [];
  const secondaryMatches = recommendations.slice(1, 6);

  if (!topCareer) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center space-y-4">
        <Sparkles className="w-10 h-10 text-indigo-400 mx-auto animate-pulse" />
        <h2 className="text-xl font-bold text-white">Loading Recommendations...</h2>
        <p className="text-slate-400 text-sm">Synthesizing your assessment response profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Page Title & Heading */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>AI Analysis Synthesized</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Your Personalized Career Recommendations
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
          Based on your skills, favorite coursework, personality traits, and career goals, here are your optimal career vectors.
        </p>
      </div>

      {/* Primary Highlight Card: Top Career Match */}
      <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 border-2 border-indigo-500/40 p-6 sm:p-10 overflow-hidden shadow-2xl space-y-8">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                #1 Recommended Career Path
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                {topCareer.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {topCareer.name}
            </h2>
          </div>

          {/* Match Score Badge */}
          <div className="flex items-center gap-3 bg-slate-950/80 p-3 sm:p-4 rounded-2xl border border-indigo-500/40 shadow-glow self-start sm:self-auto">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {topCareer.match}%
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Match Score</div>
            </div>
          </div>
        </div>

        {/* Grid: Why This Matches You & Required Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Why this matches you */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-400" />
              <span>Why This Matches You:</span>
            </h3>

            <div className="space-y-2.5">
              {(topCareer.personalizedReasons || [
                "Strong analytical and mathematical problem-solving aptitude",
                "Demonstrated proficiency and curiosity in Python programming",
                "High interest in Artificial Intelligence and predictive systems",
                "Academic coursework aligns with computational foundations"
              ]).map((reason, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              {topCareer.description}
            </p>
          </div>

          {/* Required Skills & Quick Facts */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Required Core Skills:
              </h4>

              <div className="flex flex-wrap gap-2">
                {topCareer.requiredSkills.map((s, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 font-medium"
                  >
                    {typeof s === 'string' ? s : s.name}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Indicative Salary Range:</span>
                  <span className="text-white font-semibold">{topCareer.salaryRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Market Demand:</span>
                  <span className="text-emerald-400 font-semibold">{topCareer.demand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">5-Year Growth:</span>
                  <span className="text-cyan-400 font-semibold">{topCareer.growth}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800 relative z-10">
          <button
            onClick={() => {
              onSelectCareer(topCareer.id);
              onNavigate('career-detail');
            }}
            className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center gap-2"
          >
            <span>View Full Career Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onSelectCareer(topCareer.id);
              onNavigate('roadmap');
            }}
            className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4 text-cyan-400" />
            <span>View Interactive Roadmap</span>
          </button>

          <button
            onClick={() => onNavigate('skill-gap')}
            className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Check Skill Gap</span>
          </button>

          <button
            onClick={() => onNavigate('report')}
            className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2 sm:ml-auto"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Download PDF Report</span>
          </button>
        </div>

      </div>

      {/* Mandatory Disclaimer Callout */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3.5 text-xs text-amber-200">
        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-semibold text-amber-300 block">Guidance & Counseling Notice</strong>
          <p className="text-amber-200/90 leading-relaxed">
            These recommendations are algorithmic guidance formulated from your self-reported skills, academic history, and work preferences. They are designed to assist exploratory planning and do not represent a guaranteed prediction or legal warranty of future career outcome or hiring placement.
          </p>
        </div>
      </div>

      {/* Other Recommendations Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Parallel Career Recommendations</h3>
            <p className="text-slate-400 text-xs sm:text-sm">Alternative high-match trajectories suited to your versatility</p>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            <span>View All Careers</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryMatches.map((career) => (
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

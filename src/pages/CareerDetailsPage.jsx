import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  GitBranch, 
  BookOpen, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Code, 
  GraduationCap, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Layers,
  ArrowRight
} from 'lucide-react';
import { careersData } from '../data/careersData';

export function CareerDetailsPage({ careerId, onNavigate, onSelectCareer }) {
  const career = careersData.find(c => c.id === careerId) || careersData[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('skill-gap')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 transition-all flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Check My Skill Gap</span>
          </button>
          <button
            onClick={() => onNavigate('roadmap')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center gap-1.5"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Interactive Roadmap</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-slate-800 p-6 sm:p-10 overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {career.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {career.demand} Demand
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {career.growth}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {career.name}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {career.shortDescription}
          </p>

          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-8 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block text-[11px]">Indicative Salary Range</span>
              <strong className="text-white text-base">{career.salaryRange}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Experience Level</span>
              <strong className="text-slate-200">{career.experienceLevel}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Target Education</span>
              <strong className="text-slate-200 truncate max-w-xs block">{career.education}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Columns */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 1: What does this career involve? */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <span>What does this career involve?</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {career.description}
            </p>
          </div>

          {/* Section 2: Why this career may suit you */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Why this career may suit you</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {career.whyMatches.map((reason, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Educational Path */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Recommended Educational Path</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Typically requires a <strong className="text-white">{career.education}</strong>. While a strong college degree provides a strong theoretical anchor in algorithms and systems, high-growth tech companies heavily prioritize demonstrable GitHub portfolio repositories, open-source pull requests, and verified skill certifications.
            </p>
          </div>

          {/* Section 4: Projects to Build */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-400" />
              <span>Portfolio Projects to Build</span>
            </h2>
            <div className="space-y-3">
              {career.projectsToBuild.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span>{proj.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 pl-7 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Roadmap Sequence Walkthrough */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-cyan-400" />
                <span>Career Roadmap Sequence</span>
              </h2>
              <button
                onClick={() => onNavigate('roadmap')}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Open Checklist View →
              </button>
            </div>

            <div className="space-y-4 pt-2">
              {career.roadmapPhases.map((phase, idx) => (
                <div key={idx} className="relative flex gap-4">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-xs font-bold text-white z-10">
                      {idx + 1}
                    </div>
                    {idx < career.roadmapPhases.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-800 my-1" />
                    )}
                  </div>

                  <div className="pb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">{phase.phase}</span>
                      <span className="text-[10px] px-2 py-0.2 rounded bg-slate-800 text-slate-400">{phase.estimatedWeeks}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{phase.title}</h3>
                    <p className="text-xs text-slate-400 mb-2 leading-relaxed">{phase.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.topics.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 4 Columns: Side Stats & Recommendations */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Required Skills & Benchmarks */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">Required Skills</h3>
            <div className="space-y-3">
              {career.requiredSkills.map((s, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">{s.name}</span>
                    <span className="text-indigo-400 font-bold">{s.requiredLevel}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${s.requiredLevel}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-1.5">
              {career.toolsAndTech.map((tool, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Typical Job Roles */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Typical Job Roles</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {career.typicalRoles.map((role, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Certifications */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Industry Certifications</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {career.certifications.map((cert, idx) => (
                <li key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Courses with Links */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Recommended Courses</span>
            </h3>
            <div className="space-y-2.5">
              {career.recommendedCourses.map((c, idx) => (
                <a
                  key={idx}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 block transition-all group"
                >
                  <div className="text-xs font-semibold text-white group-hover:text-indigo-300 flex items-center justify-between">
                    <span>{c.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-indigo-400" />
                  </div>
                  <span className="text-[10px] text-slate-400">{c.provider}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, MapPin, DollarSign, Briefcase, GitBranch } from 'lucide-react';

export function CareerCard({ career, onSelect, onViewRoadmap }) {
  const isTopMatch = career.match >= 90;

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all duration-300">
      
      {/* Top Gradient Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 uppercase tracking-wider">
            {career.category}
          </span>

          <div className="flex items-center gap-1.5">
            <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 border ${
              isTopMatch 
                ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/40 shadow-glow' 
                : 'bg-slate-800/80 text-slate-300 border-slate-700/50'
            }`}>
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>{career.match}% Match</span>
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
          {career.name}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
          {career.shortDescription || career.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs">
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Demand</div>
            <div className="font-semibold text-slate-200 flex items-center gap-1 mt-0.5">
              <span className={`w-2 h-2 rounded-full ${career.demand.includes('Very') ? 'bg-emerald-400' : 'bg-blue-400'}`}></span>
              <span>{career.demand}</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">5-Yr Growth</div>
            <div className="font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>{career.growth}</span>
            </div>
          </div>
        </div>

        {/* Indicative Salary */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between text-xs">
            <span className="text-slate-500 font-medium">Indicative Salary:</span>
            <span className="text-slate-200 font-semibold">{career.salaryRange}</span>
          </div>
          <p className="text-[10px] text-slate-500 text-right italic">
            *Indicative market range, not guaranteed
          </p>
        </div>

        {/* Skills Chips */}
        <div className="mb-5">
          <div className="text-[11px] text-slate-400 font-medium mb-2">Key Skills:</div>
          <div className="flex flex-wrap gap-1.5">
            {career.requiredSkills.slice(0, 4).map((s, idx) => (
              <span 
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
              >
                {typeof s === 'string' ? s : s.name}
              </span>
            ))}
            {career.requiredSkills.length > 4 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-900 text-slate-500">
                +{career.requiredSkills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
        <button
          onClick={() => onViewRoadmap(career.id)}
          className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 transition-colors flex items-center justify-center gap-1.5"
        >
          <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
          <span>Roadmap</span>
        </button>

        <button
          onClick={() => onSelect(career.id)}
          className="px-3 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all flex items-center justify-center gap-1 group/btn"
        >
          <span>View Career</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
}

import React from 'react';
import { CheckCircle2, Circle, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';

export function SkillProgressBar({ 
  skill, 
  currentLevel = 50, 
  requiredLevel = 80, 
  isCompleted = false, 
  onToggleComplete, 
  onLearnSkill 
}) {
  const gap = Math.max(0, requiredLevel - currentLevel);
  const isTargetMet = currentLevel >= requiredLevel || isCompleted;

  return (
    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onToggleComplete(skill)}
            className="text-slate-500 hover:text-emerald-400 transition-colors focus:outline-none"
            title={isCompleted ? "Mark as in-progress" : "Mark as completed"}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h4 className={`font-semibold text-sm ${isCompleted ? 'text-emerald-300 line-through' : 'text-white'}`}>
                {skill}
              </h4>
              {isTargetMet ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Goal Met
                </span>
              ) : gap > 30 ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium flex items-center gap-1">
                  <AlertCircle className="w-2.5 h-2.5" /> High Priority Gap
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                  Moderate Gap
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400">
              Current proficiency: <span className="text-slate-200 font-semibold">{currentLevel}%</span> • Target requirement: <span className="text-slate-200 font-semibold">{requiredLevel}%</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={() => onLearnSkill(skill)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-300 hover:text-white bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 transition-all flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Learn Skill</span>
          </button>
          <button
            onClick={() => onToggleComplete(skill)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isCompleted 
                ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {isCompleted ? 'Completed' : 'Mark Done'}
          </button>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="relative pt-1">
        <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-slate-800">
          {/* Current Level */}
          <div
            style={{ width: `${currentLevel}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${
              isCompleted
                ? 'bg-emerald-500'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500'
            }`}
          />
          {/* Gap Segment */}
          {gap > 0 && !isCompleted && (
            <div
              style={{ width: `${gap}%` }}
              className="bg-amber-500/25 border-l border-amber-500/40 relative"
              title={`Gap to fill: ${gap}%`}
            />
          )}
        </div>

        <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1.5">
          <span>0% Beginner</span>
          <span className="text-amber-400 font-medium">
            {gap > 0 && !isCompleted ? `Skill Gap: -${gap}%` : 'Competency Target Achieved'}
          </span>
          <span>100% Industry Benchmark</span>
        </div>
      </div>
    </div>
  );
}

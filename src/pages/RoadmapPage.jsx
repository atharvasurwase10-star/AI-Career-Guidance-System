import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  BookOpen, 
  Layers,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { careersData } from '../data/careersData';
import { api } from '../services/api';

export function RoadmapPage({ careerId, onNavigate }) {
  const [selectedCareerId, setSelectedCareerId] = useState(careerId || 'ai-ml-engineer');
  const [completedPhases, setCompletedPhases] = useState([0]);
  const [expandedPhases, setExpandedPhases] = useState({});

  useEffect(() => {
    if (careerId) {
      setSelectedCareerId(careerId);
    }
  }, [careerId]);

  useEffect(() => {
    const saved = api.progress.getRoadmapProgress(selectedCareerId);
    setCompletedPhases(saved);
  }, [selectedCareerId]);

  const career = careersData.find(c => c.id === selectedCareerId) || careersData[0];
  const phases = career.roadmapPhases || [];

  const handleTogglePhase = (index) => {
    let next;
    if (completedPhases.includes(index)) {
      next = completedPhases.filter(p => p !== index);
    } else {
      next = [...completedPhases, index];
      // If completing all, trigger celebration
      if (next.length === phases.length) {
        try {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        } catch {}
      }
    }
    setCompletedPhases(next);
    api.progress.saveRoadmapProgress(selectedCareerId, next);
  };

  const toggleExpand = (index) => {
    setExpandedPhases(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const progressPercent = Math.round((completedPhases.length / (phases.length || 1)) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header & Career Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Interactive Learning Pathway</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {career.name} Roadmap
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Step-by-step sequential blueprint from college fundamentals to production employment
          </p>
        </div>

        {/* Career Selector */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <label className="text-xs text-slate-400 font-medium">Switch Role:</label>
          <select
            value={selectedCareerId}
            onChange={(e) => setSelectedCareerId(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-indigo-500"
          >
            {careersData.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Roadmap Progress Sticky Bar */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Curriculum Completion Progress:</span>
          </span>
          <span className="font-extrabold text-emerald-400 text-base">
            {progressPercent}% Complete ({completedPhases.length}/{phases.length} Phases)
          </span>
        </div>

        <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[11px] text-slate-500">
          <span>Click checkboxes below as you complete topics & projects</span>
          <span className="text-indigo-400 font-medium">Estimated timeline: 6 - 9 Months</span>
        </div>
      </div>

      {/* Vertical Interactive Milestone Timeline */}
      <div className="space-y-6 relative">
        {phases.map((phase, idx) => {
          const isCompleted = completedPhases.includes(idx);
          const isExpanded = expandedPhases[idx] !== false; // default open

          return (
            <div
              key={idx}
              className={`glass-panel rounded-2xl border transition-all duration-300 ${
                isCompleted 
                  ? 'border-emerald-500/40 bg-emerald-950/10' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header row */}
              <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                
                <div className="flex items-start gap-4">
                  {/* Completion checkmark button */}
                  <button
                    type="button"
                    onClick={() => handleTogglePhase(idx)}
                    className="mt-1 focus:outline-none transition-transform hover:scale-110"
                    title={isCompleted ? "Mark incomplete" : "Mark phase completed"}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-400/20" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-600 hover:text-slate-400" />
                    )}
                  </button>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                        {phase.phase}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {phase.estimatedWeeks}
                      </span>
                      {isCompleted && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                          Completed ✓
                        </span>
                      )}
                    </div>

                    <h3 className={`text-lg font-bold ${isCompleted ? 'text-emerald-300' : 'text-white'}`}>
                      {phase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Collapse / Expand Toggle */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Collapsible Topics & Concepts Section */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/60 bg-slate-950/40 rounded-b-2xl space-y-3">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Concepts to Master:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phase.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <button
                      onClick={() => onNavigate('resources')}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Find learning materials for this phase</span>
                    </button>

                    <button
                      onClick={() => handleTogglePhase(idx)}
                      className="text-xs font-semibold text-slate-300 hover:text-white underline decoration-slate-600"
                    >
                      {isCompleted ? 'Unmark phase' : 'Mark phase as completed'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Bottom Advice */}
      <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-white">Need help planning your milestones?</h4>
          <p className="text-xs text-slate-400">Ask our AI Assistant in the bottom right corner for study scheduling recommendations.</p>
        </div>
        <button
          onClick={() => onNavigate('skill-gap')}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-glow transition-all"
        >
          Check Skill Matrix
        </button>
      </div>

    </div>
  );
}

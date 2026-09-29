import React from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  ShieldCheck, 
  GitBranch, 
  Cpu, 
  Database, 
  Layers, 
  Award,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export function AboutPage({ onNavigate }) {
  const stackItems = [
    { name: "React 19 & Vite", role: "High-performance reactive frontend with instant HMR and component modularity" },
    { name: "Tailwind CSS", role: "Modern AI-tech visual design system with dark navy palette and responsive grid" },
    { name: "Lucide React", role: "Consistent, crisp iconography across navigation and analytics" },
    { name: "Recharts", role: "Interactive radar, bar, area, and donut data visualizations" },
    { name: "Node.js & Express", role: "REST API service layer, JWT authentication, and AI routing" },
    { name: "MongoDB & Mongoose", role: "Flexible document data schemas for users, assessments, and careers" },
    { name: "AI Guidance Engine", role: "Multi-vector weighted scoring model extensible to LLM / Gemini API" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" />
          <span>System Architecture & Project Overview</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About <span className="text-gradient">CareerAI</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          An engineering college mini-project built to empower students with objective, data-driven, and AI-assisted career discovery.
        </p>
      </div>

      {/* Project Objective Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-4 shadow-xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span>Project Objective</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Traditional college career counseling often relies on subjective advice or outdated industry requirements. 
          <strong> CareerAI</strong> was engineered to bridge this gap. By evaluating multiple dimensions — including demonstrated coding skills, academic coursework preferences, cognitive interests, and personality traits — the system computes verifiable compatibility scores, identifies skill gaps, and lays out step-by-step career roadmaps.
        </p>
      </div>

      {/* Recommendation Engine Methodology */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 shadow-xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          <span>AI Recommendation Engine Methodology</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase">Weight: 35%</span>
            <h4 className="text-sm font-bold text-white">Skill Benchmark Vector</h4>
            <p className="text-xs text-slate-400">
              Evaluates user self-ratings (1-5) against standardized industry requirements for each technical role.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase">Weight: 30%</span>
            <h4 className="text-sm font-bold text-white">Interest Affinity Vector</h4>
            <p className="text-xs text-slate-400">
              Correlates curiosity fields (AI, Web3, Systems, Data, Security) with active market opportunities.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase">Weight: 15%</span>
            <h4 className="text-sm font-bold text-white">Academic Alignment</h4>
            <p className="text-xs text-slate-400">
              Maps favorite college coursework (e.g. Math, DSA, Networks) to theoretical job prerequisites.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase">Weight: 10%</span>
            <h4 className="text-sm font-bold text-white">Workplace Personality</h4>
            <p className="text-xs text-slate-400">
              Factors collaboration habits, analytical vs. creative disposition, and research inclination.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase">Weight: 10%</span>
            <h4 className="text-sm font-bold text-white">Career Goals & Timeline</h4>
            <p className="text-xs text-slate-400">
              Aligns immediate priorities (internship, higher education, startup) with practical trajectory timelines.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase">LLM Service Layer</span>
            <h4 className="text-sm font-bold text-white">AI-Ready Abstraction</h4>
            <p className="text-xs text-slate-400">
              Ready to plug directly into Gemini API or OpenAI API for contextual natural-language career counseling.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack Grid */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-5 shadow-xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span>Technology Stack</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stackItems.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-white text-sm block">{item.name}</strong>
                <span className="text-xs text-slate-400">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethical Guidance Disclaimer */}
      <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-4 text-xs text-slate-300">
        <ShieldCheck className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-white font-semibold text-sm block">Ethical AI Counseling Commitment</strong>
          <p className="leading-relaxed">
            CareerAI provides algorithmic guidance to assist human decision-making. No system can deterministically guarantee future employment. Students are encouraged to use these recommendations as an exploratory compass, consult college faculty, and continuously validate their career choices through hands-on projects and internships.
          </p>
        </div>
      </div>

    </div>
  );
}

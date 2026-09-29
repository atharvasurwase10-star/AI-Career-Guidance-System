import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  BarChart3, 
  GitBranch, 
  Award, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  BrainCircuit, 
  Cpu, 
  Zap, 
  BookOpen, 
  Target,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { careersData } from '../data/careersData';

export function LandingPage({ onNavigate, onSelectCareer }) {
  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
      title: "1. AI Career Assessment",
      description: "Comprehensive 5-step diagnostic evaluating your technical proficiencies, cognitive interests, academic background, and workstyle."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "2. Personalized Career Recommendations",
      description: "Sophisticated multi-vector ranking matching your unique profile with top-tier tech roles with percentage match scores and clear rationale."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: "3. Skill Gap Analysis",
      description: "Side-by-side comparison of your present skill benchmark versus real-world job requirements with targeted remediation priorities."
    },
    {
      icon: <GitBranch className="w-6 h-6 text-emerald-400" />,
      title: "4. Interactive Career Roadmaps",
      description: "Milestone-by-milestone structured pathways from college fundamentals to advanced industry projects, internships, and job prep."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      title: "5. Course & Certification Suggestions",
      description: "Handpicked curricula from Coursera, YouTube, top technical documentation, books, and recognized professional certifications."
    },
    {
      icon: <Award className="w-6 h-6 text-rose-400" />,
      title: "6. Career Progress Tracking",
      description: "Monitor milestones, mark skills as completed, generate downloadable PDF career dossiers, and chat 24/7 with the AI assistant."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Assessment",
      desc: "Complete our guided questionnaire covering academic credentials, favorite subjects, and hands-on skills."
    },
    {
      number: "02",
      title: "AI Analysis",
      desc: "Our multi-factor recommendation engine evaluates 50+ career vectors against real-time market data."
    },
    {
      number: "03",
      title: "Career Recommendations",
      desc: "Receive top personalized career matches, why they suit you, required tools, and indicative salary bands."
    },
    {
      number: "04",
      title: "Personalized Roadmap",
      desc: "Follow actionable phase-by-phase learning roadmaps, bridge skill gaps, and build portfolio projects."
    }
  ];

  const stats = [
    { value: "50+", label: "Career Paths Mapped", sub: "Deep technical specializations" },
    { value: "96%", label: "Recommendation Match", sub: "Multi-factor AI alignment" },
    { value: "100%", label: "Personalized Roadmaps", sub: "Custom milestones & checklists" },
    { value: "Skill-Based", label: "Objective Analysis", sub: "Benchmark gap scoring" }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>Next-Gen College Career Counseling Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Discover the Career <br />
                <span className="text-gradient">That Fits You.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                AI-powered career guidance to help you understand your strengths, explore career opportunities, and build your personalized career roadmap.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('assessment')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-5 h-5 text-indigo-200" />
                  <span>Start Career Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('explore')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
                >
                  <Compass className="w-5 h-5 text-cyan-400" />
                  <span>Explore Careers</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free for Engineering Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>No Guesswork — Multi-Factor Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Downloadable PDF Dossiers</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual / Interactive AI Illustration */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[440px]">
                
                {/* Outer Glow Halo */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 blur-xl"></div>

                {/* Interactive Simulated AI Terminal Card */}
                <div className="relative rounded-2xl glass-panel p-6 border border-indigo-500/30 shadow-2xl space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      <span className="text-xs text-slate-400 ml-2 font-mono">CareerAI Neural Engine</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                      LIVE INFERENCE
                    </span>
                  </div>

                  {/* Dynamic Match Node Highlight */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">AI/ML Engineer</h4>
                          <span className="text-[10px] text-slate-400">High Match Potential</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-extrabold text-emerald-400">94%</div>
                        <div className="text-[10px] text-slate-500">Compatibility</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Mathematics & Logic</span>
                        <span className="text-slate-200 font-semibold">92%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Python & ML Stack</span>
                        <span className="text-slate-200 font-semibold">88%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Career Matches Floating Tags */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Parallel Recommended Vectors:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-300 font-medium truncate">Data Scientist</span>
                        <span className="text-xs font-bold text-indigo-400">89%</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-300 font-medium truncate">Full Stack Dev</span>
                        <span className="text-xs font-bold text-cyan-400">86%</span>
                      </div>
                    </div>
                  </div>

                  {/* Action prompt */}
                  <button
                    onClick={() => onNavigate('assessment')}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Run Diagnostic on Your Profile</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl flex items-center gap-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+38% 5-Yr Growth</div>
                    <div className="text-[10px] text-slate-400">AI Industry Demand</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl glass-panel border border-slate-800/80">
          {stats.map((st, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient">{st.value}</div>
              <div className="text-sm font-semibold text-white">{st.label}</div>
              <div className="text-xs text-slate-400">{st.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Everything You Need for Career Clarity
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From discovering your core strengths to tracking each learning milestone, CareerAI provides an end-to-end guidance suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-sm">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{feat.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Structured Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-400 text-sm">
            Step 1 → Assessment → Step 2 → AI Analysis → Step 3 → Career Recommendations → Step 4 → Personalized Roadmap
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-indigo-500/30 block mb-2">{st.number}</span>
                <h4 className="text-lg font-bold text-white mb-2">{st.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{st.desc}</p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs text-indigo-400 font-semibold">
                <span>Phase {st.number}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Careers Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Popular High-Demand Careers</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Curated roles mapped with current industry hiring trends and salary benchmarks</p>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All 50+ Roles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careersData.slice(0, 3).map((career) => (
            <div key={career.id} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                    {career.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {career.demand} Demand
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{career.name}</h3>
                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-3">
                  {career.shortDescription}
                </p>
                <div className="text-xs text-slate-300 font-semibold mb-1">
                  {career.salaryRange}
                </div>
                <div className="text-[10px] text-slate-500 italic">*Indicative industry range</div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => { onSelectCareer(career.id); onNavigate('career-detail'); }}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>Explore Path</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-medium text-slate-400">{career.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 p-8 sm:p-14 border border-indigo-500/30 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to discover your career path?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join thousands of students who unlocked clear career direction, targeted skill acquisition, and custom roadmaps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('assessment')}
              className="w-full sm:w-auto px-10 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-glow transition-all"
            >
              Start Now
            </button>
            <button
              onClick={() => onNavigate('explore')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-700 transition-all"
            >
              Browse Directory
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { Sparkles, Heart, Shield, Cpu, ExternalLink } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Career<span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="text-indigo-300/90 text-xs font-semibold uppercase tracking-wider">
              “Your Skills. Your Interests. Your Future.”
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An intelligent, responsive career guidance platform engineered to help students discover optimal career paths through multi-factor skills analysis, personalized roadmaps, and actionable gap assessment.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-300">React 19</span>
              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-300">Tailwind CSS</span>
              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-300">Node.js Express</span>
              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-300">MongoDB</span>
              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-300">Recharts</span>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('landing')} className="hover:text-indigo-400 transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('assessment')} className="hover:text-indigo-400 transition-colors text-indigo-300 font-medium">
                  AI Career Assessment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('explore')} className="hover:text-indigo-400 transition-colors">
                  Explore 50+ Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skill-gap')} className="hover:text-indigo-400 transition-colors">
                  Skill Gap Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('roadmap')} className="hover:text-indigo-400 transition-colors">
                  Interactive Roadmaps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-indigo-400 transition-colors">
                  Learning Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Key Specializations */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Top Domains</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => { onNavigate('career-detail'); }} className="hover:text-indigo-400 transition-colors">
                  AI & Machine Learning
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('career-detail'); }} className="hover:text-indigo-400 transition-colors">
                  Data Science & Analytics
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('career-detail'); }} className="hover:text-indigo-400 transition-colors">
                  Full Stack Software
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('career-detail'); }} className="hover:text-indigo-400 transition-colors">
                  Cybersecurity & SOC
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('career-detail'); }} className="hover:text-indigo-400 transition-colors">
                  Cloud & DevOps Systems
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('career-detail'); }} className="hover:text-indigo-400 transition-colors">
                  UI/UX Product Design
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Access / About */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Academic Project</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>Designed and engineered for College Mini-Project Demonstration.</p>
              <div className="pt-1">
                <button 
                  onClick={() => onNavigate('admin')}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Admin Console
                </button>
              </div>
              <div className="pt-1">
                <button 
                  onClick={() => onNavigate('report')}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium"
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  Generate PDF Report
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="max-w-2xl text-center md:text-left">
            <span className="font-semibold text-slate-400">Career Guidance Notice: </span>
            Recommendations, match scores, and salary bands are indicative guidance generated based on self-reported inputs and industry benchmark data, not a guaranteed prediction or warranty of future career placement.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>© {new Date().getFullYear()} CareerAI. Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Student Success.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

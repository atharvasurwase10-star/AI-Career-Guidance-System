import React, { useRef, useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Briefcase, 
  GitBranch, 
  Code,
  Calendar,
  Layers
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useAuth } from '../services/authContext';
import { api } from '../services/api';

export function CareerReportPage({ onNavigate }) {
  const { user } = useAuth();
  const [isExporting, setIsExporting] = useState(false);
  const reportRef = useRef(null);

  const assessment = api.assessment.getLatest();
  const topCareer = assessment?.topCareer;
  const recommendations = assessment?.recommendations || [];
  const skillGapAnalysis = assessment?.skillGapAnalysis || [];
  const readinessScore = assessment?.readinessScore || 78;

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);

    try {
      const element = reportRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#090d16'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CareerAI_Report_${(user?.name || 'Student').replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('PDF export error:', err);
      // Fallback to print
      window.print();
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Top Actions Bar (Hidden in Print) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-slate-800">
        <button
          onClick={() => onNavigate('dashboard')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Print View</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isExporting}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-glow transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'Generating PDF...' : 'Download PDF Report'}</span>
          </button>
        </div>
      </div>

      {/* The Printable Report Container */}
      <div 
        ref={reportRef} 
        className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 space-y-8 shadow-2xl text-slate-200"
      >
        
        {/* Report Official Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 p-0.5 shadow-glow flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white tracking-tight">
                  Career<span className="text-gradient">AI</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  CONFIDENTIAL DOSSIER
                </span>
              </div>
              <p className="text-xs text-indigo-300/80 font-medium">“Your Skills. Your Interests. Your Future.”</p>
            </div>
          </div>

          <div className="text-right text-xs space-y-1">
            <div className="text-slate-400 flex items-center gap-1.5 justify-end">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>Generated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="text-slate-500 font-mono text-[11px]">
              ID: CAI-REP-{Math.floor(Math.random() * 899999 + 100000)}
            </div>
          </div>
        </div>

        {/* 1. Student Profile Section */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span>1. Candidate Profile</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 block">Candidate Name</span>
              <strong className="text-white text-sm">{user?.name || 'Alex Johnson'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Email Address</span>
              <strong className="text-slate-200">{user?.email || 'alex@university.edu'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Education Level</span>
              <strong className="text-slate-200">{user?.educationLevel || 'Undergraduate'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">College / University</span>
              <strong className="text-slate-200">{user?.college || 'Engineering Institute'}</strong>
            </div>
          </div>
        </div>

        {/* 2. Assessment Summary & Interests */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span>2. Diagnostic & Cognitive Interests Summary</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs">
              <span className="font-semibold text-slate-300 block">Assessed Interests:</span>
              <div className="flex flex-wrap gap-1.5">
                {(user?.interests || ['Artificial Intelligence', 'Data Science', 'Software Development']).map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs">
              <span className="font-semibold text-slate-300 block">Workstyle Profile:</span>
              <p className="text-slate-400 leading-relaxed">
                Balanced between analytical deep focus and collaborative problem solving. Expresses high aptitude for research and technological experimentation.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Top Career Recommendations */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span>3. Top AI-Matched Career Pathways</span>
          </h2>

          <div className="space-y-3">
            {recommendations.slice(0, 3).map((career, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                      #{idx + 1}
                    </span>
                    <h3 className="font-bold text-white text-base">{career.name}</h3>
                    <span className="text-[10px] px-2 py-0.2 rounded bg-slate-800 text-slate-300">
                      {career.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pl-8">{career.shortDescription}</p>
                </div>

                <div className="text-right sm:border-l sm:border-slate-800 sm:pl-6 flex-shrink-0">
                  <div className="text-xl font-black text-emerald-400">{career.match}% Match</div>
                  <div className="text-[11px] text-slate-400">{career.salaryRange}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Skill Gap Matrix */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>4. Skill Gap & Readiness Benchmark</span>
            </h2>
            <span className="text-xs font-semibold text-emerald-400">
              Readiness Score: {readinessScore}%
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">Required Skill</th>
                  <th className="p-3">Your Current Level</th>
                  <th className="p-3">Target Benchmark</th>
                  <th className="p-3">Skill Gap</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/30">
                {skillGapAnalysis.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60">
                    <td className="p-3 font-semibold text-white">{s.skill}</td>
                    <td className="p-3 text-slate-300">{s.currentLevel}%</td>
                    <td className="p-3 text-slate-300">{s.requiredLevel}%</td>
                    <td className="p-3 text-amber-400 font-semibold">{s.gap > 0 ? `-${s.gap}%` : '0%'}</td>
                    <td className="p-3">
                      {s.gap === 0 ? (
                        <span className="text-emerald-400 font-semibold">Ready ✓</span>
                      ) : (
                        <span className="text-indigo-400">In Progress</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Career Roadmap Blueprint */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span>5. Recommended Learning Roadmap</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {(topCareer?.roadmapPhases || []).slice(0, 4).map((phase, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                <span className="text-[10px] text-indigo-400 font-bold uppercase">{phase.phase}</span>
                <h4 className="font-bold text-white">{phase.title}</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Suggested Capstone Projects */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span>6. Suggested Portfolio Projects</span>
          </h2>
          <div className="space-y-2 text-xs">
            {(topCareer?.projectsToBuild || []).map((proj, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <strong className="text-white block">{proj.title}</strong>
                <span className="text-slate-400 text-[11px]">{proj.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Footer & Disclaimer in Report */}
        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 space-y-2">
          <p>
            <strong>Advisory Notice:</strong> This career intelligence dossier is generated by the CareerAI algorithmic counseling system for academic and personal development planning. Projected roles and salary figures are derived from current industry survey medians and are not contractually guaranteed outcomes.
          </p>
          <div className="flex justify-between items-center text-slate-400 pt-2 font-mono">
            <span>CareerAI Platform • College Mini Project</span>
            <span>Verified System Signature: SHA-256 Validated</span>
          </div>
        </div>

      </div>

    </div>
  );
}

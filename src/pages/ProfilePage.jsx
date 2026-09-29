import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  GraduationCap, 
  School, 
  Sparkles, 
  FileText, 
  Layers, 
  Target, 
  Heart, 
  Check, 
  Edit3, 
  Save, 
  RefreshCw,
  Award
} from 'lucide-react';
import { useAuth } from '../services/authContext';
import { api } from '../services/api';

export function ProfilePage({ onNavigate }) {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || 'Alex Johnson',
    email: user?.email || 'alex.johnson@university.edu',
    educationLevel: user?.educationLevel || 'Bachelor of Technology (3rd Year)',
    college: user?.college || 'Institute of Technology & Science',
    degree: user?.degree || 'Computer Science & Engineering',
    careerGoals: user?.careerGoals?.targetRole || 'AI/ML Engineer'
  });

  const assessment = api.assessment.getLatest();
  const topCareer = assessment?.topCareer;

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      name: formData.name,
      email: formData.email,
      educationLevel: formData.educationLevel,
      college: formData.college,
      degree: formData.degree,
      careerGoals: { ...user?.careerGoals, targetRole: formData.careerGoals }
    });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Profile Header Card */}
      <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-glow">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-3xl font-extrabold text-white">
              {formData.name.charAt(0)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h1 className="text-2xl font-bold text-white">{formData.name}</h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                Active Student
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{formData.email}</p>
            <p className="text-xs text-indigo-400 font-medium mt-1">
              {formData.degree} • {formData.college}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
          </button>
          <button
            onClick={() => onNavigate('assessment')}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retake Assessment</span>
          </button>
          <button
            onClick={() => onNavigate('report')}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>Profile changes saved successfully!</span>
        </div>
      )}

      {/* Main Info Form / View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Form: Details */}
        <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-400" />
            <span>Academic & Profile Information</span>
          </h2>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white disabled:opacity-75 disabled:bg-slate-950/60 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                disabled={!isEditing}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white disabled:opacity-75 disabled:bg-slate-950/60 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Education Level</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white disabled:opacity-75 disabled:bg-slate-950/60 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Major / Degree</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white disabled:opacity-75 disabled:bg-slate-950/60 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">College / University</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white disabled:opacity-75 disabled:bg-slate-950/60 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Target Career Aspirations</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.careerGoals}
                onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white disabled:opacity-75 disabled:bg-slate-950/60 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {isEditing && (
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-glow transition-all flex items-center justify-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Assessment Summary Snapshot */}
        <div className="md:col-span-5 space-y-6">
          
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Assessment Diagnostic History</span>
            </h3>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Top Recommended Career</span>
                  <strong className="text-white text-base">{topCareer?.name || 'AI/ML Engineer'}</strong>
                </div>
                <span className="text-sm font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  {topCareer?.match || 94}%
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Evaluation timestamp: {new Date(assessment?.analyzedAt || Date.now()).toLocaleDateString()}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-300">Verified Skills on Record:</div>
              <div className="flex flex-wrap gap-1.5">
                {(user?.skills || [
                  { name: 'Python' },
                  { name: 'Machine Learning' },
                  { name: 'Data Analysis' },
                  { name: 'Problem Solving' },
                  { name: 'Mathematics' }
                ]).map((s, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    {s.name || s}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-slate-300">Target Interests:</div>
              <div className="flex flex-wrap gap-1.5">
                {(user?.interests || ['AI', 'Data Science', 'Software Development']).map((int, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {int}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('skill-gap')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
            >
              View Full Skill Gap Matrix →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2, 
  BookOpen, 
  Layers, 
  BarChart3, 
  Clock, 
  Search, 
  Check, 
  X,
  AlertCircle
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { api } from '../services/api';
import { careersData as initialCareers } from '../data/careersData';
import { mockResources as initialResources } from '../data/mockResources';

export function AdminDashboardPage({ onNavigate }) {
  const [stats, setStats] = useState(null);
  const [careersList, setCareersList] = useState(initialCareers);
  const [resourcesList, setResourcesList] = useState(initialResources);
  const [activeTab, setActiveTab] = useState('overview'); // overview, careers, resources
  const [newCareerModal, setNewCareerModal] = useState(false);
  const [newResourceModal, setNewResourceModal] = useState(false);

  // New Career Form state
  const [careerForm, setCareerForm] = useState({
    name: '',
    category: 'Technology',
    shortDescription: '',
    salaryRange: '$90,000 - $140,000 / ₹10 - 24 LPA',
    demand: 'High',
    growth: '+25%'
  });

  // New Resource Form state
  const [resourceForm, setResourceForm] = useState({
    title: '',
    platform: 'Coursera',
    skill: 'Python',
    category: 'Courses',
    difficulty: 'Beginner',
    isPaid: 'Free',
    url: 'https://example.com'
  });

  const [notification, setNotification] = useState('');

  useEffect(() => {
    async function loadStats() {
      const data = await api.admin.getStats();
      setStats(data);
    }
    loadStats();
  }, []);

  const handleAddCareer = (e) => {
    e.preventDefault();
    if (!careerForm.name.trim()) return;

    const newEntry = {
      id: careerForm.name.toLowerCase().replace(/\s+/g, '-'),
      name: careerForm.name,
      category: careerForm.category,
      shortDescription: careerForm.shortDescription || 'Newly added career path.',
      match: 85,
      demand: careerForm.demand,
      salaryRange: careerForm.salaryRange,
      growth: careerForm.growth,
      education: "Bachelor's Degree in related discipline",
      requiredSkills: [
        { name: "Core Programming", requiredLevel: 80 },
        { name: "Problem Solving", requiredLevel: 75 }
      ],
      roadmapPhases: [
        { phase: "Phase 1: Foundations", title: "Core Skills", description: "Master basics", topics: ["Syntax", "Tools"] }
      ],
      projectsToBuild: [
        { title: "Portfolio Capstone", description: "Demonstrate domain competence." }
      ]
    };

    setCareersList(prev => [newEntry, ...prev]);
    setNewCareerModal(false);
    setCareerForm({ name: '', category: 'Technology', shortDescription: '', salaryRange: '', demand: 'High', growth: '+25%' });
    setNotification(`Career "${newEntry.name}" added successfully.`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleAddResource = (e) => {
    e.preventDefault();
    if (!resourceForm.title.trim()) return;

    const newRes = {
      id: 'res-' + Date.now(),
      title: resourceForm.title,
      platform: resourceForm.platform,
      skill: resourceForm.skill,
      category: resourceForm.category,
      difficulty: resourceForm.difficulty,
      isPaid: resourceForm.isPaid,
      url: resourceForm.url,
      description: 'Newly contributed curriculum resource.'
    };

    setResourcesList(prev => [newRes, ...prev]);
    setNewResourceModal(false);
    setResourceForm({ title: '', platform: 'Coursera', skill: 'Python', category: 'Courses', difficulty: 'Beginner', isPaid: 'Free', url: 'https://example.com' });
    setNotification(`Resource "${newRes.title}" added to directory.`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleDeleteCareer = (id) => {
    setCareersList(prev => prev.filter(c => c.id !== id));
  };

  const handleDeleteResource = (id) => {
    setResourcesList(prev => prev.filter(r => r.id !== id));
  };

  // Pie chart colors
  const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];

  // Monthly activity trend mock data
  const activityData = [
    { month: 'Jan', assessments: 1100, students: 1400 },
    { month: 'Feb', assessments: 1800, students: 2100 },
    { month: 'Mar', assessments: 2400, students: 2800 },
    { month: 'Apr', assessments: 3100, students: 3700 },
    { month: 'May', assessments: 4200, students: 4900 },
    { month: 'Jun', assessments: 5890, students: 6420 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Administrative Intelligence Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Admin Management Console
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Monitor student adoption metrics, configure career taxonomies, and manage learning resources
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Analytics Overview
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'careers' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Manage Careers ({careersList.length})
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'resources' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Manage Resources ({resourcesList.length})
          </button>
        </div>
      </div>

      {notification && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* TAB 1: OVERVIEW & CHARTS */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-1">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Total Enrolled Students</span>
                <Users className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">
                {stats?.totalStudents?.toLocaleString() || '15,420'}
              </div>
              <p className="text-[11px] text-emerald-400">+18% this month</p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-1">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Assessments Completed</span>
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-extrabold text-purple-400">
                {stats?.assessmentsCompleted?.toLocaleString() || '12,890'}
              </div>
              <p className="text-[11px] text-slate-400">83.6% completion rate</p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-1">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Avg Compatibility Score</span>
                <TrendingUp className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-3xl font-extrabold text-cyan-400">
                {stats?.averageMatchScore || '86.4'}%
              </div>
              <p className="text-[11px] text-slate-400">Validated across 50+ roles</p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-1">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Careers Tracked</span>
                <Layers className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-400">
                {careersList.length} Roles
              </div>
              <p className="text-[11px] text-slate-400">Active industry roadmaps</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Area Chart: Adoption Trend */}
            <div className="lg:col-span-8 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Student Assessment Activity Trend</h3>
                  <p className="text-xs text-slate-400">Monthly progression of active diagnostic runs</p>
                </div>
              </div>

              <div className="h-[280px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAssessments" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                    <Area type="monotone" dataKey="assessments" stroke="#6366F1" fillOpacity={1} fill="url(#colorAssessments)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Donut Chart: Popular Careers */}
            <div className="lg:col-span-4 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Popular Careers Distribution</h3>
              <p className="text-xs text-slate-400">Top career aspirations chosen by students</p>

              <div className="h-[210px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stats?.topCareers || [
                        { name: 'AI/ML', count: 38 },
                        { name: 'Full Stack', count: 25 },
                        { name: 'Data Science', count: 17 },
                        { name: 'Cloud/DevOps', count: 11 },
                        { name: 'Cybersecurity', count: 9 }
                      ]}
                      dataKey="count"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={75}
                      paddingAngle={4}
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                {(stats?.topCareers || []).slice(0, 4).map((c, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                    <span className="truncate">{c.name}: {c.percentage || 20}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* User Activity Log */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Real-Time Student Activity Stream</span>
            </h3>

            <div className="divide-y divide-slate-800/80 text-xs">
              {(stats?.recentActivity || []).map((act, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs">
                      {act.user.charAt(0)}
                    </div>
                    <div>
                      <strong className="text-white">{act.user}</strong>
                      <span className="text-slate-400"> — {act.action}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-400 font-medium block">{act.career}</span>
                    <span className="text-[10px] text-slate-500">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: MANAGE CAREERS */}
      {activeTab === 'careers' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Registered Career Taxonomies</h3>
            <button
              onClick={() => setNewCareerModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow flex items-center gap-1.5 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Career</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 glass-panel">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Career Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Market Demand</th>
                  <th className="p-3.5">Salary Range (Indicative)</th>
                  <th className="p-3.5">5-Yr Growth</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {careersList.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-900/80">
                    <td className="p-3.5 font-bold text-white">{c.name}</td>
                    <td className="p-3.5 text-slate-300">{c.category}</td>
                    <td className="p-3.5">
                      <span className="text-emerald-400 font-semibold">{c.demand}</span>
                    </td>
                    <td className="p-3.5 text-slate-300">{c.salaryRange}</td>
                    <td className="p-3.5 text-cyan-400 font-semibold">{c.growth}</td>
                    <td className="p-3.5 text-right space-x-2">
                      <button
                        onClick={() => handleDeleteCareer(c.id)}
                        className="p-1 rounded text-rose-400 hover:bg-rose-500/10"
                        title="Delete Career"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: MANAGE RESOURCES */}
      {activeTab === 'resources' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Curated Learning Catalog</h3>
            <button
              onClick={() => setNewResourceModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow flex items-center gap-1.5 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Resource</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 glass-panel">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Resource Title</th>
                  <th className="p-3.5">Platform</th>
                  <th className="p-3.5">Skill Covered</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Cost</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {resourcesList.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-900/80">
                    <td className="p-3.5 font-bold text-white max-w-xs truncate">{r.title}</td>
                    <td className="p-3.5 text-slate-300">{r.platform}</td>
                    <td className="p-3.5 text-indigo-400">{r.skill}</td>
                    <td className="p-3.5 text-slate-300">{r.category}</td>
                    <td className="p-3.5">{r.isPaid}</td>
                    <td className="p-3.5 text-right space-x-2">
                      <button
                        onClick={() => handleDeleteResource(r.id)}
                        className="p-1 rounded text-rose-400 hover:bg-rose-500/10"
                        title="Delete Resource"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Career Modal */}
      {newCareerModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Add New Career Vector</h3>
              <button onClick={() => setNewCareerModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCareer} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Career Title</label>
                <input
                  type="text"
                  required
                  value={careerForm.name}
                  onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                  placeholder="e.g. Quantum Computing Engineer"
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={careerForm.category}
                    onChange={(e) => setCareerForm({ ...careerForm, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  >
                    <option>Technology</option>
                    <option>AI & Data</option>
                    <option>Cybersecurity</option>
                    <option>Design</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Demand Level</label>
                  <select
                    value={careerForm.demand}
                    onChange={(e) => setCareerForm({ ...careerForm, demand: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  >
                    <option>Very High</option>
                    <option>High</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Indicative Salary Range</label>
                <input
                  type="text"
                  value={careerForm.salaryRange}
                  onChange={(e) => setCareerForm({ ...careerForm, salaryRange: e.target.value })}
                  placeholder="e.g. $90,000 - $150,000 / ₹10 - 25 LPA"
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Description</label>
                <textarea
                  rows="2"
                  value={careerForm.shortDescription}
                  onChange={(e) => setCareerForm({ ...careerForm, shortDescription: e.target.value })}
                  placeholder="Brief role summary..."
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setNewCareerModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-glow"
                >
                  Save Career
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Resource Modal */}
      {newResourceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Contribute Learning Resource</h3>
              <button onClick={() => setNewResourceModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddResource} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Resource Title</label>
                <input
                  type="text"
                  required
                  value={resourceForm.title}
                  onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })}
                  placeholder="e.g. Introduction to PyTorch"
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Platform</label>
                  <input
                    type="text"
                    value={resourceForm.platform}
                    onChange={(e) => setResourceForm({ ...resourceForm, platform: e.target.value })}
                    placeholder="e.g. YouTube / Coursera"
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Skill</label>
                  <input
                    type="text"
                    value={resourceForm.skill}
                    onChange={(e) => setResourceForm({ ...resourceForm, skill: e.target.value })}
                    placeholder="e.g. Deep Learning"
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={resourceForm.category}
                    onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  >
                    <option>Courses</option>
                    <option>YouTube</option>
                    <option>Documentation</option>
                    <option>Books</option>
                    <option>Certifications</option>
                    <option>Projects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Cost Type</label>
                  <select
                    value={resourceForm.isPaid}
                    onChange={(e) => setResourceForm({ ...resourceForm, isPaid: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  >
                    <option>Free</option>
                    <option>Paid</option>
                    <option>Paid (Audit Free)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">External Resource URL</label>
                <input
                  type="url"
                  value={resourceForm.url}
                  onChange={(e) => setResourceForm({ ...resourceForm, url: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setNewResourceModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-glow"
                >
                  Save Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

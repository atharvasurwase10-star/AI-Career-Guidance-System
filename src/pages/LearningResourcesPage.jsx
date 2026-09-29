import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  Star, 
  Filter, 
  Video, 
  FileCode, 
  Bookmark, 
  Award, 
  Code, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { mockResources, resourceCategories } from '../data/mockResources';
import { careersData } from '../data/careersData';

export function LearningResourcesPage({ selectedSkill, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCareer, setSelectedCareer] = useState('All');
  const [searchQuery, setSearchQuery] = useState(selectedSkill || '');
  const [resources, setResources] = useState(mockResources);

  useEffect(() => {
    if (selectedSkill) {
      setSearchQuery(selectedSkill);
    }
  }, [selectedSkill]);

  const filteredResources = mockResources.filter(res => {
    const matchesCat = selectedCategory === 'All' || res.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesCareer = selectedCareer === 'All' || res.careerId === selectedCareer;
    const matchesSearch = !searchQuery.trim() || 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.platform.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesCareer && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Courses': return <BookOpen className="w-4 h-4 text-indigo-400" />;
      case 'YouTube': return <Video className="w-4 h-4 text-rose-400" />;
      case 'Documentation': return <FileCode className="w-4 h-4 text-cyan-400" />;
      case 'Books': return <Bookmark className="w-4 h-4 text-amber-400" />;
      case 'Certifications': return <Award className="w-4 h-4 text-purple-400" />;
      case 'Projects': return <Code className="w-4 h-4 text-emerald-400" />;
      default: return <BookOpen className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Learning Repository</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning Resources Catalog
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            High-yield courses, tutorials, books, and certifications selected to accelerate your skills
          </p>
        </div>

        {/* Filter by Career Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 font-medium">Filter by Career:</label>
          <select
            value={selectedCareer}
            onChange={(e) => setSelectedCareer(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="All">All Careers</option>
            {careersData.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources by title, skill, or platform (e.g. Python, Coursera, Deep Learning)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-glow'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 space-y-3 glass-panel rounded-3xl p-8 border border-slate-800">
          <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-semibold text-white">No matching resources found</h3>
          <p className="text-xs text-slate-400">Try modifying your search filter or selecting 'All' categories.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSelectedCareer('All'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase flex items-center gap-1.5 border border-slate-700/60">
                    {getCategoryIcon(res.category)}
                    <span>{res.category}</span>
                  </span>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    res.isPaid.includes('Free')
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                  }`}>
                    {res.isPaid}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white line-clamp-2 leading-snug mb-2">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                  {res.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Skill Covered:</span>
                    <span className="text-slate-200 font-semibold">{res.skill}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Platform:</span>
                    <span className="text-slate-200 font-medium">{res.platform}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Difficulty:</span>
                    <span className="text-indigo-400 font-medium">{res.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-800">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all flex items-center justify-center gap-1.5 group"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

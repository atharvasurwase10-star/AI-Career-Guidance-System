import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Compass, 
  TrendingUp, 
  ArrowUpRight, 
  GitBranch, 
  Layers, 
  ArrowUpDown,
  BookOpen
} from 'lucide-react';
import { careersData, careerCategories } from '../data/careersData';
import { CareerCard } from '../components/CareerCard';

export function ExploreCareersPage({ onNavigate, onSelectCareer }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('match'); // match, growth, name

  const filteredCareers = careersData.filter(career => {
    const matchesCat = selectedCategory === 'All' || career.category.toLowerCase() === selectedCategory.toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      career.name.toLowerCase().includes(q) ||
      career.description.toLowerCase().includes(q) ||
      career.requiredSkills.some(s => s.name.toLowerCase().includes(q)) ||
      (career.toolsAndTech || []).some(t => t.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  // Sort logic
  const sortedCareers = [...filteredCareers].sort((a, b) => {
    if (sortBy === 'match') return b.match - a.match;
    if (sortBy === 'growth') {
      const gA = parseInt(a.growth) || 0;
      const gB = parseInt(b.growth) || 0;
      return gB - gA;
    }
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Industry Career Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore 50+ Career Pathways
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
          Search and filter across emerging technologies, AI specializations, cloud computing, cybersecurity, design, and analytics.
        </p>
      </div>

      {/* Search, Filter, and Sort Controls */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search bar */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search careers by title, skill, or tool (e.g. Python, Machine Learning, Docker, SQL)..."
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

          {/* Sort By selector */}
          <div className="md:col-span-4 flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
            >
              <option value="match">Sort by: AI Match Score</option>
              <option value="growth">Sort by: 5-Year Industry Growth</option>
              <option value="name">Sort by: Alphabetical (A-Z)</option>
            </select>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {careerCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-glow'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
        <span>Showing <strong className="text-white">{sortedCareers.length}</strong> matching careers</span>
        <span>Click 'View Career' for full job details & roadmaps</span>
      </div>

      {/* Grid of Career Cards */}
      {sortedCareers.length === 0 ? (
        <div className="text-center py-16 space-y-3 glass-panel rounded-3xl p-8 border border-slate-800">
          <Compass className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-semibold text-white">No careers match your search</h3>
          <p className="text-xs text-slate-400">Try adjusting your keyword filter or clearing selected categories.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCareers.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              onSelect={(id) => {
                onSelectCareer(id);
                onNavigate('career-detail');
              }}
              onViewRoadmap={(id) => {
                onSelectCareer(id);
                onNavigate('roadmap');
              }}
            />
          ))}
        </div>
      )}

    </div>
  );
}

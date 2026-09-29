import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
  BarChart2, 
  GitBranch, 
  User, 
  LogOut, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  GraduationCap,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../services/authContext';

export function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'assessment', label: 'Career Assessment', badge: 'AI' },
    { id: 'explore', label: 'Explore Careers' },
    { id: 'skill-gap', label: 'Skill Analysis' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 p-0.5 shadow-glow group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                {/* AI brain + pathway symbol */}
                <div className="relative flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse-slow" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  Career<span className="text-gradient">AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  v2.4
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block font-medium">Your Skills. Your Interests. Your Future.</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white leading-none">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* User & Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                    currentPage === 'dashboard'
                      ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                  <span>Dashboard</span>
                </button>

                <button
                  onClick={() => handleNavClick('profile')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-medium transition-all"
                  title="View Profile"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold">
                    {user?.name?.charAt(0) || 'S'}
                  </div>
                  <span className="max-w-[100px] truncate">{user?.name?.split(' ')[0] || 'Student'}</span>
                </button>

                <button
                  onClick={() => handleNavClick('admin')}
                  className={`p-2 rounded-lg text-xs font-medium transition-colors ${
                    currentPage === 'admin' ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                  title="Admin Dashboard"
                >
                  <ShieldCheck className="w-4 h-4" />
                </button>

                <button
                  onClick={logout}
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('login')}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavClick('assessment')}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-glow transition-all duration-200 flex items-center gap-1.5"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => handleNavClick('profile')}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold"
              >
                {user?.name?.charAt(0) || 'S'}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  currentPage === link.id
                    ? 'text-white bg-indigo-600/20 border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500 text-white">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-indigo-300 bg-slate-900 flex items-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                    Student Dashboard
                  </button>
                  <button
                    onClick={() => handleNavClick('profile')}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-900 flex items-center gap-2"
                  >
                    <User className="w-4 h-4 text-slate-400" />
                    My Profile & History
                  </button>
                  <button
                    onClick={() => handleNavClick('admin')}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-900 flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    Admin Analytics
                  </button>
                  <button
                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => handleNavClick('login')}
                    className="w-full py-2.5 text-center text-sm font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick('assessment')}
                    className="w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-glow"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

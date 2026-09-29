import React, { useState } from 'react';
import { Sparkles, Mail, Lock, ArrowRight, Check, AlertCircle, KeyRound, Shield } from 'lucide-react';
import { useAuth } from '../services/authContext';

export function LoginPage({ onNavigate }) {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    try {
      await login(email, password);
      onNavigate('dashboard');
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    }
  };

  const handleDemoLogin = async (role = 'student') => {
    if (role === 'admin') {
      setEmail('admin@careerai.edu');
      setPassword('admin123');
      await login('admin@careerai.edu', 'admin123');
      onNavigate('admin');
    } else {
      setEmail('alex.johnson@university.edu');
      setPassword('student123');
      await login('alex.johnson@university.edu', 'student123');
      onNavigate('dashboard');
    }
  };

  const handleGoogleLogin = async () => {
    // Quick one-click simulated Google auth for seamless demo
    await login('google.student@university.edu', 'google_oauth_token');
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-indigo-600/10 blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-md space-y-6">
        
        {/* Card Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 mb-2 shadow-glow">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Student Login</h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Access your personalized career dashboard and skill matrix
          </p>
        </div>

        {/* Demo Fast Login Pills */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between gap-2">
          <span className="text-slate-400 font-medium">Demo Quick Login:</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleDemoLogin('student')}
              className="px-2.5 py-1 rounded bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 transition-all font-semibold"
            >
              Demo Student
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('admin')}
              className="px-2.5 py-1 rounded bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-600/30 transition-all font-semibold"
            >
              Demo Admin
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(true)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow transition-all flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Authenticating...' : 'Login to Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-xs">or continue with</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Footer switch */}
          <div className="text-center pt-2 text-xs text-slate-400">
            Don't have an account?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Register here
            </button>
          </div>
        </div>

      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center gap-2 text-indigo-400">
              <KeyRound className="w-5 h-5" />
              <h3 className="font-bold text-white text-base">Reset Password</h3>
            </div>
            <p className="text-xs text-slate-400">
              Enter your registered student email. We'll send you an instant reset link.
            </p>

            {resetSent ? (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
                Password reset link sent successfully to {email || 'your email'}!
              </div>
            ) : (
              <input
                type="email"
                defaultValue={email}
                placeholder="Enter email..."
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => { setForgotModalOpen(false); setResetSent(false); }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              {!resetSent && (
                <button
                  type="button"
                  onClick={() => setResetSent(true)}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
                >
                  Send Reset Link
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

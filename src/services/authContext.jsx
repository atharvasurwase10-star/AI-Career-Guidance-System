import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from './api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => api.auth.getCurrentUser());
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!api.auth.getCurrentUser());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = api.auth.getCurrentUser();
    setUser(currentUser);
    setIsAuthenticated(!!currentUser);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.auth.login(email, password);
      setUser(res.user);
      setIsAuthenticated(true);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const res = await api.auth.register(userData);
      setUser(res.user);
      setIsAuthenticated(true);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    api.auth.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (data) => {
    const res = api.auth.updateProfile(data);
    setUser(res.user);
    return res;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, updateProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

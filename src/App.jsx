import React, { useState, useEffect } from 'react';
import { AuthProvider } from './services/authContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';

// Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { RecommendationResultPage } from './pages/RecommendationResultPage';
import { CareerDetailsPage } from './pages/CareerDetailsPage';
import { SkillGapPage } from './pages/SkillGapPage';
import { LearningResourcesPage } from './pages/LearningResourcesPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ExploreCareersPage } from './pages/ExploreCareersPage';
import { ProfilePage } from './pages/ProfilePage';
import { CareerReportPage } from './pages/CareerReportPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AboutPage } from './pages/AboutPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedCareerId, setSelectedCareerId] = useState('ai-ml-engineer');
  const [selectedSkillForResource, setSelectedSkillForResource] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleSelectCareer = (careerId) => {
    setSelectedCareerId(careerId);
  };

  const handleSelectResourceSkill = (skill) => {
    setSelectedSkillForResource(skill);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Global Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* Page Body View Router */}
      <main className="flex-1">
        {currentPage === 'landing' && (
          <LandingPage 
            onNavigate={handleNavigate} 
            onSelectCareer={handleSelectCareer} 
          />
        )}

        {currentPage === 'login' && (
          <LoginPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'register' && (
          <RegisterPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'dashboard' && (
          <DashboardPage 
            onNavigate={handleNavigate} 
            onSelectCareer={handleSelectCareer} 
          />
        )}

        {currentPage === 'assessment' && (
          <AssessmentPage 
            onNavigate={handleNavigate} 
            onAssessmentComplete={() => {}}
          />
        )}

        {currentPage === 'recommendation-result' && (
          <RecommendationResultPage 
            onNavigate={handleNavigate} 
            onSelectCareer={handleSelectCareer} 
          />
        )}

        {currentPage === 'career-detail' && (
          <CareerDetailsPage 
            careerId={selectedCareerId} 
            onNavigate={handleNavigate} 
            onSelectCareer={handleSelectCareer} 
          />
        )}

        {currentPage === 'skill-gap' && (
          <SkillGapPage 
            careerId={selectedCareerId} 
            onNavigate={handleNavigate} 
            onSelectResourceSkill={handleSelectResourceSkill}
          />
        )}

        {currentPage === 'resources' && (
          <LearningResourcesPage 
            selectedSkill={selectedSkillForResource} 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'roadmap' && (
          <RoadmapPage 
            careerId={selectedCareerId} 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'explore' && (
          <ExploreCareersPage 
            onNavigate={handleNavigate} 
            onSelectCareer={handleSelectCareer} 
          />
        )}

        {currentPage === 'profile' && (
          <ProfilePage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'report' && (
          <CareerReportPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'admin' && (
          <AdminDashboardPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Floating AI Career Assistant Chatbot */}
      <AIChatbot 
        onNavigate={handleNavigate} 
        onSelectCareer={handleSelectCareer} 
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

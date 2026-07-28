import React, { useState } from 'https://esm.sh/react@18';
import CosmicCanvas from './components/CosmicCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ResearchModal from './components/ResearchModal.jsx';

import HomePage from './pages/HomePage.jsx';
import SciencePage from './pages/SciencePage.jsx';
import PsychologyPage from './pages/PsychologyPage.jsx';
import CulturePage from './pages/CulturePage.jsx';
import ExperiencesPage from './pages/ExperiencesPage.jsx';
import AIFuturePage from './pages/AIFuturePage.jsx';
import ReferencesPage from './pages/ReferencesPage.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPaper, setSelectedPaper] = useState(null);

  const handleOpenAIInterpreter = () => {
    setActiveTab('ai-future');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      
      {/* 3D Solar System & Starfield Background Canvas */}
      <CosmicCanvas />

      {/* Glassmorphic Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenAIInterpreter={handleOpenAIInterpreter}
      />

      {/* Main Active Page View */}
      <main className="relative z-10">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={handleTabChange}
            onSelectPaper={(paper) => setSelectedPaper(paper)}
            onOpenAIInterpreter={handleOpenAIInterpreter}
          />
        )}
        {activeTab === 'science' && <SciencePage />}
        {activeTab === 'psychology' && <PsychologyPage />}
        {activeTab === 'culture' && <CulturePage />}
        {activeTab === 'experiences' && <ExperiencesPage />}
        {activeTab === 'ai-future' && <AIFuturePage />}
        {activeTab === 'references' && (
          <ReferencesPage onSelectPaper={(paper) => setSelectedPaper(paper)} />
        )}
      </main>

      {/* Research Paper Abstract Modal */}
      <ResearchModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenAIInterpreter={handleOpenAIInterpreter}
      />

    </div>
  );
}

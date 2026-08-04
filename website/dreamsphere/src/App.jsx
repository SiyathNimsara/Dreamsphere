import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CosmicCanvas from './components/canvas/CosmicCanvas';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import HomePage from './pages/HomePage';
import SciencePage from './pages/SciencePage';
import PsychologyPage from './pages/PsychologyPage';
import CulturePage from './pages/CulturePage';
import ExperiencesPage from './pages/ExperiencesPage';
import AIFuturePage from './pages/AIFuturePage';
import ReferencesPage from './pages/ReferencesPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* 3D Solar System & Starfield Canvas Backdrop */}
      <CosmicCanvas />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Animated Route Pages */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/psychology" element={<PsychologyPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/ai-future" element={<AIFuturePage />} />
            <Route path="/references" element={<ReferencesPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

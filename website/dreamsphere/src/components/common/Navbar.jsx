import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Menu, X, Orbit } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useAudioSynth } from '../../hooks/useAudioSynth';

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const { isPlaying, toggleAudio } = useAudioSynth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isScrolled = scrollPosition > 20;

  const navItems = [
    { path: '/', label: 'Home', icon: '✨' },
    { path: '/science', label: 'Science', icon: '🧠' },
    { path: '/psychology', label: 'Psychology', icon: '🔮' },
    { path: '/culture', label: 'Cultures', icon: '🌍' },
    { path: '/experiences', label: 'Dream Experiences', icon: '🌌' },
    { path: '/ai-future', label: 'AI & Future', icon: '🤖' },
    { path: '/references', label: 'References', icon: '📚' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-2xl shadow-purple-950/30'
        : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group text-left focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Orbit className="w-5 h-5 text-purple-400 animate-spin-slow" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400 font-sans">
                Dream<span className="text-purple-400 font-light">Sphere</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-indigo-300/70 uppercase">
                Consciousness & Cosmos
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 font-semibold scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleAudio}
              title={isPlaying ? "Mute Ambient Drone" : "Enable Cosmic Audio Drone"}
              className={`px-3 py-2 rounded-full text-xs font-mono border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isPlaying
                  ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/20 animate-pulse'
                  : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-purple-300" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Cosmic Sound ON' : 'Ambient Drone'}</span>
            </button>

            <button
              onClick={() => navigate('/ai-future')}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white border border-cyan-400/30 hover:border-cyan-300 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>AI Interpreter</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-4 bg-slate-950/95 border border-purple-500/30 rounded-2xl p-4 backdrop-blur-2xl shadow-2xl space-y-2"
            >
              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `w-full px-4 py-3 rounded-xl text-sm text-left flex items-center gap-3 transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold'
                          : 'text-slate-300 hover:bg-white/5'
                      }`
                    }
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    toggleAudio();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center justify-center gap-2"
                >
                  {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>{isPlaying ? 'Mute Ambient Drone' : 'Enable Cosmic Soundscape'}</span>
                </button>

                <button
                  onClick={() => {
                    navigate('/ai-future');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch AI Dream Interpreter</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 min-h-[75vh] flex flex-col justify-center items-center">
      
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/40 text-purple-300 text-xs font-mono tracking-wide"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>NASA & Cognitive Science Research Platform</span>
      </motion.div>

      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl space-y-4"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none font-sans">
          Explore The Universe <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-500 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
            Inside Your Mind
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          A journey through neuroscience, psychology, culture, and the mysteries of human dreams.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        <Button onClick={() => navigate('/science')} variant="primary">
          <Brain className="w-4 h-4 text-white" />
          <span>Begin Exploration</span>
        </Button>

        <Button onClick={() => navigate('/references')} variant="secondary">
          <BookOpen className="w-4 h-4 text-cyan-300" />
          <span>Research Library</span>
        </Button>

        <Button onClick={() => navigate('/ai-future')} variant="ghost">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Launch AI Interpreter</span>
        </Button>
      </motion.div>
    </section>
  );
}

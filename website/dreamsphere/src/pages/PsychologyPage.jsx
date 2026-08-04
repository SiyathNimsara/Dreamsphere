import React from 'react';
import { motion } from 'framer-motion';
import TheoryTimeline from '../components/psychology/TheoryTimeline';
import ArchetypeExplorer from '../components/psychology/ArchetypeExplorer';

export default function PsychologyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16 relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <span>🔮</span>
          <span>Psychoanalysis & Cognitive Models</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Psychology of Dreams
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Tracing the evolution of dream theory from Freudian wish fulfillment to Jungian collective unconscious archetypes and modern cognitive simulation frameworks.
        </p>
      </div>

      <TheoryTimeline />
      <ArchetypeExplorer />
    </motion.div>
  );
}

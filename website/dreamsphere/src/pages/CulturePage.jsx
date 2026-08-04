import React from 'react';
import { motion } from 'framer-motion';
import CultureMap from '../components/culture/CultureMap';

export default function CulturePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16 relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <span>🌍</span>
          <span>Anthropology & Comparative Mythography</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Dreams Across Cultures
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Journey through ancient civilization dream temples, Aboriginal Dreamtime songlines, Vedic Upanishads, Tibetan Dream Yoga, and Ojibwe sacred dreamcatchers.
        </p>
      </div>

      <CultureMap />
    </motion.div>
  );
}

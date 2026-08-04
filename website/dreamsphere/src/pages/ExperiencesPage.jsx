import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LucidGuide from '../components/experiences/LucidGuide';
import { EXPERIENCE_TYPES } from '../data/cultureData';
import Card from '../components/common/Card';

export default function ExperiencesPage() {
  const [selectedExp, setSelectedExp] = useState(EXPERIENCE_TYPES[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16 relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <span>🌌</span>
          <span>Phenomenology & State Variations</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Dream Experiences
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Navigating the altered spectrum of nocturnal consciousness: from volitional lucid control to hyper-arousal nightmares, recurring loops, and sleep paralysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {EXPERIENCE_TYPES.map((exp) => {
          const isSelected = selectedExp.id === exp.id;
          return (
            <Card
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className={`cursor-pointer flex flex-col justify-between space-y-4 group ${
                isSelected ? 'border-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.02]' : ''
              }`}
            >
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300">
                  {exp.badge}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {exp.tagline}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="bg-slate-950/80 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 block mb-1">State Analysis</span>
            <h3 className="text-3xl font-extrabold text-white">{selectedExp.title}</h3>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            {selectedExp.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase font-semibold block">Description</span>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed bg-slate-900/60 p-5 rounded-2xl border border-white/5">
              {selectedExp.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block">Evidence-Based Protocols</span>
            <div className="space-y-3">
              {selectedExp.techniques.map((tech, idx) => (
                <div key={idx} className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-1 text-xs">
                  <span className="font-bold text-white font-mono block text-cyan-300">{tech.name}</span>
                  <p className="text-slate-300 leading-normal">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LucidGuide />
    </motion.div>
  );
}

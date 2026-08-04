import React from 'react';
import { motion } from 'framer-motion';
import SleepCycleVisualizer from '../components/science/SleepCycleVisualizer';
import BrainHeatmap from '../components/science/BrainHeatmap';
import { RESEARCH_TOPICS } from '../data/researchData';
import Card from '../components/common/Card';

export default function SciencePage() {
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
          <span>🧠</span>
          <span>Cognitive Neuroscience & Polysomnography</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          The Science of Dreams
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Deciphering the neurobiological mechanisms of sleep architecture, brainwave synchronization, PGO spikes, and synaptic memory consolidation.
        </p>
      </div>

      <SleepCycleVisualizer />
      <BrainHeatmap />

      <div className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">Empirical Foundations</span>
          <h3 className="text-2xl font-bold text-white">Neurobiological Mechanics Cards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_TOPICS.map((item) => (
            <Card key={item.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-cyan-400">{item.metrics.brainwaveFreq}</span>
              </div>

              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                {item.detail}
              </p>

              <div className="pt-2 flex flex-wrap justify-between gap-2 text-xs font-mono text-slate-400">
                <span>Neurotransmitter: <strong className="text-purple-300">{item.metrics.primaryNeurotransmitter}</strong></span>
                <span>Active Networks: <strong className="text-cyan-300">{item.metrics.activeRegions} Core Nodes</strong></span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

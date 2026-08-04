import React from 'react';
import { motion } from 'framer-motion';
import AIDreamInterpreter from '../components/ai/AIDreamInterpreter';
import Card from '../components/common/Card';

export default function AIFuturePage() {
  const topics = [
    {
      title: 'AI Dream Interpretation Neural Networks',
      desc: 'Combining large language models with psychological archetype classifiers to map personal dream journals to scientific, historical, and emotional metrics.',
      badge: 'LLM & NLP Science'
    },
    {
      title: 'fMRI Neural Image Reconstruction',
      desc: 'Using generative AI diffusion models paired with high-field brain scanners to decode visual stream activity during sleep into real-time digital video renderings.',
      badge: 'Gallant Lab & Kyoto BCI'
    },
    {
      title: 'Closed-Loop Lucid Induction Wearables',
      desc: 'Smart headband neural sensors detecting REM onset and delivering real-time subtle gamma light/binaural cues to awaken metacognition without waking the body.',
      badge: 'Neurotech Hardware'
    }
  ];

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
          <span>🤖</span>
          <span>Neurotech & Synthetic Consciousness</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          AI & Future Dreams
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Exploring the frontiers of Brain-Computer Interfaces (BCI), real-time fMRI neural visual decoding, closed-loop headband sensors, and LLM archetype classifiers.
        </p>
      </div>

      <AIDreamInterpreter />

      <div className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">Emerging Technologies</span>
          <h3 className="text-2xl font-bold text-white">Next-Generation BCI & Conscious Engineering</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, idx) => (
            <Card key={idx} className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                  {topic.badge}
                </span>
                <h4 className="text-xl font-bold text-white leading-snug">{topic.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Horizon: 2026-2030</span>
                <span>Active R&D ⚡</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

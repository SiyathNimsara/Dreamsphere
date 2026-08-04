import React from 'react';
import { motion } from 'framer-motion';

export default function StatBar() {
  const stats = [
    { label: 'Sleep Cycles Mapped', value: '5 Stages (N1-REM)' },
    { label: 'Historical Traditions', value: '6 Civilizations' },
    { label: 'Psychological Archetypes', value: 'Jungian Matrix' },
    { label: 'AI fMRI Decoding', value: '84% Accuracy' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full pt-8 px-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-slate-950/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md text-left"
        >
          <span className="text-[10px] font-mono text-purple-400 block uppercase font-semibold">{stat.label}</span>
          <span className="text-base font-bold text-white font-mono mt-0.5 block">{stat.value}</span>
        </motion.div>
      ))}
    </div>
  );
}

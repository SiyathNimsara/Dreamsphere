import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', hoverGlow = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverGlow ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-slate-900/60 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        hoverGlow ? 'hover:border-purple-400/50 hover:shadow-purple-950/40' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

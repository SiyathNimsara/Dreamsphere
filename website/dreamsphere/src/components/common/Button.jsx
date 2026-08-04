import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white shadow-xl shadow-purple-500/25 border border-purple-400/30",
    secondary: "bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-400/40 hover:border-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-md",
    ghost: "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

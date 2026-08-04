import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, BookOpen } from 'lucide-react';

export default function ResearchModal({ paper, onClose }) {
  if (!paper) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 relative shadow-2xl shadow-purple-950/50 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Paper Header */}
          <div className="space-y-2 pr-8">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              {paper.field}
            </span>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {paper.title}
            </h3>
            <p className="text-xs font-mono text-cyan-300">
              {paper.authors} ({paper.year})
            </p>
          </div>

          {/* Citation & Journal */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>Journal / Publication:</span>
              <span className="text-white font-bold">{paper.journal}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Volume / Issue:</span>
              <span className="text-white">{paper.vol}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Digital Object Identifier (DOI):</span>
              <span className="text-purple-400 underline">{paper.doi}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-purple-400 uppercase font-semibold">Abstract Summary</span>
            <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-white/5">
              {paper.abstract}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Close Window
            </button>
            <a
              href={`https://doi.org/${paper.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/20 transition-all inline-flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Access Official Publication</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

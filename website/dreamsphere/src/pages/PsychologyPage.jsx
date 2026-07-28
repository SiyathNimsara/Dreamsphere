import React, { useState } from 'https://esm.sh/react@18';
import ArchetypeExplorer from '../components/ArchetypeExplorer.jsx';
import { PSYCHOLOGY_THEORIES } from '../data/dreamData.js';

export default function PsychologyPage() {
  const [selectedTheoryIdx, setSelectedTheoryIdx] = useState(0);

  return (
    <div className="space-y-16 relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
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

      {/* TIMELINE OF DREAM THEORY */}
      <div className="bg-slate-900/60 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">Chronological Evolution</span>
          <h3 className="text-2xl font-bold text-white">Historical Timeline of Dream Theories</h3>
        </div>

        {/* Timeline Horizontal Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {PSYCHOLOGY_THEORIES.map((theory, idx) => (
            <button
              key={theory.title}
              onClick={() => setSelectedTheoryIdx(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                selectedTheoryIdx === idx
                  ? 'bg-gradient-to-br from-indigo-900/80 to-purple-950 border-purple-400 shadow-lg shadow-purple-500/20 scale-[1.02]'
                  : 'bg-slate-950/60 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className="text-xs font-mono text-purple-400 font-bold block">{theory.era}</span>
              <span className="text-sm font-bold text-white block mt-1">{theory.title}</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">{theory.thinker}</span>
            </button>
          ))}
        </div>

        {/* Selected Theory Detail Card */}
        {PSYCHOLOGY_THEORIES[selectedTheoryIdx] && (
          <div className="bg-slate-950/80 border border-purple-500/30 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-purple-400 block">{PSYCHOLOGY_THEORIES[selectedTheoryIdx].era} • {PSYCHOLOGY_THEORIES[selectedTheoryIdx].thinker}</span>
                <h4 className="text-2xl font-extrabold text-white">{PSYCHOLOGY_THEORIES[selectedTheoryIdx].title}</h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                {PSYCHOLOGY_THEORIES[selectedTheoryIdx].concept}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                  {PSYCHOLOGY_THEORIES[selectedTheoryIdx].description}
                </p>
                <blockquote className="text-xs italic text-purple-300 bg-purple-950/30 p-4 rounded-2xl border border-purple-500/20">
                  {PSYCHOLOGY_THEORIES[selectedTheoryIdx].quote}
                </blockquote>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block">Key Pillars & Mechanisms</span>
                <div className="space-y-2">
                  {PSYCHOLOGY_THEORIES[selectedTheoryIdx].keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-white/5 text-xs text-slate-200">
                      <span className="text-purple-400">✦</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* JUNGIAN ARCHETYPE MATRIX */}
      <ArchetypeExplorer />

    </div>
  );
}

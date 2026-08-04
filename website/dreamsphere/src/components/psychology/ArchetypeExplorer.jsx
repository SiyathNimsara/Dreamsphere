import React, { useState } from 'react';
import { JUNG_ARCHETYPES } from '../../data/psychologyData';
import Card from '../common/Card';

export default function ArchetypeExplorer() {
  const [activeArchetype, setActiveArchetype] = useState(JUNG_ARCHETYPES[0]);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Card hoverGlow={false} className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
            <span>🔮</span>
            <span>Analytical Psychology Matrix</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Jungian Archetypes of the Subconscious
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Click any archetype card to flip between its primordial dream symbol and its psychological integration guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {JUNG_ARCHETYPES.map((arch, idx) => {
          const isFlipped = flippedCards[idx];
          const isSelected = activeArchetype.name === arch.name;

          return (
            <div
              key={arch.name}
              onClick={() => {
                setActiveArchetype(arch);
                toggleFlip(idx);
              }}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-500 relative min-h-[220px] flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-b from-purple-900/60 via-slate-950 to-slate-950 border-purple-400 shadow-xl shadow-purple-500/20 scale-[1.02]'
                  : 'bg-slate-950/70 border-white/10 hover:border-purple-500/40 hover:bg-slate-900/80'
              }`}
            >
              {!isFlipped ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{arch.symbol}</span>
                    <span className="text-[10px] font-mono text-purple-400 font-bold bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                      Tap to Flip
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{arch.name}</h4>
                    <span className="text-[11px] text-purple-300 font-mono block mt-0.5">{arch.subtitle}</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {arch.description}
                  </p>
                </div>
              ) : (
                <div className="space-y-3 bg-purple-950/80 p-3 rounded-xl border border-purple-400/40 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold block uppercase mb-1">Integration Guidance</span>
                    <p className="text-xs text-white leading-relaxed font-sans">
                      {arch.integration}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block text-right">↩ Tap to return</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

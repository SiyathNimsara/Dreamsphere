import React, { useState } from 'https://esm.sh/react@18';
import { CULTURES_DATA } from '../data/dreamData.js';

export default function CultureMap() {
  const [activeCulture, setActiveCulture] = useState(CULTURES_DATA[0]);

  return (
    <div className="bg-slate-900/60 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-2">
            <span>🌍</span>
            <span>Global Anthropological Atlas</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Oneirocritica Across Civilizations & Traditions
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Hover or tap glowing geographic beacons to explore sacred dream temples, indigenous dreamtime songlines, and ancient rituals.
        </p>
      </div>

      {/* World Map Container */}
      <div className="relative w-full bg-slate-950/90 rounded-3xl border border-purple-500/30 p-4 sm:p-6 min-h-[380px] overflow-hidden flex items-center justify-center">
        
        {/* Subtle Map Grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* World Map SVG Vector Silhouette */}
        <svg className="w-full h-auto opacity-30 fill-purple-900/40 stroke-purple-500/40 stroke-[0.5]" viewBox="0 0 1000 500">
          {/* North America */}
          <path d="M150,120 Q200,80 300,100 T250,220 T120,250 Z" />
          {/* South America */}
          <path d="M280,260 Q340,280 320,400 T260,450 T250,300 Z" />
          {/* Europe */}
          <path d="M480,80 Q560,70 600,140 T500,180 Z" />
          {/* Africa */}
          <path d="M480,190 Q580,200 560,350 T480,380 T460,220 Z" />
          {/* Asia */}
          <path d="M600,80 Q850,60 880,220 T700,280 T580,180 Z" />
          {/* Australia */}
          <path d="M800,320 Q900,310 880,420 T780,410 Z" />
        </svg>

        {/* Culture Location Beacons */}
        {CULTURES_DATA.map((item) => {
          const isSelected = activeCulture.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveCulture(item)}
              onMouseEnter={() => setActiveCulture(item)}
              style={{ top: item.coords.top, left: item.coords.left }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
            >
              <div className="relative flex items-center justify-center">
                {/* Ping Pulse */}
                <div className="absolute w-8 h-8 rounded-full bg-amber-400/40 animate-ping" />
                
                {/* Beacon Badge */}
                <div className={`px-3 py-1.5 rounded-full border text-xs font-mono font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 border-amber-300 text-slate-950 shadow-xl shadow-amber-500/30 scale-110'
                    : 'bg-slate-950/80 border-amber-500/40 text-amber-300 hover:border-amber-300 hover:scale-105'
                }`}>
                  <span>📍</span>
                  <span>{item.name}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Culture Detail Card */}
      <div className="bg-slate-950/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <span>🏛️ {activeCulture.location}</span>
              <span>•</span>
              <span>{activeCulture.period}</span>
            </div>
            <h4 className="text-2xl font-extrabold text-white tracking-tight">
              {activeCulture.title}
            </h4>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            {activeCulture.keyConcept}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm">
          <div className="space-y-3">
            <span className="text-xs font-mono text-purple-400 uppercase font-semibold">Cultural Belief System</span>
            <p className="leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-white/5">
              {activeCulture.detail}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">Core Significance</span>
              <p className="text-xs text-slate-300 leading-relaxed bg-cyan-950/20 p-3.5 rounded-2xl border border-cyan-500/20">
                {activeCulture.summary}
              </p>
            </div>
            <div className="flex items-center justify-between bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 text-xs font-mono text-slate-300">
              <span className="text-amber-400 font-bold">Historical Artifact:</span>
              <span className="text-slate-200">{activeCulture.artifact}</span>
            </div>
          </div>
        </div>

        {/* Culture Select Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {CULTURES_DATA.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCulture(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCulture.id === c.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { BRAIN_REGIONS } from '../../data/researchData';
import Card from '../common/Card';

export default function BrainHeatmap() {
  const [selectedRegion, setSelectedRegion] = useState(BRAIN_REGIONS[0]);

  return (
    <Card hoverGlow={false} className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
            <span>🧬</span>
            <span>Neuroanatomy Interactive Map</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Neural Activation Topography During Dreams
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Click any glowing neural node to inspect its neurotransmitters, metabolic activity, and role in dream generation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Brain Visual Diagram Area */}
        <div className="lg:col-span-7 relative bg-slate-950/80 rounded-3xl border border-purple-500/30 p-6 flex items-center justify-center min-h-[340px] overflow-hidden">
          <svg className="w-full max-w-md h-auto opacity-30 fill-purple-900/40 stroke-purple-500" viewBox="0 0 100 100">
            <path d="M 25 40 C 20 25, 40 15, 60 15 C 75 15, 88 25, 85 45 C 85 55, 75 65, 68 70 C 62 75, 50 85, 45 85 C 40 85, 38 75, 30 72 Z" />
          </svg>

          {BRAIN_REGIONS.map((region) => {
            const isSelected = selectedRegion.id === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                style={{ top: `${region.coordinates.y}%`, left: `${region.coordinates.x}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute w-8 h-8 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: region.color }}
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'scale-125 shadow-2xl shadow-purple-500' : 'hover:scale-110 opacity-80'
                    }`}
                    style={{ backgroundColor: region.color }}
                  >
                    <span className="text-[10px] font-bold text-slate-950 font-mono">
                      {region.name[0]}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Region Panel */}
        <div className="lg:col-span-5 bg-slate-950/70 border border-white/10 rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-purple-400 block font-semibold">Active Region</span>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: selectedRegion.color }} />
                {selectedRegion.name}
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
              {selectedRegion.status}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 font-mono block">Primary Waking Function:</span>
              <p className="text-slate-200 font-medium mt-0.5">{selectedRegion.function}</p>
            </div>

            <div>
              <span className="text-purple-400 font-mono block">Role in Dream Creation:</span>
              <p className="text-purple-200 leading-relaxed bg-purple-950/30 p-3 rounded-xl border border-purple-500/20 mt-1">
                {selectedRegion.dreamImpact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

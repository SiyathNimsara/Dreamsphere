import React, { useState } from 'react';
import Card from '../common/Card';

export default function LucidGuide() {
  const [realityCheckCount, setRealityCheckCount] = useState(0);
  const [clockText, setClockText] = useState('03:44 AM');
  const [journalHours, setJournalHours] = useState(7);
  const [meditationMins, setMeditationMins] = useState(15);

  const performRealityCheck = () => {
    setRealityCheckCount((prev) => prev + 1);
    const times = ['03:44 AM', '99:12 ?', '∞:00 AM', '12:88 !!', '03:44 AM'];
    const nextTime = times[Math.floor(Math.random() * times.length)];
    setClockText(nextTime);
  };

  const lucidProbability = Math.min(96, Math.max(12, journalHours * 7 + meditationMins * 1.8 + realityCheckCount * 4));

  return (
    <Card hoverGlow={false} className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
            <span>🌌</span>
            <span>Lucid Dream Laboratory</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Metacognitive Reality Training & Induction
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Test interactive reality checks, calculate nightly lucidity probability, and master induction techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Reality Check Simulator */}
        <div className="lg:col-span-6 bg-slate-950/80 border border-purple-500/30 rounded-3xl p-6 space-y-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-purple-400 block font-semibold mb-1">Interactive Trainer</span>
            <h4 className="text-lg font-bold text-white">Digital Reality Check Test</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              In dreams, text and digital clocks shift erratically when looked at twice. Tap the clock below twice to test stability:
            </p>
          </div>

          <div
            onClick={performRealityCheck}
            className="cursor-pointer bg-slate-900 border-2 border-cyan-500/40 rounded-2xl p-6 text-center space-y-2 hover:border-cyan-400 transition-all duration-300 group shadow-lg shadow-cyan-500/10"
          >
            <span className="text-xs font-mono text-slate-400 block">Tap to Re-inspect Clock</span>
            <div className="text-4xl font-mono font-extrabold text-cyan-400 tracking-widest group-hover:scale-105 transition-transform">
              {clockText}
            </div>
            {clockText.includes('?') || clockText.includes('∞') || clockText.includes('!') ? (
              <span className="text-xs font-mono text-rose-400 font-bold block animate-pulse">
                ⚠️ INSTABILITY DETECTED! YOU ARE DREAMING!
              </span>
            ) : (
              <span className="text-[11px] font-mono text-emerald-400 block">
                ✓ Stable text (Waking Reality)
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
            <span>Reality Checks Today:</span>
            <span className="text-cyan-400 font-bold text-sm">{realityCheckCount}</span>
          </div>
        </div>

        {/* Lucid Probability Calculator */}
        <div className="lg:col-span-6 bg-slate-950/80 border border-purple-500/30 rounded-3xl p-6 space-y-5">
          <span className="text-xs font-mono text-cyan-400 block font-semibold">Predictive Estimator</span>
          <h4 className="text-lg font-bold text-white">Nightly Lucidity Probability Score</h4>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 font-mono mb-1">
                <span>Average Sleep Duration:</span>
                <span className="text-purple-400 font-bold">{journalHours} Hours</span>
              </div>
              <input
                type="range"
                min="4"
                max="10"
                value={journalHours}
                onChange={(e) => setJournalHours(parseInt(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 font-mono mb-1">
                <span>Mindfulness / Meditation:</span>
                <span className="text-cyan-400 font-bold">{meditationMins} Mins</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={meditationMins}
                onChange={(e) => setMeditationMins(parseInt(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block">Calculated Lucidity Chance:</span>
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                {Math.round(lucidProbability)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

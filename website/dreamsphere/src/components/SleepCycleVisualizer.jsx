import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18';
import { SLEEP_STAGES } from '../data/dreamData.js';

export default function SleepCycleVisualizer() {
  const [selectedStageIdx, setSelectedStageIdx] = useState(4); // Default to REM
  const [hourTime, setHourTime] = useState(6); // 6th hour of sleep
  const canvasRef = useRef(null);

  const stage = SLEEP_STAGES[selectedStageIdx];

  // Draw EEG Brainwave Animation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let offset = 0;

    const renderEEG = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      ctx.strokeStyle = selectedStageIdx === 4 ? '#f43f5e' : selectedStageIdx === 3 ? '#a855f7' : '#06b6d4';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = ctx.strokeStyle;
      ctx.shadowBlur = 10;

      offset += 0.08;

      for (let x = 0; x < width; x++) {
        let y = centerY;
        const eegType = stage.eegType;

        if (eegType === 'beta') {
          // High freq 25Hz
          y += Math.sin(x * 0.2 + offset * 5) * 12 + Math.cos(x * 0.4) * 6;
        } else if (eegType === 'theta') {
          // 6Hz theta wave
          y += Math.sin(x * 0.08 + offset * 2) * 25 + Math.sin(x * 0.15) * 8;
        } else if (eegType === 'spindle') {
          // Sleep Spindles burst
          const isSpindleZone = (x + offset * 40) % 250 < 80;
          const amp = isSpindleZone ? 35 : 10;
          y += Math.sin(x * 0.3 + offset * 4) * amp;
        } else if (eegType === 'delta') {
          // Slow 1Hz deep wave
          y += Math.sin(x * 0.03 + offset) * 45 + Math.sin(x * 0.06) * 15;
        } else if (eegType === 'rem') {
          // Sawtooth REM waveform + high activation spikes
          const spike = Math.random() > 0.94 ? (Math.random() - 0.5) * 50 : 0;
          y += Math.sin(x * 0.18 + offset * 4) * 20 + spike;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      animId = requestAnimationFrame(renderEEG);
    };

    renderEEG();
    return () => cancelAnimationFrame(animId);
  }, [selectedStageIdx, stage]);

  return (
    <div className="bg-slate-900/60 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
            <span>⚡</span>
            <span>Live EEG Waveform Simulator</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            8-Hour Sleep Architecture & Brain Frequency
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-white/10">
          <span className="text-xs text-slate-400 font-mono pl-2">Cycle Hour:</span>
          <input
            type="range"
            min="1"
            max="8"
            value={hourTime}
            onChange={(e) => {
              const h = parseInt(e.target.value);
              setHourTime(h);
              // Stage shifts based on hour
              if (h === 1) setSelectedStageIdx(1);
              else if (h === 2 || h === 3) setSelectedStageIdx(3);
              else if (h === 4 || h === 5) setSelectedStageIdx(2);
              else setSelectedStageIdx(4);
            }}
            className="accent-purple-500 w-28 cursor-pointer"
          />
          <span className="text-sm font-bold text-purple-400 font-mono w-12 text-center">
            {hourTime}:00 HRS
          </span>
        </div>
      </div>

      {/* Stage Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {SLEEP_STAGES.map((s, idx) => (
          <button
            key={s.stage}
            onClick={() => setSelectedStageIdx(idx)}
            className={`p-3 rounded-2xl border text-left transition-all duration-300 ${
              selectedStageIdx === idx
                ? 'bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-slate-900 border-purple-400 shadow-lg shadow-purple-500/20 scale-[1.02]'
                : 'bg-slate-950/50 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            <span className="text-xs font-mono block text-purple-400 font-semibold">{s.short}</span>
            <span className="text-sm font-bold block text-white truncate">{s.stage.split(' ')[0]}</span>
            <span className="text-[10px] text-slate-400 block mt-1">{s.duration}</span>
          </button>
        ))}
      </div>

      {/* Live EEG Waveform Display */}
      <div className="relative rounded-2xl bg-slate-950 border border-purple-500/30 p-4 overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
          <span>Signal: Electroencephalogram (EEG)</span>
          <span className="text-purple-400 font-bold">{stage.brainwave}</span>
        </div>
        <canvas
          ref={canvasRef}
          width={700}
          height={100}
          className="w-full h-24 rounded-lg bg-slate-950/90"
        />
        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>0s</span>
          <span>Time Axis (10 sec sample)</span>
          <span>10s</span>
        </div>
      </div>

      {/* Detailed Stage Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-950/60 p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs text-purple-400 font-mono font-semibold block">Stage Profile</span>
          <h4 className="text-lg font-bold text-white">{stage.stage}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{stage.description}</p>
        </div>

        <div className="bg-slate-950/60 p-5 rounded-2xl border border-white/10 space-y-3">
          <span className="text-xs text-cyan-400 font-mono font-semibold block">Physiological State</span>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Muscle Tone (Atonia):</span>
              <span className="font-mono text-cyan-300 font-bold">
                {selectedStageIdx === 4 ? 'Complete Block (99%)' : selectedStageIdx === 3 ? 'Deeply Relaxed' : 'Normal'}
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Heart Rate & Breathing:</span>
              <span className="font-mono text-cyan-300 font-bold">
                {selectedStageIdx === 4 ? 'Variable / Spiking' : selectedStageIdx === 3 ? 'Lowest Rate (35-45 bpm)' : 'Gradual Slowing'}
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Dream Recall Chance:</span>
              <span className="font-mono text-cyan-300 font-bold">
                {selectedStageIdx === 4 ? '92% Vivid Recall' : selectedStageIdx === 1 ? 'Hypnagogic Flashes' : 'Low (<15%)'}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-950/60 p-5 rounded-2xl border border-white/10 space-y-3">
          <span className="text-xs text-pink-400 font-mono font-semibold block">Cognitive & Biological Role</span>
          <p className="text-xs text-slate-300 leading-relaxed">
            {selectedStageIdx === 4
              ? 'Emotional processing, creative synthesis, and synaptic rebalancing of daytime experiences.'
              : selectedStageIdx === 3
              ? 'Glymphatic brain clearance of toxic beta-amyloid proteins, growth hormone surge, and deep tissue repair.'
              : 'Memory spindle consolidation and protection against arousal thresholds.'}
          </p>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Nightly Total:</span>
            <span className="text-pink-400 font-bold">{stage.duration}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

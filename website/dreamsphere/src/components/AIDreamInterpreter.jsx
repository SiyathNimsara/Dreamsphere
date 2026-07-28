import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18';
import { AI_DREAM_TOPICS } from '../data/dreamData.js';

export default function AIDreamInterpreter() {
  const [dreamText, setDreamText] = useState(
    'I was floating over an ancient glowing obsidian city suspended inside a purple spiral galaxy. Time felt completely still, and a voice gave me a golden key...'
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const canvasRef = useRef(null);

  const presets = [
    'Floating over an ancient glowing obsidian city inside a spiral galaxy.',
    'Walking down an infinite hallway where doors open into memories of ocean waves.',
    'Flying through electric rain clouds while talking to a tiger with golden eyes.',
    'Trying to read an ancient glowing book, but the symbols shift into stars.'
  ];

  const handleInterpret = () => {
    if (!dreamText.trim()) return;
    setIsProcessing(true);
    setAnalysisResult(null);

    // Simulate AI neural network processing sequence
    setTimeout(() => {
      // Deterministic archetype selection based on text length
      const length = dreamText.length;
      const valenceScore = Math.min(98, Math.max(65, 75 + (length % 20)));
      const archetypesList = ['The Shadow & Flying Archetype', 'The Self (Mandala Synthesis)', 'The Persona & Transition', 'The Wise Old Man / Higher Intuition'];
      const chosenArchetype = archetypesList[length % archetypesList.length];

      setAnalysisResult({
        valenceScore,
        eegSync: '38.4 Hz (Gamma Band Sync)',
        archetype: chosenArchetype,
        primaryEmotion: 'Awe & Transcendence (89%)',
        neurochemicalState: 'High Acetylcholine + Low Norepinephrine',
        interpretation: `Your dream log indicates a high-level transcendental narrative. Floating over ancient topographies signifies ego expansion and perspective shifts, while obsidian geometry represents unshakeable core subconscious memories being restructured.`,
        keySymbols: ['Spiral Galaxy (Wholeness)', 'Obsidian City (Deep Memory)', 'Golden Key (Access to Insight)'],
        lucidityPotential: '87% High Probability'
      });
      setIsProcessing(false);
    }, 1800);
  };

  // Draw procedural dream visual nebula art
  useEffect(() => {
    if (!analysisResult) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;

    const grad = ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, width*0.6);
    grad.addColorStop(0, '#c084fc');
    grad.addColorStop(0.4, '#6366f1');
    grad.addColorStop(0.7, '#06b6d4');
    grad.addColorStop(1, '#030712');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw glowing neural nodes
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = Math.random() * 3 + 1;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [analysisResult]);

  return (
    <div className="bg-slate-900/70 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
            <span>🤖</span>
            <span>Neural AI Interpretation Studio</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            AI Consciousness & Archetype Neural Decoding
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Type or select a dream log. Our neural model cross-references 50,000+ psychiatric archives, Jungian archetypes, and fMRI EEG patterns.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <label className="block text-xs font-mono text-cyan-400">Describe Your Dream Narrative:</label>
        <textarea
          rows={3}
          value={dreamText}
          onChange={(e) => setDreamText(e.target.value)}
          placeholder="Describe your dream scenario in detail..."
          className="w-full p-4 rounded-2xl bg-slate-950/90 border border-purple-500/30 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans leading-relaxed"
        />

        {/* Preset Suggestions */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-mono text-slate-400 self-center mr-1">Presets:</span>
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => setDreamText(p)}
              className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-white/10 hover:border-cyan-500/50 text-[11px] text-slate-300 hover:text-white transition-all truncate max-w-[200px]"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Launch AI Analysis Button */}
        <button
          onClick={handleInterpret}
          disabled={isProcessing}
          className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
            isProcessing
              ? 'bg-purple-900/50 border border-purple-500/30 text-purple-300 cursor-wait'
              : 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/20 hover:scale-[1.01]'
          }`}
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
              <span>Analyzing Subconscious Neural Signatures...</span>
            </>
          ) : (
            <>
              <span>✨</span>
              <span>Execute Neural AI Interpretation</span>
            </>
          )}
        </button>
      </div>

      {/* Analysis Output Section */}
      {analysisResult && (
        <div className="bg-slate-950/90 border border-cyan-400/40 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 block font-semibold">AI Neural Report</span>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🧠</span>
                <span>{analysisResult.archetype}</span>
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
                {analysisResult.lucidityPotential}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Generated Cosmic Dream Canvas Preview */}
            <div className="lg:col-span-4 bg-slate-900 rounded-2xl border border-white/10 p-3 space-y-2">
              <span className="text-[11px] font-mono text-purple-400 block text-center">AI Procedural Dream Render</span>
              <canvas
                ref={canvasRef}
                width={300}
                height={220}
                className="w-full h-44 rounded-xl border border-white/10"
              />
              <span className="text-[10px] text-slate-400 block text-center font-mono">Synthesized Nebula Map</span>
            </div>

            {/* Metrics & Narrative Analysis */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase font-semibold block mb-1">Synthesized Insight</span>
                <p className="text-sm text-slate-200 leading-relaxed bg-purple-950/30 p-4 rounded-2xl border border-purple-500/20">
                  {analysisResult.interpretation}
                </p>
              </div>

              {/* Key Symbols */}
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-2">Key Symbol Mapping</span>
                <div className="flex flex-wrap gap-2">
                  {analysisResult.keySymbols.map((sym, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                      🏷️ {sym}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs font-mono">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block">EEG Sync Frequency:</span>
                  <span className="text-cyan-300 font-bold">{analysisResult.eegSync}</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block">Dominant Neurochemistry:</span>
                  <span className="text-purple-300 font-bold">{analysisResult.neurochemicalState}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

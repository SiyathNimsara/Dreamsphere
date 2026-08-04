import React, { useState, useRef, useEffect } from 'react';
import { interpretDreamLog } from '../../services/dreamAIService';
import Card from '../common/Card';
import Button from '../common/Button';
import { Sparkles, Brain, Loader2 } from 'lucide-react';

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

  const handleInterpret = async () => {
    if (!dreamText.trim()) return;
    setIsProcessing(true);
    setAnalysisResult(null);

    const result = await interpretDreamLog(dreamText);
    setAnalysisResult(result);
    setIsProcessing(false);
  };

  useEffect(() => {
    if (!analysisResult) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;

    const grad = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, width * 0.6);
    grad.addColorStop(0, '#c084fc');
    grad.addColorStop(0.4, '#6366f1');
    grad.addColorStop(0.7, '#06b6d4');
    grad.addColorStop(1, '#030712');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

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
    <Card hoverGlow={false} className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Neural AI Interpretation Studio</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            AI Consciousness & Archetype Neural Decoding
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Type or select a dream log. Our neural model cross-references psychiatric archives, Jungian archetypes, and fMRI EEG patterns.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block text-xs font-mono text-cyan-400">Describe Your Dream Narrative:</label>
        <textarea
          rows={3}
          value={dreamText}
          onChange={(e) => setDreamText(e.target.value)}
          placeholder="Describe your dream scenario in detail..."
          className="w-full p-4 rounded-2xl bg-slate-950/90 border border-purple-500/30 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 font-sans leading-relaxed"
        />

        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-mono text-slate-400 self-center mr-1">Presets:</span>
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => setDreamText(p)}
              className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-white/10 hover:border-cyan-500/50 text-[11px] text-slate-300 hover:text-white transition-all truncate max-w-[200px] cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        <Button
          onClick={handleInterpret}
          disabled={isProcessing}
          className="w-full py-4 rounded-2xl font-bold text-sm"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-cyan-300" />
              <span>Analyzing Subconscious Neural Signatures...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Execute Neural AI Interpretation</span>
            </>
          )}
        </Button>
      </div>

      {analysisResult && (
        <div className="bg-slate-950/90 border border-cyan-400/40 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 block font-semibold">AI Neural Report</span>
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span>{analysisResult.archetype}</span>
              </h4>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              {analysisResult.lucidityPotential}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 bg-slate-900 rounded-2xl border border-white/10 p-3 space-y-2">
              <span className="text-[11px] font-mono text-purple-400 block text-center">AI Procedural Dream Render</span>
              <canvas
                ref={canvasRef}
                width={300}
                height={220}
                className="w-full h-44 rounded-xl border border-white/10"
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase font-semibold block mb-1">Synthesized Insight</span>
                <p className="text-sm text-slate-200 leading-relaxed bg-purple-950/30 p-4 rounded-2xl border border-purple-500/20">
                  {analysisResult.interpretation}
                </p>
              </div>

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
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

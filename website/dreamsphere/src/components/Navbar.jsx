import React, { useState, useEffect } from 'https://esm.sh/react@18';

export default function Navbar({ activeTab, setActiveTab, onOpenAIInterpreter }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);
  const [oscillators, setOscillators] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '✨' },
    { id: 'science', label: 'Science of Dreams', icon: '🧠' },
    { id: 'psychology', label: 'Psychology', icon: '🔮' },
    { id: 'culture', label: 'Cultures', icon: '🌍' },
    { id: 'experiences', label: 'Dream Experiences', icon: '🌌' },
    { id: 'ai-future', label: 'AI & Future', icon: '🤖' },
    { id: 'references', label: 'References', icon: '📚' },
  ];

  // Procedural Web Audio Ambient Soundscape Generator
  const toggleAmbientSound = () => {
    if (isPlayingAudio) {
      oscillators.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      if (audioCtx) audioCtx.close();
      setOscillators([]);
      setAudioCtx(null);
      setIsPlayingAudio(false);
    } else {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Deep harmonic cosmic frequencies (432Hz ambient chord)
      const freqs = [108, 216, 288, 432, 540];
      const newOscs = freqs.map((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Subtle LFO modulation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.1 + idx * 0.05;
        lfoGain.gain.value = 2;
        lfo.connect(osc.frequency);
        lfo.start();

        gain.gain.setValueAtTime(0.02 + (idx * 0.01), ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return osc;
      });

      setOscillators(newOscs);
      setAudioCtx(ctx);
      setIsPlayingAudio(true);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-2xl shadow-purple-950/30' 
        : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-pulse" />
                <span className="text-xl relative z-10">🪐</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400 font-sans">
                Dream<span className="text-purple-400 font-light">Sphere</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-indigo-300/70 uppercase">
                Consciousness & Cosmos
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 font-semibold scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Ambient Audio & AI Generator */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleAmbientSound}
              title={isPlayingAudio ? "Mute Ambient Soundscape" : "Play Cosmic Ambient Soundscape"}
              className={`px-3 py-2 rounded-full text-xs font-mono border transition-all duration-300 flex items-center gap-2 ${
                isPlayingAudio
                  ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/20 animate-pulse'
                  : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              <span>{isPlayingAudio ? '🔊' : '🔇'}</span>
              <span>{isPlayingAudio ? 'Cosmic Sound ON' : 'Ambient Sound'}</span>
            </button>

            <button
              onClick={onOpenAIInterpreter}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white border border-cyan-400/30 hover:border-cyan-300 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>✨</span>
              <span>AI Interpreter</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
          >
            <span className="text-xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-950/95 border border-purple-500/30 rounded-2xl p-4 backdrop-blur-2xl shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-sm text-left flex items-center gap-3 transition-colors ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  toggleAmbientSound();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center justify-center gap-2"
              >
                <span>{isPlayingAudio ? '🔊' : '🔇'}</span>
                <span>{isPlayingAudio ? 'Mute Ambient Drone' : 'Enable Cosmic Soundscape'}</span>
              </button>
              <button
                onClick={() => {
                  onOpenAIInterpreter();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>✨</span>
                <span>Launch AI Dream Interpreter</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import React from 'https://esm.sh/react@18';
import { RESEARCH_TOPICS, LATEST_ARTICLES } from '../data/dreamData.js';

export default function HomePage({ setActiveTab, onSelectPaper, onOpenAIInterpreter }) {
  return (
    <div className="space-y-24 relative z-10 pt-28 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 min-h-[75vh] flex flex-col justify-center items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/40 text-purple-300 text-xs font-mono tracking-wide animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>NASA & Cognitive Science Research Platform</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none font-sans">
            Explore The Universe <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-500 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
              Inside Your Mind
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            A journey through neuroscience, psychology, culture, and the mysteries of human dreams.
          </p>
        </div>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setActiveTab('science')}
            className="px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white shadow-2xl shadow-purple-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>🧠</span>
            <span>Begin Research Journey</span>
          </button>

          <button
            onClick={onOpenAIInterpreter}
            className="px-8 py-4 rounded-full font-bold text-sm bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-400/40 hover:border-cyan-300 shadow-xl shadow-cyan-500/10 hover:scale-105 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            <span>✨</span>
            <span>Launch AI Interpreter</span>
          </button>

          <button
            onClick={() => setActiveTab('culture')}
            className="px-6 py-4 rounded-full font-semibold text-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
          >
            <span>🌍</span>
            <span>Interactive World Map</span>
          </button>
        </div>

        {/* Stat Pill Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full pt-12">
          {[
            { label: 'Sleep Cycles Mapped', value: '5 Stages (N1-REM)' },
            { label: 'Historical Traditions', value: '6 Civilizations' },
            { label: 'Psychological Archetypes', value: 'Jungian Matrix' },
            { label: 'AI fMRI Decoding', value: '84% Accuracy' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-950/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md text-left">
              <span className="text-[10px] font-mono text-purple-400 block uppercase font-semibold">{stat.label}</span>
              <span className="text-base font-bold text-white font-mono mt-0.5 block">{stat.value}</span>
            </div>
          ))}
        </div>

      </section>

      {/* FEATURED RESEARCH TOPICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">Core Modules</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Scientific Domains
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('science')}
            className="text-xs font-mono text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1"
          >
            View All Science Modules →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_TOPICS.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setActiveTab('science')}
              className="cursor-pointer bg-slate-900/60 border border-white/10 hover:border-purple-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-slate-900/80 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono">
                    {topic.category}
                  </span>
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {topic.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span>{topic.metrics.brainwaveFreq.split(' ')[0]}</span>
                <span className="group-hover:translate-x-1 transition-transform">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST ARTICLES & DISCOVERIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-pink-400 uppercase font-semibold block mb-1">Peer-Reviewed Insights</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Latest Scientific Breakthroughs
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('references')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
          >
            Access Full Library →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveTab('references')}
              className="cursor-pointer bg-slate-900/60 border border-purple-500/20 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-purple-400 hover:scale-[1.02] group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-white/20 text-white text-[10px] font-mono">
                  {article.journal}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-purple-400">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {article.snippet}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-slate-950 border border-purple-400/40 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center md:text-left relative z-10">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-mono">
              AI Subconscious Interpreter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Decode Your Personal Dream Logs?
            </h2>
            <p className="text-sm text-purple-200 leading-relaxed">
              Experience our neural model. Map your nocturnal narratives against psychiatric archives, EEG frequencies, and archetypal frameworks.
            </p>
          </div>

          <button
            onClick={onOpenAIInterpreter}
            className="relative z-10 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 hover:text-white shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            <span>✨</span>
            <span>Launch AI Interpreter Studio</span>
          </button>
        </div>
      </section>

    </div>
  );
}

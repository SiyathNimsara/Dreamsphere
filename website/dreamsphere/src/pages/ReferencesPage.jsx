import React, { useState } from 'https://esm.sh/react@18';
import { REFERENCE_PAPERS } from '../data/dreamData.js';

export default function ReferencesPage({ onSelectPaper }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('All');

  const fields = ['All', 'Neuroscience & BCI', 'Cognitive Neuroscience', 'Consciousness Studies', 'Evolutionary Psychology', 'Anthropology & Psychology'];

  const filteredPapers = REFERENCE_PAPERS.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          paper.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'All' || paper.field === selectedField;
    return matchesSearch && matchesField;
  });

  return (
    <div className="space-y-12 relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <span>📚</span>
          <span>Academic Database & Citation Index</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Scientific Library & References
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Open access repository of foundational peer-reviewed studies published in Science, Nature, Psychological Bulletin, and Sleep.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-900/60 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search title, author, journal..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-950/90 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-cyan-400 font-mono transition-all"
            />
            <span className="absolute left-3.5 top-3.5 text-slate-500 text-sm">🔍</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {fields.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedField(f)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedField === f
                    ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Papers Grid */}
      <div className="space-y-4">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => (
            <div
              key={paper.id}
              onClick={() => onSelectPaper(paper)}
              className="cursor-pointer bg-slate-900/60 border border-white/10 hover:border-purple-400 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:bg-slate-900/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">{paper.field}</span>
                  <span>•</span>
                  <span>{paper.journal} ({paper.year})</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono">
                  Authors: {paper.authors}
                </p>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed pt-1">
                  {paper.abstract}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPaper(paper);
                }}
                className="px-5 py-2.5 rounded-full bg-slate-950 border border-purple-500/30 text-purple-300 group-hover:bg-purple-600 group-hover:text-white text-xs font-mono font-bold whitespace-nowrap transition-all shadow-lg shadow-purple-500/10"
              >
                Inspect Abstract & DOI →
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-slate-950/60 rounded-3xl border border-white/10 text-slate-400 font-mono text-xs">
            No research papers found matching your query criteria.
          </div>
        )}
      </div>

    </div>
  );
}

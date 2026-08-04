import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import StatBar from '../components/home/StatBar';
import FeaturedTopics from '../components/home/FeaturedTopics';
import { LATEST_ARTICLES } from '../data/researchData';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function HomePage({ onSelectPaper }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-24 relative z-10 pt-28 pb-16"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Bar */}
      <StatBar />

      {/* Featured Research Topics */}
      <FeaturedTopics />

      {/* Latest Discoveries & Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-pink-400 uppercase font-semibold block mb-1">Peer-Reviewed Insights</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Latest Scientific Breakthroughs
            </h2>
          </div>
          <button
            onClick={() => navigate('/references')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>Access Full Library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_ARTICLES.map((article) => (
            <Card
              key={article.id}
              onClick={() => navigate('/references')}
              className="cursor-pointer overflow-hidden group border-purple-500/20 p-0"
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
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-slate-950 border border-purple-400/40 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left relative z-10">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-mono inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              AI Subconscious Interpreter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Decode Your Personal Dream Logs?
            </h2>
            <p className="text-sm text-purple-200 leading-relaxed">
              Experience our neural model. Map your nocturnal narratives against psychiatric archives, EEG frequencies, and archetypal frameworks.
            </p>
          </div>

          <Button
            onClick={() => navigate('/ai-future')}
            variant="primary"
            className="relative z-10 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch AI Interpreter Studio</span>
          </Button>
        </div>
      </section>
    </motion.div>
  );
}

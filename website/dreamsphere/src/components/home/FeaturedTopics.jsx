import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RESEARCH_TOPICS } from '../../data/researchData';
import Card from '../common/Card';

export default function FeaturedTopics() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase font-semibold block mb-1">Core Modules</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Featured Scientific Domains
          </h2>
        </div>
        <button
          onClick={() => navigate('/science')}
          className="text-xs font-mono text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 cursor-pointer"
        >
          <span>View All Science Modules</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESEARCH_TOPICS.map((topic) => (
          <Card
            key={topic.id}
            onClick={() => navigate('/science')}
            className="cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono">
                  {topic.category}
                </span>
                <Sparkles className="w-4 h-4 text-purple-400" />
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
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

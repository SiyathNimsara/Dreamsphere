import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Orbit, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="relative bg-slate-950 border-t border-purple-500/20 text-slate-400 py-16 overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-purple-500/30">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Orbit className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Dream<span className="text-purple-400">Sphere</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Exploring the cosmos outside and the universe inside the human mind. An interdisciplinary research platform bridging neuroscience, analytical psychology, global traditions, and neural artificial intelligence.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-purple-300">
              <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
                NASA & Academic Inspired
              </span>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                DevOps Portfolio Project
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-white uppercase font-bold tracking-wider">Research Modules</span>
            <ul className="space-y-2 text-xs">
              {[
                { path: '/science', label: 'Science of Dreams' },
                { path: '/psychology', label: 'Psychology & Archetypes' },
                { path: '/culture', label: 'Dreams Across Cultures' },
                { path: '/experiences', label: 'Lucidity & Experiences' },
                { path: '/ai-future', label: 'AI & Neural Decoding' },
                { path: '/references', label: 'Scientific Paper Library' }
              ].map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="hover:text-purple-300 transition-colors">
                    → {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal Newsletter */}
          <div className="md:col-span-4 space-y-4 bg-slate-900/60 p-6 rounded-3xl border border-white/10">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider block">
              The DreamSphere Journal
            </span>
            <p className="text-xs text-slate-300">
              Subscribe to monthly briefings on sleep neuroscience, fMRI dream reconstruction, and lucid dreaming protocols.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter researcher email..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-cyan-400 transition-all font-mono"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Subscribed to Journal</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe to Briefings</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 DreamSphere Research Collective. Open Access Educational & DevOps Platform.</p>
          <div className="flex gap-4 font-mono text-[11px]">
            <span>Neuroscience</span>
            <span>•</span>
            <span>Psychology</span>
            <span>•</span>
            <span>Consciousness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

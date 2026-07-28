import React from 'https://esm.sh/react@18';
import CultureMap from '../components/CultureMap.jsx';

export default function CulturePage() {
  return (
    <div className="space-y-16 relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <span>🌍</span>
          <span>Anthropology & Comparative Mythography</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Dreams Across Cultures
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Journey through ancient civilization dream temples, Aboriginal Dreamtime songlines, Vedic Upanishads, Tibetan Dream Yoga, and Ojibwe sacred dreamcatchers.
        </p>
      </div>

      {/* Interactive World Map Section */}
      <CultureMap />

    </div>
  );
}

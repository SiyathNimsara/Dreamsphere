import { useState, useEffect } from 'react';

export function useAudioSynth() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioCtx) {
        audioCtx.close();
      }
      setAudioCtx(null);
      setIsPlaying(false);
    } else {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.08, ctx.currentTime);
      master.connect(ctx.destination);

      const frequencies = [108, 216, 432];
      frequencies.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(master);
        osc.start();
      });

      setAudioCtx(ctx);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [audioCtx]);

  return { isPlaying, toggleAudio };
}

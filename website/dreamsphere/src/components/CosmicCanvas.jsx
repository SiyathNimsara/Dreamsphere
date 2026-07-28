import React, { useEffect, useRef } from 'https://esm.sh/react@18';

export default function CosmicCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tilt effect
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Starfield setup
    const numStars = 900;
    const stars = Array.from({ length: numStars }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      pulseSpeed: 0.005 + Math.random() * 0.015,
      color: ['#ffffff', '#a5b4fc', '#c084fc', '#67e8f9', '#f472b6'][Math.floor(Math.random() * 5)]
    }));

    // Cosmic Dust Nebulae
    const nebulae = Array.from({ length: 5 }, () => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      radius: Math.random() * 300 + 150,
      color: [
        'rgba(99, 102, 241, 0.04)',
        'rgba(168, 85, 247, 0.04)',
        'rgba(6, 182, 212, 0.03)',
        'rgba(236, 72, 153, 0.03)'
      ][Math.floor(Math.random() * 4)]
    }));

    // Solar System Planets Data
    const planets = [
      { name: 'Mercury', radius: 4, distance: 70, speed: 0.025, color: '#a1a1aa', angle: Math.random() * Math.PI * 2 },
      { name: 'Venus', radius: 7, distance: 110, speed: 0.018, color: '#fde047', angle: Math.random() * Math.PI * 2 },
      { name: 'Earth', radius: 8, distance: 160, speed: 0.012, color: '#38bdf8', hasMoon: true, angle: Math.random() * Math.PI * 2 },
      { name: 'Mars', radius: 6, distance: 210, speed: 0.009, color: '#f87171', angle: Math.random() * Math.PI * 2 },
      { name: 'Dream Orb Hypnos', radius: 10, distance: 260, speed: 0.007, color: '#c084fc', glow: true, angle: Math.random() * Math.PI * 2 },
      { name: 'Jupiter', radius: 16, distance: 330, speed: 0.005, color: '#fb923c', angle: Math.random() * Math.PI * 2 },
      { name: 'Saturn', radius: 14, distance: 410, speed: 0.003, color: '#fef08a', hasRings: true, angle: Math.random() * Math.PI * 2 },
      { name: 'Uranus', radius: 10, distance: 480, speed: 0.002, color: '#22d3ee', angle: Math.random() * Math.PI * 2 },
      { name: 'Neptune', radius: 9, distance: 540, speed: 0.0015, color: '#818cf8', angle: Math.random() * Math.PI * 2 }
    ];

    let angleGlobal = 0;

    const render = () => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mouseOffset = {
        x: (mouse.x - width / 2) * 0.08,
        y: (mouse.y - height / 2) * 0.08
      };

      ctx.clearRect(0, 0, width, height);

      // Deep space gradient
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.8);
      bgGrad.addColorStop(0, '#090d16');
      bgGrad.addColorStop(0.5, '#030712');
      bgGrad.addColorStop(1, '#02040a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Nebulae
      nebulae.forEach((neb) => {
        const cx = width / 2 + neb.x + mouseOffset.x * 0.3;
        const cy = height / 2 + neb.y + mouseOffset.y * 0.3;
        const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, neb.radius);
        grad.addColorStop(0, neb.color);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, neb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render 3D Stars
      stars.forEach((star) => {
        star.z -= 0.2;
        if (star.z <= 0) star.z = width;

        const k = 300 / star.z;
        const px = star.x * k + width / 2 + mouseOffset.x * (1 - star.z / width);
        const py = star.y * k + height / 2 + mouseOffset.y * (1 - star.z / width);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          star.alpha += star.pulseSpeed;
          const currentAlpha = Math.abs(Math.sin(star.alpha));
          const size = Math.max(0.5, star.size * k * 0.5);

          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.8;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();

          // Subtle star flare on larger stars
          if (size > 1.8) {
            ctx.strokeStyle = star.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(px - size * 2, py);
            ctx.lineTo(px + size * 2, py);
            ctx.moveTo(px, py - size * 2);
            ctx.lineTo(px, py + size * 2);
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1.0;

      // Solar System Center Coordinates
      const sunX = width / 2 + mouseOffset.x;
      const sunY = height / 2 + mouseOffset.y;

      // Draw Orbit Lines
      planets.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(sunX, sunY, p.distance, p.distance * 0.4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw Central Sun / Consciousness Core
      const sunGlow = ctx.createRadialGradient(sunX, sunY, 5, sunX, sunY, 80);
      sunGlow.addColorStop(0, '#ffffff');
      sunGlow.addColorStop(0.2, '#fef08a');
      sunGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.5)');
      sunGlow.addColorStop(0.8, 'rgba(99, 102, 241, 0.15)');
      sunGlow.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 80, 0, Math.PI * 2);
      ctx.fill();

      // Core Solid Sun
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(sunX, sunY, 18, 0, Math.PI * 2);
      ctx.fill();

      // Render Orbiting Planets
      angleGlobal += 0.005;
      planets.forEach((p) => {
        p.angle += p.speed;
        const px = sunX + Math.cos(p.angle) * p.distance;
        const py = sunY + Math.sin(p.angle) * p.distance * 0.4;

        // Planet shadow/glow
        if (p.glow) {
          const glowGrad = ctx.createRadialGradient(px, py, 1, px, py, p.radius * 2.5);
          glowGrad.addColorStop(0, p.color);
          glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(px, py, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main Body
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Saturn Rings
        if (p.hasRings) {
          ctx.beginPath();
          ctx.ellipse(px, py, p.radius * 2.2, p.radius * 0.7, 0.3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(254, 240, 138, 0.6)';
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // Earth Moon
        if (p.hasMoon) {
          const moonAngle = angleGlobal * 4;
          const mx = px + Math.cos(moonAngle) * 16;
          const my = py + Math.sin(moonAngle) * 8;
          ctx.fillStyle = '#e2e8f0';
          ctx.beginPath();
          ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}

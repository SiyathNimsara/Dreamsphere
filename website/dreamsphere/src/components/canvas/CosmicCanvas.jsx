import React, { useEffect, useRef } from 'react';

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

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

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

    const planets = [
      { radius: 4, distance: 70, speed: 0.025, color: '#a1a1aa', angle: Math.random() * Math.PI * 2 },
      { radius: 7, distance: 110, speed: 0.018, color: '#fde047', angle: Math.random() * Math.PI * 2 },
      { radius: 8, distance: 160, speed: 0.012, color: '#38bdf8', hasMoon: true, angle: Math.random() * Math.PI * 2 },
      { radius: 6, distance: 210, speed: 0.009, color: '#f87171', angle: Math.random() * Math.PI * 2 },
      { radius: 10, distance: 260, speed: 0.007, color: '#c084fc', glow: true, angle: Math.random() * Math.PI * 2 },
      { radius: 16, distance: 330, speed: 0.005, color: '#fb923c', angle: Math.random() * Math.PI * 2 },
      { radius: 14, distance: 410, speed: 0.003, color: '#fef08a', hasRings: true, angle: Math.random() * Math.PI * 2 },
      { radius: 10, distance: 480, speed: 0.002, color: '#22d3ee', angle: Math.random() * Math.PI * 2 }
    ];

    let angleGlobal = 0;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mouseOffset = {
        x: (mouse.x - width / 2) * 0.08,
        y: (mouse.y - height / 2) * 0.08
      };

      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.8);
      bgGrad.addColorStop(0, '#090d16');
      bgGrad.addColorStop(0.5, '#030712');
      bgGrad.addColorStop(1, '#02040a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

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
        }
      });
      ctx.globalAlpha = 1.0;

      const sunX = width / 2 + mouseOffset.x;
      const sunY = height / 2 + mouseOffset.y;

      planets.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(sunX, sunY, p.distance, p.distance * 0.4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const sunGlow = ctx.createRadialGradient(sunX, sunY, 5, sunX, sunY, 70);
      sunGlow.addColorStop(0, '#ffffff');
      sunGlow.addColorStop(0.3, '#fef08a');
      sunGlow.addColorStop(0.6, 'rgba(168, 85, 247, 0.4)');
      sunGlow.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 70, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(sunX, sunY, 16, 0, Math.PI * 2);
      ctx.fill();

      angleGlobal += 0.005;
      planets.forEach((p) => {
        p.angle += p.speed;
        const px = sunX + Math.cos(p.angle) * p.distance;
        const py = sunY + Math.sin(p.angle) * p.distance * 0.4;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.hasRings) {
          ctx.beginPath();
          ctx.ellipse(px, py, p.radius * 2.2, p.radius * 0.7, 0.3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(254, 240, 138, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();
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

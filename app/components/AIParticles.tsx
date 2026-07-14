"use client";

import { useEffect, useRef } from "react";

export default function AIParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const density = 22000; // Screen area per particle
      const count = Math.min(65, Math.floor((canvas.width * canvas.height) / density));
      
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25, // Extremely slow velocity for subtlety
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 0.8,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Initial setup
    resizeCanvas();

    // Loop
    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      
      // Dynamic colors based on theme
      const particleColor = isDark ? "rgba(250, 250, 250, 0.12)" : "rgba(9, 9, 11, 0.1)";
      const connectionColor = isDark ? "rgba(250, 250, 250, 0.05)" : "rgba(9, 9, 11, 0.04)";
      const mouseConnectionColor = isDark ? "rgba(6, 182, 212, 0.15)" : "rgba(59, 130, 246, 0.12)";
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.x + p.vx < 0 || p.x + p.vx > canvas.width ? (p.vx = -p.vx, p.vx) : p.vx;
        p.y += p.y + p.vy < 0 || p.y + p.vy > canvas.height ? (p.vy = -p.vy, p.vy) : p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      // Draw connection lines (neural net structure)
      const maxDistance = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dist = Math.hypot(pi.x - pj.x, pi.y - pj.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.8;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = connectionColor.replace(/[\d.]+\)$/, `${alpha})`);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw lines to mouse pointer
      const mouse = mouseRef.current;
      if (mouse.x !== -1000) {
        const mouseMaxDistance = 140;
        particles.forEach((p) => {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < mouseMaxDistance) {
            const alpha = (1 - dist / mouseMaxDistance) * 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = mouseConnectionColor.replace(/[\d.]+\)$/, `${alpha})`);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none transition-opacity duration-500"
      style={{ mixBlendMode: "normal" }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  createdAt: number;
  duration: number;
  strength: number;
};

export default function RippleBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const ripples: Ripple[] = [];
    let raf = 0;
    let ambientTimer = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (ts: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const progress = (ts - r.createdAt) / r.duration;
        if (progress >= 1) { ripples.splice(i, 1); continue; }

        const fade = Math.sin(progress * Math.PI);
        const maxR = Math.max(w, h) * 0.55;
        const radius = 10 + progress * maxR;
        const alpha = Math.min(0.42, fade * r.strength);

        const grd = ctx.createRadialGradient(r.x, r.y, radius * 0.4, r.x, r.y, radius);
        grd.addColorStop(0,    "rgba(255,255,255,0)");
        grd.addColorStop(0.55, `rgba(255,255,255,${alpha * 0.45})`);
        grd.addColorStop(0.74, `rgba(249,115,22,${alpha * 0.20})`);
        grd.addColorStop(0.88, `rgba(248,184,78,${alpha * 0.18})`);
        grd.addColorStop(1,    "rgba(255,255,255,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(249,115,22,${alpha * 0.18})`;
        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.45})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(248,184,78,${alpha * 0.18})`;
        ctx.strokeStyle = `rgba(248,184,78,${alpha * 0.24})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(4, radius * 0.62), 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.16})`;
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(2, 7 * fade), 0, Math.PI * 2);
        ctx.fill();
      }
      raf = ripples.length > 0 ? requestAnimationFrame(draw) : 0;
    };

    const ensureAnim = () => { if (!raf) raf = requestAnimationFrame(draw); };

    const addRipple = (x: number, y: number, strength: number) => {
      if (w < 20 || h < 20) return;
      ripples.push({ x, y, createdAt: performance.now(), duration: 2200, strength });
      if (ripples.length > 6) ripples.shift();
      ensureAnim();
    };

    const fromClient = (cx: number, cy: number, strength: number) => {
      const rect = container.getBoundingClientRect();
      addRipple(cx - rect.left, cy - rect.top, strength);
    };

    const onPointerDown = (e: PointerEvent) => fromClient(e.clientX, e.clientY, 0.42);

    const scheduleAmbient = () => {
      clearTimeout(ambientTimer);
      ambientTimer = window.setTimeout(() => {
        if (!document.hidden && w > 0)
          addRipple(w * (0.15 + Math.random() * 0.7), h * (0.15 + Math.random() * 0.7), 0.08);
        scheduleAmbient();
      }, 4000 + Math.random() * 3000);
    };

    resize();
    setTimeout(() => addRipple(w * 0.5, h * 0.5, 0.18), 800);
    scheduleAmbient();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      clearTimeout(ambientTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

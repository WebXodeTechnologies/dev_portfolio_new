"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CINEMATIC_PHASES = [
  {
    phase: "PHASE 01 // KERNEL_INIT",
    label: "Loading Core Dependencies & Next.js App Router...",
  },
  {
    phase: "PHASE 02 // SHADER_PIPELINE",
    label: "Compiling WebGL Context & Particle Buffers...",
  },
  {
    phase: "PHASE 03 // CLOUD_INFRA",
    label: "Syncing MERN Architecture & AWS Edge Nodes...",
  },
  {
    phase: "PHASE 04 // LAUNCH_SEQUENCE",
    label: "Welcome, Akash S M. Entering Code Universe...",
  },
];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-end cinematic starfield & warp grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
    }> = [];

    const palette = ["#00f0ff", "#7000ff", "#ff007f", "#ffffff"];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: (Math.random() - 0.5) * w * 2,
        y: (Math.random() - 0.5) * h * 2,
        z: Math.random() * w,
        size: Math.random() * 1.8 + 0.4,
        color: palette[Math.floor(Math.random() * palette.length)],
      });
    }

    const render = () => {
      ctx.fillStyle = "rgba(6, 6, 10, 0.25)";
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      particles.forEach((p) => {
        p.z -= isLaunched ? 35 : 1.5;
        if (p.z <= 0) p.z = w;

        const k = 300 / p.z;
        const px = p.x * k + cx;
        const py = p.y * k + cy;

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          const radius = Math.max(0, p.size * k);
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = isLaunched ? 25 : 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isLaunched]);

  // Controlled cinematic pacing (takes ~4.5 seconds to fully appreciate)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLaunched(true);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 1000);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 4) + 2;
        const clamped = Math.min(next, 100);

        const currentPhase = Math.min(
          CINEMATIC_PHASES.length - 1,
          Math.floor((clamped / 100) * CINEMATIC_PHASES.length),
        );
        setPhaseIndex(currentPhase);

        return clamped;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#06060a] text-[#ededed] px-8 md:px-24 py-12 select-none overflow-hidden"
        >
          {/* Canvas Starfield / Warp Layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
          />

          {/* Top Header Metadata */}
          <div className="relative z-10 flex justify-between items-center font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-medium">
                {CINEMATIC_PHASES[phaseIndex].phase}
              </span>
            </div>
            <span className="text-neutral-500 hidden sm:inline">
              AKASH S M // STUDIO ENVIRONMENT
            </span>
          </div>

          {/* Center Cinematic Typography & Ring */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-8 text-center max-w-3xl mx-auto">
            {/* Holographic Glowing Core */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 opacity-40 blur-2xl animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-dashed border-pink-500/50 animate-spin-reverse" />

              <div className="relative z-10 font-mono text-lg font-light tracking-tighter text-cyan-200">
                {progress}%
              </div>
            </div>

            {/* Narrative Stage Text */}
            <div className="space-y-3 min-h-[100px]">
              <motion.h1
                key={phaseIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight"
              >
                {CINEMATIC_PHASES[phaseIndex].label}
              </motion.h1>
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                Full-Stack Developer & Cloud Architecture
              </p>
            </div>
          </div>

          {/* Bottom Progress Bar & Large Percentage */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/10 pt-6">
            <div className="space-y-2 w-full md:w-96">
              <div className="flex justify-between text-xs font-mono text-neutral-400 uppercase">
                <span>System Sync Progress</span>
                <span className="text-cyan-400 font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
            </div>

            <div className="font-mono text-6xl md:text-8xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-pink-400 leading-none">
              {progress.toString().padStart(3, "0")}
            </div>
          </div>

          {/* Dual Shutter Cinematic Exit Doors */}
          <motion.div
            initial={{ y: "0%" }}
            animate={isLaunched ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#06060a] border-b border-cyan-500/20 z-20 pointer-events-none"
          />
          <motion.div
            initial={{ y: "0%" }}
            animate={isLaunched ? { y: "100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#06060a] border-t border-pink-500/20 z-20 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

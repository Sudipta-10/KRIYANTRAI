"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";

type GrainColor = [number, number, number];

interface Grain {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  opacity: number;
  speed: number;
  color: GrainColor;
}

const GRAIN_COUNT = 300;
const ORBIT_STRENGTH = 0.32;
const ORBIT_RADIUS = 180;
const SMOOTHING = 0.08;
// Bigger base grain sizes so they’re more visible
const GRAIN_SIZE_MIN = 1.2;
const GRAIN_SIZE_MAX = 2.0;

// Mixed color palette for bubbles / grains
const GRAIN_COLORS: GrainColor[] = [
  [37, 99, 235], // blue
  [147, 51, 234], // purple
  [236, 72, 153], // pink
  [56, 189, 248], // cyan
];

export default function GranularCursorEffect({
  cursorRef,
}: {
  cursorRef: React.RefObject<{ x: number; y: number; active: boolean }>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const grainsRef = useRef<Grain[]>([]);
  const rafRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  const initGrains = useCallback((width: number, height: number) => {
    const grains: Grain[] = [];
    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.hypot(width, height) / 2;

    for (let i = 0; i < GRAIN_COUNT; i++) {
      const baseRadius =
        GRAIN_SIZE_MIN +
        Math.random() * (GRAIN_SIZE_MAX - GRAIN_SIZE_MIN);
      const isBubble = Math.random() < 0.3; // some larger “bubble” grains
      const color =
        GRAIN_COLORS[Math.floor(Math.random() * GRAIN_COLORS.length)];

      // Start with a random position
      let x = Math.random() * width;
      let y = Math.random() * height;

      // Subtly bias more grains toward the outer area, but keep it abstract/scattered
      const vx = x - cx;
      const vy = y - cy;
      const dist = Math.sqrt(vx * vx + vy * vy);

      if (dist > 0 && maxRadius > 0) {
        const norm = dist / maxRadius;
        // exponent < 1 => slightly pushes more points outward without visible rings
        const bias = Math.pow(norm, 0.6);
        const scale = 0.6 + 0.7 * bias;
        x = cx + (vx / dist) * (dist * scale);
        y = cy + (vy / dist) * (dist * scale);

        // add a bit of random jitter so it stays organic
        x += (Math.random() - 0.5) * 30;
        y += (Math.random() - 0.5) * 30;
      }

      grains.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: isBubble ? baseRadius * 2.4 : baseRadius,
        opacity: 0.25 + Math.random() * 0.35,
        speed: 0.6 + Math.random() * 0.8,
        color,
      });
    }

    grainsRef.current = grains;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !cursorRef?.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const { x: mx, y: my, active } = cursorRef.current;
    const useMouse = active ? { mx, my } : { mx: -10000, my: -10000 };

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    if (grainsRef.current.length === 0) initGrains(width, height);

    for (const g of grainsRef.current) {
      const dx = useMouse.mx - g.x;
      const dy = useMouse.my - g.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

      const influence = Math.max(0, 1 - dist / ORBIT_RADIUS);
      const tangentX = -dy / dist;
      const tangentY = dx / dist;
      const force = influence * ORBIT_STRENGTH * g.speed;

      const targetX = g.baseX + tangentX * force * 80;
      const targetY = g.baseY + tangentY * force * 80;

      g.x += (targetX - g.x) * SMOOTHING;
      g.y += (targetY - g.y) * SMOOTHING;

      ctx.beginPath();
      ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${g.color[0]}, ${g.color[1]}, ${g.color[2]}, ${g.opacity})`;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [initGrains, cursorRef]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;

    initGrains(container.clientWidth, container.clientHeight);
    draw();

    const onResize = () => {
      if (containerRef.current) {
        initGrains(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mounted, initGrains, draw]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );
}

'use client';
import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { motion, AnimatePresence } from "framer-motion"; 
import PromptCard from "./PromptCard";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  textStyle?: React.CSSProperties;
  textClassName?: string;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 16,
  gap = 32,
  baseColor = '#5227FF',
  activeColor = '#5227FF',
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = '',
  style,
  text = '',
  textStyle,
  textClassName = ''
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === 'undefined' || !window.Path2D) return null;

    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const extraX = width - gridW;
    const extraY = height - gridH;

    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId: number;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = baseColor;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.globalAlpha = 0.04;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();
    let ro: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(buildGrid);
      wrapperRef.current && ro.observe(wrapperRef.current);
    } else {
      (window as Window).addEventListener('resize', buildGrid);
    }
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current!.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: 'elastic.out(1,0.75)'
              });
              dot._inertiaApplied = false;
            }
          });
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: 'elastic.out(1,0.75)'
              });
              dot._inertiaApplied = false;
            }
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener('mousemove', throttledMove, { passive: true });
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', throttledMove);
      window.removeEventListener('click', onClick);
    };
  }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

  const topLines = [
    "Kindling",
    "Keeping",
    "Krafting",
    "Kultivating",
    "Konnecting",
  ];
  const bottomLines = [
    "Intelligence Through Data",
    "Innovation Over a Decade",
    "The Power of AI",
    "Smarter Learning with ML",
    "The Future",
  ];

  const [index, setIndex] = useState(0);
  const [wordWidth, setWordWidth] = useState(0);
  const wordRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile for responsive positioning
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Measure word width when index changes
  useEffect(() => {
    if (wordRefs.current[index]) {
      const width = wordRefs.current[index].offsetWidth + 100;
      setWordWidth(width);
    }
  }, [index]);

  // Only forward animation (top → bottom)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % topLines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const letters = topLines[index].split("");
  const letterDuration = 2.0 / letters.length;

  return (
    <section className={`p-4 flex items-center justify-center h-full w-full relative ${className}`} style={style}>
      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
        {/* Text overlay positioned in the center */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 max-w-xl px-4 z-10">  
            <div className="max-w-[1200px] flex flex-col items-center gap-0 relative w-full overflow-hidden ">
              <div className="relative flex items-center justify-center w-full h-[130px] ml-60 overflow-hidden">
                <div className="min-h-screen flex items-center justify-center ">
                  {/* SVG Icon with animation */}

                  <motion.div
                    className="relative z-70"
                    initial={{ x: 0 }}
                    animate={{ x: wordWidth }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                    }}
                    key={`${index}-${wordWidth}`}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="75"
                      viewBox="0 0 74 75"
                      fill="none"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        ease: "linear",
                      }}
                      style={{
                        transformOrigin: "center",
                        transformBox: "fill-box",
                      }}
                    >
                      <path
                        d="M56.627 68.6263C50.9369 72.2107 44.2064 74.2838 36.9935 74.2838C16.5626 74.2838 0 57.6548 0 37.1419C0 25.1267 5.68234 14.4438 14.4962 7.6549L56.627 68.6263Z"
                        fill="url(#paint0_linear_949_264)"
                      />
                      <path
                        d="M73.9005 39.6901C73.233 49.5818 68.7086 58.4109 61.8243 64.6735L43.9754 38.8426L73.9005 39.6901Z"
                        fill="url(#paint1_linear_949_264)"
                      />
                      <path
                        d="M53.6983 3.99413C64.6125 9.54956 72.4128 20.3784 73.7741 33.1419L43.3589 32.2805L53.6983 3.99413Z"
                        fill="url(#paint2_linear_949_264)"
                      />
                      <path
                        d="M36.9935 0C40.6974 0 44.274 0.547052 47.648 1.56415L37.4654 29.4212L19.9986 4.14329C25.0875 1.49599 30.8664 0 36.9935 0Z"
                        fill="url(#paint3_linear_949_264)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_949_264"
                          x1="-3.23924e-07"
                          y1="36.7322"
                          x2="89.0029"
                          y2="87.7271"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#054FF3" />
                          <stop offset="0.423077" stopColor="#388EFF" />
                          <stop offset="1" stopColor="#1E73F3" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_949_264"
                          x1="-3.23924e-07"
                          y1="36.7322"
                          x2="89.0029"
                          y2="87.7271"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#054FF3" />
                          <stop offset="0.423077" stopColor="#388EFF" />
                          <stop offset="1" stopColor="#1E73F3" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_949_264"
                          x1="-3.23924e-07"
                          y1="36.7322"
                          x2="89.0029"
                          y2="87.7271"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#054FF3" />
                          <stop offset="0.423077" stopColor="#388EFF" />
                          <stop offset="1" stopColor="#1E73F3" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_949_264"
                          x1="-3.23924e-07"
                          y1="36.7322"
                          x2="89.0029"
                          y2="87.7271"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#054FF3" />
                          <stop offset="0.423077" stopColor="#388EFF" />
                          <stop offset="1" stopColor="#1E73F3" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </motion.div>

                  <div
                    className="relative min-w-[340px] sm:min-w-[420px] md:min-w-[600px] overflow-visible flex items-center"
                    style={{ overflow: "visible", whiteSpace: "nowrap" }}
                  >
                    {/* Hidden span to measure word width */}
                    <span
                      ref={(el) => (wordRefs.current[index] = el)}
                      className="absolute font-[400] text-[clamp(40px,5vw,72px)] tracking-tight leading-[-1.651px] opacity-0 pointer-events-none"
                      style={{
                        fontFamily: "Bw Gradual DEMO",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {topLines[index]}
                    </span>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="flex"
                      >
                        {letters.map((letter, letterIndex) => (
                          <motion.span
                            key={letterIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.1,
                              delay: 0.4 + letterIndex * letterDuration,
                            }}
                            className="font-[400] text-[clamp(40px,5vw,72px)] z-0 tracking-tight leading-[-1.651px] bg-clip-text text-transparent"
                            style={{
                              background:
                                "linear-gradient(90deg, #0550F1 0%, #0455E7 100%)",
                              WebkitBackgroundClip: "text",
                              fontFamily: "Bw Gradual DEMO",
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="relative h-[70px] w-[600px] border-r-amber-100 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 60, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="font-bold text-black tracking-[-0.04em]  text-[45px] text-center whitespace-nowrap leading-tight"
                    style={{
                      fontFamily: "Bw Gradual DEMO",
                      whiteSpace: "nowrap",
                      overflow: "visible",
                    }}
                  >
                    {bottomLines[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="ml-80 mt-[-30]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="248"
                height="24"
                viewBox="0 0 257 33"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M4.50085 28.4996C52.6287 19.1244 169.608 1.29854 252.501 4.99728"
                  stroke="url(#paint0_linear_0_657)"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_657"
                    x1="4.50085"
                    y1="16.4996"
                    x2="252.501"
                    y2="16.4996"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0367FC" />
                    <stop offset="0.275" stopColor="#3282FA" />
                    <stop offset="0.635" stopColor="#DAF9A7" />
                    <stop offset="1" stopColor="#C9FD74" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="text-center text-[#202020] font-[SF Pro] flex flex-col space-y-1">
              <h2 className="text-[22px] font-bold m-[-5px]">
                Got an idea? Let's bring it to life
              </h2>
              <p className="text-[20px] font-normal m-0">
                through tailored solutions or ready-to-launch MVPs.
              </p>
              <div className="mt-7">
                <PromptCard />
              </div>
            </div>
          </div>

          {/* <HomeSlider /> */}
        </div>
      </div>
    </section>
  );
};

export default DotGrid;
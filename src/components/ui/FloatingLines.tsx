"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PromptCard from "./PromptCard";
import HomeSlider from "../Slider/HomeSlider";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  Vector3,
  Vector2,
  Clock,
} from "three";
import Image from "next/image";

const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  
  // Adjusted line width for the colored lines
  return 0.02 / max(abs(m) + 0.01, 1e-3);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);
  vec3 b = vec3(0.0);
  float totalWeight = 0.0;

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      
      float w = wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
      
      col += lineCol * w;
      totalWeight += w;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      
      float w = wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
      
      col += lineCol * w;
      totalWeight += w;
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      
      float w = wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
      
      col += lineCol * w;
      totalWeight += w;
    }
  }

  float alpha = min(1.0, totalWeight)* 0.7;
  
  fragColor = vec4(col, alpha);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;

const MAX_GRADIENT_STOPS = 8;

type WavePosition = {
  x: number;
  y: number;
  rotate: number;
};

type FloatingLinesProps = {
  linesGradient?: string[];
  enabledWaves?: Array<"top" | "middle" | "bottom">;
  lineCount?: number | number[];
  lineDistance?: number | number[];
  topWavePosition?: WavePosition;
  middleWavePosition?: WavePosition;
  bottomWavePosition?: WavePosition;
  animationSpeed?: number;
  interactive?: boolean;
  bendRadius?: number;
  bendStrength?: number;
  mouseDamping?: number;
  parallax?: boolean;
  parallaxStrength?: number;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
  centerText?: string;
};

function hexToVec3(hex: string): Vector3 {
  let value = hex.trim();

  if (value.startsWith("#")) {
    value = value.slice(1);
  }

  let r = 255;
  let g = 255;
  let b = 255;

  if (value.length === 3) {
    r = parseInt(value[0] + value[0], 16);
    g = parseInt(value[1] + value[1], 16);
    b = parseInt(value[2] + value[2], 16);
  } else if (value.length === 6) {
    r = parseInt(value.slice(0, 2), 16);
    g = parseInt(value.slice(2, 4), 16);
    b = parseInt(value.slice(4, 6), 16);
  }

  return new Vector3(r / 255, g / 255, b / 255);
}

export default function FloatingLines({
  linesGradient = ["#C9FD74", "#3282FA"],
  enabledWaves = ["top", "middle", "bottom"],
  lineCount = [6],
  lineDistance = [5],
  topWavePosition,
  middleWavePosition,
  bottomWavePosition = { x: 2.0, y: -1.3, rotate: -1 },
  animationSpeed = 2,
  interactive = true,
  bendRadius = 5.0,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
  mixBlendMode = "normal",
  centerText = "Centered Text",
}: FloatingLinesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetMouseRef = useRef<Vector2>(new Vector2(-1000, -1000));
  const currentMouseRef = useRef<Vector2>(new Vector2(-1000, -1000));
  const targetInfluenceRef = useRef<number>(0);
  const currentInfluenceRef = useRef<number>(0);
  const targetParallaxRef = useRef<Vector2>(new Vector2(0, 0));
  const currentParallaxRef = useRef<Vector2>(new Vector2(0, 0));

  const getLineCount = (waveType: "top" | "middle" | "bottom"): number => {
    if (typeof lineCount === "number") return lineCount;
    if (!enabledWaves.includes(waveType)) return 0;
    const index = enabledWaves.indexOf(waveType);
    return lineCount[index] ?? 6;
  };

  const getLineDistance = (waveType: "top" | "middle" | "bottom"): number => {
    if (typeof lineDistance === "number") return lineDistance;
    if (!enabledWaves.includes(waveType)) return 0.1;
    const index = enabledWaves.indexOf(waveType);
    return lineDistance[index] ?? 0.1;
  };

  const topLineCount = enabledWaves.includes("top") ? getLineCount("top") : 0;
  const middleLineCount = enabledWaves.includes("middle")
    ? getLineCount("middle")
    : 0;
  const bottomLineCount = enabledWaves.includes("bottom")
    ? getLineCount("bottom")
    : 0;

  const topLineDistance = enabledWaves.includes("top")
    ? getLineDistance("top") * 0.01
    : 0.01;
  const middleLineDistance = enabledWaves.includes("middle")
    ? getLineDistance("middle") * 0.01
    : 0.01;
  const bottomLineDistance = enabledWaves.includes("bottom")
    ? getLineDistance("bottom") * 0.01
    : 0.01;

  const [index, setIndex] = useState(0);
  const [wordWidth, setWordWidth] = useState(0);
  const wordRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();

    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });

    // Transparent clear color
    renderer.setClearColor(0x000000, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    containerRef.current.appendChild(renderer.domElement);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new Vector3(1, 1, 1) },
      animationSpeed: { value: animationSpeed },

      enableTop: { value: enabledWaves.includes("top") },
      enableMiddle: { value: enabledWaves.includes("middle") },
      enableBottom: { value: enabledWaves.includes("bottom") },

      topLineCount: { value: topLineCount },
      middleLineCount: { value: middleLineCount },
      bottomLineCount: { value: bottomLineCount },

      topLineDistance: { value: topLineDistance },
      middleLineDistance: { value: middleLineDistance },
      bottomLineDistance: { value: bottomLineDistance },

      topWavePosition: {
        value: new Vector3(
          topWavePosition?.x ?? 10.0,
          topWavePosition?.y ?? 0.5,
          topWavePosition?.rotate ?? -0.4
        ),
      },
      middleWavePosition: {
        value: new Vector3(
          middleWavePosition?.x ?? 5.0,
          middleWavePosition?.y ?? 0.0,
          middleWavePosition?.rotate ?? 0.2
        ),
      },
      bottomWavePosition: {
        value: new Vector3(
          bottomWavePosition?.x ?? 2.0,
          bottomWavePosition?.y ?? -0.7,
          bottomWavePosition?.rotate ?? 0.4
        ),
      },

      iMouse: { value: new Vector2(-1000, -1000) },
      interactive: { value: interactive },
      bendRadius: { value: bendRadius },
      bendStrength: { value: bendStrength },
      bendInfluence: { value: 0 },

      parallax: { value: parallax },
      parallaxStrength: { value: parallaxStrength },
      parallaxOffset: { value: new Vector2(0, 0) },

      lineGradient: {
        value: Array.from(
          { length: MAX_GRADIENT_STOPS },
          () => new Vector3(1, 1, 1)
        ),
      },
      lineGradientCount: { value: 0 },
    };

    if (linesGradient && linesGradient.length > 0) {
      const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
      //   uniforms.lineGradientCount.value = stops.length;
      uniforms.lineGradientCount.value = 1;

      stops.forEach((hex, i) => {
        const color = hexToVec3(hex);
        uniforms.lineGradient.value[i].set(color.x, color.y, color.z);
      });
    }

    const material = new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      //   transparent: true,
    });

    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const clock = new Clock();

    const setSize = () => {
      const el = containerRef.current!;
      const width = el.clientWidth || 1;
      const height = el.clientHeight || 1;

      renderer.setSize(width, height, false);

      const canvasWidth = renderer.domElement.width;
      const canvasHeight = renderer.domElement.height;
      uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);
    };

    setSize();

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(setSize)
        : null;

    if (ro && containerRef.current) {
      ro.observe(containerRef.current);
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const dpr = renderer.getPixelRatio();

      targetMouseRef.current.set(x * dpr, (rect.height - y) * dpr);
      targetInfluenceRef.current = 1.0;

      if (parallax) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = (x - centerX) / rect.width;
        const offsetY = -(y - centerY) / rect.height;
        targetParallaxRef.current.set(
          offsetX * parallaxStrength,
          offsetY * parallaxStrength
        );
      }
    };

    const handlePointerLeave = () => {
      targetInfluenceRef.current = 0.0;
    };

    if (interactive) {
      renderer.domElement.addEventListener("pointermove", handlePointerMove);
      renderer.domElement.addEventListener("pointerleave", handlePointerLeave);
    }

    let raf = 0;
    const renderLoop = () => {
      uniforms.iTime.value = clock.getElapsedTime();

      if (interactive) {
        currentMouseRef.current.lerp(targetMouseRef.current, mouseDamping);
        uniforms.iMouse.value.copy(currentMouseRef.current);

        currentInfluenceRef.current +=
          (targetInfluenceRef.current - currentInfluenceRef.current) *
          mouseDamping;
        uniforms.bendInfluence.value = currentInfluenceRef.current;
      }

      if (parallax) {
        currentParallaxRef.current.lerp(
          targetParallaxRef.current,
          mouseDamping
        );
        uniforms.parallaxOffset.value.copy(currentParallaxRef.current);
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(raf);
      if (ro && containerRef.current) {
        ro.disconnect();
      }

      if (interactive) {
        renderer.domElement.removeEventListener(
          "pointermove",
          handlePointerMove
        );
        renderer.domElement.removeEventListener(
          "pointerleave",
          handlePointerLeave
        );
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [
    linesGradient,
    enabledWaves,
    lineCount,
    lineDistance,
    topWavePosition,
    middleWavePosition,
    bottomWavePosition,
    animationSpeed,
    interactive,
    bendRadius,
    bendStrength,
    mouseDamping,
    parallax,
    parallaxStrength,
  ]);

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
      const width = wordRefs.current[index].offsetWidth + 90;
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
    <div
      ref={containerRef}
      className="relative w-full  h-full overflow-hidden "
      style={{
        // CHANGED: Specific background color requested
        background: "rgba(249, 255, 255, 0.5)",
        mixBlendMode: mixBlendMode,
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        {/* <div className="absolute left-0">
          <Image
            src="/images/herosectionicons/CenterGlow.png"
            alt="sideshade"
            width={120}
            height={60}
          />
        </div> */}
         <div className="absolute -left-10 top-0 h-130 w-80 bg-[#2779FB] opacity-20 rounded-r-full blur-lg"></div>

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

            <div className="relative h-[70px]  border-r-amber-100 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 60, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
                  className="font-bold text-black text-center text-[43px]"
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
  );
}

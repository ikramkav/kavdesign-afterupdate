"use client";
import React, { useRef, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Types ---
interface LeftCardProps {
  id: string;
  type: "brand" | "problem" | "industry";
  title: string;
  subtitle?: string;
  content?: string;
  flag?: string;
}

interface ResultCardProps {
  id: string;
  title: string;
  content: string;
  isActive?: boolean;
}

interface TechItemProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  position: string;
}

// --- Data Configuration ---
const projectsData = [
  {
    id: "p1",
    leftSectionData: [
      {
        id: "l1",
        type: "brand",
        title: "Chemco",
        subtitle: "Established in 1984, trusted globally.",
      },
      {
        id: "l2",
        type: "problem",
        title: "Client Problem",
        content: "Medication tracking is slow and risky.",
      },
      {
        id: "l3",
        type: "industry",
        title: "Medical Industry",
        content:
          "With decades of experience, Chemco integrates advanced technology.",
      },
    ],
    resultsData: [
      {
        id: "r1",
        title: "Results",
        content: "Fully digital operations.",
      },
      {
        id: "r2",
        title: "Results",
        content: "Transparent collaboration.",
        isActive: true,
      },
      {
        id: "r3",
        title: "Results",
        content: "Error-free patient care.",
      },
    ],
  },
  {
    id: "p2",
    leftSectionData: [
      {
        id: "l1",
        type: "brand",
        title: "MediPlus",
        subtitle: "Innovating healthcare software.",
      },
      {
        id: "l2",
        type: "problem",
        title: "Client Problem",
        content: "Data scattered across systems.",
      },
      {
        id: "l3",
        type: "industry",
        title: "Health Tech",
        content: "Unified digital solutions.",
      },
    ],
    resultsData: [
      {
        id: "r1",
        title: "Results",
        content: "Centralized platform.",
      },
      {
        id: "r2",
        title: "Results",
        content: "Faster decision making.",
        isActive: true,
      },
      {
        id: "r3",
        title: "Results",
        content: "Lower operational cost.",
      },
    ],
  },
];

const techStackData: TechItemProps[] = [
  {
    id: "t1",
    name: "CSS",
    icon: (
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
        CSS
      </div>
    ),
    position: "top-[10%] left-[50%] -translate-x-1/2",
  },
  {
    id: "t2",
    name: "JS",
    icon: (
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-xs">
        JS
      </div>
    ),
    position: "top-[25%] right-[15%]",
  },
  {
    id: "t3",
    name: "MySQL",
    icon: (
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-[8px]">
        MySQL
      </div>
    ),
    position: "bottom-[30%] right-[10%]",
  },
  {
    id: "t4",
    name: "HTML",
    icon: (
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
        HTML
      </div>
    ),
    position: "bottom-[10%] left-[50%] -translate-x-1/2",
  },
  {
    id: "t5",
    name: "Laravel",
    icon: (
      <div className="w-[42px] h-[42px] bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-[8px]">
        Laravel
      </div>
    ),
    position: "bottom-[25%] left-[15%]",
  },
  {
    id: "t6",
    name: "Stripe",
    icon: (
      <div className="w-[63px] h-[40px] bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
        Stripe
      </div>
    ),
    position: "top-[25%] left-[15%]",
  },
];

const containervarients = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftColumn = {
  hidden: {
    x: "30vw",
    opacity: 0,
  },
  visible: {
    x: ["30vw", "30vw", 0],
    opacity: 1,
    transition: {
      duration: 0.99,
      times: [0, 0.5, 0.99],
      ease: "easeInOut",
    },
  },
};

const centerColumn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring" as const,
      delay: 5.2,
      stiffness: 100,
    },
  },
};

const rightColumn = {
  hidden: { x: "50vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      delay: 6.2,
      damping: 12,
    },
  },
};

// --- Project Card Component ---
interface ProjectCardProps {
  leftSectionData: Array<{
    id: string;
    type: string;
    title: string;
    subtitle?: string;
    content?: string;
  }>;
  resultsData: Array<{
    id: string;
    title: string;
    content: string;
    isActive?: boolean;
  }>;
  index: number;
}

function ProjectCard({ leftSectionData, resultsData, index }: ProjectCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const ORBIT_RADIUS = 140;

  return (
    <div
      ref={container}
      className="card-container flex items-center justify-center min-h-screen sticky"
      style={{
        top: `calc(10vh + ${index * 25}px)`,
        zIndex: index + 1,
      }}
    >
      {/* Main Container Card */}
      <motion.div
        className="w-full max-w-[1232px] rounded-[40px] p-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Background gradient overlay */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)",
          }}
        />
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>

        <motion.div
          variants={containervarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
        >
          {/* --- LEFT COLUMN --- */}
          <motion.div className="lg:col-span-4 flex flex-col gap-6">
            {leftSectionData.map((item, idx) => (
              <div key={item.id}>
                {item.type === "brand" && (
                  <motion.div
                    initial={{
                      x: 400,
                      y: 150,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 2 + idx * 1,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-3 bg-[linear-gradient(111deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] p-5 rounded-[10px] hover:bg-white/30 w-[270px] h-[100px] backdrop-blur-[50px]"
                  >
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-black font-medium text-[18px]">
                          {item.title}
                        </p>
                      </div>
                      <p className="text-[#1E2F40] text-[11px] font-normal leading-[14px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                )}

                {item.type === "problem" && (
                  <motion.div
                    initial={{
                      x: 400,
                      y: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 2 + idx * 1,
                      ease: "easeInOut",
                    }}
                    className="bg-white/30 border border-white/50 shadow-lg w-[324px] h-[120px] rounded-xl p-4"
                  >
                    <div className="relative flex items-center mb-3">
                      <h3 className="absolute left-1/2 -translate-x-1/2 text-black text-[21.6px] font-medium text-center">
                        {item.title}
                      </h3>
                      <span className="ml-auto">
                        <AlertTriangle className="w-5 h-5 text-red-600 fill-red-100" />
                      </span>
                    </div>
                    <div className="rounded-[9.6px] w-[292.8px] text-center bg-[radial-gradient(134.67%_514.17%_at_50%_-290.17%,#C9FD74_0%,rgba(255,255,255,0)_100%)] p-3">
                      <p className="text-[#1E2F40] text-[19.2px] font-medium leading-[19.2px]">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}

                {item.type === "industry" && (
                  <motion.div
                    initial={{
                      x: 600,
                      y: -150,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 2 + idx * 1,
                      ease: "easeInOut",
                    }}
                    className="w-[270px] h-[100px] flex items-center gap-3 bg-[linear-gradient(111deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] px-6 rounded-[10px] hover:bg-white/30 backdrop-blur-[50px]"
                  >
                    <div>
                      <h3 className="text-[#000] text-center text-[18px] font-medium">
                        {item.title}
                      </h3>
                      <div className="flex">
                        <p className="text-[#1E2F40] text-start px-0 text-[12px] font-normal leading-[14px]">
                          {item.content}
                        </p>
                        <div className="h-10 w-10 bg-blue-500/80 rounded-lg flex items-end justify-end shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* --- CENTER COLUMN (Tech Stack) --- */}
          <motion.div
            variants={centerColumn}
            className="lg:col-span-4 relative h-[400px] flex items-center justify-center"
          >
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute left-0 top-1/2 w-14 h-[1px] bg-white/40 -translate-x-full" />
            <div className="hidden lg:block absolute right-0 top-1/2 w-12 h-[1px] bg-white/40 translate-x-full" />

            {/* Central Glass Box */}
            <div className="relative w-full h-full border rounded-[25px] bg-[linear-gradient(111deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] backdrop-blur-[50px] flex items-center justify-center overflow-hidden">
              {/* ORBIT ROTATION WRAPPER */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {techStackData.map((tech, techIndex) => {
                  const angle = (360 / techStackData.length) * techIndex;

                  return (
                    <div
                      key={tech.id}
                      className="absolute"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-${ORBIT_RADIUS}px)`,
                      }}
                    >
                      <motion.div>{tech.icon}</motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center Core Icon */}
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl w-28 h-28 flex items-center justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1264_394)">
                      <path
                        d="M52.692 58.7044C47.7993 61.7706 42.0119 63.544 35.8097 63.544C18.2417 63.544 4 49.3192 4 31.772C4 21.4939 8.88609 12.3555 16.4649 6.54817L52.692 58.7044Z"
                        fill="url(#paint0_linear_1264_394)"
                      />
                      <path
                        d="M67.545 33.9518C66.971 42.4134 63.0806 49.966 57.1611 55.3232L41.8133 33.2268L67.545 33.9518Z"
                        fill="url(#paint1_linear_1264_394)"
                      />
                      <path
                        d="M50.1737 3.41667C59.5586 8.1689 66.2658 17.4321 67.4363 28.3503L41.2831 27.6135L50.1737 3.41667Z"
                        fill="url(#paint2_linear_1264_394)"
                      />
                      <path
                        d="M35.8097 0C38.9946 0 42.07 0.46796 44.9712 1.33801L36.2154 25.1675L21.1963 3.54426C25.5721 1.2797 30.5412 0 35.8097 0Z"
                        fill="url(#paint3_linear_1264_394)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1264_394"
                        x="0"
                        y="0"
                        width="71.5449"
                        height="71.5439"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1264_394"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1264_394"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1264_394"
                        x1="4"
                        y1="31.4215"
                        x2="80.3343"
                        y2="75.3855"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#054FF3" />
                        <stop offset="0.423077" stopColor="#388EFF" />
                        <stop offset="1" stopColor="#1E73F3" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1264_394"
                        x1="4"
                        y1="31.4215"
                        x2="80.3343"
                        y2="75.3855"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#054FF3" />
                        <stop offset="0.423077" stopColor="#388EFF" />
                        <stop offset="1" stopColor="#1E73F3" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1264_394"
                        x1="4"
                        y1="31.4215"
                        x2="80.3343"
                        y2="75.3855"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#054FF3" />
                        <stop offset="0.423077" stopColor="#388EFF" />
                        <stop offset="1" stopColor="#1E73F3" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1264_394"
                        x1="4"
                        y1="31.4215"
                        x2="80.3343"
                        y2="75.3855"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#054FF3" />
                        <stop offset="0.423077" stopColor="#388EFF" />
                        <stop offset="1" stopColor="#1E73F3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN --- */}
          <motion.div
            variants={rightColumn}
            className="lg:col-span-4 flex flex-col justify-start gap-8 pl-4"
          >
            {resultsData.map((result) => (
              <div
                key={result.id}
                className={`
                   transition-all duration-300 p-6 rounded-2xl
                   ${
                     result.isActive
                       ? "rounded-[12.273px_11.782px_11.782px_11.782px] border border-white bg-[radial-gradient(134.67%_514.17%_at_50%_-290.17%,rgba(201,253,116,0.5)_0%,rgba(255,255,255,0)_100%)]"
                       : "w-[264px] h-[97px] rounded-[10px] bg-[linear-gradient(111deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] backdrop-blur-[50px]"
                   }
                `}
              >
                <h3 className="text-[#000] text-center text-[18.409px] font-semibold leading-[19.636px]">
                  {result.title}
                </h3>
                <div className="flex items-start gap-2 pt-1">
                  <span className="pt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_1264_1079)">
                        <ellipse
                          cx="6.13593"
                          cy="4.93888"
                          rx="3.68183"
                          ry="3.71134"
                          fill="url(#paint0_radial_1264_1079)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1264_1079"
                          x="-0.000449657"
                          y="0.000263453"
                          width="12.2724"
                          height="12.332"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1.22728" />
                          <feGaussianBlur stdDeviation="1.22728" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1264_1079"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1264_1079"
                            result="shape"
                          />
                        </filter>
                        <radialGradient
                          id="paint0_radial_1264_1079"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(4.9091 4.94845 -4.9091 4.94845 4.29501 3.08321)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#588CFF" />
                          <stop offset="1" stopColor="#032E8D" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </span>
                  <p
                    className={`
                      ${
                        result.isActive
                          ? "text-[17.182px] text-[#1E2F40] font-normal leading-[19.636px]"
                          : "text-[#1E2F40] text-[14px] font-normal leading-[16px]"
                      }
                    `}
                  >
                    {result.content}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- Main Component ---
export default function ProjectsCardsThree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".card-container");
      const totalCards = cards.length;

      // Create the stacking effect
      cards.forEach((card, i) => {
        // Set initial scale for stacking effect
        gsap.set(card, {
          scale: 1 - (totalCards - 1 - i) * 0.05,
        });

        // Create scroll trigger for each card
        ScrollTrigger.create({
          trigger: card,
          start: `top+=${i * 25} top+=10%`,
          end: `bottom top+=10%`,
          endTrigger: cardsContainerRef.current,
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            // Scale down as scroll progresses
            const scale = 1 - self.progress * 0.05;
            gsap.to(card, {
              scale: Math.max(scale, 0.9),
              duration: 0.1,
            });
          },
        });

        // Add slight y offset animation for depth
        if (i < totalCards - 1) {
          gsap.to(card, {
            y: () => -50,
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top+=10%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      {/* Header Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-white/70">Scroll down to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-8"
          >
            <svg
              className="w-8 h-8 mx-auto text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={cardsContainerRef}
        className="relative p-8"
        style={{ minHeight: `${projectsData.length * 100}vh` }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            leftSectionData={project.leftSectionData}
            resultsData={project.resultsData}
            index={index}
          />
        ))}
      </div>

      {/* Next Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Next Section</h2>
          <p className="text-xl text-white/70">
            Cards have finished stacking - continue exploring
          </p>
        </div>
      </div>
    </div>
  );
}

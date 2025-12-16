"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PromptCard from "./PromptCard";
import HomeSlider from "../Slider/HomeSlider";
import UnicornsComponent from "./ScrollStackComponents";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";

export default function HeroSection() {
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
    <section className="relative flex flex-col items-center justify-center text-center  overflow-hidden text-black gap-13  pb-15">
      <BackgroundVideo
        className="absolute top-0 left-0 w-full h-[180px]  -z-50"
        src="/video/seeend.mp4"
      ></BackgroundVideo>

      {/* Floating icons on LEFT side - Responsive positioning */}
      {/* <motion.div
        className={`absolute ${
          isMobile ? "top-[10px] left-[10px]" : "top-[60px] left-[50px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-5, 5, -5],
          opacity: [0, 1, 0], // fade in & fade out
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/images/herosectionicons/aws-icon.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="AWS Icon"
        />
      </motion.div>

      <motion.div
        className={`absolute ${
          isMobile ? "top-[60px] left-[20px]" : "top-[135px] left-[230px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [5, -5, 5],
          opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <Image
          src="/images/herosectionicons/Python-log.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="Python Icon"
        />
      </motion.div>

      <motion.div
        className={`absolute ${
          isMobile ? "top-[110px] left-[15px]" : "top-[245px] left-[130px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-3, 7, -3],
          opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      >
        <Image
          src="/images/herosectionicons/Frame.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="Frame Icon"
        />
      </motion.div>

      <motion.div
        className={`absolute ${
          isMobile ? "top-[110px] left-[15px]" : "top-[340px] left-[230px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-3, 7, -3],
          opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      >
        <Image
          src="/images/herosectionicons/react-icon.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="React Icon"
        />
      </motion.div>

      <motion.div
        className={`absolute ${
          isMobile ? "top-[110px] left-[15px]" : "top-[340px] left-[50px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-3, 7, -3],
          opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      >
        <Image
          src="/images/herosectionicons/Laravel.png"
          width={isMobile ? 28 : 38}
          height={isMobile ? 28 : 18}
          className="aspect-square"
          alt="Laravel Icon"
        />
      </motion.div> */}

      {/* Floating icons on RIGHT side - Responsive positioning */}
      {/* <motion.div
        className={`absolute ${
          isMobile ? "top-[10px] right-[10px]" : "top-[60px] right-[50px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-5, 5, -5],
           opacity: [0, 1, 0], // fade in & fade out
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/images/herosectionicons/HTML5.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="AWS Icon"
        />
      </motion.div>

      <motion.div
        className={`absolute ${
          isMobile ? "top-[60px] right-[20px]" : "top-[135px] right-[230px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [5, -5, 5],
          opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <Image
          src="/images/herosectionicons/nextjs.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 40}
          className="aspect-square"
          alt="AWS Icon"
        />
      </motion.div>

      <motion.div
        className={`absolute ${
          isMobile ? "top-[110px] right-[15px]" : "top-[245px] right-[130px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-3, 7, -3],
           opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      >
        <Image
          src="/images/herosectionicons/swift.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="AWS Icon"
        />
      </motion.div>
      <motion.div
        className={`absolute ${
          isMobile ? "top-[110px] right-[15px]" : "top-[340px] right-[230px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-3, 7, -3],
           opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      >
        <Image
          src="/images/herosectionicons/Svelte_Logo.png"
          width={isMobile ? 28 : 34}
          height={isMobile ? 28 : 34}
          className="aspect-square"
          alt="AWS Icon"
        />
      </motion.div>
      <motion.div
        className={`absolute ${
          isMobile ? "top-[110px] right-[15px]" : "top-[340px] right-[50px]"
        } bg-white rounded-2xl ${
          isMobile ? "w-[40px] h-[40px]" : "w-[48.842px] h-[48.842px]"
        } flex items-center justify-center shadow-md z-20`}
        animate={{
          y: [-3, 7, -3],
           opacity: [0, 1, 0], // fade in + fade out
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      >
        <Image
          src="/images/herosectionicons/JavaScript.png"
          width={isMobile ? 28 : 38}
          height={isMobile ? 28 : 18}
          className="aspect-square"
          alt="AWS Icon"
        />
      </motion.div> */}

      <div className="max-w-[1200px] flex flex-col items-center gap-0 relative w-full overflow-hidden ">
        <div className="relative flex items-center justify-center w-full h-[130px] ml-60 overflow-hidden">
          <div className="min-h-screen flex items-center justify-center">
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

        <div className="relative h-[70px] overflow-hidden flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
              className="font-bold text-black tracking-[-0.04em] text-[clamp(32px,4vw,64px)] text-center whitespace-nowrap leading-tight"
              style={{
                fontFamily:
                  "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
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

      {/* <div className="absolute -z-10 w-[467px] h-[467px] rounded-full opacity-20 bg-[#0367FC] blur-[125px] top-150 left-1/2 -translate-x-1/2" /> */}

      <HomeSlider />
    </section>
  );
}

"use client";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface CenterPerson {
  name: string;
  role: string;
  image: string;
}

interface SideTile {
  name: string;
  image: string;
}

export default function TestimonialSlider() {
  const centerPeople: CenterPerson[] = [
    {
      name: "   KEVIN APPLEGATE",
      role: "FASHION DIRECTOR",
      image: "/images/Clients/kevin.jfif",
    },
    {
      name: " JENNIE MALAFARINA",
      role: "FASHION DIRECTOR",
      image: "/images/Clients/JM.jfif",
    },
    {
      name: "JENIFER ROTH",
      role: "FASHION DIRECTOR",
      image: "/images/Clients/jennifer.jfif",
    },
    {
      name: "Christopher Soto",
      role: "  CTO, YLOPO",
      image: "/images/Clients/chris.jpg",
    },
    {
      name: "DAVID BACA",
      role: "  CTO, YLOPO",
      image: "/images/Clients/david.jfif",
    },
    {
      name: " YANI DY",
      role: "FASHION DIRECTOR",
      image: "/images/Clients/Yani.jfif",
    },
    {
      name: "  DANIAL RIVERA",
      role: "MDB",
      image: "/images/Clients/Daniel.jfif",
    },
  ];

  // Left side tiles for each center person
  const leftTiles: SideTile[][] = [
    [
      {
        name: "   KEVIN APPLEGATE",
        image: "/images/Clients/kevin.jfif",
      },
      {
        name: " JENNIE MALAFARINA",
        image: "/images/Clients/JM.jfif",
      },
      {
        name: "JENIFER ROTH",
        image: "/images/Clients/jennifer.jfif",
      },
    ],
    [
      {
        name: "   KEVIN APPLEGATE",
        image: "/images/Clients/kevin.jfif",
      },
      {
        name: " JENNIE MALAFARINA",
        image: "/images/Clients/JM.jfif",
      },
      {
        name: "JENIFER ROTH",
        image: "/images/Clients/jennifer.jfif",
      },
    ],
    [
      {
        name: "   KEVIN APPLEGATE",
        image: "/images/Clients/kevin.jfif",
      },
      {
        name: " JENNIE MALAFARINA",
        image: "/images/Clients/JM.jfif",
      },
      {
        name: "JENIFER ROTH",
        image: "/images/Clients/jennifer.jfif",
      },
    ],
    [
      {
        name: "   KEVIN APPLEGATE",
        image: "/images/Clients/kevin.jfif",
      },
      {
        name: " JENNIE MALAFARINA",
        image: "/images/Clients/JM.jfif",
      },
      {
        name: "JENIFER ROTH",
        image: "/images/Clients/jennifer.jfif",
      },
    ],
    [
      {
        name: "   KEVIN APPLEGATE",
        image: "/images/Clients/kevin.jfif",
      },
      {
        name: " JENNIE MALAFARINA",
        image: "/images/Clients/JM.jfif",
      },
      {
        name: "JENIFER ROTH",
        image: "/images/Clients/jennifer.jfif",
      },
    ],
    [
      {
        name: "   KEVIN APPLEGATE",
        image: "/images/Clients/kevin.jfif",
      },
      {
        name: " JENNIE MALAFARINA",
        image: "/images/Clients/JM.jfif",
      },
      {
        name: "JENIFER ROTH",
        image: "/images/Clients/jennifer.jfif",
      },
    ],
  ];

  // Right side tiles for each center person
  const rightTiles: SideTile[][] = [
    [
      {
        name: "Christopher Soto",
        image: "/images/Clients/chris.jpg",
      },
      {
        name: "DAVID BACA",
        image: "/images/Clients/david.jfif",
      },
      {
        name: " YANI DY",
        image: "/images/Clients/Yani.jfif",
      },
    ],
    [
      {
        name: "Christopher Soto",
        image: "/images/Clients/chris.jpg",
      },
      {
        name: "DAVID BACA",
        image: "/images/Clients/david.jfif",
      },
      {
        name: " YANI DY",
        image: "/images/Clients/Yani.jfif",
      },
    ],
    [
      {
        name: "Christopher Soto",
        image: "/images/Clients/chris.jpg",
      },
      {
        name: "DAVID BACA",
        image: "/images/Clients/david.jfif",
      },
      {
        name: " YANI DY",
        image: "/images/Clients/Yani.jfif",
      },
    ],
    [
      {
        name: "Christopher Soto",
        image: "/images/Clients/chris.jpg",
      },
      {
        name: "DAVID BACA",
        image: "/images/Clients/david.jfif",
      },
      {
        name: " YANI DY",
        image: "/images/Clients/Yani.jfif",
      },
    ],
    [
      {
        name: "Christopher Soto",
        image: "/images/Clients/chris.jpg",
      },
      {
        name: "DAVID BACA",
        image: "/images/Clients/david.jfif",
      },
      {
        name: " YANI DY",
        image: "/images/Clients/Yani.jfif",
      },
    ],
    [
      {
        name: "Christopher Soto",
        image: "/images/Clients/chris.jpg",
      },
      {
        name: "DAVID BACA",
        image: "/images/Clients/david.jfif",
      },
      {
        name: " YANI DY",
        image: "/images/Clients/Yani.jfif",
      },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for left side tiles
  const leftTileRefs = useRef<(HTMLImageElement | null)[]>([]);
  const leftTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Refs for right side tiles
  const rightTileRefs = useRef<(HTMLImageElement | null)[]>([]);
  const rightTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Animate image, text, play button, and side tiles when currentIndex changes
  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    const image = imageRef.current;
    const text = textRef.current;
    const playButton = playButtonRef.current;
    const container = containerRef.current;

    // Set initial position based on direction
    const startX =
      direction === "next" ? container.offsetWidth : -container.offsetWidth;

    gsap.set(image, { x: startX, opacity: 0 });
    if (text) {
      gsap.set(text, { y: 20, opacity: 0 });
    }
    if (playButton) {
      gsap.set(playButton, { scale: 0, opacity: 0 });
    }

    // Animate left side tiles
    leftTileRefs.current.forEach((tile, i) => {
      if (tile) {
        const startY = direction === "next" ? -100 : 100;
        gsap.set(tile, { y: startY, opacity: 0 });
      }
    });

    leftTextRefs.current.forEach((textEl) => {
      if (textEl) {
        gsap.set(textEl, { opacity: 0 });
      }
    });

    // Animate right side tiles
    rightTileRefs.current.forEach((tile, i) => {
      if (tile) {
        const startY = direction === "next" ? -100 : 100;
        gsap.set(tile, { y: startY, opacity: 0 });
      }
    });

    rightTextRefs.current.forEach((textEl) => {
      if (textEl) {
        gsap.set(textEl, { opacity: 0 });
      }
    });

    // Animate to center
    const tl = gsap.timeline();
    tl.to(image, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    if (text) {
      tl.to(
        text,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    if (playButton) {
      tl.to(
        playButton,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }

    // Animate left side tiles
    leftTileRefs.current.forEach((tile, i) => {
      if (tile) {
        tl.to(
          tile,
          {
            y: 0,
            opacity: 0.6,
            duration: 0.5,
            ease: "power2.out",
          },
          `-=${0.4 - i * 0.1}`
        );
      }
    });

    leftTextRefs.current.forEach((textEl, i) => {
      if (textEl) {
        tl.to(
          textEl,
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          `-=${0.3 - i * 0.1}`
        );
      }
    });

    // Animate right side tiles
    rightTileRefs.current.forEach((tile, i) => {
      if (tile) {
        tl.to(
          tile,
          {
            y: 0,
            opacity: 0.6,
            duration: 0.5,
            ease: "power2.out",
          },
          `-=${0.4 - i * 0.1}`
        );
      }
    });

    rightTextRefs.current.forEach((textEl, i) => {
      if (textEl) {
        tl.to(
          textEl,
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          `-=${0.3 - i * 0.1}`
        );
      }
    });
  }, [currentIndex, direction]);

  // Auto-play: change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % centerPeople.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [centerPeople.length]);

  const goNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % centerPeople.length);
  };

  const goPrev = () => {
    setDirection("prev");
    setCurrentIndex(
      (prev) => (prev - 1 + centerPeople.length) % centerPeople.length
    );
  };

  const currentPerson = centerPeople[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex flex-col gap-20  items-center  px-4s py-12">
      <div className="  flex flex-col items-center justify-center gap-10">
        <p className="text-black  text-[72px] font-normal leading-[80px] tracking-[-1.44px]">
          Built for professionals like you.
        </p>
        <p className="text-black  text-[18px] font-[274] leading-normal">
          Used by seriously productive people.
        </p>
      </div>
      <div className="max-w-7xl w-full flex items-center justify-center gap-8 lg:gap-16">
        {/* Left Side Strips */}
        <div className="hidden md:block">
          <div className="relative h-[480px] w-48 ml-12">
            {/* Card 1 – Largest & Frontmost */}
            <div className="absolute bottom-32 -left-6 w-[79px] h-[353px] bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <img
                ref={(el) => {
                  leftTileRefs.current[0] = el;
                }}
                key={`left-0-${currentIndex}`}
                src={
                  leftTiles[currentIndex]?.[0]?.image ||
                  "/images/Clients/kevin.jfif"
                }
                alt={leftTiles[currentIndex]?.[0]?.name || "OAKES"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <p
                ref={(el) => {
                  leftTextRefs.current[0] = el;
                }}
                className="absolute bottom-12 right-7 text-white text-2xl font-medium tracking-widest rotate-180 [writing-mode:vertical-rl]"
              >
                {leftTiles[currentIndex]?.[0]?.name || "OAKES"}
              </p>
            </div>

            {/* Card 2 – Medium */}
            <div className="absolute bottom-24 left-16 w-[80px] h-[410px] bg-gray-700 rounded-xl shadow-xl overflow-hidden scale-95 origin-bottom-left">
              <img
                ref={(el) => {
                  leftTileRefs.current[1] = el;
                }}
                key={`left-1-${currentIndex}`}
                src={
                  leftTiles[currentIndex]?.[1]?.image ||
                  "/images/Cammi/ImageL3.jpg"
                }
                alt={leftTiles[currentIndex]?.[1]?.name || "LAUREN"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p
                ref={(el) => {
                  leftTextRefs.current[1] = el;
                }}
                className="absolute bottom-9 right-6 text-white text-xl font-medium tracking-widest rotate-180 [writing-mode:vertical-rl]"
              >
                {leftTiles[currentIndex]?.[1]?.name || "LAUREN"}
              </p>
            </div>

            {/* Card 3 – Smallest */}
            <div className="absolute bottom-16 left-36 w-[80px] h-[488px] bg-gray-600 rounded-lg shadow-lg overflow-hidden scale-90 origin-bottom-left">
              <img
                ref={(el) => {
                  leftTileRefs.current[2] = el;
                }}
                key={`left-2-${currentIndex}`}
                src={
                  leftTiles[currentIndex]?.[2]?.image ||
                  "/images/Cammi/ImageL1.jpg"
                }
                alt={leftTiles[currentIndex]?.[2]?.name || "RYAN"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p
                ref={(el) => {
                  leftTextRefs.current[2] = el;
                }}
                className="absolute bottom-7 right-5 text-white text-lg font-medium tracking-widest rotate-180 [writing-mode:vertical-rl] opacity-90"
              >
                {leftTiles[currentIndex]?.[2]?.name || "RYAN"}
              </p>
            </div>
          </div>
        </div>

        {/* Center Main Card */}
        <div className="relative w-full max-w-xl bottom-10">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Main Image Container */}
          <div
            ref={containerRef}
            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl w-[563px] h-[550px]"
          >
            <img
              ref={imageRef}
              key={currentIndex}
              src={currentPerson.image}
              alt={`${currentPerson.name} - ${currentPerson.role}`}
              className="w-full h-full object-cover"
            />

            {/* Play Button */}

            {/* Bottom Text */}
            <div
              ref={textRef}
              className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
            >
              <p className="text-white text-2xl font-light tracking-wider">
                {currentPerson.name}
              </p>
              <p className="text-white/80 text-sm tracking-widest">
                {currentPerson.role}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Strips */}
        {/* ====================== RIGHT SIDE – LARGER STACK ====================== */}
        <div className="hidden md:block">
          <div className="relative h-[480px] w-48 ">
            {/* Card 1 – Largest & Frontmost */}
            <div className="absolute bottom-16 -left-6 w-[79px] h-[450px] bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <img
                ref={(el) => {
                  rightTileRefs.current[0] = el;
                }}
                key={`right-0-${currentIndex}`}
                src={
                  rightTiles[currentIndex]?.[0]?.image ||
                  "/images/Cammi/ImageR1.jpg"
                }
                alt={rightTiles[currentIndex]?.[0]?.name || "OAKES"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <p
                ref={(el) => {
                  rightTextRefs.current[0] = el;
                }}
                className="absolute bottom-12 right-7 text-white text-2xl font-medium tracking-widest rotate-180 [writing-mode:vertical-rl]"
              >
                {rightTiles[currentIndex]?.[0]?.name || "OAKES"}
              </p>
            </div>

            {/* Card 2 – Medium */}
            <div className="absolute bottom-24 left-16 w-[80px] h-[410px] bg-gray-700 rounded-xl shadow-xl overflow-hidden scale-95 origin-bottom-left">
              <img
                ref={(el) => {
                  rightTileRefs.current[1] = el;
                }}
                key={`right-1-${currentIndex}`}
                src={
                  rightTiles[currentIndex]?.[1]?.image ||
                  "/images/Cammi/ImageR2.jpg"
                }
                alt={rightTiles[currentIndex]?.[1]?.name || "LAUREN"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p
                ref={(el) => {
                  rightTextRefs.current[1] = el;
                }}
                className="absolute bottom-9 right-6 text-white text-xl font-medium tracking-widest rotate-180 [writing-mode:vertical-rl]"
              >
                {rightTiles[currentIndex]?.[1]?.name || "LAUREN"}
              </p>
            </div>

            {/* Card 3 – Smallest */}
            <div className="absolute bottom-32 left-36 w-[79px] h-[353px] bg-gray-600 rounded-lg shadow-lg overflow-hidden scale-90 origin-bottom-left">
              <img
                ref={(el) => {
                  rightTileRefs.current[2] = el;
                }}
                key={`right-2-${currentIndex}`}
                src={
                  rightTiles[currentIndex]?.[2]?.image ||
                  "/images/Cammi/ImageR3.jpg"
                }
                alt={rightTiles[currentIndex]?.[2]?.name || "RYAN"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p
                ref={(el) => {
                  rightTextRefs.current[2] = el;
                }}
                className="absolute bottom-7 right-5 text-white text-lg font-medium tracking-widest rotate-180 [writing-mode:vertical-rl] opacity-90"
              >
                {rightTiles[currentIndex]?.[2]?.name || "RYAN"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

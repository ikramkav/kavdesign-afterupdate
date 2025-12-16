// // // import React from "react";

// // // export default function BusinessSection() {
// // //   const cards = [
// // //     {
// // //       icon: "/images/BusinessSection/Vector.png",
// // //       title: "Predictive Analytics\n& Data Science",
// // //       desc: "Turn your business data into actionable insights.",
// // //       button: false,
// // //       bgColor: "#FFD21E",
// // //     },
// // //     {
// // //       icon: "/images/BusinessSection/Vector.png",
// // //       title: "Machine Learning\nDevelopment",
// // //       desc: "Build intelligent systems that learn, adapt, and evolve with your business.",
// // //       button: false,
// // //       bgColor: "#FFFFFF",
// // //     },
// // //     {
// // //       icon: "/images/BusinessSection/AI.png",
// // //       title: "AI-Powered Communication\n& Automation",
// // //       desc: "Enhance customer engagement and sales efficiency through intelligent automation.",
// // //       button: true,
// // //       bgColor: "#FFFFFF",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="w-full min-h-screen py-12 bg-gradient-to-r from-[#EFF6FF] to-[#FAFFF5] flex flex-col items-center text-center px-4 md:px-8">
// // //       <h2 className="text-gray-900 text-center font-semibold text-[5vw] md:text-[2rem] leading-tight md:leading-snug max-w-3xl">
// // //         Grow your business to the next level.
// // //       </h2>

// // //       <p className="text-gray-600 text-center mt-2 text-[3vw] md:text-base leading-snug max-w-xl mx-auto">
// // //         Empower your brand with smart digital solutions that drive growth and
// // //         lasting impact.
// // //       </p>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
// // //         {cards.map((card, index) => (
// // //           <div
// // //             key={index}
// // //             className={`rounded-2xl   sm:p-8  transition-transform transform  hover:scale-[1.02] flex flex-col items-center ${
// // //               index === 2 ? "shadow-[0_0_8px_0_#00000033]" : ""
// // //             }`}
// // //           >
// // //             {/* Icon container with dynamic background color */}
// // //             <div
// // //               className="w-12 h-12 md:w-14 md:h-14 rounded-md flex items-center justify-center mb-4"
// // //               style={{ backgroundColor: card.bgColor }}
// // //             >
// // //               <img
// // //                 src={card.icon}
// // //                 alt={card.title}
// // //                 className="w-6 h-6 md:w-8 md:h-8"
// // //               />
// // //             </div>

// // //             <h3 className="text-gray-900 text-center font-semibold text-[4vw] md:text-lg leading-snug whitespace-pre-line">
// // //               {card.title}
// // //             </h3>
// // //             <p className="text-gray-500 w-[20vw] text-center mt-2 text-[3vw] md:text-sm leading-snug">
// // //               {card.desc}
// // //             </p>

// // //             {card.button && (
// // //               <button className="mt-5 w-[40%] md:w-[125px] h-[34px] bg-gradient-to-tr from-[#025ADC] to-[#3282FA] text-white text-[2.5vw] md:text-[12px] font-normal rounded-full hover:from-[#3282FA] hover:to-[#025ADC] transition flex items-center justify-center gap-1">
// // //                 View More
// // //               </button>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Slider dots */}
// // //       <div className="flex gap-2 mt-6">
// // //         <div
// // //           className="w-4 h-4 md:w-5 md:h-5 rounded-full"
// // //           style={{
// // //             background: "linear-gradient(180deg, #C9FD74 0%, #0669FA 100%)",
// // //           }}
// // //         ></div>
// // //         {[...Array(3)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-gray-300"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(239.8% 159.35% at 56.67% -23.33%, rgba(255,255,255,0) 0%, #7B7B7B 100%)",
// // //             }}
// // //           ></div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // "use client";
// // import React, { useState, useEffect } from "react";

// // export default function BusinessSection() {
// //   const cards = [
// //     {
// //       icon: "/images/BusinessSection/Vector.png",
// //       title: "Predictive Analytics\n& Data Science",
// //       desc: "Turn your business data into actionable insights.",
// //       buttonText: "View More",
// //       bgColor: "#FFD21E",
// //     },
// //     {
// //       icon: "/images/BusinessSection/Vector.png",
// //       title: "Machine Learning\nDevelopment",
// //       desc: "Build intelligent systems that learn, adapt, and evolve with your business.",
// //       buttonText: "View More",
// //       bgColor: "#FFFFFF",
// //     },
// //     {
// //       icon: "/images/BusinessSection/AI.png",
// //       title: "AI-Powered Communication\n& Automation",
// //       desc: "Enhance customer engagement and sales efficiency through intelligent automation.",
// //       buttonText: "View More",
// //       bgColor: "#FFFFFF",
// //     },
// //   ];

// //   const visibleCards = 3;
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   // Duplicate cards for smooth infinite loop
// //   const loopedCards = [...cards, ...cards, ...cards];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % cards.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, [cards.length]);

// //   // Get visible cards starting from activeIndex
// //   const getVisibleCards = () => {
// //     const result = [];
// //     for (let i = 0; i < visibleCards; i++) {
// //       result.push(loopedCards[(activeIndex + i) % cards.length]);
// //     }
// //     return result;
// //   };

// //   const visible = getVisibleCards();

// //   return (
// //     <section className="w-full py-12 bg-gradient-to-r from-[#EFF6FF] to-[#FAFFF5] flex flex-col items-center text-center px-4 md:px-8">
// //       <h2 className="text-gray-900 font-semibold text-[5vw] md:text-[2rem] leading-tight max-w-3xl">
// //         Grow your business to the next level.
// //       </h2>

// //       <p className="text-gray-600 mt-2 text-[3vw] md:text-base leading-snug max-w-xl mx-auto">
// //         Empower your brand with smart digital solutions that drive growth and
// //         lasting impact.
// //       </p>

// //       {/* Slider */}
// //       <div className="relative mt-12 w-full max-w-6xl flex justify-center gap-6 overflow-hidden ">
// //         {visible.map((card, index) => (
// //           <div
// //             key={index}
// //             className="flex-shrink-0 w-[30%] group transition-transform duration-300 hover:scale-[0.98]   "
// //           >
// //             <div className="rounded-2xl sm:p-8 flex flex-col items-center transition-shadow shadow-none group-hover:shadow-[0_0_5px_#00000033] group-hover:bg-white relative">
// //               {/* Icon */}
// //               <div
// //                 className="w-12 h-12 md:w-14 md:h-14 rounded-md flex items-center justify-center mb-4"
// //                 style={{ backgroundColor: card.bgColor }}
// //               >
// //                 <img
// //                   src={card.icon}
// //                   alt={card.title}
// //                   className="w-6 h-6 md:w-8 md:h-8"
// //                 />
// //               </div>

// //               {/* Title & Description */}
// //               <h3 className="text-gray-900 text-center font-semibold text-[4vw] md:text-lg leading-snug whitespace-pre-line">
// //                 {card.title}
// //               </h3>
// //               <p className="text-gray-500 text-center mt-2 text-[3vw] md:text-sm leading-snug">
// //                 {card.desc}
// //               </p>

// //               {/* Button appears on hover */}
// //               <button className="mt-5 w-[40%] md:w-[125px] h-[34px] bg-gradient-to-tr from-[#025ADC] to-[#3282FA] text-white text-[2.5vw] md:text-[12px] font-normal rounded-full transition opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1">
// //                 {card.buttonText}
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Slider dots */}
// //       <div className="flex gap-2 mt-6">
// //         {cards.map((_, i) => (
// //           <div
// //             key={i}
// //             onClick={() => setActiveIndex(i)}
// //             className={`w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-all ${
// //               activeIndex === i
// //                 ? "bg-gradient-to-b from-[#C9FD74] to-[#0669FA]"
// //                 : "bg-gray-300"
// //             }`}
// //           ></div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import React, { useState, useEffect } from "react";

// export default function BusinessSection() {
//   const cards = [
//     {
//       icon: "/images/BusinessSection/Vector.png",
//       title: "Predictive Analytics\n& Data Science",
//       desc: "Turn your business data into actionable insights.",
//       buttonText: "View More",
//       bgColor: "#FFD21E",
//     },
//     {
//       icon: "/images/BusinessSection/Vector.png",
//       title: "Machine Learning\nDevelopment",
//       desc: "Build intelligent systems that learn, adapt, and evolve with your business.",
//       buttonText: "View More",
//       bgColor: "#FFFFFF",
//     },
//     {
//       icon: "/images/BusinessSection/AI.png",
//       title: "AI-Powered Communication\n& Automation",
//       desc: "Enhance customer engagement and sales efficiency through intelligent automation.",
//       buttonText: "View More",
//       bgColor: "#FFFFFF",
//     },
//   ];

//   const visibleCards = 3;
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Duplicate cards for smooth infinite loop
//   const loopedCards = [...cards, ...cards, ...cards];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [cards.length]);

//   // Get visible cards starting from activeIndex
//   const getVisibleCards = () => {
//     const result = [];
//     for (let i = 0; i < visibleCards; i++) {
//       result.push(loopedCards[(activeIndex + i) % cards.length]);
//     }
//     return result;
//   };

//   const visible = getVisibleCards();

//   return (
//     <section className="w-full py-12 bg-gradient-to-r from-[#EFF6FF] to-[#FAFFF5] flex flex-col items-center text-center px-4 md:px-8">
//       <h2 className="text-gray-900 font-semibold text-[5vw] md:text-[2rem] leading-tight max-w-3xl">
//         Grow your business to the next level.
//       </h2>

//       <p className="text-gray-600 mt-2 text-[3vw] md:text-base leading-snug max-w-xl mx-auto">
//         Empower your brand with smart digital solutions that drive growth and
//         lasting impact.
//       </p>

//       {/* Slider */}
//       <div className="relative mt-12 w-full max-w-6xl flex justify-center gap-6 overflow-hidden">
//         {visible.map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[30%] group transition-transform duration-300 hover:scale-[0.98]"
//           >
//             <div
//               className="rounded-[10px] sm:px-8 py-3  flex flex-col items-center relative transition-all duration-300
//                          shadow-none group-hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)]
//                          bg-transparent group-hover:bg-[rgba(255,255,255,0.2)]"
//             >
//               {/* Icon */}
//               <div
//                 className="w-12 h-12 md:w-14 md:h-14 rounded-md flex items-center justify-center mb-4"
//                 style={{ backgroundColor: card.bgColor }}
//               >
//                 <img
//                   src={card.icon}
//                   alt={card.title}
//                   className="w-6 h-6 md:w-8 md:h-8"
//                 />
//               </div>

//               {/* Title & Description */}
//               <h3 className="text-gray-900 text-center font-semibold text-[4vw] md:text-lg leading-snug whitespace-pre-line">
//                 {card.title}
//               </h3>
//               <p className="text-gray-500 text-center mt-2 text-[3vw] md:text-sm leading-snug">
//                 {card.desc}
//               </p>

//               {/* Button appears on hover */}
//               <button className="mt-5 w-[40%] md:w-[125px] h-[34px] bg-gradient-to-tr from-[#025ADC] to-[#3282FA] text-white text-[2.5vw] md:text-[12px] font-normal rounded-full transition opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1">
//                 {card.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Slider dots */}
//       <div className="flex gap-2 mt-6">
//         {cards.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setActiveIndex(i)}
//             className={`w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-all ${
//               activeIndex === i
//                 ? "bg-gradient-to-b from-[#C9FD74] to-[#0669FA]"
//                 : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      icon: "/images/BusinessSection/Vector.png",
      title: "Predictive Analytics\n& Data Science",
      desc: "Turn your business data into actionable insights.",
      bgColor: "#FFD21E",
    },
    {
      icon: "/images/BusinessSection/Vector.png",
      title: "Machine Learning\nDevelopment",
      desc: "Build intelligent systems that learn, adapt, and evolve with your business.",
      bgColor: "#FFFFFF",
    },
    {
      icon: "/images/BusinessSection/AI.png",
      title: "AI-Powered Communication\n& Automation",
      desc: "Enhance customer engagement and sales efficiency through intelligent automation.",
      bgColor: "#FFFFFF",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      // Set initial states
      if (heading) {
        gsap.set(heading, { opacity: 0, y: 80 });
      }
      if (subheading) {
        gsap.set(subheading, { opacity: 0, y: 60 });
      }

      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 100, rotationX: -15 });
        const cardInner = card.querySelector(".card-inner") as HTMLElement;
        if (cardInner) {
          gsap.set(cardInner, { rotationY: 0 });
        }
      });

      // Create main timeline that pins the section
      // Calculate end based on number of cards - each card needs time to flip
      const endScroll = 200 + cards.length * 60; // Base 200% + 60% per card (reduced for faster flips)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${endScroll}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Animate heading and subheading (0-15% of timeline)
      if (heading) {
        tl.to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power3.out",
          },
          0
        );
      }

      if (subheading) {
        tl.to(
          subheading,
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power3.out",
          },
          0.05
        );
      }

      // Phase 2: Animate cards entrance (15-40% of timeline)
      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.2,
            ease: "power3.out",
          },
          0.15 + index * 0.08
        );
      });

      // Phase 3: Flip cards sequentially (40-100% of timeline)
      cards.forEach((card, index) => {
        const cardInner = card.querySelector(".card-inner") as HTMLElement;
        if (!cardInner) return;

        // Each card flips after the previous one
        tl.to(
          cardInner,
          {
            rotationY: 180,
            duration: 0.25,
            ease: "power2.inOut",
          },
          0.4 + index * 0.1 // Stagger the flips
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-r from-[#EFF6FF] to-[#FAFFF5] flex flex-col items-center text-center px-4 md:px-8 overflow-hidden"
    >
      <h2
        ref={headingRef}
        className="text-gray-900 font-bold text-[5vw] md:text-[2.5rem] leading-tight max-w-4xl tracking-tight"
        style={{
          fontFamily:
            "SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        Grow your business to the next level.
      </h2>

      <p
        ref={subheadingRef}
        className="text-gray-600 mt-6 text-[3vw] md:text-lg leading-relaxed max-w-2xl mx-auto"
        style={{
          fontFamily:
            "SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        Empower your brand with smart digital solutions that drive growth and
        lasting impact.
      </p>

      {/* Flip Cards */}
      <div className="relative mt-20 w-full max-w-7xl flex justify-center gap-10 flex-wrap px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flip-card w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)] min-h-[320px] perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <div
              className="card-inner relative w-full h-full transition-transform duration-500 preserve-3d"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.5s",
              }}
            >
              {/* Front of card - Icon and Title */}
              <div
                className="card-front absolute inset-0 w-full h-full rounded-3xl p-10 flex flex-col items-center justify-center bg-gradient-to-br from-white via-white to-gray-50/50 backdrop-blur-xl shadow-2xl border border-gray-100/50 backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-300"
                  style={{
                    backgroundColor: card.bgColor,
                    boxShadow: `0 10px 30px ${card.bgColor}40`,
                  }}
                >
                  <img src={card.icon} alt={card.title} className="w-10 h-10" />
                </div>
                <h3
                  className="text-gray-900 text-center font-bold text-xl md:text-2xl leading-tight whitespace-pre-line tracking-tight"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Back of card - Description */}
              <div
                className="card-back absolute inset-0 w-full h-full rounded-3xl p-10 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 shadow-2xl backface-hidden rotate-y-180"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-cyan-500/90 to-teal-500/90 rounded-3xl" />
                <p
                  className="text-white text-center text-base md:text-lg leading-relaxed relative z-10 font-medium px-4"
                  style={{
                    fontFamily:
                      "SF Pro Display, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                    fontWeight: 500,
                    lineHeight: "1.7",
                    letterSpacing: "0.01em",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

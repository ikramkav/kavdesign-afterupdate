"use client";

import React, { useEffect, useRef } from "react";
import LaptopDashboard from "./utils/LaptopDashboard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VentureStudioAnimated() {
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const leftCol1Ref = useRef<HTMLDivElement | null>(null);
  const rightCol1Ref = useRef<HTMLDivElement | null>(null);
  const leftCol2Ref = useRef<HTMLDivElement | null>(null);
  const rightCol2Ref = useRef<HTMLDivElement | null>(null);
  const bg1Ref = useRef<HTMLDivElement | null>(null);
  const bg2Ref = useRef<HTMLDivElement | null>(null);
  const bg3Ref = useRef<HTMLDivElement | null>(null);
  const bg4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const heading = headingRef.current;
    const leftCol1 = leftCol1Ref.current;
    const rightCol1 = rightCol1Ref.current;
    const leftCol2 = leftCol2Ref.current;
    const rightCol2 = rightCol2Ref.current;
    const bg1 = bg1Ref.current;
    const bg2 = bg2Ref.current;
    const bg3 = bg3Ref.current;
    const bg4 = bg4Ref.current;

    if (!section1 || !section2) return;

    const ctx = gsap.context(() => {
      // Animate heading on scroll
      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      }

      // Background parallax effects for section 1
      if (bg1 && bg2) {
        gsap.to(bg1, {
          y: -100,
          scale: 1.1,
          opacity: 0.3,
          scrollTrigger: {
            trigger: section1,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(bg2, {
          y: -150,
          scale: 1.2,
          opacity: 0.2,
          scrollTrigger: {
            trigger: section1,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // First Section - Columns slide in with parallax
      if (leftCol1 && rightCol1) {
        // Get child elements for staggered animation
        const leftChildren = gsap.utils.toArray(
          leftCol1.querySelectorAll("div, button, ul, li, span")
        ) as HTMLElement[];
        const rightChildren = gsap.utils.toArray(
          rightCol1.querySelectorAll("div")
        ) as HTMLElement[];

        // Set initial states
        gsap.set(leftCol1, { opacity: 0, x: -150, y: 30 });
        gsap.set(rightCol1, { opacity: 0, x: 150, y: 30 });
        gsap.set(leftChildren, { opacity: 0, y: 20 });
        gsap.set(rightChildren, { opacity: 0, y: 20 });

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: section1,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
          },
        });

        // Animate columns sliding in
        tl1
          .to(
            leftCol1,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            0
          )
          .to(
            rightCol1,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            0.2
          )
          // Animate left column children with stagger
          .to(
            leftChildren,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.4
          )
          // Animate right column children
          .to(
            rightChildren,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.5
          );

        // Parallax effect on image while scrolling
        gsap.to(rightCol1, {
          y: -80,
          scale: 1.05,
          scrollTrigger: {
            trigger: section1,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      }

      // Background parallax effects for section 2
      if (bg3 && bg4) {
        gsap.to(bg3, {
          y: -100,
          scale: 1.1,
          opacity: 0.3,
          scrollTrigger: {
            trigger: section2,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(bg4, {
          y: -150,
          scale: 1.2,
          opacity: 0.2,
          scrollTrigger: {
            trigger: section2,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Second Section - Columns slide in with parallax (alternating)
      if (leftCol2 && rightCol2) {
        // Get child elements for staggered animation
        const leftChildren2 = gsap.utils.toArray(
          leftCol2.querySelectorAll("div")
        ) as HTMLElement[];
        const rightChildren2 = gsap.utils.toArray(
          rightCol2.querySelectorAll("div, button, ul, li, span")
        ) as HTMLElement[];

        // Set initial states - alternating direction
        gsap.set(leftCol2, { opacity: 0, x: 150, y: 30 });
        gsap.set(rightCol2, { opacity: 0, x: -150, y: 30 });
        gsap.set(leftChildren2, { opacity: 0, y: 20 });
        gsap.set(rightChildren2, { opacity: 0, y: 20 });

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: section2,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
          },
        });

        // Animate columns sliding in (opposite direction)
        tl2
          .to(
            leftCol2,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            0
          )
          .to(
            rightCol2,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            0.2
          )
          // Animate left column children
          .to(
            leftChildren2,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.4
          )
          // Animate right column children with stagger
          .to(
            rightChildren2,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.5
          );

        // Parallax effect on image while scrolling
        gsap.to(leftCol2, {
          y: -80,
          scale: 1.05,
          scrollTrigger: {
            trigger: section2,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Animated background elements */}
        <div
          ref={bg1Ref}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        </div>
        <div
          ref={bg2Ref}
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        </div>

        <div
          id="caseStudies"
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <section
            ref={section1Ref}
            className="relative bg-gradient-to-br from-slate-50/80 via-white/80 to-slate-100/80 backdrop-blur-sm py-24 px-6 min-h-screen flex items-center"
          >
            <div className="max-w-8xl mx-auto text-black w-full relative z-10">
              <div ref={headingRef} className="text-center mb-20">
                <h1 className="text-[72px] leading-[80px] tracking-[-0.02em] font-normal mb-6 text-center">
                  A{" "}
                  <span className="inline-block text-transparent bg-gradient-to-r from-[#0367FC] via-[#0367FC] to-[#C9FD74] bg-clip-text animate-gradient">
                    Venture Studio
                  </span>
                  , Not Just Another Dev Shop
                </h1>
                <p className="text-[20px] leading-[100%] tracking-[0%] text-center text-gray-600 mx-auto max-w-[900px]">
                  For AI teams, Scale sets Design to explore and accelerate the
                  exploration of your data.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-stretch w-full max-w-[1200px] mx-auto">
                {/* Left Column - Data Management */}
                <div ref={leftCol1Ref} className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center text-sm font-medium mb-6 px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-sm">
                      Services
                    </div>
                    <div className="mb-6">
                      <h2 className="text-[40px] leading-[44px] tracking-[-0.4px] font-semibold text-gray-900 mb-2">
                        Data management
                      </h2>
                      <p className="text-[16px] leading-[20px] tracking-[-0.4px] text-gray-700">
                        Powering the next generation of Generative AI
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-[16px] leading-[24px] text-[#52505F]">
                        Analytics tool offering insights and optimisations for
                        the telecom industry
                      </p>

                      <ul className="space-y-4">
                        {[
                          "Reduced Truck Rolls",
                          "Collect authorization via secure portals.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <img
                                src="/images/BusinessSection/Tick.png"
                                alt="check"
                                className="w-5 h-5"
                              />
                              <span className="text-[14px] leading-[24px] text-gray-900">
                                {item}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div ref={rightCol1Ref} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl transform scale-110" />
                  <div className="relative">
                    <LaptopDashboard
                      image="/images/BusinessSection/SectionImg.jpg"
                      url="otake.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background elements for section 2 */}
          <div
            ref={bg3Ref}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          >
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl" />
          </div>
          <div
            ref={bg4Ref}
            className="absolute top-0 right-0 w-full h-full pointer-events-none"
          >
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl" />
          </div>

          <section
            ref={section2Ref}
            className="relative bg-gradient-to-br from-slate-50/80 via-white/80 to-slate-100/80 backdrop-blur-sm py-24 px-6 min-h-screen flex items-center"
          >
            <div className="max-w-7xl mx-auto text-black w-full relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                {/* Left Column - Image */}
                <div ref={leftCol2Ref} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl transform scale-110" />
                  <div className="relative h-full">
                    <LaptopDashboard
                      image="/images/BusinessSection/SectionImg2.png"
                      url="otake.com"
                    />
                  </div>
                </div>

                {/* Right Column - Text */}
                <div ref={rightCol2Ref} className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center text-sm font-medium mb-6 px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-sm">
                      Product Features
                    </div>
                    <div className="mb-6">
                      <h2 className="text-[40px] leading-[44px] tracking-[-0.4px] font-semibold text-gray-900 mb-2">
                        Powerful data analytics.
                      </h2>
                      <p className="text-[16px] leading-[20px] tracking-[-0.4px] text-gray-700">
                        Powering the next generation of Generative AI
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-[16px] leading-[24px] text-[#52505F]">
                        Our platform offers a suite of tools for seamless data
                        integration, analysis, and visualization, empowering you
                        to make data-driven decisions with confidence.
                      </p>

                      <ul className="space-y-4">
                        {[
                          "Register users in seconds",
                          "Collect authorization via secure portals.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <img
                                src="/images/BusinessSection/Tick.png"
                                alt="check"
                                className="w-5 h-5"
                              />
                              <span className="text-[14px] leading-[24px] text-gray-900">
                                {item}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

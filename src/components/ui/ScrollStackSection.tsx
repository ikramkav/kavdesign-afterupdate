"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollStackComponents from "./ScrollStackComponents";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStackSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ambientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        sectionRef.current?.querySelectorAll(".scroll-stack-card") ?? []
      );

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () =>
            "+=" +
            Math.max(window.innerHeight, 1) * Math.max(cards.length + 1, 2),
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline.fromTo(
        ".elica-heading",
        { yPercent: 20, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.8 },
        0
      );

      timeline.fromTo(
        ".elica-copy",
        { yPercent: 15, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.8 },
        0.1
      );

      if (ambientRef.current) {
        timeline.fromTo(
          ambientRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          0
        );
      }

      cards.forEach((card, index) => {
        timeline.fromTo(
          card,
          { yPercent: 50, rotateX: 10, autoAlpha: 0 },
          {
            yPercent: 0,
            rotateX: 0,
            autoAlpha: 1,
            duration: 0.9,
          },
          0.4 + index * 0.4
        );

        timeline.to(
          card,
          { scale: 0.94, filter: "blur(5px)", duration: 0.6 },
          0.9 + index * 0.4
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="elica relative w-full overflow-hidden bg-[#f7f5f2] text-neutral-900"
    >
      <div
        ref={ambientRef}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f4efe9] via-white to-[#dde4eb] opacity-0 transition-opacity duration-500"
      />
      <div className="relative z-10 min-h-[350vh]">
        <div className="sticky top-0 flex h-screen flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Your shell of comfort
            </p>
            <h2 className="elica-heading mt-6 text-4xl font-medium uppercase sm:text-5xl">
              Next-gen power catamarans
            </h2>
            <p className="elica-copy mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Inspired by the Omaya 50 reveal, this section anchors the space
              around a calm focal point, letting every card float upward as you
              scroll—mirroring the seamless, pin-to-scroll interaction showcased
              on{" "}
              <a
                href="https://www.omaya-yachts.com/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-400 underline-offset-4"
              >
                omaya-yachts.com
              </a>
              .
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="elica-stack relative w-full max-w-4xl px-4">
              <ScrollStackComponents />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

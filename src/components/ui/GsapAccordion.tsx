"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock } from "react-feather";

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  id: string;
  heading: string;
  accent: string;
  tab: {
    clientName: string;
    clientInitial: string;
    location: string;
    request: string;
    result: string;
    result2: string;
    badge1: string;
    badge2line: string;
    badge2: string;
  };
};

const baseTab = {
  clientName: "Chemco",
  clientInitial: "C",
  location: "Ireland",
  request: "I want system to manage inventory...",
  result: "5x Better Results on ",
  result2: "Built unified data system",
  badge1: "Integrated Power BI ",
  badge2line: "Dashboards",
  badge2: "Automated orders & inventory",
};

const accordionItems: CaseStudy[] = [
  {
    id: "01",
    heading: "Chemco | Medcharts.com",
    accent: "from-[#fef7f1] via-[#f7eadf] to-[#efe1d6]",
    tab: baseTab,
  },
  {
    id: "02",
    heading: "Cammi | LendingOS.com",
    accent: "from-[#fdf2f2] via-[#fbe6e3] to-[#f0dcdc]",
    tab: { ...baseTab, clientName: "Cammi", request: "Digitize unsecured lending pipeline..." },
  },
  {
    id: "03",
    heading: "Ylopo | RealtySuite.ai",
    accent: "from-[#eef7ff] via-[#deeef9] to-[#d0e2f0]",
    tab: { ...baseTab, clientName: "Ylopo", request: "Need AI CRM for agents & properties..." },
  },
  {
    id: "04",
    heading: "IMVI | Shipchain.io",
    accent: "from-[#f4f9f4] via-[#e5f4eb] to-[#d8ecdf]",
    tab: { ...baseTab, clientName: "IMVI", request: "Synchronize global logistics data..." },
  },
];

const AccordionCardBody: React.FC<{ tab: CaseStudy["tab"] }> = ({ tab }) => (
  <div className="gsap-accordion__body pointer-events-none mt-2 w-full opacity-0">
    <div className="pointer-events-auto mx-auto w-full max-w-[980px] rounded-[24px] border border-white/60 bg-[#F3F6F8] px-6 pb-6 pt-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col justify-center text-center font-poppins text-[23.8px] font-semibold leading-[1.8] bg-gradient-to-r from-black to-[#2E69C3] bg-clip-text text-transparent">
        We build the Intelligence that builds Unicorns
      </div>
      <div className="mt-8 flex flex-col gap-10 xl:flex-row xl:gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-[85px] w-[210px] rounded-xl border border-gray-50 bg-white shadow-lg">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl">
                <span className="text-lg font-semibold text-white">{tab.clientInitial}</span>
              </div>
            </div>
            <div className="mt-10 pb-5">
              <p className="font-[Bricolage Grotesque] text-[13.2px] font-semibold leading-[13.68px] tracking-[-0.132px] text-[#0D0C10]">
                {tab.clientName}
              </p>
              <p className="mt-1 font-[Bricolage Grotesque] text-[13px] font-normal leading-[13.68px] tracking-[-0.132px] text-[#0D0C10]">
                {tab.location}
              </p>
            </div>
          </div>
          <div className="relative mt-4 mb-5 flex h-[42.783px] w-[250.344px] flex-shrink-0 items-center rounded-[362.209px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
            <div className="flex h-[29.731px] w-[230.379px] flex-shrink-0 items-center rounded-[362.209px] border-[0.725px] border-[#72B3FB] bg-white px-[9.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_-0.725px_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
              <p className="w-full text-left font-[Inter] text-[10.5px] font-medium leading-[10.5px] tracking-[-0.079px] text-[#3A85F6]">
                {tab.request}
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center pl-4">
            <div className="h-[75px] w-[74px]">
              <img src="/images/ProvenResults/heart.png" alt="heart connector" />
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex-shrink-0">
          <div className="h-[229px] w-[229px] rounded-full border-[10px] border-[#1A3D71] shadow-xl" />
          <div className="absolute inset-3 flex h-[195px] w-[195px] items-center justify-center rounded-full bg-white">
            <div className="h-[160px] w-[160px]">
              <img src="/images/ProvenResults/radar.png" alt="radar" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 lg:items-end">
          <div className="flex h-[56.199px] w-[152.28px] flex-col items-start gap-[5.507px] rounded-[11.013px] border-[0.551px] border-[#0EA5E9] bg-white px-[11.564px] pt-[11.564px] pb-[0.551px]">
            <p className="bg-gradient-to-r from-black to-[#2EB5F2] bg-clip-text text-[10.152px] font-normal leading-[11.013px] text-transparent">
              {tab.badge1}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-[8.26px] w-[8.26px] flex-shrink-0 rounded-full bg-[#FB64B6]" />
              <p className="text-[9.636px] font-bold leading-[13.766px] text-[#0A0A0A]">
                {tab.badge2line}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[2.713px] w-[76.865px] flex-shrink-0 bg-[#E9EDF8]" />
            <div className="relative ml-3 flex h-[76.783px] w-[220.344px] flex-shrink-0 items-center rounded-[4.713px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
              <div className="flex h-[64.175px] w-[210.344px] flex-shrink-0 flex-col justify-center rounded-[4.713px] border-[0.363px] border-[#79B1E6] bg-white px-[9.202px] pr-0 shadow-[0_13.053px_51.485px_0_rgba(6,11,19,0.06),0_13.053px_34.807px_0_rgba(109,80,224,0.03)]">
                <p className="bg-gradient-to-r from-[#000000] via-[#000000] to-[#3099FF] bg-clip-text font-[Arimo] text-[16.574px] font-normal leading-[23.677px] text-transparent">
                  {tab.result}
                </p>
                <p className="font-[Arimo] text-[11.818px] font-normal leading-[16.882px] text-[#6A7282]">
                  {tab.result2}
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-[56.199px] w-[152.28px] flex-col items-start gap-[5.507px] rounded-[11.013px] border-[0.551px] border-[#0EA5E9] bg-white px-[5.564px] pt-[11.564px] pb-[0.551px]">
            <p className="bg-gradient-to-r from-black to-[#2EB5F2] bg-clip-text text-[10.152px] font-normal leading-[11.013px] text-transparent">
              {tab.badge2}
            </p>
            <div className="flex items-center gap-2">
              <p className="font-[Arimo] text-[9.494px] font-normal leading-[13.563px] text-[#FF6900]">
                ⟨/⟩
              </p>
              <p className="text-[9.636px] font-bold leading-[13.766px] text-[#0A0A0A]">
                {tab.badge2line}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GsapAccordion: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelsRef = useRef<HTMLElement[]>([]);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || !panelsRef.current.length) return;

    const panels = panelsRef.current;
    const bodies = panels.map((panel) =>
      panel.querySelector(".gsap-accordion__body")
    );

    const setActivePanel = (index: number) => {
      activeIndexRef.current = index;
      panels.forEach((panel, i) => {
        const isActive = i === index;
        gsap.to(panel, {
          height: isActive ? "70vh" : "8vh",
          duration: 0.9,
          ease: "power3.out",
        });
        const body = bodies[i];
        if (body) {
          gsap.to(body, {
            autoAlpha: isActive ? 1 : 0,
            y: isActive ? 0 : 32,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });
    };

    const ctx = gsap.context(() => {
      setActivePanel(0);

      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",
        end: () => "+=" + window.innerHeight * accordionItems.length * 0.9,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const nextIndex = Math.min(
            accordionItems.length - 1,
            Math.floor(self.progress * accordionItems.length + 0.3)
          );
          if (nextIndex !== activeIndexRef.current) {
            setActivePanel(nextIndex);
          }
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gsap-accordion relative flex w-full items-center justify-center bg-white px-4 py-24 text-neutral-900"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="text-center">
      
        </div>

        <div className="relative mt-8 flex flex-col gap-2">
          {accordionItems.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => {
                if (el) panelsRef.current[index] = el;
              }}
              className="accordion-panel relative flex h-[12vh] flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white px-6 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-[box-shadow] duration-500"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-60`}
              />
              <header className="flex flex-1 items-center gap-4 text-left">
                <span className="flex gap-1">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </span>
                <Lock className="h-3 w-3 text-gray-400" />
                <p className="text-lg font-medium text-slate-900">
                  {item.heading}
                </p>
              </header>
              <AccordionCardBody tab={item.tab} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GsapAccordion;


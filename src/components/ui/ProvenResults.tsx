"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import InnovatorComponent from "./InnovatorComponent";
import BeyondCodeSection from "./BeyondCodeSection";

const cards = [
  {
    id: 1,
    title: "Chemco",
    subtitle: "Data management",
    description:
      "In the highly competitive landscape of pharmaceutical retail in India, an...",
    color: "from-[#0B0E1A] to-[#1A1E2E]",
    accent: "bg-[#2F3BF2]",
    image: "/images/ProvenResults/chemco.png",
    imageSec: "/images/Cammi/chemco.jpg",
  },
  {
    id: 2,
    title: "Medchart+",
    subtitle: "Healthcare",
    description: "In the dynamic landscape of pharmaceutical services and...",
    color: "from-[#0C0E20] to-[#15233C]",
    accent: "bg-[#4663FF]",
    image: "/images/ProvenResults/medcharts.png",
    imageSec: "/images/Cammi/medcharts.png",
  },
  {
    id: 3,
    title: "Company",
    subtitle: "Realestate business",
    description:
      "In the ever-evolving landscape of real estate technology, organizations face...",
    color: "from-[#342A00] to-[#624A00]",
    accent: "bg-[#F2B705]",
    image: "/images/ProvenResults/company.png",
    imageSec: "/images/Cammi/company.png",

    audio: true,
  },
];

const tabs = ["Business", "Development", "Design", "DevOps"];

export default function ProvenResults() {
  const [activeTab, setActiveTab] = useState("Business");

  return (
    <>
      <div id="services" className="w-full text-white py-16 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto space-y-10">
          {/* Header */}
          <div className="flex flex-col md:flex-col  md:justify-between gap-6">
            <div className="flex  flex-col items-center justify-center">
              <div
                className="inline-flex items-center justify-center text-sm font-medium mb-4"
                style={{
                  width: "118px",
                  height: "24px",
                  borderRadius: "6px",
                  backgroundColor: "#0367FC",
                  color: "#ffff",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  textAlign: "center",
                  fontStyle: "normal",
                  boxShadow:
                    "0px 0px 0px 1px #E8E6F0, 0px 1px 1px 0px #0D0C100A",
                }}
              >
                Case Studies
              </div>
              <h2 className="text-[72px] font-[400] leading-[80px] tracking-[-1.44px] text-center text-black font-[SF Pro]">
                Proven Results
              </h2>

              <p className=" text-center text-black font-[SF Pro] text-[18px] font-[274] leading-[28px] mt-2 w-[650px] mx-auto">
                From telecom giants to fintech startups, Kairech delivers
                solutions that simplify workflows, accelerate launches, and
                create measurable business outcomes.
              </p>
            </div>
            <div className="flex items-center justify-between  px-4 py-2 w-[100%] max-w-[100%] ">
              {/* Tabs (Left Side) */}

              <div
                className="flex justify-center items-center gap-1 self-stretch 
  rounded-[16px] bg-[linear-gradient(100deg,#E1F6BF_4.87%,#ADDA65_75.88%)] 
  border-t border-r  border-[rgba(255,255,255,0.06)] 
  shadow-[inset_0.25px_1.25px_0_0.75px_rgba(255,255,255,0.10)]"
              >
                {" "}
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-[16px] font-sm transition-all ${
                      activeTab === tab
                        ? "text-white font-sm"
                        : "text-black hover:text-white"
                    }`}
                    style={{
                      height: "48px",
                      background:
                        activeTab === tab
                          ? "radial-gradient(51.07% 92.4% at 51% 7.61%, #3282FA 0%, #025CE2 100%)"
                          : undefined,
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Browse More (Right Side) */}
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-sm font-medium cursor-pointer text-[#9C9C9D] transition">
                  Browse thousands more →
                </span>
                <div className="flex gap-2">
                  <button
                    className="flex justify-center items-center self-stretch 
  px-[21px] pt-[21px] pb-[20px] 
  rounded-[86px] 
  bg-[linear-gradient(137deg,#E1F0F2_4.87%,#ECF3FF_75.88%)] 
  border-t border-r border-l border-[rgba(255,255,255,0.06)] 
  shadow-[inset_0.25px_1.25px_0_0.75px_rgba(255,255,255,0.10)] 
  transition hover:brightness-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.25 12.25L5.75 8L10.25 3.75"
                        stroke="#6A6B6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  {/* <button className="w-[58px] h-[57px] flex items-center justify-center rounded-[86px] border border-white/10 bg-black opacity-100 hover:bg-black/80 transition"> */}
                  <button
                    className="flex justify-center items-center self-stretch 
  px-[21px] pt-[21px] pb-[20px] 
  rounded-[86px] 
  bg-[linear-gradient(137deg,#E1F0F2_4.87%,#ECF3FF_75.88%)] 
  border-t border-r border-l border-[rgba(255,255,255,0.06)] 
  shadow-[inset_0.25px_1.25px_0_0.75px_rgba(255,255,255,0.10)] 
  transition hover:brightness-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path
                        d="M0.75 0.75L5.25 5L0.75 9.25"
                        stroke="#0367FC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Cards Section */}
          {/* <div className="relative w-[368px] h-[518px] bg-white rounded-[24px] shadow-lg border border-gray-50">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white shadow-xl flex items-center justify-center">
                <span className="">
                  <img
                    src="/images/ProvenResults/chemco.png"
                    // alt={tab.clientInitial}
                    className="w-12 h-12 rounded-full"
                  />
                </span>
              </div>
            </div>
            <div className="mt-10 pb-5 flex flex-col items-center  ">
              <p className="text-[#0D0C10] text-center font-[600] text-[28px] leading-[36.4px] tracking-[-0.28px] font-[Bricolage Grotesque]">
                Chemco
              </p>

              <p className="text-[#0D0C10] mt-1 text-center font-[400] text-[28px] leading-[36.4px] tracking-[-0.28px] font-[Bricolage Grotesque]">
                Data management
              </p>

              <p className="text-[#0D0C10] w-[304px] mt-1 text-center font-[400] text-[16px] leading-[24px] mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button
                className="flex justify-center items-center w-[312px] h-[36px] px-0 py-[10px] rounded-[8px] 
             bg-white text-[#0D0C10] text-[12px] font-[500] leading-[20px] font-['Inter'] 
             shadow-[0_1px_1px_0_rgba(13,12,16,0.04),0_0_0_1px_#E8E6F0] mt-5"
              >
                Learn More
              </button>
              <div className="mt-5 px-2">
                <img
                  className="w-462px h-[259px] rounded-[20px]"
                  src="/images/Cammi/chemco.jpg"
                />
              </div>
            </div>
          </div> */}
          <div className="grid md:grid-cols-3  gap-8 justify-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative w-[368px] h-[518px] bg-white rounded-[24px] shadow-lg border border-gray-50"
              >
                {/* Logo */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 rounded-[12px]  border-4 border-white shadow-xl flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10 pb-5 flex flex-col items-center">
                  <p className="text-[#0D0C10] text-center font-[600] text-[28px] leading-[36.4px] tracking-[-0.28px] ">
                    {card.title}
                  </p>

                  <p className="text-[#0D0C10] mt-1 text-center font-[400] text-[28px] leading-[36.4px] tracking-[-0.28px] ">
                    {card.subtitle}
                  </p>

                  <p className="text-[#0D0C10] w-[304px] mt-3 text-center font-[400] text-[16px] leading-[24px]">
                    {card.description}
                  </p>

                  <button
                    className="flex justify-center items-center w-[312px] h-[36px] px-0 py-[10px] rounded-[8px] 
             bg-white text-[#0D0C10] text-[12px] font-[500] leading-[20px] 
             shadow-[0_1px_1px_0_rgba(13,12,16,0.04),0_0_0_1px_#E8E6F0] mt-5"
                  >
                    Learn More
                  </button>

                  <div className="mt-5 px-2">
                    <img
                      className="w-[100%] h-[259px] rounded-[20px] object-cover"
                      src={card.imageSec}
                      alt={card.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          );
        </div>
      </div>
      {/* <InnovatorComponent /> */}
      {/* <BeyondCodeSection /> */}
    </>
  );
}

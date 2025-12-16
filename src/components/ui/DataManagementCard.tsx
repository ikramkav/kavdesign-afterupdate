"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MatchInput from "./MatchInput";

export default function DataManagementSection() {
  return (
    <section className="w-full flex flex-col items-center text-center py-20 bg-[#0B0B0B] text-white">
      {/* ===== Header Text ===== */}
      <div className="max-w-[1286px] mb-16">
        <h1 className="font-[SF Pro] text-[72px] leading-[80px] tracking-[-0.02em] font-normal">
          A Venture Studio, Not Just Another Dev Shop
        </h1>
        <p className="font-[SF Pro] text-[20px] leading-[100%] text-[#bdbdbd] mt-4">
          For AI teams, Scale Data Engine improves your ecosystem by improving
          your data.
        </p>
      </div>

      {/* ===== Content Card ===== */}
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center bg-[#0C0C0C] rounded-[32px] border border-[#1C1C1C] p-8 w-[1200px]">
        {/* --- Left Side: AI Card --- */}
        <div className="w-[609px] h-[467px] rounded-[24px] border border-[#2A2A2A] bg-[#0B0B0B] flex flex-col overflow-hidden">
          <div className="flex flex-col justify-between items-center gap-4 p-4 border-b border-[#1C1C1C]">
            <h2 className="text-[18.6px] leading-[30.69px] font-medium font-[SF Pro] text-white">
              Data management agent
            </h2>

            <div className="flex items-center justify-between w-fit max-w-[620px] bg-[#1a1a1a] rounded-full px-3 py-2 border border-white/10 shadow-sm">
              {/* Left side: avatar + text */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/dataManagement/DM-IMG-2.png"
                  alt="avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <p className="text-[15px] text-white/80">
                  Why is human feedback necessary for accurate llm responses?
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative bg-[#101010]">
            <Image
              src="/images/dataManagement/DM-IMG-1.png"
              alt="Data management preview"
              width={609}
              height={300}
              className="object-cover w-full h-[320px]"
            />
          </div>
        </div>

        {/* --- Right Side: Description --- */}
        <div className="flex flex-col text-left w-[480px]">
          <h3 className="text-[40px] font-medium leading-[48px]">
            Data management
          </h3>
          <p className="text-[18px] text-[#FF9E45] mt-1 font-medium">
            Powering the next generation of{" "}
            <span className="text-[#FF6B00]">Generative AI</span>
          </p>
          <p className="text-[16px] text-[#bdbdbd] mt-4 leading-[24px]">
            Analytics tool offering insights and optimisations for the telecom
            industry
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1C1C1C] flex items-center justify-center text-sm">
                📊
              </div>
              <span className="text-[16px] text-white/90">
                Reduced Truck Rolls
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1C1C1C] flex items-center justify-center text-sm">
                ✅
              </div>
              <span className="text-[16px] text-white/90">
                Ensure KPI Compliance
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center border border-[#2A2A2A] rounded-full overflow-hidden w-full">
            <MatchInput />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import SupplyChainMVP from "./SupplyChainMVP";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/redux/store";
const PharmaSupplyBanner: React.FC = () => {
  const { promptText, heading, paragraph, subParagraph } = useSelector(
    (state: RootState) => state.prompt
  );
  return (
    <>
      <div className="absolute  z-0 w-[450px] h-[200px] rounded-full opacity-20 bg-[#0367FC] blur-[125px] top-[-40] left-1/2 -translate-x-1/2" />

      <div className="bg-white mt-10 text-black py-16 px-4 flex flex-col items-center text-center ">
        {/* Heading */}
        <h1 className="font-sans font-normal text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-snug sm:leading-[60px] md:leading-[72px] lg:leading-[80px] max-w-[90%] md:max-w-[800px] lg:max-w-[1040px] tracking-tight">
          {heading}
          {/* Digitizing your pharma supply & distribution chain starts here. */}
        </h1>
        {/* Subtext */}
        <p className="font-sans font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed tracking-normal max-w-[90%] md:max-w-[822px] mt-6">
          {/* You mentioned the need for warehouse stock management, order-taking,
          and agent monitoring apps. Here’s how we can turn that into a tailored
          solution. */}

          {paragraph}
        </p>
        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <div className="pr-6 hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1
            px-5 py-2.5 text-white font-[600] text-[14px] leading-[24px]
            rounded-[39px] bg-gradient-to-br from-[#025ADC] to-[#3282FA]
            shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)]
            transition-transform duration-200 hover:scale-[1.05]"
            >
              Explore my MVP
            </Link>
          </div>
          <button
            className="inline-flex items-center justify-center gap-1
            px-5 py-2.5 text-white font-[600] text-[14px] leading-[24px]
            rounded-[39px] bg-gradient-to-br from-[#025ADC] to-[#3282FA]
            shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)]
            transition-transform duration-200 hover:scale-[1.05]"
          >
            Consult an Expert
          </button>
        </div>
        <div className="absolute left-10  -translate-y-[-180px] w-[227px] h-[227px]">
          <img
            src="/images/Logo/Kavtech-Gif.gif"
            alt="Animated GIF"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <SupplyChainMVP />
    </>
  );
};

export default PharmaSupplyBanner;

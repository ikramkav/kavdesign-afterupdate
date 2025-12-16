"use client";
import React from "react";
import { Lock, Heart } from "react-feather";

export default function SingleUnicornCard() {
  const tab = {
    url: "Kavtech.com | Medical Industry.com",
    clientName: "Chemco ",
    clientInitial: "C",
    request: "I want system to manage inventory...",
    result: "5x Better Results on ",
    result2: "Built unified data system",
    badge1: "Integrated Power BI ",
    badge2line: "Dashboards",
    badge1Bg: "bg-pink-100 text-pink-700 border-pink-200",
    badge2: "Automated orders & inventory",
    badge2Bg: "bg-green-100 text-green-700 border-green-200",
    icon: <Heart className="w-5 h-5 text-red-500" fill="currentColor" />,
  };

  return (
    <div className="w-[992px] -[456px] max-w-5xl mx-auto rounded-[24px] border-[10px] border-white shadow-[0_20px_56px_0_rgba(69,65,113,0.16)]  font-sans">
      {/* Browser Header */}
      <div className="flex items-center gap-2 bg-white text-sm p-3 ">
        <span className="flex gap-1">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </span>
        <Lock className="h-3 w-3 text-gray-400" />
        <span className="font-medium text-gray-700 truncate">{tab.url}</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col  items-center w-[970px] h-[394px] bg-[#F3F6F8]  gap-10 lg:gap-10">
        <div className="mt-5">
          <div className="flex flex-col justify-center w-[558px]  shrink-0 text-center font-poppins text-[23.838px] font-semibold leading-[46.314px] bg-gradient-to-r from-black to-[#2E69C3] bg-clip-text text-transparent">
            We build the Intelligence that builds Unicorns
          </div>
        </div>
        <div className="flex gap-17 ">
          {/* LEFT – Client */}
          <div className="flex flex-col items-center text-center">
            {/* Client Card */}
            <div className="relative w-[210px] h-[85px] bg-white rounded-xl shadow-lg border border-gray-50">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white shadow-xl flex items-center justify-center">
                  <span className="">
                    <img
                      src="/images/ProvenResults/chemco.png"
                      alt={tab.clientInitial}
                      className="w-12 h-12 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="mt-10 pb-5">
                <p className="text-[#0D0C10] text-center font-[600] font-[13.208px] leading-[13.68px] tracking-[-0.132px] font-[Bricolage Grotesque]">
                  {tab.clientName}
                </p>

                <p className="text-[#0D0C10] mt-1 text-center font-[400] text-[13px] leading-[13.68px] tracking-[-0.132px] font-[Bricolage Grotesque]">
                  Ireland
                </p>
              </div>
            </div>

            {/* Request Bubble */}
            {/* <div className="relative mt-6 max-w-[223.344px] ">
             */}
            {/* <div className="relative mt-6 max-w-[223.344px] rounded-[362.209px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_-0.725px_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgба(102,109,128,0.20)]"> */}

            <div className="relative mt-2 mb-5  w-[250.344px] h-[42.783px] flex-shrink-0 rounded-[362.209px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] flex items-center px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgба(128,136,151,0.16),0_0.363px_0.725px_0_rgба(102,109,128,0.2)]">
              <div className="flex items-center px-[9.202px] py-[2.175px] w-[230.379px] h-[29.731px] flex-shrink-0 rounded-[362.209px] border-[0.725px] border-[#72B3FB] bg-white shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_-0.725px_rgба(128,136,151,0.16),0_0.363px_0.725px_0_rgба(102,109,128,0.20)]">
                <p className="flex flex-col justify-center w-[201.289px] h-[9.627px] flex-shrink-0 text-[#3A85F6] font-[Inter] text-[10.502px] font-[500] leading-[10.502px] tracking-[-0.079px]">
                  {tab.request}
                </p>
              </div>

              {/* Small pointer / arrow */}
              <div className="flex-shrink-0 w-[76.865px] h-[4.713px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="5"
                  viewBox="0 0 77 5"
                  fill="none"
                >
                  {/* Background Bar */}
                  <rect width="76.8651" height="4.71342" fill="#E9EDF8" />

                  {/* Active / Gradient Part */}
                  <path
                    d="M19.2172 2.33261C19.2172 1.84554 19.612 1.45068 20.0991 1.45068H44.3433C44.884 1.45068 45.3223 1.88897 45.3223 2.42963C45.3223 3.09043 44.7866 3.62611 44.1258 3.62611H20.5107C19.7963 3.62611 19.2172 3.04699 19.2172 2.33261Z"
                    fill="url(#paint0_linear_0_609)"
                  />

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_609"
                      x1="19.2172"
                      y1="2.5384"
                      x2="45.3223"
                      y2="2.5384"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EEF2FC" />
                      <stop offset="1" stopColor="#0778E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Connector Line with Heart */}
            <div className="flex items-center w-full pl-15 ">
              {/* Center Image */}

              <div className="w-[74px] h-[75px]  ">
                <span className="">
                  <img
                    src="/images/ProvenResults/heart.png"
                    alt={tab.clientInitial}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* CENTER – Pie Chart with Logo */}
          <div className="relative h-40 w-40 flex-shrink-0">
            <div className="absolute  rounded-full w-[229px]  h-[229px] border-20  border-[#1A3D71] shadow-xl " />
            <div className="absolute inset-2 flex items-center ml-3 mt-3 w-[189px] h-[189px] justify-center items-center rounded-full  bg-white from-blue-400 to-blue-600">
              <div className="w-[90px] h-[90px] mr-2 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 356 356"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d="M272.47 328.887C245.091 346.065 212.706 356 178 356C79.6933 356 0 276.307 0 178C0 120.418 27.3415 69.2208 69.751 36.6855L272.47 328.887Z"
                    fill="url(#paint0_linear_1_76)"
                  />
                  <path
                    d="M355.584 190.212C352.372 237.617 330.602 279.93 297.478 309.943L211.595 186.15L355.584 190.212Z"
                    fill="url(#paint1_linear_1_76)"
                  />
                  <path
                    d="M258.378 19.1416C310.893 45.7656 348.426 97.662 354.976 158.83L208.628 154.702L258.378 19.1416Z"
                    fill="url(#paint2_linear_1_76)"
                  />
                  <path
                    d="M178 0C195.822 0 213.031 2.62171 229.266 7.49609L180.271 140.999L96.2266 19.8564C120.713 7.16942 148.519 0 178 0Z"
                    fill="url(#paint3_linear_1_76)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_76"
                      x1="356"
                      y1="199"
                      x2="0"
                      y2="199"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1E73F3" />
                      <stop offset="1" stopColor="#D5FA98" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_76"
                      x1="356"
                      y1="199"
                      x2="0"
                      y2="199"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1E73F3" />
                      <stop offset="1" stopColor="#D5FA98" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_76"
                      x1="356"
                      y1="199"
                      x2="0"
                      y2="199"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1E73F3" />
                      <stop offset="1" stopColor="#D5FA98" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_76"
                      x1="356"
                      y1="199"
                      x2="0"
                      y2="199"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1E73F3" />
                      <stop offset="1" stopColor="#D5FA98" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT – Results */}
          <div className="flex flex-col items-center lg:items-end space-y-2 max-w-xs">
            {/* Result Box */}
            <div className="flex flex-col items-start gap-[5.507px] w-[152.28px] h-[56.199px] flex-shrink-0 px-[11.564px] pt-[11.564px] pb-[0.551px] rounded-[11.013px] border-[0.551px] border-[#0EA5E9] bg-white">
              <p className="w-[106.596px] h-[15.24px] flex-shrink-0 text-[10.152px] font-[400] leading-[11.013px]  bg-gradient-to-r from-black to-[#2EB5F2] bg-clip-text text-transparent">
                {tab.badge1}
              </p>
              <div className="flex items-center gap-2">
                {/* Colored Dot */}
                <div className="w-[8.26px] h-[8.26px] rounded-full bg-[#FB64B6] flex-shrink-0"></div>

                {/* Badge Text */}
                <p className="w-[106.596px] h-[11.24px] flex-shrink-0 text-[#0A0A0A] font-[Inter] text-[9.636px] font-[700] leading-[13.766px]">
                  {tab.badge2line}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center ">
              {/* Small pointer / arrow */}
              <div className="flex-shrink-0 w-[76.865px] h-[2.713px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="5"
                  viewBox="0 0 77 5"
                  fill="none"
                >
                  {/* Background Bar */}
                  <rect width="76.8651" height="4.71342" fill="#E9EDF8" />

                  {/* Active / Gradient Part */}
                  <path
                    d="M19.2172 2.33261C19.2172 1.84554 19.612 1.45068 20.0991 1.45068H44.3433C44.884 1.45068 45.3223 1.88897 45.3223 2.42963C45.3223 3.09043 44.7866 3.62611 44.1258 3.62611H20.5107C19.7963 3.62611 19.2172 3.04699 19.2172 2.33261Z"
                    fill="url(#paint0_linear_0_609)"
                  />

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_609"
                      x1="19.2172"
                      y1="2.5384"
                      x2="45.3223"
                      y2="2.5384"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EEF2FC" />
                      <stop offset="1" stopColor="#0778E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative mt-2 mb-2 w-[220.344px] h-[76.783px] flex-shrink-0 rounded-[4.713px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] flex items-center px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgба(128,136,151,0.16),0_0.363px_0.725px_0_rgба(102,109,128,0.2)]">
                <div className="flex flex-col justify-center flex-shrink-0  flex-shrink-0  w-[210.344px] h-[64.175px] px-[9.202px] pr-0 rounded-[4.713px] border-[0.363px] border-[#79B1E6] bg-white shadow-[0_13.053px_51.485px_0_rgबा(6,11,19,0.06),0_13.053px_34.807px_0_rgба(109,80,224,0.03)]">
                  <p className="font-[Arimo] text-[16.574px] font-[400] leading-[23.677px] bg-gradient-to-r from-[#000000] via-[#000000] to-[#3099FF] bg-clip-text text-transparent">
                    {tab.result}
                  </p>
                  <p className="flex flex-col justify-center flex-shrink-0 font-[Arimo] text-[11.818px] font-[400] leading-[16.882px] text-[#6A7282]">
                    {tab.result2}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[5.507px] w-[152.28px] h-[56.199px] flex-shrink-0 px-[5.564px] pt-[11.564px] pb-[0.551px] rounded-[11.013px] border-[0.551px] border-[#0EA5E9] bg-white">
              <p className="w-[152.596px] h-[15.24px] flex-shrink-0 text-[10.152px] font-[400] leading-[11.013px]  bg-gradient-to-r from-black to-[#2EB5F2] bg-clip-text text-transparent">
                {tab.badge2}
              </p>
              <div className="flex items-center gap-2">
                {/* Colored Dot */}
                <p className="text-[#FF6900] font-[Arimo] text-[9.494px] font-[400] leading-[13.563px]">
                  ⟨/⟩
                </p>

                {/* Badge Text */}
                <p className="w-[106.596px] h-[11.24px] flex-shrink-0 text-[#0A0A0A] font-[Inter] text-[9.636px] font-[700] leading-[13.766px]">
                  {tab.badge2line}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import React from "react";
import { Lock, Heart } from "react-feather";

export const chemcoTab = {
  url: "Chemco | Medcharts.com",
  clientName: "Chemco",
  clientInitial: "C",
  request: "I want system to manage inventory...",
  result: "5x Better Results on ",
  result2: "Built unified data system",
  badge1: "Integrated Power BI ",
  badge2line: "Dashboards",
  badge1Bg: "bg-pink-100 text-pink-700 border-pink-200",
  badge2: "Automated orders & inventory",
  badge2Bg: "bg-green-100 text-green-700 border-green-200",
  icon: <Heart className="w-5 h-5 text-red-500" fill="currentColor" />,
};

export type TabCardData = typeof chemcoTab;

interface TabCardBodyProps {
  tab?: TabCardData;
}

export function TabCardBody({ tab = chemcoTab }: TabCardBodyProps) {
  return (
    <div className="flex w-full flex-col items-center gap-10 rounded-b-[24px] bg-[#F3F6F8] px-6 pb-10 pt-8 lg:gap-10">
      <div className="mt-2 text-center">
        <div className="mx-auto flex max-w-[560px] flex-col justify-center font-poppins text-[23.8px] font-semibold leading-[1.8] bg-gradient-to-r from-black to-[#2E69C3] bg-clip-text text-transparent">
          We build the Intelligence that builds Unicorns
        </div>
      </div>
      <div className="flex flex-col gap-10 xl:flex-row xl:gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-[85px] w-[210px] rounded-xl border border-gray-50 bg-white shadow-lg">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl">
                <span>
                  <img
                    src="/images/ProvenResults/chemco.png"
                    alt={tab.clientInitial}
                    className="h-12 w-12 rounded-full"
                  />
                </span>
              </div>
            </div>
            <div className="mt-10 pb-5">
              <p className="font-[Bricolage Grotesque] text-[13.2px] font-semibold leading-[13.68px] tracking-[-0.132px] text-[#0D0C10]">
                {tab.clientName}
              </p>
              <p className="mt-1 font-[Bricolage Grotesque] text-[13px] font-normal leading-[13.68px] tracking-[-0.132px] text-[#0D0C10]">
                Ireland
              </p>
            </div>
          </div>

          <div className="relative mt-4 mb-5 flex h-[42.783px] w-[250.344px] flex-shrink-0 items-center rounded-[362.209px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
            <div className="flex h-[29.731px] w-[230.379px] flex-shrink-0 items-center rounded-[362.209px] border-[0.725px] border-[#72B3FB] bg-white px-[9.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_-0.725px_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
              <p className="flex w-full flex-col justify-center font-[Inter] text-[10.502px] font-medium leading-[10.502px] tracking-[-0.079px] text-[#3A85F6]">
                {tab.request}
              </p>
            </div>

            <div className="flex h-[4.713px] w-[76.865px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="5"
                viewBox="0 0 77 5"
                fill="none"
              >
                <rect width="76.8651" height="4.71342" fill="#E9EDF8" />
                <path
                  d="M19.2172 2.33261C19.2172 1.84554 19.612 1.45068 20.0991 1.45068H44.3433C44.884 1.45068 45.3223 1.88897 45.3223 2.42963C45.3223 3.09043 44.7866 3.62611 44.1258 3.62611H20.5107C19.7963 3.62611 19.2172 3.04699 19.2172 2.33261Z"
                  fill="url(#paint0_linear_0_609)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_609"
                    x1="19.2172"
                    y1="2.5384"
                    x2="45.3223"
                    y2="2.5384"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EEF2FC" />
                    <stop offset="1" stopColor="#0778E0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex w-full items-center justify-center pl-4">
            <div className="h-[75px] w-[74px]">
              <img
                src="/images/ProvenResults/heart.png"
                alt={tab.clientInitial}
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex-shrink-0">
          <div className="h-[229px] w-[229px] rounded-full border-[10px] border-[#1A3D71] shadow-xl" />
          <div className="absolute inset-3 flex h-[195px] w-[195px] items-center justify-center rounded-full bg-white">
            <div className="h-[160px] w-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 356 356"
                fill="none"
                className="h-full w-full"
              >
                <path
                  d="M272.47 328.887C245.091 346.065 212.706 356 178 356C79.6933 356 0 276.307 0 178C0 120.418 27.3415 69.2208 69.751 36.6855L272.47 328.887Z"
                  fill="url(#paint0_linear_1_76)"
                />
                <path
                  d="M355.584 190.212C352.372 237.617 330.602 279.93 297.478 309.943L211.595 186.15L355.584 190.212Z"
                  fill="url(#paint1_linear_1_76)"
                />
                <path
                  d="M258.378 19.1416C310.893 45.7656 348.426 97.662 354.976 158.83L208.628 154.702L258.378 19.1416Z"
                  fill="url(#paint2_linear_1_76)"
                />
                <path
                  d="M178 0C195.822 0 213.031 2.62171 229.266 7.49609L180.271 140.999L96.2266 19.8564C120.713 7.16942 148.519 0 178 0Z"
                  fill="url(#paint3_linear_1_76)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_76"
                    x1="356"
                    y1="199"
                    x2="0"
                    y2="199"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E73F3" />
                    <stop offset="1" stopColor="#D5FA98" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_76"
                    x1="356"
                    y1="199"
                    x2="0"
                    y2="199"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E73F3" />
                    <stop offset="1" stopColor="#D5FA98" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_76"
                    x1="356"
                    y1="199"
                    x2="0"
                    y2="199"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E73F3" />
                    <stop offset="1" stopColor="#D5FA98" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_76"
                    x1="356"
                    y1="199"
                    x2="0"
                    y2="199"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E73F3" />
                    <stop offset="1" stopColor="#D5FA98" />
                  </linearGradient>
                </defs>
              </svg>
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
            <div className="h-[2.713px] w-[76.865px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="5"
                viewBox="0 0 77 5"
                fill="none"
              >
                <rect width="76.8651" height "4.71342" fill="#E9EDF8" />


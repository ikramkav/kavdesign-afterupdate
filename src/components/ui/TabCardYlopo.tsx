"use client";
import React from "react";
import { Lock, Heart } from "react-feather";

export default function SingleUnicornCardYlopo() {
  const tab = {
    url: "Kavtech.com | Medical Industry.com",
    clientName: "YLOPO ",
    clientScndName: "USA ",

    clientInitial: "C",
    request: "Need for",
    Scndrequest: " Real-Time IDX Integration.",
    result: "AI Call Agents & Call Grading ",
    // result2: "Built unified data system",
    badge1: " 2 Way Marketing Platform Integration  ",
    // badge2line: "Dashboards",
    badge1Bg: "bg-pink-100 text-pink-700 border-pink-200",
    badge2: " Data Warehouse Implementation ",
    badge2Bg: "bg-green-100 text-green-700 border-green-200",
    icon: <Heart className="w-5 h-5 text-red-500" fill="currentColor" />,
    image: "/images/Ylopo/LogoYlopo.png",
    image2: "/images/Ylopo/ScndImage.png",
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
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div
                  className="
    w-[59px] h-[24px] flex-shrink-0
    rounded-[10px] border-b border-black/26
    bg-white shadow-[0_4px_7px_0_rgba(0,0,0,0.25)]
    flex items-center justify-center
  "
                >
                  <img
                    src={tab.image}
                    alt={tab.clientInitial}
                    className="w-[51px] h-[14px] object-cover rounded-[10px]"
                  />
                </div>
              </div>

              <div className="mt-10 pb-5">
                <p className="text-[#0D0C10] text-center font-[600] font-[13.208px] leading-[13.68px] tracking-[-0.132px] font-[Bricolage Grotesque]">
                  {tab.clientName}
                </p>

                <p className="text-[#0D0C10] mt-1 text-center font-[400] text-[13px] leading-[13.68px] tracking-[-0.132px] font-[Bricolage Grotesque]">
                  {tab.clientScndName}
                </p>
              </div>
            </div>

            {/* Request Bubble */}
            {/* <div className="relative mt-6 max-w-[223.344px] ">
             */}
            {/* <div className="relative mt-6 max-w-[223.344px] rounded-[362.209px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_-0.725px_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.20)]"> */}

            <div className="relative mt-2 mb-5  w-[250.344px] h-[42.783px] flex-shrink-0 rounded-[362.209px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] flex items-center px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
              <div className="flex items-center px-[9.202px] py-[2.175px] w-[230.379px] h-[29.731px] flex-shrink-0 rounded-[362.209px] border-[0.725px] border-[#72B3FB] bg-white shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_-0.725px_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.20)]">
                <p className="w-[157.922px] h-[7.087px] flex-shrink-0 font-inter text-[9.5px] font-medium leading-[10.502px] tracking-[-0.079px]">
                  <span className="text-[#25549E]">{tab.request}</span>
                  <span className="text-[#000000]">{tab.Scndrequest}</span>
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
                  <img src={tab.image2} alt={tab.clientInitial} />
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
            <div className="flex flex-col items-start justify-center gap-[5.507px] w-[200.28px] h-[56.199px] flex-shrink-0 px-[11.564px] pt-[11.564px] pb-[0.551px] rounded-[11.013px] border-[0.551px] border-[#0EA5E9] bg-white">
              <p className="w-[200.596px] h-[15.24px] flex-shrink-0 text-[10.152px] font-[400] leading-[11.013px]  bg-gradient-to-r from-black to-[#2EB5F2] bg-clip-text text-transparent">
                {tab.badge1}
              </p>
              <div className="flex items-center  gap-2">
                {/* Colored Dot */}
                {/* <div className="w-[8.26px] h-[8.26px] rounded-full bg-[#FB64B6] flex-shrink-0"></div> */}

                {/* Badge Text */}
                <p className="w-[106.596px] h-[11.24px] flex-shrink-0 text-[#0A0A0A] font-[Inter] text-[9.636px] font-[700] leading-[13.766px]">
                  {/* {tab.badge2line} */}
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
              <div className="relative mt-2 mb-2 w-[220.344px] h-[76.783px] flex-shrink-0 rounded-[4.713px] bg-gradient-to-r from-[#EBEFFA] to-[#E9EDF8] flex items-center px-[5.202px] py-[2.175px] shadow-[0_0_0_0.544px_#E9EBF1,0_1.088px_2.538px_0_rgba(128,136,151,0.16),0_0.363px_0.725px_0_rgba(102,109,128,0.2)]">
                <div className="flex flex-col justify-center flex-shrink-0  flex-shrink-0  w-[210.344px] h-[64.175px] px-[9.202px] pr-0 rounded-[4.713px] border-[0.363px] border-[#79B1E6] bg-white shadow-[0_13.053px_51.485px_0_rgba(6,11,19,0.06),0_13.053px_34.807px_0_rgba(109,80,224,0.03)]">
                  <p className="font-[Arimo] text-[16.574px] font-[400] leading-[23.677px] bg-gradient-to-r from-[#000000] via-[#000000] to-[#3099FF] bg-clip-text text-transparent">
                    {tab.result}
                  </p>
                  <p className="flex flex-col justify-center flex-shrink-0 font-[Arimo] text-[11.818px] font-[400] leading-[16.882px] text-[#6A7282]">
                    {/* {tab.result2} */}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[5.507px] w-[165.28px] h-[56.199px] flex-shrink-0 px-[5.564px] pt-[11.564px] pb-[0.551px] rounded-[11.013px] border-[0.551px] border-[#0EA5E9] bg-white">
              <p className="w-[165.596px] h-[15.24px] flex-shrink-0 text-[10.152px] font-[400] leading-[11.013px]  bg-gradient-to-r from-black to-[#2EB5F2] bg-clip-text text-transparent">
                {tab.badge2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { Lock } from "react-feather";

// interface Tab {
//   id: number;
//   url: string;
//   request: string;
//   result: string;
//   badge1: string;
//   badge1Bg: string;
//   badge2: string;
//   badge2Bg: string;
// }

// const tabs: Tab[] = [
//   {
//     id: 1,
//     url: "Kavtech.com | Real estate.com",
//     request: "I want a CRM to manage properties & leads...",
//     result: "10x Faster Lead Conversion with AI CRM",
//     badge1: "AI-Powered CRM",
//     badge1Bg: "bg-purple-100 text-purple-700",
//     badge2: "Automated Property Matching",
//     badge2Bg: "bg-yellow-100 text-yellow-700",
//   },
//   {
//     id: 2,
//     url: "Kavtech.com | Data management.com",
//     request: "I want unified data across 50+ sources...",
//     result: "Real-time Data Sync & Analytics",
//     badge1: "ETL Automation",
//     badge1Bg: "bg-indigo-100 text-indigo-700",
//     badge2: "Live Data Pipelines",
//     badge2Bg: "bg-teal-100 text-teal-700",
//   },
//   {
//     id: 3,
//     url: "Kavtech.com | Medical Industry.com",
//     request: "I want system to manage inventory...",
//     result: "5x Better Results on Built unified data system",
//     badge1: "Integrated Power BI Dashboards",
//     badge1Bg: "bg-pink-100 text-pink-700",
//     badge2: "Automated orders & inventory System",
//     badge2Bg: "bg-green-100 text-green-700",
//   },
// ];

// export default function SafariStackUpwardTabs() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <div className="relative w-[70vw] h-[80vh] no-scrollbar rounded-[24px] bg-[#F3F6F8] border-[12px] border-white shadow-[0_20px_56px_0_rgba(69,65,113,0.16)]">
//         <div className="relative h-[400vh]">
//           {tabs.map((tab, index) => {
//             const start = index * window.innerHeight * 0.6;
//             const progress = Math.max(0, Math.min((scrollY - start) / 400, 1));

//             // ↑ STACK UPWARD
//             const translateY = -index * 60 + progress * 220; // move up on scroll
//             const scale = 1 - progress * 0.05;
//             const opacity = progress < 0.1 ? progress * 10 : 1;
//             const z = 10 - index; // top card on top

//             return (
//               <div
//                 key={tab.id}
//                 className="sticky top-[15%] transition-all duration-300 ease-out"
//                 style={{
//                   zIndex: z,
//                   transform: `translateY(${translateY}px) scale(${scale})`,
//                   opacity,
//                 }}
//               >
//                 <div className="mx-auto w-[90%] bg-white/95 ring-2 ring-gray-100 px-5 py-4 rounded-3xl shadow-lg relative">
//                   {/* Browser header */}
//                   <div className="flex items-center gap-2 text-sm mb-3">
//                     <span className="flex gap-1">
//                       <span className="h-3 w-3 rounded-full bg-red-500" />
//                       <span className="h-3 w-3 rounded-full bg-yellow-400" />
//                       <span className="h-3 w-3 rounded-full bg-green-500" />
//                     </span>
//                     <Lock className="h-3 w-3 text-gray-400" />
//                     <span className="font-medium text-gray-700 truncate">
//                       {tab.url}
//                     </span>
//                   </div>

//                   {/* Body */}
//                   <div className="p-4 rounded-xl bg-white shadow-inner flex flex-col gap-4">
//                     <p className="text-sm text-gray-600">{tab.request}</p>
//                     <div className="text-center font-semibold text-gray-800 text-base">
//                       {tab.result}
//                     </div>
//                     <div className="flex flex-col gap-2 items-start">
//                       <span
//                         className={`px-3 py-1 text-xs rounded-lg border font-medium ${tab.badge1Bg}`}
//                       >
//                         {tab.badge1}
//                       </span>
//                       <span
//                         className={`px-3 py-1 text-xs rounded-lg border font-medium ${tab.badge2Bg}`}
//                       >
//                         {tab.badge2}
//                       </span>
//                     </div>
//                   </div>

//                   {/* bookmark dots for previous cards */}
//                   {index !== 0 && (
//                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
//                       <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
//                       <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
//                       <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

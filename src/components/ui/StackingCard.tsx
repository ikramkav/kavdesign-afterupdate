"use client";

import Image from "next/image";
import { useState } from "react";

type CaseStudy = {
  id: string;
  heading: string;
  accent: string;
  logo: string;
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
  location: "Pharmaceutical",
  request: "I want system to manage inventory...",
  result: "5x Better Results on ",
  result2: "Built unified data system",
  badge1: "Integrated Power BI ",
  badge2line: "Instant collaboration and complete transparency across all staff.",
  badge2: "Automated orders & inventory",
};

const accordionItems: CaseStudy[] = [
  {
    id: "01",
    heading: "Chemco | Medcharts.com",
    accent: "from-[#fef7f1] via-[#f7eadf] to-[#efe1d6]",
    logo: "/images/main-page-card-icons/chemcopharm.jfif",
    tab: baseTab,
  },
  {
    id: "02",
    heading: "Cammi | LendingOS.com",
    accent: "from-[#fdf2f2] via-[#fbe6e3] to-[#f0dcdc]",
    logo: "/images/main-page-card-icons/chemco.png",
    tab: {
      ...baseTab,
      clientName: "Cammi",
      request: "Digitize unsecured lending pipeline...",
      location:'Marketing'
    },
  },
  {
    id: "03",
    heading: "Ylopo | RealtySuite.ai",
    accent: "from-[#eef7ff] via-[#deeef9] to-[#d0e2f0]",
    logo: "/images/main-page-card-icons/ylopo.png",
    tab: {
      ...baseTab,
      clientName: "Ylopo",
      request: "Need AI CRM for agents & properties...",
      location:'Real Estate'
    },
  },
  {
    id: "04",
    heading: "IMVI | Shipchain.io",
    accent: "from-[#f4f9f4] via-[#e5f4eb] to-[#d8ecdf]",
    logo: "/images/main-page-card-icons/IMVI.png",
    tab: {
      ...baseTab,
      clientName: "IMVI",
      request: "Synchronize global logistics data...",
      location:'Sports'
    },
  },
];

export default function StackingCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === accordionItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? accordionItems.length - 1 : prevIndex - 1
    );
  };

  const item = accordionItems[currentIndex];

  return (
    <div className="w-full bg-white relative align-center ">
      {/* Carousel Item */}
      <div key={item.id} className="relative w-full">
        <div className="w-full">
          <div className="absolute inset-0">
            <Image
              src="/images/main-page-card-icons/cardsbg.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* <div className="absolute inset-0 bottom-10 ">
            <Image
              src="/images/main-page-card-icons/divframer.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div> */}
          <div className="max-w-[1200px] relative py-8 mx-auto">
            <header className="mb-8 flex items-center gap-4 px-6 ms-14 py-4">
              <span className="flex gap-1.5">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500 shadow-md ring-2 ring-red-200" />
                <span className="h-3.5 w-3.5 rounded-full bg-yellow-400 shadow-md ring-2 ring-yellow-200" />
                <span className="h-3.5 w-3.5 rounded-full bg-green-500 shadow-md ring-2 ring-green-200" />
              </span>
              <div className="flex justify-center bg-[#F4F3F8] rounded-[6.21px] p-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M8.23847 16.1449H13.9659C14.8861 16.1449 15.3743 15.6385 15.3743 14.6383V10.2771C15.3743 9.27694 14.8861 8.77687 13.9659 8.77687H8.23847C7.31832 8.77687 6.83008 9.27694 6.83008 10.2771V14.6383C6.83008 15.6385 7.31832 16.1449 8.23847 16.1449ZM7.92549 9.26427H8.92075V7.12476C8.92075 5.52961 9.92853 4.6814 11.0991 4.6814C12.2696 4.6814 13.2899 5.52961 13.2899 7.12476V9.26427H14.279V7.26401C14.279 4.88396 12.7391 3.72559 11.0991 3.72559C9.46533 3.72559 7.92549 4.88396 7.92549 7.26401V9.26427Z"
                      fill="#B3B3BC"
                    />
                  </svg>
                </span>
                <p className="text-[#0D0C10] font-inter text-[13.661px] font-normal leading-[19.871px] tracking-[0.012px]">
                  {item.heading}
                </p>
              </div>
            </header>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-8">
                <div className="relative h-[75.796px] w-[280px] ms-8 rounded-2xl border-2 overflow-hidden z-0">
                  <div className="absolute top-0 right-4 z-10">
                    <Image
                      src="/images/main-page-card-icons/clientarrow.png" 
                      alt=""
                      height={38.318}
                      width={83.001}
                      className="object-cover z-[1]"
                      priority
                    />
                  </div>
                  <Image
                    src="/images/main-page-card-icons/clientcardbg2.png"
                    alt=""
                    fill
                    className="object-cover z-[-1]"
                    priority
                  />
                  <div className="flex p-4 z-[1]">
                    <div>
                      <Image
                         src={item.logo}
                        alt=""
                        height={50}
                        width={50}
                        className="object-cover mix-blend-multiply"
                        priority
                      />
                    </div>
                    <div className="">
                      <p className="text-[14px] p-0 m-0 font-[Segoe UI] font-normal leading-[16.287px] text-black">
                        {item.tab.clientName}
                      </p>
                      <p className="mt-2 font-[Bricolage ps-1 m-0 Grotesque] text-[13px] font-medium leading-tight tracking-tight text-gray-600">
                        Industry:{" "}
                        <span className="text-[var(--Dark,#101011)] font-[Segoe UI] p-0 m-0 font-normal text-[12.215px] leading-[16.287px]">
                          {item.tab.location}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-[1.5px] ms-8 w-[302px] rounded-2xl bg-[linear-gradient(90deg,#007DFC,#A8F22E,#A8F22E)]">
                  <div className="relative px-2 flex h-auto flex-shrink-0 flex-col rounded-2xl bg-white overflow-hidden">
                    <div className="absolute top-0 right-14 z-10">
                      <Image
                        src="/images/main-page-card-icons/problem.png"
                        alt=""
                        height={38.318}
                        width={83.001}
                        className="object-cover z-[1]"
                        priority
                      />
                    </div>
                    <div className="flex items-start pt-6">
                      <div>
                        <Image
                          src="/images/main-page-card-icons/circle.png"
                          alt=""
                          height={30}
                          width={30}
                          className="object-cover z-[1]"
                          priority
                        />
                      </div>
                      <div className="flex-1 flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-[16px] text-gray-900">
                            {item.tab.clientName}
                          </h3>
                          <p className="text-[13px] text-gray-500 mt-1">
                            Client's Voice
                          </p>
                        </div>
                        <div className="">
                          <Image
                            src="/images/main-page-card-icons/Placeholder.png"
                            alt=""
                            height={20}
                            width={20}
                            className="object-cover z-[1]"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex gap-1">
                        <span className="text-[#000] font-semibold text-[12px]">
                          1.
                        </span>
                        <span className="text-[#000] font-semibold text-[12px]">
                          {item.tab.request}
                        </span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        <span className="text-[#000] font-semibold text-[12px]">
                          2.
                        </span>
                        <span className="text-[#000] font-semibold text-[12px]">
                          {item.tab.result2}
                        </span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        <span className="text-[#000] font-semibold text-[12px]">
                          3.
                        </span>
                        <span className="text-[#000] font-semibold text-[12px] text-start">
                          {item.tab.badge2line}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto flex-shrink-0 flex items-center justify-center">
                <div className="h-[400px] w-[300px] p-[20px]">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="h-[96px] w-[96px] absolute top-0 left-8 bottom-30 m-auto right-0 rounded-[24px] flex justify-center items-center bg-white shadow-[0_2px_90px_#5C8CFF,0_4px_4px_rgba(0,0,0,0.25)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M48.692 58.7044C43.7993 61.7706 38.0119 63.544 31.8097 63.544C14.2417 63.544 0 49.3192 0 31.772C0 21.4939 4.88609 12.3555 12.4649 6.54816L48.692 58.7044Z"
                          fill="url(#paint0_linear_937_312)"
                        />
                        <path
                          d="M63.545 33.9518C62.971 42.4134 59.0806 49.9659 53.1611 55.3232L37.8133 33.2268L63.545 33.9518Z"
                          fill="url(#paint1_linear_937_312)"
                        />
                        <path
                          d="M46.1737 3.41667C55.5586 8.1689 62.2658 17.4321 63.4363 28.3503L37.2831 27.6135L46.1737 3.41667Z"
                          fill="url(#paint2_linear_937_312)"
                        />
                        <path
                          d="M31.8097 0C34.9946 0 38.07 0.46796 40.9712 1.33801L32.2154 25.1675L17.1963 3.54426C21.5721 1.2797 26.5412 0 31.8097 0Z"
                          fill="url(#paint3_linear_937_312)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_937_312"
                            x1="-2.78533e-07"
                            y1="31.4215"
                            x2="76.3343"
                            y2="75.3855"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#054FF3" />
                            <stop offset="0.423077" stopColor="#388EFF" />
                            <stop offset="1" stopColor="#1E73F3" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_937_312"
                            x1="-2.78533e-07"
                            y1="31.4215"
                            x2="76.3343"
                            y2="75.3855"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#054FF3" />
                            <stop offset="0.423077" stopColor="#388EFF" />
                            <stop offset="1" stopColor="#1E73F3" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_937_312"
                            x1="-2.78533e-07"
                            y1="31.4215"
                            x2="76.3343"
                            y2="75.3855"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#054FF3" />
                            <stop offset="0.423077" stopColor="#388EFF" />
                            <stop offset="1" stopColor="#1E73F3" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_937_312"
                            x1="-2.78533e-07"
                            y1="31.4215"
                            x2="76.3343"
                            y2="75.3855"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#054FF3" />
                            <stop offset="0.423077" stopColor="#388EFF" />
                            <stop offset="1" stopColor="#1E73F3" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <img
                        src="/images/main-page-card-icons/js-icon.png"
                        alt="js logo"
                        className="w-[32px] h-[32px] object-contain absolute left-[0px] top-[0px] bottom-0 right-0 m-auto overflow-hidden rotateIcons"
                      />
                      <img
                        src="/images/main-page-card-icons/larravel-icon.png"
                        alt="js logo"
                        className="w-[32px] h-[32px] object-contain absolute left-[0px] top-[0px] bottom-0 right-0 m-auto overflow-hidden rotateIcons"
                      />
                      <img
                        src="/images/main-page-card-icons/stripe-icon.png"
                        alt="js logo"
                        className="w-[32px] h-[42px] object-contain absolute left-[0px] top-[0px] bottom-0 right-0 m-auto overflow-hidden rotateIcons"
                      />
                      <img
                        src="/images/main-page-card-icons/css-icon.png"
                        alt="js logo"
                        className="w-[42px] h-[42px] object-contain absolute left-[0px] top-[0px] bottom-0 right-0 m-auto overflow-hidden rotateIcons"
                      />
                      <img
                        src="/images/main-page-card-icons/html5.png"
                        alt="js logo"
                        className="w-[40px] h-[40px] object-contain absolute left-[0px] top-[0px] bottom-0 right-0 m-auto overflow-hidden rotateIcons"
                      />
                      <img
                        src="/images/main-page-card-icons/swift.png"
                        alt="js logo"
                        className="w-[32px] h-[32px] object-contain absolute left-[0px] top-[0px] bottom-0 right-0 m-auto overflow-hidden rotateIcons"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-center pt-4">
                <style>{`
                  @keyframes slideY {
                    0% {
                      transform: translateY(0px);
                    }
                    100% {
                      transform: translateY(-312px);
                    }
                  }
                  .cards-slider {
                    animation: slideY 10s linear infinite;
                  }
                `}</style>

                <div className="relative h-[312px] w-[264px] overflow-hidden rounded-xl">
                  <div className="cards-slider flex flex-col gap-5">
                    <div className="flex justify-center align-center h-[97px] w-[264px] flex-col gap-2 border-1 rounded-[10px] bg-white shadow-[inset_1px_0_1px_0_#3084FD,0_4px_4px_0_rgba(0,0,0,0.25)] flex-shrink-0">
                      <p className="text-[#000] text-center font-[Poppins] text-[15px] font-semibold leading-[16px]">
                        {item.tab.badge1}
                      </p>
                      <div className="flex align-center gap-2">
                        <p className="text-[#000] text-center font-[Poppins] text-[12px] font-light leading-[16px]">
                          {item.tab.badge2line}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center h-[97px] w-[264px] flex-shrink-0">
                      <div className="flex h-[97px] w-[264px] flex-col justify-center text-center rounded-lg border-2 bg-white px-4 pr-2 shadow-[inset_1px_0_1px_0_#3084FD,0_4px_4px_0_rgba(0,0,0,0.25)]">
                        <p className="bg-clip-text font-[Arimo] text-[18px] font-bold leading-tight text-[#000000]">
                          {item.tab.result}
                        </p>
                        <p className="font-[Arimo] text-[12px] font-medium leading-tight text-gray-600 mt-1">
                          {item.tab.result2}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-[97px] w-[264px] text-center flex-col justify-center align-center gap-2 rounded-xl border-2 bg-white shadow-[inset_1px_0_1px_0_#3084FD,0_4px_4px_0_rgba(0,0,0,0.25)] flex-shrink-0">
                      <p className="bg-clip-text font-[Arimo] text-[18px] font-bold leading-tight text-[#000000]">
                        {item.tab.badge2}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="font-[Arimo] text-[12px] font-medium leading-tight text-gray-600 mt-1">
                          {item.tab.badge2line}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center align-center h-[97px] w-[264px] flex-col gap-2 border-1 rounded-[10px] bg-white shadow-[inset_1px_0_1px_0_#3084FD,0_4px_4px_0_rgba(0,0,0,0.25)] flex-shrink-0">
                      <p className="text-[#000] text-center font-[Poppins] text-[15px] font-semibold leading-[16px]">
                        {item.tab.badge1}
                      </p>
                      <div className="flex align-center gap-2">
                        <p className="text-[#000] text-center font-[Poppins] text-[12px] font-light leading-[16px]">
                          {item.tab.badge2line}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows at Bottom */}
      <div className="absolute bottom-4 right-18 flex items-center gap-4">
        {/* Previous Arrow */}
        <button
          onClick={goToPrev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous case study"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        
        {/* Next Arrow */}
        <button
          onClick={goToNext}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next case study"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

     
    </div>
  );
}
import React from "react";
import FeatureMatrixMap from "./FeatureMatrixMap";
import SolutionsDesignedForImpact from "../SolutionsDesignedForImpact";
import ProvenResults from "../ProvenResults";
import ContactSection from "../ContactSection";
import SalesDistribution from "./SalesDistribution";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/redux/store";
const SupplyChainMVP = () => {
  const buttonLabels = [
    "Audit to ROI in 30 Days",
    "Automate 80% of Workflows",
    "Custom AI Modules",
    "Secure. Embedded, Always On",
  ];
  const mvps = [
    {
      title: "Audit to ROI in 30 Days",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
      width: "210px",
      height: "41px",
    },
    {
      title: "Automate 80% of Workflows",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(201,253,116,0.25) 0%, rgba(201,253,116,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(201,253,116,0.01)",
      width: "250px",
      height: "41px",
    },
    {
      title: "Custom AI Modules",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(201,253,116,0.25) 0%, rgba(201,253,116,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(201,253,116,0.01)",
      width: "191px",
      height: "41px",
    },
    {
      title: "Secure. Embedded, Always On",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
      width: "259px",
      height: "41px",
    },

    // {
    //   title: "Augmented Reality MVPs",
    //   gradient:
    //     "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
    //   width: "202px",
    //   height: "41px",
    // },
  ];
  const {
    promptText,
    result,
    heading,
    paragraph,
    subHeading = "",
    subParagraph,
  } = useSelector((state: RootState) => state.prompt);
  const words = subHeading.split(" ");
  const lastThree = words.slice(-3).join(" "); // last 3 words
  const mainText = words.slice(0, -3).join(" "); // everything before last 3
  return (
    <>
      <div
        className="relative py-12 flex items-center gap-10 "
        style={{
          borderRadius: "40px",
          // background: "#E3F1F3",
          backdropFilter: "blur(16.7px)",
        }}
      >
        <div className="absolute  -z-10 w-[450px] h-[467px] rounded-full opacity-20 bg-[#0367FC] blur-[125px] top-[-40] left-1/2 -translate-x-1/2" />
        {/* Heading */}

        <div className="flex flex-col flex-1 self-stretch ">
          {/* H2 */}
          <div className="flex items-center gap-2">
            {/* Heading */}
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999544 9.14164 -0.0999544 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                fill="#000000"
              />
            </svg>
            <h3
              className="flex-1"
              style={{
                fontFamily: "SF Pro, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "-0.24px",
                color: "#000",
              }}
            >
              Your MVP match
            </h3>
          </div>
          <div>
            {/* <h2
            className="mb-6"
            style={{
              fontFamily: "SF Pro, ui-sans-serif, system-ui",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "88px",
              letterSpacing: "-1.76px",
              color: "#F1F1EF",
            }}
          >
            Jump-Start Your Project With Our{" "}
            <span style={{ color: "#E48242" }}>Supply Chain MVP</span>
          </h2> */}

            <h2
              className="text-[64px] leading-[80px] tracking-[-0.02em] font-[700] mb-4 text-start text-black"
              style={{ verticalAlign: "middle" }}
            >
              {mainText}{" "}
              <span className="inline-block text-transparent bg-gradient-to-r from-[#0367FC] via-[#0367FC] to-[#C9FD74] bg-clip-text">
                {lastThree}
              </span>
            </h2>
            {/* <h1
            className="text-[72px] leading-[80px] tracking-[-0.02em] font-normal mb-4 text-center"
            style={{ verticalAlign: "middle" }}
          >
            A{" "}
            <span className="inline-block text-transparent bg-gradient-to-r from-[#0367FC] via-[#0367FC] to-[#C9FD74] bg-clip-text">
              {lastThree}
            </span>
            , Not Just Another Dev Shop
          </h1> */}
            {/* Paragraph */}
            <p
              className="mb-8"
              style={{
                fontFamily: "SF Pro, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "-0.24px",
                color: "#000",
              }}
            >
              {/* Our modular MVP is built for pharma suppliers who need rapid
              digitization. It covers the essentials, so you can go live
              quickly, and is fully customizable to match your unique process. */}
              {subParagraph}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-start items-center gap-3 w-[620px] mx-auto lg:mx-0 ">
            {mvps.map((mvp, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-3
                 rounded-[12px] 
                 text-black text-[14px] font-[400] leading-[26px] text-center
                 font-sfpro transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: mvp.gradient,
                  width: mvp.width,
                  height: mvp.height,
                  boxShadow:
                    "0px 1px 1px 1px #E8E6F0, 0px 1px 1px 0px #0D0C100A",
                  border: "1px solid #ffff",
                }}
              >
                <div
                  className={
                    "w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-all  bg-gradient-to-b from-[#C9FD74] to-[#0669FA]"
                  }
                ></div>
                {mvp.title}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/SupplyChain/supplychain.png"
            alt="Supply Chain"
            style={{
              // width: "782px",
              // height: "589px",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <FeatureMatrixMap />
      {/* <SolutionsDesignedForImpact /> */}
      <ProvenResults />
      {/* <SalesDistribution /> */}
      <div className="ml-20 mt-20">{/* <ContactSection /> */}</div>
    </>
  );
};

export default SupplyChainMVP;

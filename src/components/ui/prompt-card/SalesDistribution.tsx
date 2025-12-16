import React from "react";
import FeatureMatrixMap from "./FeatureMatrixMap";
import SolutionsDesignedForImpact from "../SolutionsDesignedForImpact";
import ProvenResults from "../ProvenResults";
import ContactSection from "../ContactSection";

const SalesDistribution = () => {
  const buttonLabels = [
    "Audit to ROI in 30 Days",
    "Automate 80% of Workflows",
    "Custom AI Modules",
    "Secure. Embedded, Always On",
  ];

  const mvps = [
    {
      title: "Retail Intelligence MVPs",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
      width: "186px",
      height: "41px",
    },
    {
      title: "Pharma CRM MVPs",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(201,253,116,0.25) 0%, rgba(201,253,116,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(201,253,116,0.01)",
      width: "181px",
      height: "41px",
    },
    {
      title: "Predictive Analytics MVPs",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
      width: "202px",
      height: "41px",
    },
    {
      title: "AI Document Automation MVPs",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
      width: "241px",
      height: "41px",
    },
    {
      title: "Augmented Reality MVPs",
      gradient:
        "radial-gradient(231.94% 231.94% at 50% 100%, rgba(3,103,252,0.25) 0%, rgba(3,103,252,0.15) 15.03%, rgba(255,169,40,0) 25.24%), linear-gradient(180deg, rgba(243,238,255,0) 0%, rgba(243,238,255,0.04) 100%), rgba(3,103,252,0.01)",
      width: "202px",
      height: "41px",
    },
  ];

  return (
    <>
      <div
        className=" py-12 flex items-center gap-10 px-20  overflow-hidden  "
        style={{
          borderRadius: "40px",
          background: "#e3f1f3",
          backdropFilter: "blur(16.7px)",
        }}
      >
        {/* Radial Gradient Circle */}
        <div
          className="absolute -top-72 -left-72"
          style={{
            width: "1500px",
            height: "1500px",
            borderRadius: "750px",
            opacity: 0.3,
            background:
              "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 242, 209, 0.2) 0%, rgba(144, 172, 255, 0) 70%, rgba(144, 172, 255, 0) 100%)",
            flexShrink: 0,
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div className="flex flex-col flex-1 self-stretch relative z-10">
          {/* Heading */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "SF Pro, ui-sans-serif, system-ui",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "88px",
              letterSpacing: "-1.76px",
              color: "#000",
            }}
          >
            See where Sales and Distribution is today, and where it’s headed.
          </h2>

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
              marginLeft: "20px",
            }}
          >
            Our modular MVP is built for pharma suppliers who need rapid
            digitization. It covers the essentials, so you can go live quickly,
            and is fully customizable to match your unique process.
          </p>
          <div className="flex  items-center space-x-8 p-6  rounded-lg">
            {/* Left Side: Percentages */}
            <div
              className="flex flex-col items-start gap-10 w-[331px] flex-shrink-0 p-[31px_23px] rounded-[20px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(153, 153, 153, 0.4) 100%)",
                backdropFilter: "blur(42px)",
              }}
            >
              {/* Percentage Circle */}
              <div className="flex flex-col space-y-4 w-full">
                <div
                  style={{
                    color: "#010205",
                    fontFamily: "SF Pro, ui-sans-serif, system-ui",
                    fontSize: "72px",
                    fontWeight: 700,
                    lineHeight: "80px",
                    letterSpacing: "-1.44px",
                    fontStyle: "normal",
                  }}
                >
                  45%
                </div>

                <p className="text-[#000] text-xl ">
                  Pharmacy distributors already digitized their supply & demand
                  chain in 2024.
                </p>
              </div>
            </div>

            {/* Right Side: AI Adoption */}
            <div className=" relative flex flex-col items-center space-y-4">
              {/* 62% - AI Adoption Pill */}
              <div
                className="relative flex-shrink-0 flex  justify-center flex flex-col justify-center p-2  "
                style={{
                  width: "221.904px",
                  height: "201.398px",
                  borderRadius: "20px 1000px 20px 20px", // curve on opposite side
                  background:
                    "linear-gradient(214deg, #B9E07A 20.05%, #7E4824 102.07%)",
                  backdropFilter: "blur(42px)",
                }}
              >
                {/* H2-style text centered */}
                <div
                  className="mt-5"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "SF Pro, ui-sans-serif, system-ui",
                    fontSize: "72px",
                    fontWeight: 700,
                    lineHeight: "80px",
                    letterSpacing: "-1.44px",
                    fontStyle: "normal",
                  }}
                >
                  62%
                </div>
                <p className="text-white text-xl text-center">
                  AI Adoption by 2026
                </p>
              </div>

              <div
                className="flex items-center justify-center absolute left-30  "
                style={{
                  width: "89.255px",
                  height: "89.255px",
                  borderRadius: "683.544px", // full circle
                  background:
                    "linear-gradient(180deg, rgba(186, 156, 255, 0.8) 0%, rgba(112, 94, 153, 0.8) 100%)",
                  boxShadow: "0 30.076px 50.582px -6.835px rgba(0, 0, 0, 0.44)",
                  backdropFilter: "blur(7.9px)",
                  flexShrink: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39.669px"
                  height="39.669px"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_6526)">
                    <path
                      d="M38.4014 10.3306L22.6991 26.0329L14.4347 17.7685L2.03809 30.1651"
                      stroke="#000000"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4834 10.3306H38.4007V20.2478"
                      stroke="#000000"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_6526">
                      <rect
                        width="39.6691"
                        height="39.6691"
                        fill="white"
                        transform="translate(0.384766 0.413086)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="relative flex-shrink-0 rounded-[20px] p-6 self-stretch overflow-hidden"
            style={{
              width: "686.354px",
              height: "216px",
              background: "black",
              backdropFilter: "blur(42px)",
            }}
          >
            {/* Rotated Background Image with specific size */}
            <div
              className="absolute"
              style={{
                width: "430.069px",
                height: "500.316px",
                transform: "rotate(117.698deg)",
                top: "-50px", // adjust vertical position
                left: "-50px", // adjust horizontal position
                background:
                  "url('/images/SupplyChain/layerImg.png') no-repeat center / cover",
                mixBlendMode: "screen",
                zIndex: 0,
                flexShrink: 0,
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Heading with line */}
              <div className="flex items-center mb-4 space-x-4">
                <hr
                  className="w-[54px] h-0 border border-white"
                  style={{ strokeWidth: "1px" }}
                />
                <h2
                  className="text-white font-bold"
                  style={{
                    fontFamily: "SF Pro, ui-sans-serif, system-ui",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "26px",
                  }}
                >
                  Key Insights
                </h2>
              </div>

              {/* Bulleted List */}
              <ul
                className="text-white list-disc pl-5 space-y-2"
                style={{
                  fontFamily: "SF Pro, ui-sans-serif, system-ui",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "26px",
                }}
              >
                <li>
                  Real-time stock apps cut inventory mismatch by up to 30%.
                </li>
                <li>
                  Digitized order-taking reduces fulfillment time by 40–50%.
                </li>
                <li>Agent monitoring improves field efficiency by 25%.</li>
                <li>Companies adopting early see ROI within 6–8 months.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center relative z-10  ">
          <img
            src="/images/SupplyChain/personUsingtech.jpg"
            alt="Supply Chain"
            style={{
              width: "782px",
              height: "589px",
              borderRadius: "16px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SalesDistribution;

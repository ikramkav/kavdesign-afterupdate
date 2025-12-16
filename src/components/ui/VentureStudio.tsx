import React from "react";
import { ArrowRight, Check } from "lucide-react";
import LaptopDashboard from "./utils/LaptopDashboard";

export default function VentureStudioSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-white ">
        <div
          id="caseStudies"
          className="flex  flex-col items-center justify-center"
        >
          <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-6">
            <div className="max-w-8xl mx-auto text-black">
              <div className="text-center mb-16">
                <h1
                  className="text-[72px] leading-[80px] tracking-[-0.02em] font-normal mb-4 text-center"
                  style={{ verticalAlign: "middle" }}
                >
                  A{" "}
                  <span className="inline-block text-transparent bg-gradient-to-r from-[#0367FC] via-[#0367FC] to-[#C9FD74] bg-clip-text">
                    Venture Studio
                  </span>
                  , Not Just Another Dev Shop
                </h1>
                <p
                  className="text-[20px] leading-[100%] tracking-[0%] text-center text-gray-600 mx-auto"
                  style={{
                    fontWeight: 400,
                    fontStyle: "normal",
                    width: "900px",
                    height: "24px",
                    verticalAlign: "middle",
                    opacity: 1,
                  }}
                >
                  For AI teams, Scale sets Design to explore and accelerate the
                  exploration of your data.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center w-[994px] mx-40 ">
                {/* Left Column - Data Management */}
                <div className="space-y-8">
                  <div>
                    <div
                      className="inline-flex items-center justify-center text-sm font-medium mb-5"
                      style={{
                        width: "74px",
                        height: "24px",
                        borderRadius: "6px",
                        backgroundColor: "#FFFFFF",
                        color: "#0D0C10",
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
                      Services
                    </div>
                    <div className="w-[464px] h-[71px]">
                      <h2
                        style={{
                          fontWeight: 600,
                          fontStyle: "normal",
                          fontSize: "40px",
                          lineHeight: "44px",
                          letterSpacing: "-0.4px",
                          color: "#0D0C10",
                          verticalAlign: "middle",
                        }}
                      >
                        Data management
                      </h2>
                      <p
                        className="text-[16px] w-[400px] mt-1 leading-[20px] tracking-[-0.4px] text-gray-900"
                        style={{
                          fontWeight: 400,
                          fontStyle: "normal",
                          verticalAlign: "middle",
                        }}
                      >
                        Powering the next generation of Generative AI
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                      <p
                        className="text-[16px] leading-[24px] text-[#52505F]"
                        style={{
                          fontWeight: 400,
                          fontStyle: "normal",
                          width: "435.12px",
                          height: "68px",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        Analytics tool offering insights and optimisations for
                        the telecom industry
                      </p>

                      <ul className="space-y-4 ">
                        {[
                          "Reduced Truck Rolls ",
                          "Collect authorization via secure portals.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start   gap-3 ">
                            <div className="flex items-center jsutify-center gap-2">
                              <img src="/images/BusinessSection/Tick.png" />
                              <span
                                className="text-[14px] leading-[24px] items-center "
                                style={{
                                  fontWeight: 400,
                                  fontStyle: "normal",
                                  color: "#0D0C10",
                                  width: "262.55px",
                                  height: "24px",
                                  verticalAlign: "middle",
                                  opacity: 1,
                                  display: "inline-block",
                                }}
                              >
                                {item}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] font-medium text-[12px] leading-[20px] transition-colors mt-10"
                    style={{
                      width: "105.3px",
                      height: "36px",
                      backgroundColor: "#0D0C10",
                      color: "#FFFFFF",
                      fontWeight: 500,
                      textAlign: "center",
                      verticalAlign: "middle",
                      letterSpacing: "0%",
                      opacity: 1,
                    }}
                  >
                    Find Out More
                  </button>
                </div>

                <div>
                  <LaptopDashboard
                    image="/images/BusinessSection/SectionImg.jpg"
                    url="otake.com"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-20  ">
            <div className="max-w-7xl mx-auto text-black">
              <div className="grid lg:grid-cols-2 gap-20 items-center justify-center   ">
                {/* Left Column - Data Management */}
                <div className="mr-30">
                  <LaptopDashboard
                    image="/images/BusinessSection/SectionImg2.png"
                    url="otake.com"
                  />
                </div>
                <div className="space-y-8 ">
                  <div>
                    <div
                      className="inline-flex items-center justify-center text-sm font-medium mb-4"
                      style={{
                        width: "118px",
                        height: "24px",
                        borderRadius: "6px",
                        backgroundColor: "#FFFFFF",
                        color: "#0D0C10",
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
                      Product Features
                    </div>
                    <div className="w-[464px] h-[71px] ">
                      <h2
                        style={{
                          fontWeight: 600,
                          fontStyle: "normal",
                          fontSize: "40px",
                          lineHeight: "44px",
                          letterSpacing: "-0.4px",
                          color: "#0D0C10",
                          verticalAlign: "middle",
                        }}
                      >
                        Powerful data analytics.
                      </h2>
                      <p
                        className="text-[16px] w-[400px] leading-[20px] tracking-[-0.4px] text-gray-900"
                        style={{
                          fontWeight: 400,
                          fontStyle: "normal",
                          verticalAlign: "middle",
                        }}
                      >
                        Powering the next generation of Generative AI
                      </p>
                    </div>
                    <div className="flex flex-col mt-5">
                      <p
                        className="text-[16px] leading-[24px] text-[#52505F]"
                        style={{
                          fontWeight: 400,
                          fontStyle: "normal",
                          width: "435.12px",
                          height: "98px",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        Our platform offers a suite of tools for seamless data
                        integration, analysis, and visualization, empowering you
                        to make data-driven decisions with confidence.
                      </p>

                      <ul className="space-y-4">
                        {[
                          "Register users in seconds ",
                          "Collect authorization via secure portals.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex items-center jsutify-center gap-3">
                              <img src="/images/BusinessSection/Tick.png" />
                              <span
                                className="text-[14px] leading-[24px]"
                                style={{
                                  fontWeight: 400,
                                  fontStyle: "normal",
                                  color: "#0D0C10",
                                  width: "262.55px",
                                  height: "24px",
                                  verticalAlign: "middle",
                                  opacity: 1,
                                  display: "inline-block",
                                }}
                              >
                                {item}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] font-medium text-[12px] leading-[20px] transition-colors mt-10"
                    style={{
                      width: "105.3px",
                      height: "36px",
                      backgroundColor: "#0D0C10",
                      color: "#FFFFFF",
                      fontWeight: 500,
                      textAlign: "center",
                      verticalAlign: "middle",
                      letterSpacing: "0%",
                      opacity: 1,
                    }}
                  >
                    Find Out More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

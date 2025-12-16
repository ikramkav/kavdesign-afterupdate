"use client";

import React from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitterHandle: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

const BeyondCodeSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "We Build Products",
      description: "Our own ventures tested and scaled.",
      image: "/images/buildingBeyond/buildProduction.png",
    },
    {
      title: "We Build for You",
      description: "From concept to deployment — powered by AI.",
      image: "/images/buildingBeyond/buildProduction.png",
    },
    {
      title: "We Accelerate Ideas",
      description: "With pre-built MVPs and startup-ready frameworks.",
      image: "/images/buildingBeyond/marchtownHall.png",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Adam Whitcroft",
      role: "Designer, Owner",
      image: "/images/Innovator/TeamMemberone.png",
      twitterHandle: "@AdamWhitcroft",
    },
    {
      name: "Guillermo Rauch",
      role: "CEO, Vercel",
      image: "/images/Innovator/TeamMemberone.png",
      twitterHandle: "@rauchg",
    },
    {
      name: "Koen Bok",
      role: "Founder, Framer",
      image: "/images/Innovator/TeamMemberone.png",
      twitterHandle: "@koenbok",
    },
  ];

  return (
    <section className="bg-[#101010] text-white py-20 px-6 md:px-20">
      {/* ===== Top Section ===== */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          Building Beyond Code
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <div key={idx} className="w-full h-[380px]">
              {idx === 1 ? (
                // ===== Special "Massive" Card =====
                <div className="bg-[#111]/60 border border-[#222] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col gap-14 items-center justify-center text-center w-full h-full">
                  <h2
                    className="text-2xl md:text-3xl font-semibold leading-tight mb-6"
                    style={{ color: "#3E3E3E" }}
                  >
                    This year has <br />
                    been{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold">
                      massive
                    </span>{" "}
                    <br />
                    for us!
                  </h2>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      We Build for You
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      From design to deployment, <br />
                      powered by AI.
                    </p>
                  </div>
                </div>
              ) : (
                // ===== Default Feature Card =====
                <div className="bg-[#111]/60 border border-[#222] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col items-center w-full h-full">
                  <div className="relative w-full h-[200px] mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed text-center max-w-[200px] mx-auto">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-20"></div>
      {/* ===== Bottom Section ===== */}
      <div className="text-center flex flex-col items-center">
        <h2
          className="text-3xl md:text-4xl font-semibold leading-tight text-center px-[51.2px]"
          style={{ width: "948.39px", height: "60px", opacity: 1 }}
        >
          Built for professionals like you.
        </h2>

        <p
          className="text-[14px] font-normal leading-[100%] text-center text-[#E48242] mx-auto flex items-center justify-center"
          style={{
            fontFamily: "SF Pro, sans-serif",
            width: "400px",
            height: "24px",
            opacity: 1,
          }}
        >
          Used by seriously productive people.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl shadow-md"
              style={{
                background:
                  "linear-gradient(107.26deg, #111214 4.87%, #0C0D0F 75.88%)",
                width: "333.36px",
                height: "98px",
                maxWidth: "1204px",
                borderRadius: "12px",
                borderWidth: "1px",
                opacity: 1,
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "auto",
                      height: "48px",
                      borderRadius: "12px",
                    }}
                  />
                  <div className="text-white text-center ml-4 flex gap-2">
                    <h3 className="font-semibold text-sm">{member.name}</h3>
                    <p className="text-sm text-blue-400">
                      {member.twitterHandle}
                    </p>
                  </div>
                </div>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[3px] mt-10 w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-20 "></div>

      <div className=" text-white p-8 rounded-lg shadow-lg max-w-[1392px] mx-auto ">
        <div className="flex  gap-6">
          {/* Favorite Feature */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-4">
              <h3 className="text-[14px] font-semibold text-[#6A6B6C] md:w-[150px]">
                Favorite Feature:
              </h3>
              <div>
                <div className="w-[167px] h-[26px] p-[4.4px_6px_5px_6px] gap-[8px]  rotate-[0deg] opacity-100 left-[171.91px] rounded-[6px] bg-[#1B1C1E] flex justify-content items-center">
                  <p className="text-[16px]">AI feature mapping</p>
                </div>

                {/* <p className="text-[16px]">AI feature mapping</p> */}
                <p className="text-[14px] text-[#9C9C9D]">
                  Realtime knowledge, anywhere for your problems and solutions
                </p>
              </div>
            </div>

            {/* Top Extension */}
            <div className="flex flex-col md:flex-row gap-13">
              <h3 className="text-[14px] md:text-[14px] font-semibold text-[#6A6B6C] md:w-[150px]">
                Top Extension:
              </h3>
              <div>
                <div className="w-[167px] h-[26px] p-[4.4px_6px_5px_6px] gap-[8px]  rotate-[0deg] opacity-100 left-[171.91px] rounded-[6px] bg-[#1B1C1E] flex justify-content items-center">
                  <p className="text-[16px]">Notion Search</p>
                </div>
                {/* <p className="text-[16px]">Notion Search</p> */}
                <p className="text-[14px] text-[#9C9C9D]">
                  I forked the Notion Search extension so I can easily paste
                  "tokenized" doc links into Slack.
                </p>
              </div>
            </div>
          </div>
          <div className="border-l-2  border-gray-700    "></div>
          <div
            className="w-[570px] h-[205px] text-center "
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            <p className="text-center text-[22px]  font-bold text-[#6A6B6C]   ">
              <span
                className="text-gray-500 text-[56px] font-bold leading-none "
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                “
              </span>
              Kavtech is incrementally
              <span className="text-white  "> turning </span>
            </p>
            <p className="text-center text-[18px]  font-bold text-[#6A6B6C]">
              <span className="text-white">
                &nbsp;&nbsp;my Product into an AI-native operating system
              </span>
              <span className="text-[#6A6B6C]"> and I’m so here for it.</span>
            </p>
            <div className="flex justify-center relative top-[-10] ml-[380px]">
              <span
                className="text-gray-500 text-[56px] font-bold leading-none"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;

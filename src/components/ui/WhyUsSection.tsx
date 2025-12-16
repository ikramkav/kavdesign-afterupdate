"use client";
import React from "react";
import Image from "next/image";
import AnalyticsCard from "./AIDesignCard";
import TownHallCard from "./TownHallCard";
type CardProps = {
  card: {
    id: number;
    title: string;
    image: string;
  };
};

export default function WhyUsSection() {
  const chips = [
    "Fintech wallet MVP",
    "SaaS Dashboard MVP",
    "Logistics Hub MVP",
    "Telecom Recharge MVP",
    "Fintech retail MVP",
  ];

  const smallCards = [
    {
      id: 1,
      title: "Inspiration Board",
      image: "/images/whyUs/inspirationboard.png",
    },
    {
      id: 2,
      title: "Amber",
      image: "/images/whyUs/amber.png",
    },
    {
      id: 3,
      title: "Our Journey",
      image: "/images/whyUs/ourjourney.png",
    },
    {
      id: 4,
      title: "Our Mission",
      image: "/images/whyUs/ourmission.png",
    },
    {
      id: 5,
      title: "Traffic Source",
      image: "/images/whyUs/trafficesource.png",
    },
    {
      id: 6,
      title: "first app",
      image: "/images/whyUs/firstapp.png",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#050507] via-[#07080b] to-[#0b0b0d]" />
      <div className="absolute -left-40 top-10 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#2b1a5f] to-[#0b2736] opacity-30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#1f3b5a] to-[#3a174a] opacity-25 blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="w-[60%] flex flex-col gap-16 px-15 items-start">
        {/* Text Content */}
        <div className="w-full text-left">
          <div
            className="w-[73px] h-[36px] rounded-[10px] border border-white/10 
            bg-[#0b0b0d]/60 flex items-center justify-center 
            font-[700] text-[14px] leading-[16px] tracking-[-0.01em] 
            text-white font-['SF Pro Display']"
          >
            MVPs
          </div>

          <div className="w-[90%]">
            <h2
              className="font-[SF Pro] text-white"
              style={{
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "60px",
                lineHeight: "80px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              Why start from scratch?
            </h2>

            <p
              style={{
                fontWeight: 400,
                fontSize: "33px",
              }}
              className="mt-4 text-3xl text-[#bdbdbd] max-w-2xl leading-snug"
            >
              We’ve built MVPs across industries. <br />
              Customize one to fast-track your launch.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((c, idx) => (
              <button
                key={idx}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-[#3a3a3a]"
                style={{
                  background:
                    idx === chips.length - 1
                      ? "linear-gradient(0deg, rgba(186,156,255,0.03), rgba(186,156,255,0.03))"
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  className={
                    idx === chips.length - 1 ? "text-white" : "text-[#9a9a9a]"
                  }
                >
                  {c}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CARD LAYOUT */}
        <div className="relative flex flex-col items-center mt-10 ">
          <div className="z-10 -mt-[300px] ml-[610px]">
            <Card card={smallCards[4]} /> {/* Amber */}
          </div>

          {/* Bottom row (A A A A) */}
          <div className="flex   " style={{ marginLeft: "-200px" }}>
            <Card card={smallCards[5]} />
            <Card card={smallCards[0]} />
            <div className="mt-20">
              <AnalyticsCard />
            </div>
            <Card card={smallCards[1]} />

            <Card card={smallCards[2]} />
            <div className="flex flex-col gap-2">
              <Card card={smallCards[3]} />
              <div>
                <TownHallCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ card }: CardProps) => {
  const isAmber = card.title === "Amber" || card.title === "Traffic Source";

  return (
    <div
      className={`
        rounded-2xl
        backdrop-blur-sm
        shadow-[0_8px_30px_rgba(2,6,23,0.6)]
        overflow-hidden
        flex-shrink-0
        transition-transform
        duration-500
        hover:-translate-y-2
        ${isAmber ? "w-[280px] h-[267px]" : "w-[283px] h-[390px]"}

      `}
    >
      <div className="relative w-full h-full flex items-center justify-center ">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className={`object-${isAmber ? "contain" : "cover"} p-2`}
        />
      </div>
    </div>
  );
};

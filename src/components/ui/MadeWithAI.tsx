"use client";
import React from "react";
import DataManagementAgentCard from "./DataManagementCard";

export default function MadeWithAI() {
  return (
    <section
      className="w-[1286px] h-[172.55px] mx-auto flex flex-col items-center justify-center text-center opacity-100"
      style={{ transform: "rotate(0deg)" }}
    >
      <h1 className="font-[SF Pro] font-normal text-[72px] leading-[80px] tracking-[-0.02em] text-white">
        A Venture Studio, Not Just Another Dev Shop
      </h1>

      <p className="font-[SF Pro] font-normal text-[20px] leading-[100%] tracking-[0%] text-white mt-4">
        For AI teams, Scale Data Engine improves your ecosystem by improving
        your data.
      </p>
      <DataManagementAgentCard />
    </section>
  );
}

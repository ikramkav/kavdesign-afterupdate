import React from "react";
import Image from "next/image";
import ContactSection from "./ContactSection";
export default function SolutionsDesignedForImpact() {
  const items = [
    {
      badge: "AI",
      title: "AI Integration",
      desc: "Anticipate future trends and make proactive decisions with Kavtech Solutions' Predictive Analysis services.",
      accent: "from-yellow-400/20 to-yellow-500/10",
      dot: "bg-yellow-400",
      image: "/images/Ai/Ai.png",
    },
    {
      badge: "UX",
      title: "Product design",
      desc: "We specialize in creating robust and scalable data storage solutions that not only streamline your data management.",
      accent: "from-purple-400/20 to-purple-500/10",
      dot: "bg-purple-400",
      image: "/images/Ai/productDesign.png",
    },
    {
      badge: "CI/CD",
      title: "DevOps",
      desc: "Kavtech curate customized models that align with your business  objectives.Our experts harness the potential of Artificial Intelligence.",
      accent: "from-rose-400/20 to-rose-500/10",
      dot: "bg-rose-400",
      image: "/images/Ai/devOps.png",
    },
    {
      badge: "SD",
      title: "Software Development",
      desc: "Leverage the power of the cloud to drive innovation and scalability in your business.",
      accent: "from-blue-400/20 to-blue-500/10",
      dot: "bg-blue-400",
      image: "/images/Ai/softwareDevelopment.png",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b0d] text-zinc-200   ">
      <div className=" mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:gap-30 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <div>
            <button className="mb-4 inline-flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/5 px-[18px] py-2 text-xs tracking-wide text-zinc-300/90 backdrop-blur w-[91px] h-[36px] opacity-100 hover:bg-white/10">
              Verticals
            </button>
          </div>

          <h2 className="w-[625px] h-[160px] text-[72px] font-[400] leading-[80px] tracking-[-2%] text-zinc-100 opacity-100 font-sf-pro r">
            <span className="inline text-white">Solutions Designed </span>
            <span className="inline text-white">for Impact. </span>
          </h2>
          <p className="w-[625px] h-[96px] text-[32px] font-[400] leading-[48px] tracking-[-1%] text-[#E48242E5] opacity-100 font-sf-pro ">
            We bring together the right services with the right industry
            expertise
          </p>

          <p className="mt-4 max-w-xl  text-zinc-400  text-[18px]">
            Centralize and connect data for seamless access, boost
            collaboration, and decision‑making; establish data pipelines for
            real‑time insight and scale.
          </p>

          <div className="mt-8">
            <button className="w-[120px] h-[41px] rounded-[12px] py-[8px] px-[16px] border border-solid border-[linear-gradient(176.03deg,_#FFFFFF_-3.47%,_#787878_76.45%)] bg-[linear-gradient(0deg,_rgba(186,_156,_255,_0.01),_rgba(186,_156,_255,_0.01)),_linear-gradient(180deg,_rgba(243,_238,_255,_0)_0%,_rgba(243,_238,_255,_0.04)_100%),_radial-gradient(231.94%_231.94%_at_50%_100%,_rgba(186,_156,_255,_0.25)_0%,_rgba(186,_156,_255,_0)_25.24%)] opacity-100 text-white font-semibold text-sm text-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-[linear-gradient(0deg,_rgba(186,_156,_255,_0.15),_rgba(186,_156,_255,_0.15)),_linear-gradient(180deg,_rgba(243,_238,_255,_0.1)_0%,_rgba(243,_238,_255,_0.15)_100%),_radial-gradient(231.94%_231.94%_at_50%_100%,_rgba(186,_156,_255,_0.4)_0%,_rgba(186,_156,_255,_0.15)_25.24%)] hover:opacity-90">
              Learn more
            </button>
          </div>
        </div>

        {/* Right column - cards */}
        <div className="grid grid-cols-2 gap-7 p-0 ">
          {items.map((it, i) => (
            <article
              key={i}
              className={`
        group relative overflow-hidden rounded-2xl border border-white/10 
        bg-white/5 p-4 pl-8 pr-0 pt-10 pb-10  transition duration-300 
        hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]
        ${i % 2 === 0 ? "translate-y-1" : "-translate-y-6"}  // 👈 stagger
      `}
            >
              {/* subtle gradient wash */}
              <div
                className={
                  "absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl " +
                  it.accent
                }
              />

              <div className="flex items-center gap-2 text-xs text-zinc-300/90">
                <Image
                  src={it.image}
                  alt="icon"
                  width={26}
                  height={43}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-3 text-lg font-semibold text-zinc-100">
                {it.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {it.desc}
              </p>

              {/* corner sheen */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-12 rounded-full bg-white/5 blur-2xl" />
            </article>
          ))}
        </div>
        {/* <ContactSection /> */}
      </div>
    </section>
  );
}

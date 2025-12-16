import React from "react";

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

export default function MVPs() {
  return (
    <section className="relative w-[100vw] bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Text */}
          <div className="w-[547px]">
            <h2 className="font-[500] text-[48px] text-gray-900 leading-tight font-sans">
              <span
                className="font-archivo font-semibold tracking-[-1.44px] leading-[60px]
                bg-gradient-to-r from-[#0367FC] via-[#C9FD74] to-[#C9FD74]
                bg-clip-text text-transparent"
              >
                Launch faster
              </span>{" "}
              with ready-to-customize MVPs built for your industry.
            </h2>
          </div>

          {/* Right Pills */}
          <div className="flex flex-wrap justify-start items-center gap-3 w-[620px] mx-auto lg:mx-0 mt-8">
            {mvps.map((mvp, index) => (
              <div
                key={index}
                className="flex justify-center items-center
                 rounded-[12px] 
                 text-black text-[16px] font-[510] leading-[26px] text-center
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
                {mvp.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

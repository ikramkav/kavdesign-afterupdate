import React from "react";

const ContactSection = () => {
  return (
    <div className="flex justify-center py-20">
      {/* Inner Container */}
      <div
        className="relative w-[1200px] h-[301px] p-10 rounded-[32px] flex flex-col justify-between"
        style={{
          border: "0.5px solid",
          borderImageSource:
            "linear-gradient(95.98deg, #000000 47.88%, #4D4D4D 93.97%), linear-gradient(119.95deg, rgba(255,255,255,0.2) 12.58%, rgba(255,255,255,0) 40.52%)",
          borderImageSlice: 1,
          backgroundColor: "#000000",
        }}
      >
        {/* Text Section */}
        <div className="flex flex-col items-start space-y-4">
          <h2
            className="text-[40px] font-medium leading-[100%] text-white"
            style={{ fontFamily: "SF Pro" }}
          >
            Let’s get Connected
          </h2>
          <div className="w-full lg:w-[480px]">
            <p
              className="text-[18px] leading-[28px] font-light tracking-normal text-white"
              style={{ fontFamily: "SF Pro" }}
            >
              We believe the best ideas spread through networks of trust. With
              Kavconnect, past clients, partners, and stakeholders can refer
              peers — and help bring more ideas to life.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="w-[150px] h-[41px] mt-6 rounded-[12px] border border-white/20 bg-[radial-gradient(231.94%_231.94%_at_50%_100%,_rgba(186,156,255,0.25)_0%,_rgba(186,156,255,0)_25.24%)] text-white font-semibold text-sm transition-all duration-300 hover:bg-[radial-gradient(231.94%_231.94%_at_50%_100%,_rgba(186,156,255,0.4)_0%,_rgba(186,156,255,0.15)_25.24%)]">
          Contact Us Now
        </button>
      </div>
    </div>
  );
};

export default ContactSection;

import React from "react";
import TabNavigation from "./TabNavigation";
import MatchInput from "./MatchInput";

const BigDataManagement = () => {
  return (
    <div className="flex justify-center py-20">
      {/* Container with fixed size, padding, and rounded corners */}
      <div
        className="relative flex flex-col lg:flex-row justify-between gap-[30px] p-[50px] rounded-[40px] overflow-hidden"
        style={{
          width: "1200px",
          height: "500.22px",
          borderWidth: "0.5px",
        }}
      >
        {/* Gradient border */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 rounded-[40px] z-[-1]"
          style={{
            background:
              "linear-gradient(180.25deg, #736540 -12.54%, #1D1D1F 46.34%)",
            padding: "1px",
          }}
        ></div>

        {/* Left Side */}
        <div className="flex flex-col justify-center items-start space-y-4 w-full lg:w-1/2 px-10">
          <h2
            className="text-white"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 510,
              fontStyle: "Medium",
              fontSize: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              width: "378px",
              height: "48px",
            }}
          >
            Big data management
          </h2>

          <p
            style={{
              fontFamily: "SF Pro",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
              width: "516px",
              height: "24px",
              color: "#E48242",
            }}
          >
            The best quality data to fuel the best performing models
          </p>

          <TabNavigation />

          <p
            className="font-light text-lg leading-[28px] tracking-normal text-white"
            style={{ width: "542px", height: "112px" }}
          >
            Scale has pioneered in the data labeling industry by combining
            AI-based techniques with human-in-the-loop, delivering labeled data
            at unprecedented quality, scalability, and efficiency.
          </p>

          <div className="flex items-center border border-[#2A2A2A] rounded-xl overflow-hidden w-full">
            <MatchInput />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mt-0 mr-10">
          <img
            src="/images/dataManagement/DM-IMG-3.png"
            alt="Big Data Management"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BigDataManagement;

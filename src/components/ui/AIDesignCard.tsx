import React from "react";
import { ChevronDown } from "lucide-react";

const AnalyticsCard: React.FC = () => {
  return (
    <div className="bg-[#111] text-white  rounded-2xl p-6 w-[270px] h-[260px] flex flex-col justify-between shadow-lg">
      <div className="flex  justify-between ">
        <div className="flex flex-col  gap-4 ">
          <button className=" ml-27 flex items-center gap-1 text-gray-400 text-sm hover:text-white transition">
            Last 28 days <ChevronDown size={14} />
          </button>
          <div className="flex items-start gap-2">
            <span className="bg-[#6C5CE7] text-xs font-medium px-2 py-1 rounded-full">
              MAU
            </span>
            <span className="text-sm text-gray-400">JAN 2023</span>
          </div>
        </div>
      </div>

      {/* Main Value */}
      <div className="flex flex-col mt-0">
        <h1 className="text-8xl font-semibold">52k</h1>
      </div>

      {/* Subtitle */}
      <div>
        <p className="text-gray-400 text-sm leading-tight">
          Marketing campaign
          <br />
          effectiveness
        </p>
      </div>
    </div>
  );
};

export default AnalyticsCard;

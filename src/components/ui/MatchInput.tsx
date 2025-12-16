import React from "react";
import { ArrowRight } from "lucide-react";

const MatchInput: React.FC = () => {
  return (
    <div className="flex items-center bg-black  border border-[#222] rounded-[px] overflow-hidden w-[640px] shadow-md">
      <input
        type="text"
        placeholder="Match this to my needs.."
        className="flex-1 bg-transparent text-gray-300 placeholder-white-500 text-sm px-4 py-5 focus:outline-none"
      />

      <button
        className="w-[48px] h-[48px] rounded-[12px] bg-[#F28C38] hover:bg-[#ff9d4d]
                   flex items-center justify-center p-[12px] gap-[10px] opacity-100 transition-all ml-2 mr-2"
      >
        <ArrowRight size={20} className="text-black" />
      </button>
    </div>
  );
};

export default MatchInput;

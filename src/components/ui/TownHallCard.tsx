import React from "react";
import { Megaphone, Plus } from "lucide-react";

const TownHallCard: React.FC = () => {
  return (
    <div className="bg-[#111] text-white rounded-2xl p-6 w-[280px] h-[300px] flex flex-col items-center justify-between shadow-lg text-center">
      {/* Icon */}
      <div className="bg-[#6C5CE7]/10 p-3 rounded-full">
        <Megaphone size={28} className="text-[#A78BFA]" />
      </div>

      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold mt-3">March town hall</h2>
        <p className="text-gray-400 text-sm mt-2 leading-snug">
          Welcome to the townhall – we have some exciting updates across
          product, sales, marketing to share with you.
        </p>
      </div>

      {/* Button */}
      <button className="flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] transition text-sm font-medium rounded-full px-4 py-2 mt-4">
        <Plus size={16} /> Learn more
      </button>
    </div>
  );
};

export default TownHallCard;

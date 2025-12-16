"use client";

import React, { useState } from "react";

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("3D");

  const tabs = ["3D", "Image", "Mapping", "Text", "Audio"];

  return (
    <div className="flex bg-[#000000] p-1 rounded-full">
      {tabs.map((tab, index) => (
        <div key={tab} className="flex items-center">
          <div
            onClick={() => setActiveTab(tab)}
            className={`text-white px-4 py-2 cursor-pointer rounded-full transition-all ${
              activeTab === tab
                ? "bg-[#1D1D1F] text-white shadow-lg"
                : "hover:bg-gray-700"
            }`}
          >
            {tab}
          </div>
          {index !== tabs.length - 1 && (
            <div className="border-r border-[#1D1D1F] h-6 mx-2"></div> // Add the divider here
          )}
        </div>
      ))}
    </div>
  );
};

export default TabNavigation;

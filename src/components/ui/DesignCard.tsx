import React from "react";

const AIDesignCard = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-xl shadow-lg max-w-xs">
      {/* Icon */}
      <div className="flex items-center mb-4">
        <div className="bg-yellow-600 p-2 rounded-full">
          {/* Place your logo or icon here */}
          <img src="/path/to/your/icon.png" alt="Icon" className="w-8 h-8" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-semibold mb-2">AI Integration</h3>

      {/* Subtext */}
      <p className="text-white text-sm">
        Anticipate future trends and make proactive decisions with Kavtech
        Solutions' Predictive Analysis services.
      </p>
    </div>
  );
};

export default AIDesignCard;

// LoadingOverlay.tsx
import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#E9F3F9] backdrop-blur-[50px] text-center z-50">
      {/* Loading Image */}
      <img
        src="/images/Loader/loading.gif"
        alt="Loading..."
        className="w-[258px] h-[258px] aspect-square mb-6"
      />

      {/* Heading */}
      <h4
        className="text-[40px] font-[510] leading-normal text-center   bg-gradient-to-r from-[#000] via-[#0367FC] to-[#000]
                bg-clip-text text-transparent"
      >
        Calibrating algorithms to your frequency
      </h4>
    </div>
  );
};

export default LoadingOverlay;

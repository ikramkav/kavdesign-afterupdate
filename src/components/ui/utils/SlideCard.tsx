import React from "react";

interface SlideData {
  id: number;
  name: string;
}

interface SlideCardProps {
  slide: SlideData;
  index: number;
  activeIndex: number;
  totalSlides: number;
}

const SlideCard: React.FC<SlideCardProps> = ({
  slide,
  index,
  activeIndex,
  totalSlides,
}) => {
  // Calculate position relative to the center slide
  const distance = (index - activeIndex + totalSlides) % totalSlides;
  const isFarLeft = distance > totalSlides / 2 && distance < totalSlides;
  const position = isFarLeft ? distance - totalSlides : distance;

  // Apply Tailwind and custom CSS classes based on position
  const getTransformClasses = () => {
    // Note: 'rotate-y-*' classes must be defined in your CSS file
    if (position === 0)
      return "transform translate-x-0 scale-160 opacity-100 z-10S shadow-2xl"; // Active, center
    if (position === -1)
      return "transform -translate-x-16 scale-150 rotate-y-[-15deg] opacity-75 z-0"; // Immediate Left
    if (position === 1)
      return "transform translate-x-16 scale-150 rotate-y-[15deg] opacity-75 z-0"; // Immediate Right
    if (position === 2)
      return "transform translate-x-32 scale-150 rotate-y-[15deg] opacity-75 z-0"; // Immediate Right
    if (position === -3)
      return "transform translate-x-64 scale-150 rotate-y-[15deg] opacity-75 z-0"; // Immediate Right

    // Hide slides further away with transition
    return "hidden opacity-0";
  };

  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out w-40 h-64 bg-gray-800 rounded-lg overflow-hidden ${getTransformClasses()}`}
      style={{
        transformStyle: "preserve-3d", // Needed for nested 3D transforms to work correctly
      }}
    >
      {/* Content inside the card */}
      <div className="flex items-center justify-center h-full text-white text-sm font-semibold">
        {slide.name}
      </div>
    </div>
  );
};

export default SlideCard;

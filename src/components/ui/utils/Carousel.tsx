"use client";
import React, { useState } from "react";
import SlideCard from "./SlideCard";

interface SlideData {
  id: number;
  name: string;
  // Add other fields like imageUrl, etc.
}

const slides: SlideData[] = [
  { id: 1, name: "MEGHAN" },
  { id: 2, name: "DAMIEN" },
  { id: 3, name: "KAITY" },
  { id: 4, name: "ACTIVE" }, // The initially active slide
  { id: 5, name: "OWEN" },
  { id: 6, name: "LAUREN" },
  { id: 7, name: "BLAKE" },
];

const Carousel: React.FC = () => {
  // Start with the 4th item (index 3) as active
  const [activeIndex, setActiveIndex] = useState(3);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    // Apply perspective here for the 3D effect
    <div className="relative flex justify-center items-center h-96 perspective-1000">
      {slides.map((slide, index) => (
        <SlideCard
          key={slide.id}
          slide={slide}
          index={index}
          activeIndex={activeIndex}
          totalSlides={slides.length}
        />
      ))}
      {/* Optional Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 p-4 bg-gray-700 text-white z-20"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 p-4 bg-gray-700 text-white z-20"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;

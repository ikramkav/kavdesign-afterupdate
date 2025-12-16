"use client";

import React from "react";
import SplitText from "./SplitText";
import ScrollStack, { ScrollStackItem } from "../../Custom/ScrollStack";
import SingleUnicornCard from "./TabCard";
import SingleUnicornCardCammi from "./TabCardCammi";
import SingleUnicornCardYlopo from "./TabCardYlopo";
import SingleUnicornCardIMVI from "./TabCardIMVI";
const ScrollStackComponents: React.FC = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="flex justify-center items-center h-screen   text-black">
      <ScrollStack useWindowScroll>
        <ScrollStackItem>
          <SingleUnicornCard />
        </ScrollStackItem>
        <ScrollStackItem>
          <SingleUnicornCardCammi />
        </ScrollStackItem>
        <ScrollStackItem>
          <SingleUnicornCardYlopo />
        </ScrollStackItem>
        <ScrollStackItem>
          <SingleUnicornCardIMVI />
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default ScrollStackComponents;

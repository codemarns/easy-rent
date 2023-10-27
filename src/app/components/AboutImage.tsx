import React from "react";
import Image from "next/image";

export const AboutImage = () => {
  return (
    <Image
      priority
      width={1000}
      height={100}
      alt="hero-image"
      src="front-view-smiley-female-realtor-empty-house.jpg"
      className="h-[552px] flex-1 object-cover"
    />
  );
};

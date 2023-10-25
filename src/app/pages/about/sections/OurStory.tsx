"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const OurStory = () => {
  const router = useRouter();

  return (
    <section
      id="our-story-section"
      className="our-story-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto space-y-12 flex flex-col items-center">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold leading-tight text-center tracking-wide before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-32 after:bottom-3 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
            Our Story
          </h2>
        </div>
        <div className="text-center">
          <p className="relative block max-w-[900px] text-2xl leading-normal text-center font-semibold">
            {`Easy Rent was founded by a team of passionate travelers who understand the joy and adventure that comes with exploring new places. We believe that where you stay can significantly impact your travel experience, and that's why we've made it our mission to connect you with properties that are more than just a place to sleep—they're an integral part of your journey.`}
          </p>
        </div>
      </div>
    </section>
  );
};

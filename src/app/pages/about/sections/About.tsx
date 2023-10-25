"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components";

export const About = () => {
  const router = useRouter();

  return (
    <section
      id="about-section"
      className="about-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 transition-all">
        <div className="relative flex bg-warning rounded-xl overflow-hidden">
          <Image
            priority
            width={1000}
            height={100}
            alt="hero-image"
            src="/front-view-smiley-female-realtor-empty-house.jpg"
            className="h-[552px] flex-1 object-cover"
          />
          <p className="absolute bottom-1 right-1 text-white/10">
            Image by{" "}
            <a href="https://www.freepik.com/free-photo/front-view-smiley-female-realtor-empty-house_13104884.htm#query=appartment%20owner&position=29&from_view=search&track=ais#position=29&query=appartment%20owner">
              Freepik
            </a>
          </p>
        </div>

        <div className="flex items-center">
          <div className="h-auto flex-1 space-y-12">
            <h2 className="relative inline-block text-4xl md:text-5xl font-bold leading-tight text-left tracking-wide before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-32 after:bottom-3 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
              About Us
            </h2>
            <p className="font-medium">
              {`At Easy Rent, we are more than just a rental platform; we are your gateway to unforgettable travel experiences. Our mission is to provide you with the perfect home away from home, tailored to your unique needs and preferences. Whether you're embarking on a dream vacation, planning a family getaway, or traveling for business, we're here to make your journey memorable and hassle-free.`}
            </p>
            <Button
              size="lg"
              color="warning"
              corner="rounded"
              label="Our Story"
              variant="outline"
              iconPosition="right"
              className="hover:gap-4"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              onClick={() => router.push("/pages/about#our-story-section")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

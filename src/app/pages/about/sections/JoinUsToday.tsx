"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components";

export const JoinUsToday = () => {
  const router = useRouter();

  return (
    <section
      id="join-us-today-section"
      className="join-us-today-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center bg-warning bg-[url('/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg')] bg-center bg-cover bg-no-repeat before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto space-y-24 flex flex-col items-center">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold leading-tight text-center tracking-wide before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
            Join Us Today
          </h2>
        </div>
        <div className="space-y-12 text-center">
          <p className="relative block max-w-[900px] text-2xl leading-normal text-center font-semibold">
            {`Whether you're planning a romantic getaway, a family vacation, a business trip, or any other type of travel adventure, we invite you to join us on your journey. Let Easy Rent be your trusted partner in finding the perfect rental property for your next adventure.`}
          </p>
          <Button
            size="xl"
            color="warning"
            corner="rounded"
            label="Join Now"
            iconPosition="right"
            iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            onClick={() => router.push("/pages/rents")}
          />
        </div>
      </div>
      <p className="absolute bottom-1 right-1 text-white/10">
        Image by{" "}
        <a href="https://www.freepik.com/free-photo/happy-couple-forest-being-together_11508287.htm#query=adventure&position=48&from_view=search&track=sph">
          Freepik
        </a>
      </p>
    </section>
  );
};

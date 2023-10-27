"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Icon } from "@/app/components";

export const Apartments = () => {
  const router = useRouter();

  const rental_offers = [
    {
      id: "city-studios",
      name: "City Studios",
      description: `Perfect for solo travelers, our city studios offer a compact and comfortable space for your urban adventures.`,
    },
    {
      id: "cosy-couple-retreats",
      name: "Cosy Couple Retreats",
      description: `Experience city life with your partner in our cozy couple retreats. These apartments are designed for a romantic getaway.`,
    },
    {
      id: "family-friendly",
      name: "Family Friendly",
      description: `Our family-friendly apartments provide the space and amenities you need to accommodate your loved ones while enjoying city life.`,
    },
    {
      id: "family-friendly",
      name: "Family Friendly",
      description: `Our family-friendly apartments provide the space and amenities you need to accommodate your loved ones while enjoying city life.`,
    },
  ];

  return (
    <section
      id="apartments-section"
      className="apartments-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto space-y-24">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold leading-tight text-center tracking-wide before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
            Apartments
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all">
          {rental_offers.map((e, index) => (
            <div
              key={index}
              id={e.id}
              className="h-auto border shadow-lg hover:shadow-2xl rounded-xl hover:z-[5] overflow-hidden duration-300 ease-out transition-all"
            >
              <Image
                priority
                width={1000}
                height={100}
                alt={e.name}
                src="stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg"
                className="h-[250px] flex-1 object-cover bg-warning"
              />
              <div className="min-h-[100px] p-5 space-y-5">
                <div className="flex-1 flex items-center gap-2">
                  <p className="flex-1 text-2xl font-medium">{e.name}</p>
                  <Icon
                    size="lg"
                    color="warning"
                    path="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    className="cursor-pointer hover:scale-110 ease-in transition-all"
                  />
                </div>
                <p className="line-clamp-3">{e.description}</p>
                <div className="flex items-center gap-4 !mt-6">
                  <Button
                    size="lg"
                    label="Save"
                    layout="block"
                    color="warning"
                    corner="rounded"
                    variant="outline"
                    className="flex-grow"
                  />
                  <Button
                    size="lg"
                    layout="block"
                    color="warning"
                    corner="rounded"
                    label="Book"
                    iconPosition="right"
                    className="grow"
                    iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

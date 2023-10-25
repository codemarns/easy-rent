import { Button, Icon } from "@/app/components";
import React from "react";

export const Commitments = () => {
  const rental_offers = [
    {
      id: "diverse-portfolio",
      name: "Diverse Portfolio",
      icon_path:
        "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
      description: `We take pride in offering a diverse portfolio of rental properties, from cozy cottages to luxurious villas and everything in between. With our wide range of options, we're confident you'll find the ideal accommodation for your next adventure.`,
    },
    {
      id: "verified-listings",
      name: "Verified Listings",
      icon_path:
        "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
      description: `Your peace of mind is essential to us. That's why we carefully vet and verify each property listing to ensure accuracy, authenticity, and quality. When you book with us, you can trust that what you see is what you get.`,
    },
    {
      id: "local-insights",
      name: "Local Insights",
      icon_path:
        "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
      description: `We go the extra mile to enhance your travel experience. In addition to providing exceptional accommodations, we offer local insights and recommendations to help you make the most of your stay. Discover hidden gems, explore the best local dining spots, and experience the culture of your destination like a true insider.`,
    },
    {
      id: "secure-booking",
      name: "Secure Booking",
      icon_path:
        "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
      description: `We prioritize your security. Our booking process is designed to be safe and straightforward, with secure payment options and a user-friendly interface that puts you in control.`,
    },
    // {
    //   id: "customer-support",
    //   name: "24/7 Customer Support",
    //   icon_path:
    //     "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
    //   description: `We understand that questions and concerns can arise at any time. That's why our dedicated support team is available around the clock to assist you. Whether you need assistance with booking, have inquiries about a property, or require help during your stay, we're just a call or message away.`,
    // },
  ];

  return (
    <section
      id="our-commitment-section"
      className="our-commitment-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center bg-warning bg-[url('/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg')] bg-center bg-cover bg-no-repeat before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto space-y-24">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="relative inline-block text-4xl md:text-5xl font-bold leading-tight text-center tracking-wide before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
            Our Commitments
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all">
          {rental_offers.map((e, index) => (
            <div
              key={index}
              id={e.id}
              className="h-auto p-8 space-y-5 bg-white/75 hover:bg-white hover:scale-105 hover:shadow-xl backdrop-blur-md rounded-xl duration-300 ease-out transition-all"
            >
              <Icon size="xl" color="warning" path={e.icon_path} />
              <span className="inline-block text-lg font-bold">{e.name}</span>
              <p className="!mt-0">{e.description}</p>
              {/* <Button
                layout="block"
                color="warning"
                corner="rounded"
                variant="outline"
                label="Show More"
                iconPosition="right"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              /> */}
            </div>
          ))}
        </div>
      </div>
      <p className="absolute bottom-1 right-1 text-white/10">
        <a href="https://www.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_38852655.htm#page=4&query=appartment&position=8&from_view=search&track=sph">
          Image by benzoix
        </a>{" "}
        on Freepik
      </p>
    </section>
  );
};

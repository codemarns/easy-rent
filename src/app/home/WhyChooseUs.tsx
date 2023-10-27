"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../components";

export const WhyChooseUs = () => {
  const router = useRouter();

  return (
    <section
      id="why-choose-us-section"
      className="why-choose-us-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto space-y-24">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="relative grid text-4xl md:text-5xl font-bold leading-tight text-center tracking-wide before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
            Why Choose{" "}
            <span className="text-warning break-keep">Easy Rent</span>
          </h2>
        </div>

        <div
          id="user-friendly"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 transition-all"
        >
          <div className="flex items-center">
            <div className="h-auto flex-1 space-y-12">
              <h2 className="relative inline-block text-3xl font-bold leading-tight text-left tracking-wide before:content-[''] before:absolute before:left-0 before:-top-6 before:h-4 before:w-28 before:border before:border-warning before:rounded-md">
                User-Friendly
              </h2>
              <p className="font-medium">
                {`Our website is designed for ease of use. Search, filter, and compare properties effortlessly.`}
              </p>
              <Button
                size="lg"
                color="warning"
                corner="rounded"
                label="Show More"
                variant="outline"
                iconPosition="right"
                className="hover:gap-4"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                onClick={() => router.push("/pages/about")}
              />
            </div>
          </div>

          <div className="relative flex bg-warning rounded-xl overflow-hidden row-start-1 lg:row-auto">
            <Image
              priority
              width={1000}
              height={100}
              alt="hero-image"
              src="smiling-woman-using-laptop-floor-home.jpg"
              className="h-[552px] flex-1 object-cover"
            />
            <p className="absolute bottom-1 right-1 text-white/10">
              <a href="https://www.freepik.com/free-photo/smiling-woman-using-laptop-floor-home_11453055.htm#query=facing%20laptops&position=48&from_view=search&track=ais#position=48&query=facing%20laptops">
                Image by gpointstudio
              </a>{" "}
              on Freepik
            </p>
          </div>
        </div>

        <div
          id="verified-listing"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 transition-all"
        >
          <div className="relative flex bg-warning rounded-xl overflow-hidden">
            <Image
              priority
              width={1000}
              height={100}
              alt="hero-image"
              src="checkbox-hand-writing-concepts-yes.jpg"
              className="h-[552px] flex-1 object-cover"
            />
            <p className="absolute bottom-1 right-1 text-white/10">
              <a href="https://www.freepik.com/free-photo/checkbox-hand-writing-concepts-yes_1145345.htm#query=listing&position=0&from_view=search&track=sph">
                Image by jannoon028
              </a>{" "}
              on Freepik
            </p>
          </div>

          <div className="flex items-center">
            <div className="h-auto flex-1 space-y-12">
              <h2 className="relative inline-block text-3xl font-bold leading-tight text-left tracking-wide before:content-[''] before:absolute before:left-0 before:-top-6 before:h-4 before:w-28 before:border before:border-warning before:rounded-md">
                Verified Listings
              </h2>
              <p className="font-medium">
                {`We ensure the accuracy and authenticity of property listings, so you can trust what you see.`}
              </p>
              <Button
                size="lg"
                color="warning"
                corner="rounded"
                label="Show More"
                variant="outline"
                iconPosition="right"
                className="hover:gap-4"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                onClick={() => router.push("/pages/about")}
              />
            </div>
          </div>
        </div>

        <div
          id="secure-booking"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 transition-all"
        >
          <div className="flex items-center">
            <div className="h-auto flex-1 space-y-12">
              <h2 className="relative inline-block text-3xl font-bold leading-tight text-left tracking-wide before:content-[''] before:absolute before:left-0 before:-top-6 before:h-4 before:w-28 before:border before:border-warning before:rounded-md">
                Secure Booking
              </h2>
              <p className="font-medium">
                {`Your security is our priority. Our booking process is safe and hassle-free.`}
              </p>
              <Button
                size="lg"
                color="warning"
                corner="rounded"
                label="Show More"
                variant="outline"
                iconPosition="right"
                className="hover:gap-4"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                onClick={() => router.push("/pages/about")}
              />
            </div>
          </div>

          <div className="relative flex bg-warning rounded-xl overflow-hidden row-start-1 lg:row-auto">
            <Image
              priority
              width={1000}
              height={100}
              alt="hero-image"
              src="close-up-person-doing-online-shopping.jpg"
              className="h-[552px] flex-1 object-cover"
            />
            <p className="absolute bottom-1 right-1 text-white/10">
              Image by{" "}
              <a href="https://www.freepik.com/free-photo/close-up-person-doing-online-shopping_20034620.htm#page=9&query=secure%20booking&position=23&from_view=search&track=ais">
                Freepik
              </a>
            </p>
          </div>
        </div>

        <div
          id="customer-support"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 transition-all"
        >
          <div className="relative flex bg-warning rounded-xl overflow-hidden">
            <Image
              priority
              width={1000}
              height={100}
              alt="hero-image"
              src="portrait-woman-customer-service-worker.jpg"
              className="h-[552px] flex-1 object-cover"
            />
            <p className="absolute bottom-1 right-1 text-white/10">
              <a href="https://www.freepik.com/free-photo/portrait-woman-customer-service-worker_9722861.htm#page=3&query=24%207%20Customer%20Support&position=25&from_view=search&track=ais">
                Image by Racool_studio
              </a>{" "}
              on Freepik
            </p>
          </div>

          <div className="flex items-center">
            <div className="h-auto flex-1 space-y-12">
              <h2 className="relative inline-block text-3xl font-bold leading-tight text-left tracking-wide before:content-[''] before:absolute before:left-0 before:-top-6 before:h-4 before:w-28 before:border before:border-warning before:rounded-md">
                24/7 Customer Support
              </h2>
              <p className="font-medium">
                {`Our dedicated support team is available around the clock to assist you with any inquiries or concerns.`}
              </p>
              <Button
                size="lg"
                color="warning"
                corner="rounded"
                label="Show More"
                variant="outline"
                iconPosition="right"
                className="hover:gap-4"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                onClick={() => router.push("/pages/about")}
              />
            </div>
          </div>
        </div>

        <div
          id="local-insights"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 transition-all"
        >
          <div className="flex items-center">
            <div className="h-auto flex-1 space-y-12">
              <h2 className="relative inline-block text-3xl font-bold leading-tight text-left tracking-wide before:content-[''] before:absolute before:left-0 before:-top-6 before:h-4 before:w-28 before:border before:border-warning before:rounded-md">
                Local Insights
              </h2>
              <p className="font-medium">
                {`We provide local recommendations, ensuring you make the most of your stay by experiencing the best of the area.`}
              </p>
              <Button
                size="lg"
                color="warning"
                corner="rounded"
                label="Show More"
                variant="outline"
                iconPosition="right"
                className="hover:gap-4"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                onClick={() => router.push("/pages/about")}
              />
            </div>
          </div>

          <div className="relative flex bg-warning rounded-xl overflow-hidden row-start-1 lg:row-auto">
            <Image
              priority
              width={1000}
              height={100}
              alt="hero-image"
              src="young-professional-women-standing-together-watching-design-screen.jpg"
              className="h-[552px] flex-1 object-cover"
            />
            <p className="absolute bottom-1 right-1 text-white/10">
              <a href="https://www.freepik.com/free-photo/young-professional-women-standing-together-watching-design-screen_11081407.htm#page=8&query=local%20insights&position=39&from_view=search&track=ais">
                Image by pch.vector
              </a>{" "}
              on Freepik
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

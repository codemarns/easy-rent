import React from "react";

export const Message = () => {
  return (
    <section
      id="message-section"
      className="message-section relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 flex items-center"
    >
      <div className="relative h-auto w-full max-w-[1440px] mx-auto px-8 py-24 space-y-4 text-center bg-white border border-warning rounded-xl mb-[-14rem]">
        <p className="text-3xl font-bold">
          Find your dream rental now and make your travel dreams a reality.
        </p>
        <p className="text-3xl font-bold">Start your journey with us!</p>
      </div>
    </section>
  );
};

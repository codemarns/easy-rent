import React from "react";
import cn from "classnames";

export const Ratings = () => {
  const ratings = [
    {
      id: "visits",
      name: "Visits",
      rating: "5M+",
    },
    {
      id: "downloads",
      name: "Downloads",
      rating: "1M+",
    },
    {
      id: "user-reviews",
      name: "User Reviews",
      rating: "10K+",
    },
    {
      id: "property-owners",
      name: "Property Owners",
      rating: "65K+",
    },
    {
      id: "owner-reviews",
      name: "Owner Reviews",
      rating: "37K+",
    },
  ];

  const ratingStyles = {
    root: {
      base: "relative h-auto w-full max-w-[1920px] mx-auto px-8 py-8 flex items-center bg-warning-50",
    },
    container: {
      base: "relative h-auto w-full max-w-[1440px] mx-auto grid grid-cols-[repeat(auto-fill,_minmax(225px,_1fr))] gap-8 transition-all",
    },
    item: {
      base: "min-h-[100px] p-4 bg-white border border-warning rounded-xl flex flex-col items-center justify-center gap-1",
      rating: "block text-5xl font-bold",
      label: "block",
    },
  };

  const { root, container, item } = ratingStyles;

  return (
    <section id="ratings-section" className={cn("ratings-section", root.base)}>
      <div className={container.base}>
        {ratings.map((e, index) => (
          <div key={index} id={e.id} className={item.base}>
            <span className={item.rating}>{e.rating}</span>
            <span className={item.label}>{e.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

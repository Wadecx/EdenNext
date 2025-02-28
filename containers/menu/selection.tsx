import { useState } from "react";

export const Selection = () => {
  const items = [
    "Burgers",
    "Healthy Bowls",
    "Finger Food",
    "Planches",
    "Nos Desserts Gourmands",
    "Nos Boissons",
  ];

  return (
    <section>
      <div className="relative">
        <div className="flex p-12 mt-[5.8rem] bg-secondary-light text-white font-bold text-xl uppercase overflow-x-auto snap-x sm:overflow-visible sm:snap-none scrollbar-hidden md:justify-between">
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${index}`}
              className="relative group transition duration-300 ease-in-out flex-shrink-0 snap-start px-4 text-center"
            >
              {item}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import { useState } from "react";
import { MENUS } from "@/data/menus";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Nosburger = () => {
  const burgers = MENUS.filter((menu) => menu.type === "burger");

  // Si aucune donnée de burger n'est trouvée
  if (burgers.length === 0) {
    return (
      <p className="text-center text-xl font-bold">Aucun burger disponible.</p>
    );
  }

  // Gérer l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % burgers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? burgers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-8">
      <h2 className="uppercase font-extrabold text-5xl ml-[5%] mt-[5%] mb-[5%]">
        Nos Burgers.
      </h2>

      {/* Affichage mobile (1 burger à la fois) */}
      <div className="md:hidden flex justify-center items-center w-full">
        <div
          className={`bg-white shadow-lg rounded-2xl p-6 w-[320px] transition-all duration-500 ease-in-out transform ${
            currentIndex % 2 === 0 ? "translate-x-0" : "translate-x-2"
          }`}
        >
          <Image
            src={burgers[currentIndex].image}
            width={300}
            height={200}
            alt={burgers[currentIndex].name}
            className="w-[300px] h-[200px] mx-auto object-contain"
          />
          <div className="text-center mt-4">
            <h2 className="font-bold text-xl">{burgers[currentIndex].name}</h2>
            <p>{burgers[currentIndex].quantity}</p>
            <p className="font-bold">{burgers[currentIndex].price} €</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-4 p-8 w-full justify-around">
        {burgers.map((burger, index) => (
          <div
            className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
            key={index}
          >
            <Image
              src={burger.image}
              width={0}
              height={0}
              alt="Image montrant un Burger"
              className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
            />
            <div className="space-y-4 p-4 flex relative flex-col bottom-20">
              <h2 className="font-bold text-xl">{burger.name}</h2>
              <p>{burger.quantity}</p>
              <p className="font-bold">{burger.price} €</p>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center mt-8 gap-8 md:hidden">
        <button
          onClick={prevSlide}
          className="p-3 bg-primary text-white rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-primary text-white rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

"use client";

import { useState, useEffect } from "react";
import { REVIEWS } from "@/data/review";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const Customersreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Par défaut : 3 en desktop

  // Détecter la taille de l'écran et ajuster itemsPerPage
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerPage(); // Appliquer immédiatement
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= REVIEWS.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? REVIEWS.length - itemsPerPage : prev - itemsPerPage
    );
  };

  return (
    <section className="mt-20 text-center">
      <h2 className="md:text-3xl font-bold uppercase flex justify-center gap-3 text-xl">
        ILS ONT <span className="text-primary"> essayé </span> ILS PARTAGENT !
      </h2>

      <div className="relative mt-10 flex justify-center items-center">
        {/* Bouton Précédent */}
        <button 
          onClick={prevSlide} 
          className="absolute left-5 p-3 bg-secondary text-white rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Conteneur des avis */}
        <div className="w-full max-w-[100rem] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {REVIEWS.map((review, index) => (
              <div key={index} className={`w-full md:w-1/3 px-4 shrink-0`}>
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg h-[200px] md:h-[300px] flex flex-col justify-between mb-4 text-start">
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                    />
                    <div className="text-start">
                      <h3 className="font-bold text-sm md:text-base">{review.name}</h3>
                      <div className="text-yellow-500 text-xs md:text-base">⭐⭐⭐⭐⭐️</div>
                    </div>
                  </div>
                  <p className="mt-2 md:mt-4 text-gray-600 flex-1 text-xs md:text-base">{review.text}</p>
                  <p className="mt-1 text-xs md:text-sm text-red-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton Suivant */}
        <button 
          onClick={nextSlide} 
          className="p-3 bg-secondary rounded-full shadow-md text-white absolute right-5 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center my-10">
        <Image className="" alt="Image du logo Google" width={150} height={124} src="assets/images/Google.png"></Image>
      </div>
    </section>
  );
};

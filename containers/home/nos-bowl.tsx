import { MENUS } from "@/data/menus";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Nosbowl = () => {
  return (
    <>
      <section className="p-8">
        <h2 className="uppercase font-extrabold text-5xl ml-[5%] mt-[5%] mb-[5%]">
          Nos Healthy Bowls.
        </h2>
        <div className="flex gap-4 p-8 w-full justify-around">
          {MENUS.filter(menu => menu.type === "bol").map((burger, index) => {
            return (
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
            );
          })}
        </div>

        <div className="flex justify-end mr-20 gap-8">
          <a href="" className="p-2 bg-primary text-white rounded-3xl">
            <ChevronLeft />
          </a>
          <a href="" className="p-2 bg-primary text-white rounded-3xl">
            <ChevronRight />
          </a>
        </div>
      </section>
    </>
  );
};

import { section } from "framer-motion/client";
import Image from "next/image";

export const Greenbaner = () => {
  return (
    <section className="flex p-8 bg-primary min-h-80 justify-evenly items-center uppercase">
      <div className="text-white flex flex-col items-center gap-2 font-bold text-2xl text-center">
        <Image
          className=""
          width={60}
          height={0}
          sizes="124"
          src="/assets/images/home/heart.png"
          alt="Image représentant un coeur"
        ></Image>

        <h3>Faibles en<br/>Calories</h3>
      </div>
      <div className="text-white flex flex-col items-center gap-2 font-bold text-2xl text-center">
        <Image
          className=""
          width={60}
          height={0}
          sizes="124"
          src="/assets/images/home/veganfriendly.png"
          alt="Image représentant un une main pour désigner Vegan friendly"
        ></Image>

        <h3>Vegan<br/>Friendly</h3>
      </div>
      <div className="text-white flex flex-col items-center gap-2 font-bold text-2xl text-center">
        <Image
          className=""
          width={60}
          height={0}
          sizes="124"
          src="/assets/images/home/apple.png"
          alt="Image représentant une pome"
        ></Image>

        <h3>Produit 100%<br/>Naturel</h3>
      </div>
    </section>
  );
};

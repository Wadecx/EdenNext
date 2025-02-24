import Image from "next/image";
import { Link } from "next-view-transitions";

export const Edengourmand = () => {
  return (
    <section className=" z-[999]">

      {/* Partie gauche  */}
      <div className="flex md:items-center flex-col md:flex-row gap-7 my-8">
        <div className="md:w-1/2 items-start flex flex-col md:ml-[7%] ml-[3%] gap-10">
          <h2 className="text-3xl font-bold md:w-[70%] uppercase">
            EDEN HEALTH, UN PLAISIR GOURMAND ET
            <span className="text-secondary"> sans compromis</span>.
          </h2>
          <p className="md:w-[70%]">
            EDEN HEALTH prouve qu’on peut se faire plaisir tout en prenant soin
            de sa santé. Avec des produits savoureux et naturels, sans additifs,
            chaque bouchée est un régal. Que ce soit pour un encas ou un
            dessert, ce restaurant offre des options pour tous les goûts et
            régimes.
          </p>
          <p className="md:w-[70%]">
            Les recettes sont pensées pour offrir un équilibre parfait entre
            saveur et bien-être, permettant à chacun de se faire plaisir sans
            culpabilité.
          </p>

          <Link
            href="/reserver-une-table"
            className="flex items-center uppercase justify-center font-black bg-primary text-white h-10 rounded-md px-6 py-4 w-fit"
          >
            voir le menu
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-10 text-start">
          <Image
            src="/assets/images/home/burger.jpg"
            width="150"
            height="200"
            className="w-full max-h-[600px] object-contain"
            alt="Image d'un bol"
          ></Image>
        </div>
      </div>
    </section>
  );
};

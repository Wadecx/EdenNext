import { Link } from "next-view-transitions";
import Image from "next/image";
import { AnimateContainer } from "@/animations";

export const Herobanner = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Image en plein écran */}
      <Image
        src="/assets/images/home/herobanner-section.jpg"
        alt="Hero Banner"
        layout="fill"
        objectFit="cover" // Permet de garder l'image bien remplie sans déformation
        quality={100} // Assure une bonne qualité d'affichage
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Contenu au-dessus de l'image */}
      <AnimateContainer animate="fadeIn">
        <div className="relative z-10 ml-[10%] flex flex-col gap-10 text-black">
          <h1 className="uppercase font-black text-3xl md:text-5xl max-w-[45%]">
            Découvrez une expérience gustative unique !
          </h1>
          <p className="md:max-w-[40%] font-thin">
            Chez EDEN HEALTH, on vous propose une carte saine et gourmande.
            Régalez-vous sans compromis !
          </p>
          <p className="font-thin">
            Réservez dès maintenant dans notre restaurant.
          </p>
          <ul>
            <Link
              href="/reserver-une-table"
              className="uppercase bg-primary text-white p-3 rounded-md font-bold text-lg hover:shadow-xl transition duration-300"
            >
              RÉSERVER UNE TABLE
            </Link>
          </ul>
        </div>
      </AnimateContainer>
    </section>
  );
};

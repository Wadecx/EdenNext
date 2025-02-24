import { Link } from "next-view-transitions";
import Image from "next/image";

export const HerobannerReserve = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      {/* Image en plein écran */}
      <Image
        src="/assets/images/reserver/reserve-bg.jpg"
        alt="Hero Banner"
        layout="fill"
        objectFit="cover" // Permet de garder l'image bien remplie sans déformation
        quality={100} // Assure une bonne qualité d'affichage
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Contenu au-dessus de l'image */}
      <div className="flex flex-col gap-10 text-black justify-center items-center text-center">
        <h1 className="uppercase font-black text-3xl md:text-5xl">
          Je reserve une table !
        </h1>
        <p className="md:max-w-[60%] font-thin">
          Savourez une cuisine équilibrée qui allie fraîcheur et bien-être, pour
          une expérience culinaire à la fois délicieuse et bonne pour la santé.
        </p>
        <p className="font-thin">
        Offrez à votre corps le meilleur avec nos plats sains !
        </p>
        <ul>
          <Link
            href="/le-menu"
            className="uppercase bg-primary text-white p-3 rounded-md font-bold text-lg shadow-xl"
          >
            voir le menu
          </Link>
        </ul>
      </div>
    </section>
  );
};

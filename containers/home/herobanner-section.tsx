import { Link } from "next-view-transitions";
import Image from "next/image";


export const Herobanner = () => {
  return (
    <section className="h-screen bg-center bg-cover bg-no-repeat flex content-center items-center " style={{ backgroundImage: "url('assets/images/home/herobanner-section.jpg')" }}>
      <div className="ml-[10%] flex flex-col gap-10">
      <h1 className="uppercase font-black text-3xl md:text-5xl max-w-[41%]">Découvrez une expérience gustative unique !</h1>
      <p className="max-w-[40%] font-thin">Chez EDEN HEALTH, on vous propose une carte saine
          et gourmande. Régalez-vous sans compromis !</p>
          <p className="font-thin">Réservez dès maintenant dans notre restaurant.</p>
          <ul>
              <Link href="/reserver-une-table" className="uppercase bg-primary text-white p-3 rounded-[5px] font-bold text-lg shadow-xl">RéSERVER UNE TABLE</Link>
          </ul>
      
      </div>
    </section>
  );
};

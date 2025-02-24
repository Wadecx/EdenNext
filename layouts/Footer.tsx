import Image from "next/image";
import { Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="relative w-full min-h-[750px] md:min-h-[470px]">
        {" "}
        {/* Augmenter la hauteur */}
        <div
          className="absolute inset-0 w-full bg-cover bg-center "
          style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
        ></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start ml-8 md:items-start justify-evenly h-full text-gray-800 md:p-20 relative top-[100px] md:relative md:top">
          {" "}
          {/* Padding ajouté */}
          <div className="flex flex-col gap-4 items-start md:items-start">
            {" "}
            {/* Centrer sur mobile, à gauche sur desktop */}
            <Image
              src="/assets/icons/eden_health_navbar.png"
              alt="Image Eden Health"
              width={180}
              height={130}
            />
            <div className="p-4 bg-white rounded-xl shadow-md">
              <a
                href="tel:0650343810"
                className="flex gap-2 items-center text-white font-bold text-xl bg-secondary py-2 rounded-xl justify-center"
              >
                <Phone /> 06 50 34 38 10
              </a>
              <p className="text-center text-gray-600">
                Nous sommes ouverts du lundi au <br /> samedi de 12H00 à 21H00.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            {" "}
            {/* Centrer sur mobile, à gauche sur desktop */}
            <h3 className="text-xl font-extrabold">EDEN HEALTH & VOUS</h3>
            <a href="/le-menu" className="hover:underline">
              Le menu
            </a>
            <a href="/le-concept" className="hover:underline">
              Le concept
            </a>
            <a href="/reserver-une-table" className="hover:underline">
              Réserver une table
            </a>
          </div>
          <div className="flex flex-col gap-2 items-start">
            {" "}
            {/* Centrer sur mobile, à gauche sur desktop */}
            <h3 className="text-xl font-extrabold uppercase">
              CONDITIONS & CONFIDENTIALITÉ
            </h3>
            <p>© EDEN HEALTH</p>
            <a href="" className="hover:underline">
              Mentions Légales
            </a>
            <a href="" className="hover:underline">
              Politique de confidentialité
            </a>
          </div>
          <div className="flex flex-col gap-2 md:items-start">
            {" "}
            {/* Centrer sur mobile, à gauche sur desktop */}
            <h3 className="text-xl font-extrabold uppercase ">
              SUIVEZ NOS AVENTURES
            </h3>
            <div className="flex gap-4 text-gray-700">
              <a href="" className="hover:text-blue-500">
                <Linkedin />
              </a>
              <a href="" className="hover:text-pink-500">
                <Instagram />
              </a>
              <a href="" className="hover:text-blue-600">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

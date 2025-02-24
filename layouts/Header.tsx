"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import de Framer Motion

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-5 px-8 fixed top-0 left-0 right-0 z-[999] bg-white shadow-lg">
      <Link href="/">
        <Image
          src="assets/icons/eden_health_navbar.png"
          alt="Eden Health Logo"
          width="150"
          height="130"
          className="cursor-pointer" // Change le curseur en pointeur pour indiquer que c'est cliquable
        />
      </Link>

      <nav className="hidden md:flex gap-12 items-center text-xl">
        <Link href="/le-menu">MENU</Link>
        <Link href="/le-concept">LE CONCEPT</Link>
        <Link
          href="/reserver-une-table"
          className="uppercase bg-primary text-white p-3 rounded-md font-bold text-lg"
        >
          RÉSERVER UNE TABLE
        </Link>
      </nav>

      <button
        className="md:hidden block text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }} // Départ en haut, invisible
            animate={{ opacity: 1, y: 0 }} // Animation d'entrée fluide
            exit={{ opacity: 0, x: 50 }} // Sortie vers la droite avec fade
            transition={{ duration: 0.4, ease: "easeInOut" }} // Animation fluide
            className="absolute top-full right-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 text-xl md:hidden text-center"
          >
            <Link href="/le-menu" onClick={() => setIsOpen(false)}>
              MENU
            </Link>
            <Link href="/le-concept" onClick={() => setIsOpen(false)}>
              LE CONCEPT
            </Link>
            <Link
              href="/reserver-une-table"
              className="uppercase bg-primary text-white p-3 rounded-md font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              RÉSERVER UNE TABLE
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Header };

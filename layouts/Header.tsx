import { Link } from "next-view-transitions";
import Image from "next/image";
import MenuPage from "@/app/le-menu/page";

const Header = () => {
  return <>
  <header className="flex py-[30px] px-[50px] justify-between fixed top-0 left-0 right-0 z-[999] bg-white shadow-lg">

    <Image src="assets/icons/eden_health_navbar.png" alt="image qui represente eden health" width="150" height="130"/>
 

  
      <ul className="flex gap-12 items-center text-xl">
          <li>
            <Link href="/le-menu">MENU</Link>
          </li>
          <li>
            <Link href="/le-concept">LE CONCEPT</Link>
          </li>
          <li>
            <Link href="/reserver-une-table" className="uppercase bg-primary text-white p-3 rounded-[5px] font-bold text-lg">RéSERVER UNE TABLE</Link>
          </li>
      </ul>
 
  </header>
  </>;
};

export { Header };

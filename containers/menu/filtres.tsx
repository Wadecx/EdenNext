"use client";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import RadioButton from "@/components/common/RadioButton";
import { MENUS } from "@/data/menus";
import Image from "next/image";
import { AnimateContainer } from "@/animations";


export const Filtres = () => {
  const [selected, setSelected] = useState<string>("option1");
  const burgers = MENUS.filter((menu) => menu.type === "burger");
  const bol = MENUS.filter((menu) => menu.type === "bol");
  const finger = MENUS.filter((menu) => menu.type === "finger");
  const planche = MENUS.filter((menu) => menu.type === "planche");
  const dessert = MENUS.filter((menu) => menu.type === "dessert");
  const boisson = MENUS.filter((menu) => menu.type === "boisson");
  const cocktail = MENUS.filter((menu) => menu.type === "cocktail");

  return (
    <section className="flex flex-col md:flex-row den">

      <div className="flex flex-col p-8 shadow-2xl md:w-1/5 mt-24 rounded-3xl ml-8 mr-8 max-h-[700px] overflow-y-auto md:sticky md:top-[150px]
scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200">
        <h2 className="flex text-2xl items-center gap-4 text-primary font-extrabold uppercase">
          <SlidersHorizontal /> Filtres
        </h2>
        <span className="w-full h-[0.02rem] block bg-gray-500 my-8"></span>

        <div className="">
          <h2 className="uppercase font-black text-xl mb-2 ">Préférences</h2>
          <p className="text-sm italic mb-4 text-gray-500">
            Ici, vous pouvez sélectionner vos préférences alimentaires.
          </p>

          <div className="flex flex-col gap-3">
            <RadioButton
              name="preferences"
              value="option1"
              label="Toutes"
              checked={selected === "option1"}
              onChange={setSelected}
            />
            <RadioButton
              name="preferences"
              value="option2"
              label="Végétariens"
              checked={selected === "option2"}
              onChange={setSelected}
            />
            <RadioButton
              name="preferences"
              value="option3"
              label="Végan"
              checked={selected === "option3"}
              onChange={setSelected}
            />
          </div>
          <span className="w-full h-[0.02rem] block bg-gray-500 my-8"></span>
        </div>

        <div className="">
          <h2 className="uppercase font-black text-xl mb-2">allérgies</h2>
          <p className="text-sm italic mb-4 text-gray-500">
            Ici, vous pouvez sélectionner les aliments auxquels vous êtes
            allérgique.
          </p>

          <div className="flex flex-col gap-3">
            <RadioButton
              name="allergie"
              value="opt1"
              label="Aucune"
              checked={selected === "opt1"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt2"
              label="Gluten"
              checked={selected === "opt2"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt3"
              label="Lactose"
              checked={selected === "opt3"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt4"
              label="Crustacé"
              checked={selected === "opt4"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt5"
              label="Fruits à coques"
              checked={selected === "opt5"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt6"
              label="Poisson"
              checked={selected === "opt6"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt7"
              label="Oeuf"
              checked={selected === "opt7"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt8"
              label="Arachide"
              checked={selected === "opt8"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt9"
              label="Soja"
              checked={selected === "opt9"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt10"
              label="Sesame"
              checked={selected === "opt10"}
              onChange={setSelected}
            />
            <RadioButton
              name="allergie"
              value="opt11"
              label="Céléri"
              checked={selected === "opt11"}
              onChange={setSelected}
            />
          </div>
        </div>
      </div>

      <AnimateContainer animate="popIn">
      <div className="flex-1">
        {/* Burgers */}
        <AnimateContainer animate="fadeIn">
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase " id="0">
          <Image
            src="assets/images/menu/burgers-section.png"
            alt="Image d'un burger"
            width={0}
            height={0}
            className="md:w-[90%] md:h-[230px] w-full h-[90px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row">
            <h2 className="uppercase text-2xl font-black">nos burgers</h2>
            <p className="text-secondary">- {burgers.length} Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12">
            {burgers.map((burger, index) => (
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
            ))}
          </div>
        </div>
        </AnimateContainer>
        {/* Bols */}
        <AnimateContainer animate="fadeIn">
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase" id="1">
          <Image
            src="assets/images/menu/bol-section.png"
            alt="Image d'un burger"
            width={0}
            height={0}
            className=" w-full h-[90px] md:w-[90%] md:h-[230px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row text-center">
            <h2 className="uppercase text-2xl font-black">nos healthy bowls</h2>
            <p className="text-secondary">- {bol.length} Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12 ">
            {bol.map((bol, index) => (
              <div
                className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
                key={index}
              >
                <Image
                  src={bol.image}
                  width={0}
                  height={0}
                  alt="Image montrant un bol"
                  className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
                />
                <div className="space-y-4 p-4 flex relative flex-col bottom-20">
                  <h2 className="font-bold text-xl">{bol.name}</h2>
                  <p>{bol.quantity}</p>
                  <p className="font-bold">{bol.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </AnimateContainer>
        {/* Finger */}
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase" id="2">
          <Image
            src="assets/images/menu/fingerfood-section.png"
            alt="Image d'un burger"
            width={0}
            height={0}
            className="md:w-[90%] md:h-[230px] w-full h-[90px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row text-center">
            <h2 className="uppercase text-2xl font-black">nos finger food</h2>
            <p className="text-secondary">- {finger.length} Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12">
            {finger.map((finger, index) => (
              <div
                className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
                key={index}
              >
                <Image
                  src={finger.image}
                  width={0}
                  height={0}
                  alt="Image montrant un finger"
                  className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
                />
                <div className="space-y-4 p-4 flex relative flex-col bottom-20">
                  <h2 className="font-bold text-xl">{finger.name}</h2>
                  <p>{finger.quantity}</p>
                  <p className="font-bold">{finger.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Planches */}
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase" id="3">
          <Image
            src="assets/images/menu/planches-section.png"
            alt="Image d'un burger"
            width={0}
            height={0}
            className="md:w-[90%] md:h-[230px] w-full h-[90px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row text-center">
            <h2 className="uppercase text-2xl font-black">nos planches</h2>
            <p className="text-secondary">- {planche.length} Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12 ">
            {planche.map((planche, index) => (
              <div
                className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
                key={index}
              >
                <Image
                  src={planche.image}
                  width={0}
                  height={0}
                  alt="Image montrant un finger"
                  className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
                />
                <div className="space-y-4 p-4 flex relative flex-col bottom-20">
                  <h2 className="font-bold text-xl">{planche.name}</h2>
                  <p>{planche.quantity}</p>
                  <p className="font-bold">{planche.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dessert */}
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase" id="4">
          <Image
            src="assets/images/menu/dessert-section.png"
            alt="Image d'un dessert"
            width={0}
            height={0}
            className="md:w-[90%] md:h-[230px] w-full h-[90px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row text-center">
            <h2 className="uppercase text-2xl font-black">nos desserts gourmands</h2>
            <p className="text-secondary">- {dessert.length} Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12">
            {dessert.map((dessert, index) => (
              <div
                className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
                key={index}
              >
                <Image
                  src={dessert.image}
                  width={0}
                  height={0}
                  alt="Image montrant un dessert"
                  className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
                />
                <div className="space-y-4 p-4 flex relative flex-col bottom-20">
                  <h2 className="font-bold text-xl">{dessert.name}</h2>
                  <p>{dessert.quantity}</p>
                  <p className="font-bold">{dessert.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Boissons */}
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase" id="4">
          <Image
            src="assets/images/menu/drinks-section.png"
            alt="Image d'un dessert"
            width={0}
            height={0}
            className="md:w-[90%] md:h-[230px] w-full h-[90px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row text-center">
            <h2 className="uppercase text-2xl font-black">cool drink</h2>
            <p className="text-secondary">- 7 Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12">
            {boisson.map((boisson, index) => (
              <div
                className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
                key={index}
              >
                <Image
                  src={boisson.image}
                  width={0}
                  height={0}
                  alt="Image montrant une boisson"
                  className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
                />
                <div className="space-y-4 p-4 flex relative flex-col bottom-20">
                  <h2 className="font-bold text-xl">{boisson.name}</h2>
                  <p>{boisson.quantity}</p>
                  <p className="font-bold">{boisson.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Détox & Mocktails */}
        <div className="flex flex-col mt-24 md:ml-24 mx-12 text-start gap-10 uppercase mb-24" id="4">
          <Image
            src="assets/images/menu/cocktail.png"
            alt="Image d'un cocktail"
            width={0}
            height={0}
            className="md:w-[90%] md:h-[230px] w-full h-[90px]"
          ></Image>
          <div className="flex gap-3 items-center text-xl flex-col md:flex-row text-center">
            <h2 className="uppercase text-2xl font-black">DÉTOX & MOCKTAILS</h2>
            <p className="text-secondary">- {} Produits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16 md:mr-12">
            {cocktail.map((cocktail, index) => (
              <div
                className="min-w-0 shrink-0 grow-0 basis-full px-4 py-12 md:px-4 md:basis-1/2 lg:basis-1/4 shadow-lg rounded-2xl max-h-[320px] max-w-fit"
                key={index}
              >
                <Image
                  src={cocktail.image}
                  width={0}
                  height={0}
                  alt="Image montrant une boisson"
                  className="-mt-2 w-[300px] max-h-[200px] mx-auto object-contain relative bottom-[30%]"
                />
                <div className="space-y-4 p-4 flex relative flex-col bottom-20">
                  <h2 className="font-bold text-xl">{cocktail.name}</h2>
                  <p>{cocktail.quantity}</p>
                  <p className="font-bold">{cocktail.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      </AnimateContainer>
    </section>
  );
};

export default Filtres;

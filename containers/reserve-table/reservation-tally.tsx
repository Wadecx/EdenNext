import Image from "next/image";

export const Reservation = () => {
  return (
    <section className="z-[999] flex flex-col items-center">
      {/* Image de fond */}
      <Image
        src="assets/images/home/waves.png"
        width={0}
        height={0}
        alt=""
        className="md:w-full relative md:bottom-15 bottom-12 bg-cover"
        sizes="100vw"
      />

      {/* Formulaire Tally */}
        <iframe
          src="https://tally.so/embed/wz1N90?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          height="867"
          title="RÉSERVER VOTRE TABLE"
          className=""
        />

    </section>
  );
};

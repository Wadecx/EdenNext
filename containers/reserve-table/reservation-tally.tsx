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
        className="md:w-full -mt-24"
        sizes="100vw"
      />

      <div className="max-w-[80%] w-full">
        <iframe
          src="https://tally.so/embed/wz1N90?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          height="867"
          width="100%"
          title="RÉSERVER VOTRE TABLE"
          className=""
        />
      </div>
      {/* Formulaire Tally */}
    </section>
  );
};

import Image from "next/image"
import { Link } from "next-view-transitions";


export const Edenhealthbonheur = () =>{
    return(
        <>
        <section className=" z-[999]">
            <Image src="assets/images/home/waves.png" width={0} height={0} alt="" className="md:w-full relative md:bottom-15 bottom-12 bg-cover" sizes="100vw"></Image>

            {/* Partie gauche  */}
            <div className="flex items-center flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <Image src="/assets/images/home/bowl-home-section.jpg" width="150" height="200" className="w-full max-h-[600px] object-contain" alt="Image d'un bol"></Image>
                </div>

                {/* Partie Droite  */}
                <div className="flex-1 flex flex-col gap-10 text-start ml-4">
                    <h2 className="text-3xl font-bold md:w-[50%] uppercase">Eden Health, le bonheur au <span className="text-primary">naturel</span>.</h2>
                    <p className="md:w-[70%] w-[80%]">On dit qu’il existait jadis, un jardin où l’eau de source coulait à flot et que dans ce lieu on pouvait manger avec satiété.  Dans ce jardin, tout était bon, savoureux, sain à n’en pas douter…</p>
                    <p className="md:w-[70%] w-[80%]">Notre objectif, prendre soin de vous. Dans notre jardin, vous mangerez des produits frais et sains, parfaitement ‘healthy’ !
                    EDEN HEALTH, une entreprise engageante, une entreprise éco-responsable.</p>

            <Link href="/reserver-une-table" className="flex items-center uppercase justify-center font-black bg-secondary text-white h-10 rounded-md px-6 py-4 w-fit text-xl"> EN SAVOIR PLUS</Link>

                </div>
            </div>
        </section>
        </>
    )
}
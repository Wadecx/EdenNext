import Image from "next/image"
import { Link } from "next-view-transitions";


export const Edenhealthbonheur = () =>{
    return(
        <>
        <section className=" z-[999]">
            <Image src="assets/images/home/waves.png" width={0} height={0} alt="" className="w-full relative bottom-12 bg-cover" sizes="100vw"></Image>

            {/* Partie gauche  */}
            <div className="flex items-center">
                <div className="w-1/2">
                    <Image src="/assets/images/home/bowl-home-section.jpg" width="150" height="200" className="w-full max-h-[600px] object-contain" alt="Image d'un bol"></Image>
                </div>

                {/* Partie Droite  */}
                <div className="flex-1 flex flex-col gap-10 text-start">
                    <h2 className="text-3xl font-bold w-[50%] uppercase">Eden Health, le bonheur au <span className="text-primary">naturel</span>.</h2>
                    <p className="w-[70%]">On dit qu’il existait jadis, un jardin où l’eau de source coulait à flot et que dans ce lieu on pouvait manger avec satiété.  Dans ce jardin, tout était bon, savoureux, sain à n’en pas douter…</p>
                    <p className="w-[70%]">Notre objectif, prendre soin de vous. Dans notre jardin, vous mangerez des produits frais et sains, parfaitement ‘healthy’ !
                    EDEN HEALTH, une entreprise engageante, une entreprise éco-responsable.</p>

            <Link href="/reserver-une-table" className="flex items-center uppercase justify-center font-black bg-secondary text-white h-10 rounded-md px-6 py-4 w-fit"> EN SAVOIR PLUS</Link>

                </div>
            </div>
        </section>
        </>
    )
}
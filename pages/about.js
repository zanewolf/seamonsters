import React from 'react'
import SectionHero from "../components/SectionHero";
import seaeye from '../public/seaeye.jpg'
import Hero from '../components/Hero'
import pete from '../public/pete.jpg'
import Image from "next/image";

export default function About() {
    return (
        <div className={''}>
            <SectionHero image={seaeye} imageheight={'50vh'} imageposition={'center'} priority={true} textposition={'bottom'}>
                <div className={'text-2xl lg:text-5xl bottom-0 font-bold drop-shadow-xl shadow-black m-8 text-center'}>
                    Sea Monsters Throughout the Ages: Fables, Films, and Facts
                </div>
            </SectionHero>
            <div>
                <div className={'p-10 m-4 text-lg '}>
                    <p className={'mb-4'}> There have always been tales of sea monsters. For as long as we humans have ventured into the ocean, our imaginations have conjured images of serpents, krakens, leviathans, and other creatures, all of whom seem bent on the destruction of those who dare set foot into the sea. Humankinds conviction that sea monsters are real is so powerful that even today rumors abound of sea monsters lurking in the depths. Indeed, every major religioneastern and westernfeatures sea monsters. Are these declarations true? Do giants roam the deep sea? Did the explorers of centuries ago see creatures from their small wooden boats that we do not see today? During this course we explore sea monsters through a social, spiritual, literary, and scientific lens. We study the sea monsters that flourish on ancient maps to understand the minds of sixteenth century scholars. We examine the bodies of real sea monsters, and consider the world in which such grotesque creatures might evolve. We read tales of creatures from classic and contemporary literature. Most importantly, we develop a better understanding of how humans perceive the world, and how our consciousness can simultaneously embrace our wildest dreams and cower from our greatest fears. Sea monsters, both real and imagined, tell us much about life in the deep sea, and even more about humankind.</p>
                    <p className={''}> As part of this course, students design their own sea monster and create a mythos for it, drawing on all that they learned from the course and pulling inspiration from a number of cultures and their monsters. </p>

                </div>
            </div>
            <div className={'min-h-[30vh] h-auto bg-white text-black p-8 m-auto flex flex-row flex-wrap gap-4 justify-center'}>
                <div className={'m-auto w-[400px]'}>
                    <Image src={pete} alt={'Profile Image of Pete'} width={400}/>
                </div>
                <div className="aboutPete w-[85vw] md:w-1/2 h-full text-lg justify-center m-auto ">
                    <div className={'text-5xl font-bold mb-8'}>taught by Dr. Pete Girguis</div>
                    <div>
                        <p className={"center"}> <a href={"https://girguislab.oeb.harvard.edu/people/peter-girguis"} alt={"Link to Pete Girguis' homepage"}>Dr. Girguis</a> is a Professor of Organismic and Evolutionary Biology, Harvard University, where he runs a lab researching most-things deep-sea-related. He has taught Sea Monsters through Harvard University Extension School and as a freshman colloquium through Harvard College.  </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

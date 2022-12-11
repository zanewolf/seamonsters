import React from 'react';
import Image from "next/image";
import styles from "../styles/section.module.css";

export default function SectionHero ({image,imageposition,imageheight,textposition,children}) {
    return (
        <section className={`relative h-[40vh] lg:h-[60vh] w-full`}>
            {/*<div className={styles.imageWrapper}>*/}
            <Image
                // className={styles.landingImage}
                priority={true}
                src={image}
                alt="Picture of ocean surface with sunset rays"
                fill={'cover'}
                placeholder="blur"
                // position={'relative'}
            />
            {/*</div>*/}


            <div className={`flex flex-col flex-nowrap m-auto h-full ${textposition === 'center'? 'justify-center' : 'justify-end'}`}>
                {children}
            </div>
        </section>
    );
}

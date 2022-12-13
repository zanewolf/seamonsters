import React from 'react';
import Image from "next/image";
import styles from "../styles/section.module.css";

export default function SectionHero ({image,imageposition,imageheight,textposition,children}) {
    return (
        <section className={`relative overflow-hidden h-[40vh] lg:h-[50vh] w-full`}>
            {/*<div className={styles.imageWrapper}>*/}
            <Image
                // className={styles.landingImage}
                priority={true}
                src={image}
                alt="Picture of ocean surface with sunset rays"
                // fill={'contain'}
                width={1600}
                // height={'50vh'}
                placeholder="blur"
                className={'lg:-translate-y-52'}
                // style={{''}}
                // position={'relative'}
            />
            {/*</div>*/}


            <div className={`flex flex-col flex-nowrap m-auto h-full ${textposition === 'center'? 'justify-center' : 'justify-end'}`}>
                {children}
            </div>
        </section>
    );
}

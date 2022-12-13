import React, {useState,useEffect} from 'react'
import Masonry from "react-masonry-css";
import Image from "next/image";
import useShuffle from '../utils/useShuffle'
import Modal from 'react-modal'
// import dynamic from "next/dynamic";
import GalleryImage from "./GalleryImage";
// const GalleryImage = dynamic(() => import("../components/GalleryImage"), {
//     ssr: false,
// });

export default function Gallery({images}) {

    // const [imageDeck,setImageDeck] = useState(images)
    //
    // useEffect(()=>{
    //     setImageDeck(useShuffle(imageDeck))
    // },[])


    console.log(images)

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div className={'pt-24'}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="wrapper"
                columnClassName="my-masonry-grid_column">
                {images.map((image,i)=>{
                    return (
                        <GalleryImage image={image} key={i}/>
                    )
                })}
            </Masonry>
        </div>
    )
}

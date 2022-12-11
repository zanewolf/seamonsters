import React, {useState,useEffect} from 'react'
import Masonry from "react-masonry-css";
import Image from "next/image";
import useShuffle from '../utils/useShuffle'
import Modal from 'react-modal'
import GalleryImage from "./GalleryImage";


export default function Gallery({images}) {

    const [imageDeck,setImageDeck] = useState(images)


    // console.log(open)

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
                {imageDeck.map((image,i)=>{
                    return (
                        <GalleryImage image={image} key={i}/>
                    )
                })}
            </Masonry>
        </div>
    )
}

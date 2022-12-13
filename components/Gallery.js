import React from 'react'
import Masonry from "react-masonry-css";
import Image from "next/image";
import useShuffle from '../utils/useShuffle'
import GalleryImage from "./GalleryImage";


export default function Gallery({images}) {

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

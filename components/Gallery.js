import React from 'react'
import Masonry from "react-masonry-css";
import Image from "next/image";
import useShuffle from '../utils/useShuffle'


export default function Gallery({images}) {

    let images2 = useShuffle(images)

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
                {images2.map((image,i)=>{
                    return (
                            <Image
                        src={'https:' +image.fields.image.fields.file.url}
                        alt={'Image of something monstrous'}
                        className={'image'}
                        width={300}
                        height={300}
                        key={i}

                    />)
                })}
            </Masonry>
        </div>
    )
}

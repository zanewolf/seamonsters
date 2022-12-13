import React, {useEffect, useState} from 'react'
import Image from "next/image";
import 'react-bootstrap'

export default function GalleryImage({image}) {

    // const [open, setOpen] = useState(false);

    // const handleOpen = () => setOpen(true);

    return (
        <div>
            <div className={'group relative flex justify-center hover:scale-105 cursor-pointer'} onClick={()=>handleOpen()} >
                <Image
                    src={'https:' +image.fields.image.fields.file.url}
                    alt={image.fields.author+"'s Sea Monster"}
                    className={'image group-hover:brightness-50 '}
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}

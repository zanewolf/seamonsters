import React, {useEffect, useState} from 'react'
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import 'react-bootstrap'
import {richTextFromMarkdown} from "@contentful/rich-text-from-markdown";

export default function GalleryImage({image}) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

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
                <div className={'flex flex-col flex-nowrap justify-center ml-auto h-full items-center absolute invisible group-hover:!visible'}>
                    <div className={'text-2xl  border-b-2'}>{image.fields.name}</div>
                    <hr/>
                    <div className={''}>
                        by {image.fields.author}
                    </div>
                </div>
            </div>
            {open && <GalleryModal image={image} open={open} onClose={() => setOpen(false)}/>}
        </div>
    )
}

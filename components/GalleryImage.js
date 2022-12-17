import React, {useEffect, useState} from 'react'
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function GalleryImage({image}) {

    const [open, setOpen] = useState(false)


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    {image.fields.name && <div className={'text-2xl  border-b-2'}>{image.fields.name}</div>  }
                    <div className={''}>
                        by {image.fields.author}
                    </div>
                </div>

            </div>
            <GalleryModal image={image} open={open} handleOpen={()=>handleOpen()} handleClose={()=>handleClose()}/>
        </div>
    )
}

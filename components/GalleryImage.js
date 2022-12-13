import React, {useEffect, useState} from 'react'
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";


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
                    <div className={'text-2xl  border-b-2'}>{image.fields.name}</div>
                    <hr/>
                    <div className={''}>
                        by {image.fields.author}
                    </div>
                </div>
                {/*<GalleryModal image={image} open={open} onClose={() => {console.log('closing modal'); setOpen(false)}}/>*/}
            </div>
            <Modal
                show={open}
                onHide={()=>handleClose()}
                centered
                scrollable={true}
                size={'xl'}
            >
                {/*<Modal.Header closeButton />*/}
                <Modal.Header className={'flex justify-end ml-auto'}>
                    <Button variant={'dark'} className={'btn-close text-black'} onClick={()=>handleClose()}>X</Button>
                </Modal.Header>
                <Modal.Body className={'text-black flex flex-col flex-nowrap justify-items-center m-auto w-full'}>

                    <div className={'flex justify-center m-auto'}>
                        <Image
                            src={'https:' +image.fields.image.fields.file.url}
                            alt={image.fields.author+"'s Sea Monster"}
                            // fill={'contain'}
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className={'flex flex-col flex-nowrap'}>
                        <div className={'p-2 text-center mb-10'}>
                            <span className={'text-4xl font-bold'}>{image.fields.name} </span> <span className={'text-2xl'}>by {image.fields.author}</span>
                        </div>
                        <div className={'p-4 whitespace-pre-wrap'}  >
                            {// eslint-disable-next-line
                            }<ReactMarkdown children={image.fields.mythos} remarkPlugins={[remarkGfm]}/>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

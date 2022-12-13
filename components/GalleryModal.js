import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export default function GalleryModal({image,open,handleOpen,handleClose}) {

    return (
        <div>
            <Modal
                show={open}
                onHide={()=>handleClose()}
                centered
                scrollable={true}
                size={'xl'}
            >
                {/*<Modal.Header closeButton />*/}
                <Modal.Header className={'flex justify-end ml-auto'} closeButton>
                    {/*<Button variant={'dark'} className={'btn-close text-black'} onClick={()=>handleClose()}>X</Button>*/}
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
    );
}
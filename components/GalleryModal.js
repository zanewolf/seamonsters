import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown');
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function GalleryModal({image,open,onClose}) {

    return (
        <div>
            <Modal
                show={open}
                onHide={onClose}
                centered
                scrollable={true}
                size={'xl'}
            >
                {/*<Modal.Header closeButton />*/}
                <Modal.Header className={'flex justify-end ml-auto'}>
                    <Button variant={'dark'} className={'btn-close text-white'} onClick={onClose}>X</Button>
                </Modal.Header>
                <Modal.Body className={'text-black flex flex-col flex-nowrap justify-items-center m-auto w-full'}>

                    <div className={'flex justify-center m-auto'}>
                        <Image
                            src={'https:' +image.fields.image.fields.file.url}
                            alt={image.fields.author+"'s Sea Monster"}
                            // fill={'contain'}
                            width={600}
                            height={600}
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
import React, {useState, useEffect}from 'react'
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";


export default function GalleryModal({image,open, onOpen, onClose}) {
    // const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <>
            <Modal toggle={onClose} isOpen={open} className={'text-black'}>
                <div className=" modal-header">
                    {/*<h5 className=" modal-title" id="exampleModalLabel">*/}
                    {/*    Modal title*/}
                    {/*</h5>*/}
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={onClose}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <div className={''}>
                        <Image
                            src={'https:' +image.fields.image.fields.file.url}
                            alt={image.fields.author+"'s Sea Monster"}
                            // fill={'contain'}
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className={'flex flex-col flex-nowrap'}>
                        <div>
                            {image.fields.name}
                        </div>
                        <div>
                            {image.fields.author}
                        </div>
                        <div>
                            {image.fields.mythos}
                        </div>
                    </div>
                </ModalBody>
                {/*<ModalFooter>*/}
                {/*    <Button*/}
                {/*        color="secondary"*/}
                {/*        type="button"*/}
                {/*        onClick={() => setModalOpen(!modalOpen)}*/}
                {/*    >*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*    <Button color="primary" type="button">*/}
                {/*        Save changes*/}
                {/*    </Button>*/}
                {/*</ModalFooter>*/}
            </Modal>
        </>
    );
}




// export default Modal;

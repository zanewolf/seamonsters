import React,{useState} from 'react'
import downImage from "../public/downImageSmall.jpg"
import {useSpring, animated as a } from 'react-spring'

const styles={
    modal_image:{
        objectFit: "cover",
        // width: "50vw",
        maxWidth: "50vw",
        maxHeight: "80vh",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
    modal_text:{
        whiteSpace: "pre-line"}
}


export default function Card ({card, style,flippedStatus,onClick}){

    const {transform, opacity} = useSpring({
        opacity: flippedStatus ? 1 : 0,
        transform: `perspective(600px) rotateX(${flippedStatus ? 180 : 0}deg)`,
        config: {mass: 10, tension: 250, friction: 80},
    })


    return (
            <div onClick = {onClick} >
                {flippedStatus ?
                    <a.img
                        className={'cursor-pointer overflow-hidden relative w-20 h-20 md:w-40 md:h-40 object-cover will-change-auto'}
                        src={card.fields.image.fields.file.url}
                        alt={'Right side up card'}
                        style={{opacity , transform, rotateX: '180deg'}}
                        // onClick ={onClick}
                    />
                    : <a.img
                        className={"cursor-pointer overflow-hidden relative w-20 h-20 md:w-40 md:h-40  will-change-auto"}
                        src={'/downImageSmall.jpg'}
                        alt={'Hidden Card'}
                        style={{transform, opacity: opacity.to(o => 1 - o)}}
                        // onClick ={onClick}
                    />
                }
            </div>
        );
}
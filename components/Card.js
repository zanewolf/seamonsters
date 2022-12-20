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


export default function Card ({card, style,flippedStatus,onClick,diffLevel}){

    const {transform, opacity} = useSpring({
        opacity: flippedStatus ? 1 : 0,
        transform: `perspective(600px) rotateX(${flippedStatus? 180 : 0}deg)`,
        config: { mass: 5, tension: 250, friction: 80},
    })


    return (
            <div onClick = {onClick} >
                {flippedStatus ?
                    <a.img
                        className={`cursor-pointer overflow-hidden relative object-cover will-change-auto ${diffLevel === 12 ? 'w-32 h-32 md:w-48 md:h-48' : diffLevel === 18 ?'w-28 h-28 md:w-44 md:h-44' :'w-28 h-24 md:w-40 md:h-40' }`}
                        src={card.fields.image.fields.file.url}
                        alt={'Right side up card'}
                        style={{opacity , transform, rotateX: '180deg'}}
                        // onClick ={onClick}
                    />
                    : <a.img
                        className={`cursor-pointer overflow-hidden relative will-change-auto ${diffLevel === 12 ? 'w-32 h-32 md:w-48 md:h-48' : diffLevel === 18 ?'w-28 h-28 md:w-44 md:h-44' :'w-28 h-24 md:w-40 md:h-40' }`}
                        src={'/downImageSmall.jpg'}
                        alt={'Hidden Card'}
                        style={{transform, opacity: opacity.to(o => 1 - o)}}
                        // onClick ={onClick}
                    />
                }
            </div>
        );
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Gallery from "../components/Gallery";
import {fetchMedia} from "./api/ContentfulAPI";
import React,{useEffect,useState} from "react";
import useShuffle from "../utils/useShuffle";

export async function getStaticProps() {
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return content
}

function shuffleCards(array) {

    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;


}



export default function Home({content}) {

    const [imageDeck,setImageDeck] = useState(content)

    useEffect(()=>{
        setImageDeck(shuffleCards([...content]))
    },[content])

    return (
    <div className={styles.container}>

        <Gallery images={imageDeck}/>

      <footer className={styles.footer}>
          Copyright 2022
      </footer>
    </div>
  )
}

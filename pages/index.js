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



export default function Home({content}) {

    const [imageDeck,setImageDeck] = useState(content)

    useEffect(()=>{
        setImageDeck(useShuffle([...content]))
    },[])

    return (
    <div className={styles.container}>

        <Gallery images={imageDeck}/>

      <footer className={styles.footer}>
          Copyright 2022
      </footer>
    </div>
  )
}

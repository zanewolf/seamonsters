import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Gallery from "../components/Gallery";
import {createClient} from "contentful"
import {fetchMedia} from "./api/ContentfulAPI";
import useShuffle from '../utils/useShuffle'
import {useEffect, useState} from "react";

export async function getStaticProps() {
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return (content)
}



export default function Home({content}) {



  return (
    <div className={styles.container}>
        {/*<div id={'modal-root'}></div>*/}
        <Gallery images={content}/>



      <footer className={styles.footer}>
          Copyright 2022

      </footer>
    </div>
  )
}

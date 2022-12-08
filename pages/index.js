import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Gallery from "../components/Gallery";
import {createClient} from "contentful"
import {fetchMedia} from "./api/ContentfulAPI";

export async function getStaticProps() {
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return content
}



export default function Home({content}) {


  return (
    <div className={styles.container}>

        <Gallery images={content}/>


      <footer className={styles.footer}>
          Copyright 2022

      </footer>
    </div>
  )
}

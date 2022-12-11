import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
// import Gallery from "../components/Gallery";
import {fetchMedia} from "./api/ContentfulAPI";
import dynamic from 'next/dynamic'
const Gallery = dynamic(() => import("../components/Gallery"), {
    ssr: false,
});

export async function getStaticProps() {
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return (content)
}



export default function Home({content}) {

    console.log(content)



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

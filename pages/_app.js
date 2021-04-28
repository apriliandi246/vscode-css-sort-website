import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import { useEffect } from "react";
import styles from "../styles/styles.module.css";

export default function MyApp({ Component, pageProps }) {
   useEffect(() => {
      document.documentElement.setAttribute("lang", "en");
   }, []);

   return (
      <>
         <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
         </Head>

         <div className={styles.container}>
            <div className={styles.top_links}>
               <Link href="/">
                  <a className={styles.to_home}>🏠</a>
               </Link>

               <Link href="https://github.com/apriliandi246/vscode-css-sort">
                  <a
                     href="https://github.com/apriliandi246/vscode-css-sort"
                     target="_blank"
                     rel="noopener"
                  >
                     <Image
                        src="/github.png"
                        width={35}
                        height={35}
                        alt="github-icon"
                     />
                  </a>
               </Link>
            </div>

            <div className={styles.menus__container}>
               <Link href="/html">
                  <a>HTML</a>
               </Link>

               <Link href="/css">
                  <a>CSS</a>
               </Link>

               <Link href="/scss">
                  <a>SCSS</a>
               </Link>

               <Link href="/sc">
                  <a>Styled-Component</a>
               </Link>

               <Link href="/jf">
                  <a>Javascript Framework</a>
               </Link>
            </div>

            <div className={styles.introduction}>
               <Component {...pageProps} />
            </div>
         </div>
      </>
   );
}

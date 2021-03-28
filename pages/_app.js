import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import styles from "../styles/home.module.css";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
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
                  <a target="_blank" rel="noopener">
                     <Image src="/github.png" width={35} height={35} />
                  </a>
               </Link>
            </div>

            <Header />

            <div className={styles.introduction}>
               <Component {...pageProps} />
            </div>
         </div>
      </>
   );
}

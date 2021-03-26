import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/home.module.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
         </Head>

         <div className={styles.container}>
            <Link href="/">
               <a className={styles.to_home}>🏠</a>
            </Link>
            <Header />

            <div className={styles.introduction}>
               <Component {...pageProps} />
            </div>
         </div>
      </>
   );
}

export default MyApp;

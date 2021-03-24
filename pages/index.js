import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <div className={styles.container}>
            <h1>Hello</h1>
         </div>
      </>
   );
}

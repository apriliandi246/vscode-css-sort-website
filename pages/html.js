import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Html() {
   return (
      <>
         <Head>
            <title>HTML</title>
         </Head>

         <h1 className={styles.introduction__title}>HTML</h1>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>👉 HTML</h2>

            <p className={styles.introduction__desc}>
               Simple, just select CSS properties you want and choose what
               pattern you wanna apply into sorting functionality. It has two
               pattern, that's{" "}
               <span className={styles.hightlight}>Smaller to Bigger</span> and{" "}
               <span className={styles.hightlight}>Bigger to Smaller.</span>
            </p>
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h2 className={styles.introduction__explain}>
               🤔 How to use it in HTML ????
            </h2>
         </section>
      </>
   );
}

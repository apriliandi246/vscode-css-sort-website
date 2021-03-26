import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Scss() {
   return (
      <>
         <Head>
            <title>SCSS</title>
         </Head>

         <h1 className={styles.introduction__title}>SCSS</h1>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>👉 SCSS</h2>

            <p className={styles.introduction__desc}>
               Simple, just select CSS properties you want and choose what
               pattern you wanna apply into sorting functionality. It has two
               pattern, that's{" "}
               <span className={styles.hightlight}>Smaller to Bigger</span> and{" "}
               <span className={styles.hightlight}>Bigger to Smaller.</span>
            </p>

            <p className={styles.more_desc}>
               But, in Scss you have to look some rules especially if you use
               nested styling and you don't have to worry it's just simple
               rules.
            </p>
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h2 className={styles.introduction__explain}>
               🤔 How to use it in SCSS ????
            </h2>
         </section>
      </>
   );
}

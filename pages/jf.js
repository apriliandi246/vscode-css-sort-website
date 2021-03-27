import Head from "next/head";
import styles from "../styles/home.module.css";

export default function JavascriptFramework() {
   return (
      <>
         <Head>
            <title>Javascript Framework</title>
         </Head>

         <h1 className={styles.introduction__title}>Javascript Framework</h1>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>
               👉 Javascript Framework
            </h2>

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
               🤔 How to use it in Javascript Framework ????
            </h2>

            <p className={styles.introduction__desc}>
               If you use Javascript framework like Svelte and Vue and you have
               to write CSS code in style tag (mostly). And if you want use this
               extension, just same rules with previous documentaion for
               different languages.
            </p>
         </section>
      </>
   );
}

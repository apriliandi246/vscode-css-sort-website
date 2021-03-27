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
               functionalities or concept, that's{" "}
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               <span className={styles.hightlight}>bigger to smaller.</span>
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

            <p className={styles.more_desc}>
               If you use React and use{" "}
               <span className={styles.hightlight}>styled-component</span>{" "}
               library, this extension support{" "}
               <span className={styles.hightlight}>.js</span>,{" "}
               <span className={styles.hightlight}>.jsx</span>,{" "}
               <span className={styles.hightlight}>.ts</span> and{" "}
               <span className={styles.hightlight}>.tsx</span>.
            </p>
         </section>
      </>
   );
}

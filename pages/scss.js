import Head from "next/head";
import Image from "next/image";
import styles from "../styles/styles.module.css";

export default function Scss() {
   return (
      <>
         <Head>
            <title>SCSS</title>
         </Head>
         <h1 className={styles.introduction__title}>SCSS</h1>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h2 className={styles.introduction__explain}>
               🤔 How to use it in SCSS ????
            </h2>

            <p className={styles.introduction__desc}>
               Simple, just select CSS properties you want, right click, and
               choose what pattern you wanna apply into sorting functionality.
               It has two functionalities or concept, that's{" "}
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               <span className={styles.hightlight}>bigger to smaller.</span>
            </p>

            <p className={styles.more_desc}>
               But, in SCSS you have to look some rules especially if you use
               nested styling and you don't have to worry it's just simple
               rules.
            </p>
         </section>

         <section className={styles.section}>
            <h3
               className={styles.introduction__title_example}
               style={{ marginTop: "40px" }}
            >
               Before :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/RNdpK3V/scss-before.png"
                  width={884}
                  height={965}
                  quality={100}
                  alt="scss-example-1"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Single sort (
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               {""}
               <span className={styles.hightlight}>bigger to smaller</span>) in
               main style :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/XxNJ9dn/scss-smaller-to-bigger-single.png"
                  width={979}
                  height={968}
                  quality={100}
                  alt="scss-example-2"
                  layout="responsive"
               />
            </div>

            <br />
            <br />

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/CwKRPhK/scss-bigger-to-smaller-single.png"
                  width={1029}
                  height={970}
                  quality={100}
                  alt="scss-example-3"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h3 className={styles.introduction__title_example}>
               Multiple sort (
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               {""}
               <span className={styles.hightlight}>bigger to smaller</span>) in
               nested style :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/RQCxhGx/scss-smaller-to-bigger-multiple.png"
                  width={1023}
                  height={972}
                  quality={100}
                  alt="sc-example-4"
                  layout="responsive"
               />
            </div>

            <br />
            <br />

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/4JH1XK1/scss-bigger-to-smaller-multiple.png"
                  width={1033}
                  height={970}
                  quality={100}
                  alt="sc-example-5"
                  layout="responsive"
               />
            </div>
         </section>
      </>
   );
}

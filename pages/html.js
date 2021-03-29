import Head from "next/head";
import Image from "next/image";
import styles from "../styles/styles.module.css";

export default function Html() {
   return (
      <>
         <Head>
            <title>HTML</title>
         </Head>

         <h1 className={styles.introduction__title}>HTML</h1>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h2 className={styles.introduction__explain}>
               🤔 How to use it in HTML ????
            </h2>

            <p className={styles.introduction__desc}>
               Simple, just select CSS properties you want, right click, and
               choose what pattern you wanna apply into sorting functionality.
               It has two functionalities or concept, that's{" "}
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               <span className={styles.hightlight}>bigger to smaller.</span>
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
                  src="https://i.ibb.co/ZRsLKp3/output-onlinejpgtools.jpg"
                  width={986}
                  height={885}
                  quality={100}
                  alt="html-example-1"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Single sort (smaller to bigger) :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/nf6RNV2/html-single-smaller-to-bigger.png"
                  width={987}
                  height={806}
                  quality={100}
                  alt="html-example-2"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Single sort (bigger to smaller) :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/HhpZJTr/html-single-bigger-to-smaller.png"
                  width={983}
                  height={795}
                  quality={100}
                  alt="html-example-3"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               But, you can select selector too, not just the properties if you
               want single sort functionality.
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/GWj6yrM/html-multiple-smaller-to-bigger-single.png"
                  width={1127}
                  height={883}
                  quality={100}
                  alt="html-example-4"
                  layout="responsive"
               />
            </div>

            <br />
            <br />

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/cQvwfMy/html-multiple-bigger-to-smaller-single.png"
                  width={1127}
                  height={883}
                  quality={100}
                  alt="html-example-5"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Multiple sort (smaller to bigger) :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/zs5t5FK/html-multiple-smaller-to-bigger.png"
                  width={1123}
                  height={973}
                  quality={100}
                  alt="html-example-6"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Multiple sort (bigger to smaller) :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/JHtkMzx/html-multiple-bigger-to-smaller.png"
                  width={1102}
                  height={970}
                  quality={100}
                  alt="html-example-7"
                  layout="responsive"
               />
            </div>
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h3 className={styles.introduction__title_example}>
               If you use media query :
            </h3>

            <div className={styles.border_img}>
               <Image
                  src="https://i.ibb.co/47xK8m0/html-media-query.png"
                  width={1120}
                  height={943}
                  quality={100}
                  alt="html-example-8"
                  layout="responsive"
               />
            </div>
         </section>
      </>
   );
}

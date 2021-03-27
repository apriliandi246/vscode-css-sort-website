import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Css() {
   return (
      <>
         <Head>
            <title>CSS</title>
         </Head>

         <h1 className={styles.introduction__title}>CSS</h1>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>👉 CSS</h2>

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
               🤔 How to use it in CSS ????
            </h2>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>Before :</h3>

            <Image
               src="https://i.ibb.co/J3SQPRk/css-before.png"
               width={686}
               height={595}
               quality={100}
               alt="css-example-1"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Single sort (smaller to bigger) :
            </h3>

            <Image
               src="https://i.ibb.co/Xjd31mh/css-smaller-to-bigger-single.png"
               width={956}
               height={559}
               quality={100}
               alt="css-example-2"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Single sort (bigger to smaller) :
            </h3>

            <Image
               src="https://i.ibb.co/b1jPmHQ/css-bigger-to-smaller-single.png"
               width={956}
               height={557}
               quality={100}
               alt="css-example-3"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               But, you can select selector too, not just the properties if you
               want single sort functionality.
            </h3>

            <Image
               src="https://i.ibb.co/pZGBZYM/css-smaller-to-bigger-single-selector.png"
               width={933}
               height={557}
               quality={100}
               alt="css-example-4"
               layout="responsive"
            />

            <br />
            <br />

            <Image
               src="https://i.ibb.co/RjFzzn3/css-bigger-to-smaller-single-selector.png"
               width={941}
               height={557}
               quality={100}
               alt="css-example-5"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Multiple sort (smaller to bigger) :
            </h3>

            <Image
               src="https://i.ibb.co/DDqYccg/css-multiple-smaller-to-bigger.png"
               width={891}
               height={645}
               quality={100}
               alt="css-example-6"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Multiple sort (bigger to smaller) :
            </h3>

            <Image
               src="https://i.ibb.co/QDpxCtQ/css-multiple-bigger-to-smaller.png"
               width={966}
               height={645}
               quality={100}
               alt="css-example-7"
               layout="responsive"
            />
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h3 className={styles.introduction__title_example}>
               If you use media query :
            </h3>

            <Image
               src="https://i.ibb.co/Hq4KzbT/css-media-query.png"
               width={1004}
               height={626}
               quality={100}
               alt="css-example-8"
               layout="responsive"
            />
         </section>
      </>
   );
}

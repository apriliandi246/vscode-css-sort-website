import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function StyledComponent() {
   return (
      <>
         <Head>
            <title>Styled-Component</title>
         </Head>

         <h1 className={styles.introduction__title}>Styled-Component</h1>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>
               👉 Styled-Component
            </h2>

            <p className={styles.introduction__desc}>
               Simple, just select CSS properties you want and choose what
               pattern you wanna apply into sorting functionality. It has two
               pattern, that's{" "}
               <span className={styles.hightlight}>Smaller to Bigger</span> and{" "}
               <span className={styles.hightlight}>Bigger to Smaller.</span>
            </p>

            <p className={styles.more_desc}>
               Same with SCSS, you have to look some rules especially if you use
               nested styling and you don't have to worry it's just simple
               rules.
            </p>
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h2 className={styles.introduction__explain}>
               🤔 How to use it in Styled-Component ????
            </h2>
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>Before :</h3>

            <Image
               src="https://i.ibb.co/pQhJFX9/sc-before.png"
               width={726}
               height={958}
               quality={100}
               alt="sc-example-1"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Single sort (
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               {""}
               <span className={styles.hightlight}>bigger to smaller</span>) in
               main style :
            </h3>

            <Image
               src="https://i.ibb.co/MPY24Tg/sc-smaller-to-bigger-single.png"
               width={995}
               height={966}
               quality={100}
               alt="sc-example-2"
               layout="responsive"
            />

            <br />
            <br />

            <Image
               src="https://i.ibb.co/vJKTKN6/sc-bigger-to-smaller-single.png"
               width={1037}
               height={986}
               quality={100}
               alt="sc-example-3"
               layout="responsive"
            />
         </section>

         <section className={styles.section}>
            <h3 className={styles.introduction__title_example}>
               Multiple sort (
               <span className={styles.hightlight}>smaller to bigger</span> and{" "}
               {""}
               <span className={styles.hightlight}>bigger to smaller</span>) in
               nested style :
            </h3>

            <Image
               src="https://i.ibb.co/zXwxVch/sc-smaller-to-bigger-multiple.png"
               width={1010}
               height={973}
               quality={100}
               alt="sc-example-4"
               layout="responsive"
            />

            <br />
            <br />

            <Image
               src="https://i.ibb.co/9rsWQX1/sc-bigger-to-smaller-multiple.png"
               width={1183}
               height={972}
               quality={100}
               alt="sc-example-5"
               layout="responsive"
            />
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h3 className={styles.introduction__title_example}>
               If you use props in one of your properties, you have to use
               single sort functionality.
            </h3>

            <Image
               src="https://i.ibb.co/JvxscKn/sc-main-style-props.png"
               width={1373}
               height={816}
               quality={100}
               alt="sc-example-6"
               layout="responsive"
            />

            <br />
            <br />

            <Image
               src="https://i.ibb.co/GtdvFQ1/sc-nested-style-pros.png"
               width={1354}
               height={960}
               quality={100}
               alt="sc-example-7"
               layout="responsive"
            />
         </section>
      </>
   );
}

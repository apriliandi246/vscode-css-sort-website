import Head from "next/head";
import { useState } from "react";
import styles from "../styles/home.module.css";

export default function Home() {
   const [beforeExample, resultOne, resultTwo] = useCssCode();

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <h1 className={styles.introduction__title}>
            📶 Vscode-css-sort extension
         </h1>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>
               👉 What is this ????
            </h2>

            <p className={styles.introduction__desc}>
               Vscode extension to sort your CSS properties and make them easy
               to read. For example :
            </p>

            <h3 className={styles.introduction__title_example}>Before :</h3>

            <pre className={styles.cssCode_container}>
               <code className={styles.css_code}>{beforeExample}</code>
            </pre>

            <h3 className={styles.introduction__title_example}>
               Smaller to Bigger :
            </h3>

            <pre className={styles.cssCode_container}>
               <code className={styles.css_code}>{resultOne}</code>
            </pre>

            <h3 className={styles.introduction__title_example}>
               Smaller to Bigger :
            </h3>

            <pre className={styles.cssCode_container}>
               <code className={styles.css_code}>{resultTwo}</code>
            </pre>
         </section>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>🤔 Why ????</h2>

            <p className={styles.introduction__desc}>
               I have explained why I created this extension in my blog.{" "}
               <a
                  href="https://apriliandi.xyz/blog/my-first-vscode-extension"
                  className={styles.link}
                  target="_blank"
                  rel="noopener"
               >
                  Read this.
               </a>
            </p>
         </section>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>
               🔧 How it's work ????
            </h2>

            <p className={styles.introduction__desc}>
               Simple, it will take your CSS properties that you already
               selected and final step is it will sorting your CSS properties.
            </p>

            <p className={styles.more_desc}>
               This extension has two functionality,{" "}
               <span className={styles.hightlight}>single sort</span> and{" "}
               <span className={styles.hightlight}>multiple sort</span>. Single
               sort, you select your CSS properties (just css proerties) and
               sorting the properties. Multiple sort, you select more than one
               CSS selector with the CSS properties itself and sorting the
               properties.
            </p>
         </section>

         <section className={styles.section}>
            <h2 className={styles.introduction__explain}>
               💻 Languages support
            </h2>

            <p className={styles.introduction__desc}>
               Currently, this extension support some languages (you can see at
               the header menu).
            </p>
         </section>

         <section className={styles.section} style={{ marginBottom: "0px" }}>
            <h2 className={styles.introduction__explain}>🏃 Live demo</h2>

            <p className={styles.introduction__desc}>
               You can try live demo at this{" "}
               <a
                  href="https://svelte-css-sort.netlify.app"
                  className={styles.link}
                  target="_blank"
                  rel="noopener"
               >
                  link
               </a>{" "}
               or this{" "}
               <a
                  href="https://react-css-sort.netlify.app"
                  className={styles.link}
                  target="_blank"
                  rel="noopener"
               >
                  link.
               </a>
               {""} Or you can download {""}
               <a
                  href="https://marketplace.visualstudio.com/items?itemName=apriliandi246.css-sort"
                  className={styles.link}
                  target="_blank"
                  rel="noopener"
               >
                  this extension
               </a>{" "}
               or type in search input at Vscode marketplace with keyword{" "}
               <span className={styles.hightlight}>css-sort.</span>
            </p>
         </section>
      </>
   );
}

function useCssCode() {
   const beforeExample = useState(`
selector {
   white-space: pre-line;
   display: block;
   resize: none;
   font-family: monospace;
   width: 100%;
   padding: 15px;
   border: 1px solid #38444d;
   font-size: 18px;
   outline: none;
   transition: background-color 0.2s;
   box-sizing: border-box;
   background-color: #253341;
   margin-top: 17px;
   color: #f5f5f5;
}
   `);

   const resultOne = useState(`
selector {
   width: 100%;
   resize: none;
   padding: 15px;
   outline: none;
   display: block;
   color: #f5f5f5;
   font-size: 18px;
   margin-top: 17px;
   white-space: pre-line;
   font-family: monospace;
   box-sizing: border-box;
   border: 1px solid #38444d;
   background-color: #253341;
   transition: background-color 0.2s;
}
   `);

   const resultTwo = useState(`
selector {
   transition: background-color 0.2s;
   border: 1px solid #38444d;
   background-color: #253341;
   font-family: monospace;
   box-sizing: border-box;
   white-space: pre-line;
   margin-top: 17px;
   font-size: 18px;
   display: block;
   color: #f5f5f5;
   padding: 15px;
   outline: none;
   resize: none;
   width: 100%;
}
   `);

   return [beforeExample[0], resultOne[0], resultTwo[0]];
}

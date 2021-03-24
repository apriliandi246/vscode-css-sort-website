import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/home.module.css";

export default function Home() {
   const [beforeExample, resultOne, resultTwo] = useCssCode();

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <div className={styles.container}>
            <Header />

            <div className={styles.introduction}>
               <h1 className={styles.introduction__title}>
                  📶 Vscode-css-sort extension
               </h1>

               <div>
                  <h2 className={styles.introduction__explain}>
                     👉 What is this ????
                  </h2>

                  <p className={styles.introduction__desc}>
                     Vscode extension to sort your CSS properties and make them
                     easy to read. For example :
                  </p>

                  <h3 className={styles.introduction__title_example}>
                     Before :
                  </h3>

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
               </div>

               <div className={styles.section_why}>
                  <h2 className={styles.introduction__explain}>🤔 Why ????</h2>

                  <p className={styles.introduction__desc}>
                     I have explained why I created this extension in my blog.{" "}
                     <a
                        href="https://apriliandi.xyz/blog/my-first-vscode-extension"
                        target="_blank"
                        rel="noopener"
                     >
                        Read this.
                     </a>
                  </p>
               </div>

               <div className={styles.languages_support}>
                  <h2 className={styles.introduction__explain}>
                     💻 Languages support
                  </h2>

                  <p className={styles.introduction__desc}>
                     Currently, this extension support some languages (you can
                     see at the header menu).
                  </p>
               </div>
            </div>
         </div>
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

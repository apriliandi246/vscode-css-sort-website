import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
   return (
      <div className={styles.container}>
         <Link href="/html">
            <a>HTML</a>
         </Link>

         <Link href="/css">
            <a>CSS</a>
         </Link>

         <Link href="/scss">
            <a>SCSS</a>
         </Link>

         <Link href="/sc">
            <a>Styled-Component</a>
         </Link>

         <Link href="/jf">
            <a>Javascript-Framework</a>
         </Link>
      </div>
   );
}

import Head from "next/head";

export default function Custom404() {
   return (
      <>
         <Head>
            <title>404</title>
         </Head>

         <div style={styles}>
            <h1>
               404 <span style={{ marginInline: "7px" }}>-</span> Page Not Found
            </h1>
         </div>
      </>
   );
}

const styles = {
   display: "flex",
   padding: "100px",
   fontSize: "1.3rem",
   alignItems: "center",
   justifyContent: "center",
};

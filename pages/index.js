import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dinno</title>
        <meta name="Dinno solutions" content="Dinno software solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="ms-5">
          <h1 className="mainTitle">
            Creative Experts <br /> at Work
          </h1>
          <h1 className="subTitle">Software Solutions for any <span style={{color:"#716FC3"}}>business</span> need</h1>
          <button className="btn btn-primary p-2 px-5 mt-4 border-0" style={{letterSpacing:"2px",fontSize:"18px",background:'#716FC3'}}>Explore More</button>
        </div>
      </div>
    </div>
  );
}

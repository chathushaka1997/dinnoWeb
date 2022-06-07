import "../styles/globals.css";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/318d6a5a82.js" crossorigin="anonymous"/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

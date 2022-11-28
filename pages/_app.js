import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Lemonraise | Making a difference</title>
        <meta
          name="description"
          content="Lemonraise is a fundraising platform where individuals, underserved communities amongst others can raise funds for their various needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

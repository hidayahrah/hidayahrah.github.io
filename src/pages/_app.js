import "@/styles/globals.css";
import "animate.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nur Hidayah | Full-stack Engineer</title>
        <meta name="description" content="Full-stack Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

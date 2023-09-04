import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sanjai Alagar | Full Stack Developer</title>
        <meta
          property='og:title'
          content='Sanjai Alagar | Full Stack Developer'
          key='title'
        />
        <link rel="icon" href="/favico.png" type="image/png" sizes="32x32"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

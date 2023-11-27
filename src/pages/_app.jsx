import React from "react";
import { Nunito_Sans as Font } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const font = Font({
  subsets: ["latin"],
  variable: "--theme-font",
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <Head>
        <title>Welcome</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

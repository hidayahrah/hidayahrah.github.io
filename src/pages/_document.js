import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "../components/google-analytics";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

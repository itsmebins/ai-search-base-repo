// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
// import Script from 'next/script'

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest.json" />

         <script
						defer
						src="https://www.googletagmanager.com/gtag/js?id=G-M4MTHL73QM"
					/>
          <script
              defer
              dangerouslySetInnerHTML={{
                __html: `!function(){function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","G-M4MTHL73QM")}();`,
              }}
            />
{/*}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M4MTHL73QM" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-M4MTHL73QM');
        `}
        </Script>
         */ }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

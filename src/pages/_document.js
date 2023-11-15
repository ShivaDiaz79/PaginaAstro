/* eslint-disable @next/next/next-script-for-ga */
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager Script*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TLRBLKP8');`,
            }}
          />

          {/* Ahrefs verification meta tag */}
          <meta name="ahrefs-site-verification" content="c2733bda84326d9438f697ea0d706f51586d286db7497ae4c7eb72e3e5f1694d" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) - Agrega esto en el cuerpo */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TLRBLKP8"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

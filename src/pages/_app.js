import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Código de Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CJWTRDRPY4';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CJWTRDRPY4');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;




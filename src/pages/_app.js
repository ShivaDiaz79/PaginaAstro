import '../styles/globals.css';
import 'tailwindcss/tailwind.css';



import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Código de Google Tag Manager
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'G-LW2BDBCG17');
  }, []); 

  

  return <Component {...pageProps} />;
}

export default MyApp;




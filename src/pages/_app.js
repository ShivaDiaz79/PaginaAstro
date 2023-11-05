import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;


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
  }, []); // Asegura que se ejecute una vez en la carga inicial

  

  return <Component {...pageProps} />;
}

export default MyApp;


// import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';

// import { useEffect } from 'react';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     // Código de Google Tag Manager
//     (function(w, d, s, l, i) {
//       w[l] = w[l] || [];
//       w[l].push({
//         'gtm.start': new Date().getTime(),
//         event: 'gtm.js'
//       });
//       var f = d.getElementsByTagName(s)[0],
//         j = d.createElement(s),
//         dl = l != 'dataLayer' ? '&l=' + l : '';
//       j.async = true;
//       j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//       f.parentNode.insertBefore(j, f);
//     })(window, document, 'script', 'dataLayer', 'G-LW2BDBCG17');
    
//     // Código de Google Analytics (gtag.js)
//     (function(w, d, s, l, i) {
//       w[l] = w[l] || [];
//       w[l].push({
//         'gtm.start': new Date().getTime(),
//         event: 'gtag.js'
//       });
//       var f = d.getElementsByTagName(s)[0],
//         j = d.createElement(s),
//         dl = l != 'dataLayer' ? '&l=' + l : '';
//       j.async = true;
//       j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i + dl;
//       f.parentNode.insertBefore(j, f);
//     })(window, document, 'script', 'dataLayer', 'G-MLP27LYPCB');
//   }, []); // Asegura que se ejecute una vez en la carga inicial

//   return <Component {...pageProps} />;
// }

// export default MyApp;

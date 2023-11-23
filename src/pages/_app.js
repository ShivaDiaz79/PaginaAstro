// MyApp.js
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Firebase Analytics
    const firebaseScript = document.createElement('script');
    firebaseScript.src = 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
    // Asegúrate de agregar otras bibliotecas de Firebase que necesites, como firestore, auth, etc.
    // firebaseScript.src = 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
    firebaseScript.async = true;
    document.head.appendChild(firebaseScript);

    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-29Z9MWJC3R';
    gtmScript.async = true;
    document.head.appendChild(gtmScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-29Z9MWJC3R');

    router.events.on('routeChangeComplete', () => {
      gtag('config', 'G-29Z9MWJC3R');
      // Lógica adicional de seguimiento si es necesaria al cambiar de ruta
    });

    // Configuración de Firebase y eventos específicos si es necesario
    // firebase.analytics();
    // firebase.auth().onAuthStateChanged(...);
    // Más configuraciones específicas de Firebase Analytics si es necesario
  }, [router.events]);

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;






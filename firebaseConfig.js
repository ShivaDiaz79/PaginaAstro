// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCsS6uK52kswcJWRPJGIW4b7f5olm-ZrWI",
  authDomain: "nextastro-de08d.firebaseapp.com",
  projectId: "nextastro-de08d",
  storageBucket: "nextastro-de08d.appspot.com",
  messagingSenderId: "351324339178",
  appId: "1:351324339178:web:68056cb319dfec31c09093",
  measurementId: "G-Y3TDJTW0WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

// export default firebaseConfig;s
  
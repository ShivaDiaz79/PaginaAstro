import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
    "projectId": "astro-estudio",
    "appId": "1:790643177135:web:39d6d9a685a7a0791b065a",
    "databaseURL": "https://astro-estudio-default-rtdb.firebaseio.com",
    "storageBucket": "astro-estudio.appspot.com",
    "apiKey": "AIzaSyCs0J-BBcnR-ShlRKBzdEtSeIC93kCJWfU",
    "authDomain": "astro-estudio.firebaseapp.com",
    "messagingSenderId": "790643177135",
    "measurementId": "G-CL21EGSXFB"
  });
  const auth = getAuth(app);
  export const firestore = firebase.firestore();
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDmCfj7rcjy-cvgAbmfD8QL3YrbKYH_Upg",
    authDomain: "menu-m.firebaseapp.com",
    projectId: "menu-m",
    storageBucket: "menu-m.appspot.com",

    messagingSenderId: "1094493546107",
    appId: "1:1094493546107:web:604ccabf9fce773ab7a4de",
    measurementId: "G-R7GPCE34ET"
  };    

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
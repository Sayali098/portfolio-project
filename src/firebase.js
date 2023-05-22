
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC-uKiUd5Q1G0wr3zDEAbYsV6sRW6rq8mg",
  authDomain: "react-portfolio-44eac.firebaseapp.com",
  projectId: "react-portfolio-44eac",
  storageBucket: "react-portfolio-44eac.appspot.com",
  messagingSenderId: "249143830074",
  appId: "1:249143830074:web:9568b149ab672126ea3703",
  measurementId: "G-NFMZ1BTRMH"
};

 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db= getFirestore();
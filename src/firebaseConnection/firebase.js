import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsAWQDe1VPHL2PaOeh5TfAWWySpGZqwm0",
  authDomain: "portfolio-231ae.firebaseapp.com",
  databaseURL: "https://portfolio-231ae.firebaseio.com",
  projectId: "portfolio-231ae",
  storageBucket: "portfolio-231ae.appspot.com",
  messagingSenderId: "989875380814",
  appId: "1:989875380814:web:be1ace31223fad7926591f",
  measurementId: "G-7Z72G8059V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export default firestore;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj3bh-uMJWu1X6ShCDhl6ztpoYHUJaOBY",
  authDomain: "chris-feveck.firebaseapp.com",
  projectId: "chris-feveck",
  storageBucket: "chris-feveck.firebasestorage.app",
  messagingSenderId: "455851755591",
  appId: "1:455851755591:web:ebca620e5b71f79b1dc962",
  measurementId: "G-4LV6GT4BXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export default firestore;

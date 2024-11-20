// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYJCslo93mo1M8Lzni36FTLoQYjM1jUsE",
  authDomain: "seba-corner.firebaseapp.com",
  projectId: "seba-corner",
  storageBucket: "seba-corner.appspot.com",
  messagingSenderId: "668794902554",
  appId: "1:668794902554:web:9033310e33205bb51599a3",
  measurementId: "G-CQLZB7WMB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOjzwQcH_VsnUAXJkspe5GIKmJDWaAe40",
  authDomain: "wave3-d9177.firebaseapp.com",
  projectId: "wave3-d9177",
  storageBucket: "wave3-d9177.firebasestorage.app",
  messagingSenderId: "686289419830",
  appId: "1:686289419830:web:dfcb30861c39890760e297",
  measurementId: "G-HHDNG0P6VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
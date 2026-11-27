// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-oauth-91183.firebaseapp.com",
  projectId: "estate-oauth-91183",
  storageBucket: "estate-oauth-91183.firebasestorage.app",
  messagingSenderId: "187371618042",
  appId: "1:187371618042:web:e117667a8434aae9b85343"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
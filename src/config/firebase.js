// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTYf-cNmEBU7ZTGihpZWbjKGUbmilJFzI",
  authDomain: "portfolio-b7fe8.firebaseapp.com",
  projectId: "portfolio-b7fe8",
  storageBucket: "portfolio-b7fe8.appspot.com",
  messagingSenderId: "521644774345",
  appId: "1:521644774345:web:7d5f01a339aca053780e18",
  measurementId: "G-2PLKNKSEJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6NiSSE3cSwuVd2kuQMEfML35NMaixdKg",
  authDomain: "netflixgpt-c6bd2.firebaseapp.com",
  projectId: "netflixgpt-c6bd2",
  storageBucket: "netflixgpt-c6bd2.firebasestorage.app",
  messagingSenderId: "930106852962",
  appId: "1:930106852962:web:f3002fd8c451873fdcb33b",
  measurementId: "G-DF4YRL2E81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBpI9-yRXuRVn_5ChuqWfpMY-vChDhW7lI",
  authDomain: "fir-prectics.firebaseapp.com",
  projectId: "fir-prectics",
  storageBucket: "fir-prectics.firebasestorage.app",
  messagingSenderId: "990857162831",
  appId: "1:990857162831:web:06245edf007aeedc66ba3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
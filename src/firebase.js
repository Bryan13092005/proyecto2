// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZJ_PV78EkHf2ThR6GoF6EYIYsmzE68eg",
  authDomain: "maquetsmart-804d8.firebaseapp.com",
  projectId: "maquetsmart-804d8",
  storageBucket: "maquetsmart-804d8.firebasestorage.app",
  messagingSenderId: "909092785568",
  appId: "1:909092785568:web:51e7f4373e2cc2872528c5",
  measurementId: "G-FG2V53NM26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
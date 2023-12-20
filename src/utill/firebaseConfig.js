// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALnGjl5958hVTn8emCuMmfaFxX1MC3FxM",
  authDomain: "naverapiservice.firebaseapp.com",
  projectId: "naverapiservice",
  storageBucket: "naverapiservice.appspot.com",
  messagingSenderId: "442315113281",
  appId: "1:442315113281:web:6a4938d21f5b2ee81217c0",
  measurementId: "G-4N6W44ZB7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
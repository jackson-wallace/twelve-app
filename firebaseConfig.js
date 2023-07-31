// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NJqkqgck7pML-1LNae1BLUOOy6JRvgY",
  authDomain: "twelve-app-f4c91.firebaseapp.com",
  projectId: "twelve-app-f4c91",
  storageBucket: "twelve-app-f4c91.appspot.com",
  messagingSenderId: "872893739341",
  appId: "1:872893739341:web:a35c3cd3cc0bf4c7cb8704",
  measurementId: "G-TTW5EFVKFQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

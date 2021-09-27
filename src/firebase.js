// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0bsUdXoG_VUoKTDpNvzUrpzqeWT3_8c8",
  authDomain: "nextjs-with-firebase-messaging.firebaseapp.com",
  projectId: "nextjs-with-firebase-messaging",
  storageBucket: "nextjs-with-firebase-messaging.appspot.com",
  messagingSenderId: "1052350335170",
  appId: "1:1052350335170:web:5c2db0b992aed0b8f4135b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

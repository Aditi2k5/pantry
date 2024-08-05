// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
// Required for side-effects
import { getFirestore } from "firebase/firestore";
import { SDK_VERSION } from 'firebase/app';
console.log('Firebase SDK version:', SDK_VERSION);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO1i_qraMMZiv2Hat-KRf14iCMmf-W0lA",
  authDomain: "inventory-management-8c873.firebaseapp.com",
  projectId: "inventory-management-8c873",
  storageBucket: "inventory-management-8c873.appspot.com",
  messagingSenderId: "518707993187",
  appId: "1:518707993187:web:88ef7c4d38acbea2a1f656",
  measurementId: "G-VBNWMBJFT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCemKJ6IebLohxDzwEKs8nuuC5Dqvgljo0",
  authDomain: "laundry-app-d65d1.firebaseapp.com",
  projectId: "laundry-app-d65d1",
  storageBucket: "laundry-app-d65d1.appspot.com",
  messagingSenderId: "780885064823",
  appId: "1:780885064823:web:edd4c5e847cdbb3fc61a72",
  measurementId: "G-53QJX2B1SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export {auth,db};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjbzDGoeiAOS6lOVRQxTJAp_3p16Dniyo",
  authDomain: "impuls-2218c.firebaseapp.com",
  projectId: "impuls-2218c",
  storageBucket: "impuls-2218c.appspot.com",
  messagingSenderId: "755561177837",
  appId: "1:755561177837:web:4ba90c744cc3525b6522e4",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();

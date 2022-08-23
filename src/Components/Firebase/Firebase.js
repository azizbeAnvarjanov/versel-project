// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwnZAoAj8z3Fla6ziCXfwLlxXvVjLQAV8",
  authDomain: "books-b4672.firebaseapp.com",
  databaseURL: "https://books-b4672-default-rtdb.firebaseio.com",
  projectId: "books-b4672",
  storageBucket: "books-b4672.appspot.com",
  messagingSenderId: "464940739077",
  appId: "1:464940739077:web:43424299cee97ececa8a6c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();

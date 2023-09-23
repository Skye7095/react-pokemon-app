// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALC7GO9Vy_k2XKPOg3MmlhBNJFuzxC7tc",
  authDomain: "react-poke-app-e25bb.firebaseapp.com",
  projectId: "react-poke-app-e25bb",
  storageBucket: "react-poke-app-e25bb.appspot.com",
  messagingSenderId: "406889573428",
  appId: "1:406889573428:web:04aa78d7d26cf75663ee61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
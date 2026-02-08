// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiMOFvHSBvUEJIyJm8mDnfNGEJYx5qQqY",
  authDomain: "movie-master-pro-49fae.firebaseapp.com",
  projectId: "movie-master-pro-49fae",
  storageBucket: "movie-master-pro-49fae.firebasestorage.app",
  messagingSenderId: "290270011573",
  appId: "1:290270011573:web:ede3f0c732d7c5e62d1efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQl4ojtlF6jYLLetmlbbuiOaa9ZkBJ-Og",
    authDomain: "pondit-tutor-97e1e.firebaseapp.com",
    projectId: "pondit-tutor-97e1e",
    storageBucket: "pondit-tutor-97e1e.appspot.com",
    messagingSenderId: "839780537662",
    appId: "1:839780537662:web:a3741afc1d4f3f2e6f086f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
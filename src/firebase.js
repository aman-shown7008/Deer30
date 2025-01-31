import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfJTtdiFFAyNZvyhiOPwV6bJfF6br5txo",
  authDomain: "deer-new.firebaseapp.com",
  projectId: "deer-new",
  storageBucket: "deer-new.firebasestorage.app",
  messagingSenderId: "815368241566",
  appId: "1:815368241566:web:5b8fde20ff5dc142cd968f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider1 = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();
const provider3 = new OAuthProvider('apple.com');

export {auth, provider1, provider2, provider3};


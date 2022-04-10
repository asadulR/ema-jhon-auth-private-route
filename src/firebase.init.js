import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDWhcJ6dkIKopvJhJk5oOYU1AKm7gpOhIQ",
  authDomain: "ema-jhon-auth-5bb66.firebaseapp.com",
  projectId: "ema-jhon-auth-5bb66",
  storageBucket: "ema-jhon-auth-5bb66.appspot.com",
  messagingSenderId: "418451553832",
  appId: "1:418451553832:web:749e6ed31ae2fdab073f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
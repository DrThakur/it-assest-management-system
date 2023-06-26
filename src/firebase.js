// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuyU10gHz5uziU4iVBZZnpkrLDwtS3zNU",
  authDomain: "it-management-system-872cc.firebaseapp.com",
  projectId: "it-management-system-872cc",
  storageBucket: "it-management-system-872cc.appspot.com",
  messagingSenderId: "514670904324",
  appId: "1:514670904324:web:fdfa6c297f6dfeac68a151",
  measurementId: "G-MYBFGQN090",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

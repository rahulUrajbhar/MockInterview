// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRMAfx22VsMU27h5bw0Jt6yxvNb2M_HTY",
  authDomain: "interviewyou.firebaseapp.com",
  projectId: "interviewyou",
  storageBucket: "interviewyou.firebasestorage.app",
  messagingSenderId: "726478644757",
  appId: "1:726478644757:web:7c0ec38e815c9011d1d01c",
  measurementId: "G-PQMVHZLRKE"
};

// Initialize Firebase
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
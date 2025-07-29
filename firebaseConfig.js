import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9vWFrCNyqm7HZRCY365AxT7Z2vOmpBX8",
  authDomain: "goals-app-4edb3.firebaseapp.com",
  projectId: "goals-app-4edb3",
  storageBucket: "goals-app-4edb3.firebasestorage.app",
  messagingSenderId: "40344776867",
  appId: "1:40344776867:web:2ecb6990953b781f118f16"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
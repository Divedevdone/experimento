// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8NK3ZDvJrsLDRXb2GMaz4NLxhzQLBg6w",
    authDomain: "projetoead-f7fe0.firebaseapp.com",
    projectId: "projetoead-f7fe0",
    storageBucket: "projetoead-f7fe0.appspot.com",
    messagingSenderId: "287575657085",
    appId: "1:287575657085:web:a4e68ed94ab3a86476bf14"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

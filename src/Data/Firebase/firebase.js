import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBF0IO8HfEznbmAJDCwxvSbCaIwqv-KDtw",
    authDomain: "cartas-contra-sua-mae.firebaseapp.com",
    projectId: "cartas-contra-sua-mae",
    storageBucket: "cartas-contra-sua-mae.appspot.com",
    messagingSenderId: "623734369143",
    appId: "1:623734369143:web:3428e028cfa9b87d538f72",
    measurementId: "G-P623E0L0D1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

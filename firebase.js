import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, getDoc } from 'firebase/firestore/lite';
import { onSnapshot, doc, documentId} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEhr9228pzQPGZt3Y6mYxnmS60m--dpms",
    authDomain: "socialjobber-f9ab1.firebaseapp.com",
    projectId: "socialjobber-f9ab1",
    storageBucket: "socialjobber-f9ab1.appspot.com",
    messagingSenderId: "64509334152",
    appId: "1:64509334152:web:f5d1d6fbb633fed4dcc53d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth, collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, documentId, getDoc};

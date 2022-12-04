import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// isikan firebaseConfig disini
const firebaseConfig = {
    apiKey: "AIzaSyDXHNHORmcD22CifjZyK0u1Slvk51FTPak",
    authDomain: "vue-firestore-d70ef.firebaseapp.com",
    projectId: "vue-firestore-d70ef",
    storageBucket: "vue-firestore-d70ef.appspot.com",
    messagingSenderId: "591966284898",
    appId: "1:591966284898:web:8e7eb58b8e3e646531753b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const db = firebaseApp.firestore();
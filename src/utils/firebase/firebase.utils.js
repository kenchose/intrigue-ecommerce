import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQIs04tGx-ibPkfH0h1xoLi1YHAkDWur8",
  authDomain: "intrigue-clothing-db.firebaseapp.com",
  projectId: "intrigue-clothing-db",
  storageBucket: "intrigue-clothing-db.appspot.com",
  messagingSenderId: "254536989635",
  appId: "1:254536989635:web:3f19591ccdb37f3c0bdb76",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

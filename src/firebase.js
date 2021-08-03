import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX90mE4vB-BjGW43BaOgnsYxrhmyhDQLQ",
  authDomain: "goalcoach-cc04d.firebaseapp.com",
  projectId: "goalcoach-cc04d",
  storageBucket: "goalcoach-cc04d.appspot.com",
  messagingSenderId: "465479631821",
  appId: "1:465479631821:web:434eaae846897dd1fcfa84",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

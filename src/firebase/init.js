import firebase from "firebase";
import firestore from "firebase/firestore";
import { FirebaseApp } from "@firebase/app-types";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKTHvYn6S-fx5Pcpkw-1fKPfqoNO533GA",
  authDomain: "udemy-geo-ninjas-9dc50.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninjas-9dc50.firebaseio.com",
  projectId: "udemy-geo-ninjas-9dc50",
  storageBucket: "udemy-geo-ninjas-9dc50.appspot.com",
  messagingSenderId: "66340308801"
};
const firebaseApp = firebase.initializeApp(config);

export default FirebaseApp.firestore();

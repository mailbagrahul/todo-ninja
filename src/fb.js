import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzSO2ZgnY8QG_ojhGh_QtHom5s-XzV4FE",
  authDomain: "todo-ninja-87521.firebaseapp.com",
  databaseURL: "https://todo-ninja-87521.firebaseio.com",
  projectId: "todo-ninja-87521",
  storageBucket: "todo-ninja-87521.appspot.com",
  messagingSenderId: "528807385326"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;

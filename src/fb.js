import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: ",
  databaseURL: "",
  projectId: ""
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;

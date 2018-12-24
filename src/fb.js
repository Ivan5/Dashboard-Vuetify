import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyA1QP2cFhnKkepN7YtmhOy-5KphnRamsGQ",
  authDomain: "dashboard-vuetify.firebaseapp.com",
  databaseURL: "https://dashboard-vuetify.firebaseio.com",
  projectId: "dashboard-vuetify",
  storageBucket: "dashboard-vuetify.appspot.com",
  messagingSenderId: "333227125252"
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;

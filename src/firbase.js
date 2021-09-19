import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCKmrRHfFNeCrqiQkJTMESMkmd2xUnFJNw",
  authDomain: "universityfinder-ef5ca.firebaseapp.com",
  databaseURL: "https://universityfinder-ef5ca-default-rtdb.firebaseio.com",
  projectId: "universityfinder-ef5ca",
  storageBucket: "universityfinder-ef5ca.appspot.com",
  messagingSenderId: "1090458497422",
  appId: "1:1090458497422:web:9a512d9554afdd6f9034df",
  measurementId: "G-7VF6WNZQT8",
};

var database = firebase.database();
//   firebase.analytics();
export default database;

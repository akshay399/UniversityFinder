import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCu__H3Ga1y9K79EGYfidJ6Bt6YxV6uyzA",
  authDomain: "sendcerti.firebaseapp.com",
  projectId: "sendcerti",
  storageBucket: "sendcerti.appspot.com",
  messagingSenderId: "834473565953",
  appId: "1:834473565953:web:28f98e372d17188c3c4500",
  measurementId: "G-2M274D2VCW",
};
const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default fire;

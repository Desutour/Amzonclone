// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAzia_IESP0Nguv0KRbYESZvdowWkUJQDE",
  authDomain: "clone-f4f6e.firebaseapp.com",
  projectId: "clone-f4f6e",
  storageBucket: "clone-f4f6e.appspot.com",
  messagingSenderId: "47502342229",
  appId: "1:47502342229:web:1b4e8df6d49d80a2a8bcdc",
  measurementId: "G-4ZD58K674W"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

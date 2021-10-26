import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAuWtFxzr4X8gk-8v7tdthxGX2eMUJZB_I",
  authDomain: "notes-77398.firebaseapp.com",
  databaseURL: "https://notes-77398-default-rtdb.firebaseio.com",
  projectId: "notes-77398",
  storageBucket: "notes-77398.appspot.com",
  messagingSenderId: "525157615221",
  appId: "1:525157615221:web:e2cef3a0fc9c6046a41a3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
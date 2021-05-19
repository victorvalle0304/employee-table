import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBE4OQbdk3Jmyx7NzTB2Z5tvCepu1L-GZA",
  authDomain: "employee-table-f84ea.firebaseapp.com",
  projectId: "employee-table-f84ea",
  storageBucket: "employee-table-f84ea.appspot.com",
  messagingSenderId: "629313299829",
  appId: "1:629313299829:web:742451e3cb801283c0df3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

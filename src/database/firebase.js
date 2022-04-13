import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCl80yuDSWa-3aeDFZS9uD5SyNAnVpNBmk",
  authDomain: "prueba-mirex.firebaseapp.com",
  databaseURL: "https://prueba-mirex-default-rtdb.firebaseio.com",
  projectId: "prueba-mirex",
  storageBucket: "prueba-mirex.appspot.com",
  messagingSenderId: "668335992343",
  appId: "1:668335992343:web:2940d79ec3443067d07652",
  measurementId: "G-V5DT3Y5FPS"
};

    
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;


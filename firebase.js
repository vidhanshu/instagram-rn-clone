import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6TZ1owPicU1DendK73HudKNoSz0fLW2o",
    authDomain: "vinsta-rn.firebaseapp.com",
    projectId: "vinsta-rn",
    storageBucket: "vinsta-rn.appspot.com",
    messagingSenderId: "503902470676",
    appId: "1:503902470676:web:a346b9545ee065203b1d01",
    measurementId: "G-EZ5HHS3BB3"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export { firebase, db }
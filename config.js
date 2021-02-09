import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyD4vo5fDYyrkXjSDnns57eyHEtmW6vnSVU",
    authDomain: "fun-maths-993fd.firebaseapp.com",
    projectId: "fun-maths-993fd",
    storageBucket: "fun-maths-993fd.appspot.com",
    messagingSenderId: "437816423173",
    appId: "1:437816423173:web:e21b84b5668f5a820fbd6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
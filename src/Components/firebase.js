import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAP81-f6Pd9wCx6yTL1M5qOZ6VBuBJM6oA",
    authDomain: "crudoperations-a24f3.firebaseapp.com",
    projectId: "crudoperations-a24f3",
    storageBucket: "crudoperations-a24f3.appspot.com",
    messagingSenderId: "128238930807",
    appId: "1:128238930807:web:ba9711cda19dde19cd6f72"
  };

  const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  export default FirebaseApp;
  export {db};

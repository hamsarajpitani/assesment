import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_sZ21-1uxs8xDERWVsFCWYKFvfYS6x-Y",
  authDomain: "sperentes-2ce0b.firebaseapp.com",
  projectId: "sperentes-2ce0b",
  storageBucket: "sperentes-2ce0b.appspot.com",
  messagingSenderId: "1034272674207",
  appId: "1:1034272674207:web:c419bbc075e99cb5116daa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {auth,storage,timestamp};
export default db;
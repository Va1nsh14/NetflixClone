import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "netflix-clone-1b901.firebaseapp.com",
  projectId: "netflix-clone-1b901",
  storageBucket: "netflix-clone-1b901.appspot.com",
  messagingSenderId: "993935908392",
  appId: "1:993935908392:web:a0edba0c70c48a93bf5f1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
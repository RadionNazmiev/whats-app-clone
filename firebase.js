import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb2Ctgmc6NfPMxwJn4dkIOuZ4q5pus4yo",
  authDomain: "whatsapp-clone-e1998.firebaseapp.com",
  projectId: "whatsapp-clone-e1998",
  storageBucket: "whatsapp-clone-e1998.appspot.com",
  messagingSenderId: "642854434758",
  appId: "1:642854434758:web:b01fdfd9b79d04322764c7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

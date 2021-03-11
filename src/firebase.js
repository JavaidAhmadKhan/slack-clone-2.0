import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9Zv236dbt-TXu8XUAZHlx4YbhF9U6q3E",
  authDomain: "slack-clone-df68e.firebaseapp.com",
  projectId: "slack-clone-df68e",
  storageBucket: "slack-clone-df68e.appspot.com",
  messagingSenderId: "787492573038",
  appId: "1:787492573038:web:496eb695a3876acb0abb7f",
  measurementId: "G-LXSZ2QFWME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider, db };

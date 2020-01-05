import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCs3MkgK405PZIhROEa-1Pmr778_kQAiW4",
  authDomain: "pushpush-10520.firebaseapp.com",
  databaseURL: "https://pushpush-10520.firebaseio.com",
  projectId: "pushpush-10520",
  storageBucket: "pushpush-10520.appspot.com",
  messagingSenderId: "394262168736",
  appId: "1:394262168736:web:ed7831241981c99387f5c5",
  measurementId: "G-EYT39E34BZ"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

db.enablePersistence({ experimentalTabSynchronization: true });

const storage = firebase.storage();

const messaging = firebase.messaging();

export default {
  db,
  storage,
  messaging
};

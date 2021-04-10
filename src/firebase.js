import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyBmMfc81y2fwgEYBYbJgWCTdIfa58P8468",
      authDomain: "contact-78413.firebaseapp.com",
      databaseURL: "https://contact-78413-default-rtdb.firebaseio.com",
      projectId: "contact-78413",
      storageBucket: "contact-78413.appspot.com",
      messagingSenderId: "191691631674",
      appId: "1:191691631674:web:85da0ab6ca9bf01e0bd903"
});

var db = firebaseApp.firestore();

export { db };
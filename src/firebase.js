import firebase from 'firebase/app';
import 'firebase/database';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBIINcqr3r8lPglG8lvVVuj_5BPlpMr704",
    authDomain: "project5-dd870.firebaseapp.com",
    databaseURL: "https://project5-dd870.firebaseio.com",
    projectId: "project5-dd870",
    storageBucket: "project5-dd870.appspot.com",
    messagingSenderId: "966876576721",
    appId: "1:966876576721:web:722637cba469f2e34f7ef0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

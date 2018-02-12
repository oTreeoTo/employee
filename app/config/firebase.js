// ติดตั้ง FireBase 
import * as firebase from 'firebase';
  var fireBaseconfig  = {
    apiKey: "AIzaSyDwybAG8cx6V_jXVhSm0zp7ufvRtXGNUK8",
    authDomain: "mange-employee.firebaseapp.com",
    databaseURL: "https://mange-employee.firebaseio.com",
    projectId: "mange-employee",
    storageBucket: "mange-employee.appspot.com",
    messagingSenderId: "611224859863"
  };
// firebase.initializeApp(fireBaseconfig);
const firebaseApp = firebase.initializeApp(fireBaseconfig);

import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './app/Auth/Login/login';

//Initialize Firebase
const fireBaseconfig = {
    apiKey: 'AIzaSyDwybAG8cx6V_jXVhSm0zp7ufvRtXGNUK8',
    authDomain: 'mange-employee.firebaseapp.com',
    databaseURL: 'https://mange-employee.firebaseio.com',
    projectId: 'mange-employee',
    storageBucket: 'mange-employee.appspot.com',
    messagingSenderId: '611224859863'
};

window.firebase = firebase.initializeApp(fireBaseconfig);
class App extends Component {
    render() {
        return (
            <Login></Login>
        );
    }
}

export default App;
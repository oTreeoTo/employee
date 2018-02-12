import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import Login from './app/Auth/Login/login';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyDwybAG8cx6V_jXVhSm0zp7ufvRtXGNUK8",
          authDomain: "mange-employee.firebaseapp.com",
          databaseURL: "https://mange-employee.firebaseio.com",
          projectId: "mange-employee",
          storageBucket: "mange-employee.appspot.com",
          messagingSenderId: "611224859863"
        });
    }
    render() {
        return (
            <Login></Login>
        );
    }
}

export default App;
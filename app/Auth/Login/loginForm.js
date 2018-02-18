import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

class loginForm extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: '',
        })
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) { console.log(user) })

        } catch (error) {
            console.log(error.toString())
        }
    }

    registerUser = () => {
        const { email, password } = this.state;
        console.log(email, password)
        console.log(window.firebase)
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log( errorCode, errorMessage )
        });
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username Or Email"
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    style={styles.input}
                    onChangeText={(email) => this.setState({ email })} />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    style={styles.input}
                    onChangeText={(password) => this.setState({ password })} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginUser(this.state.email, this.state.password)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.registerUser}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#0A2F37',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    }

});
export default loginForm;

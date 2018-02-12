import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text , KeyboardAvoidingView} from 'react-native';

class loginForm extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username Or Email"
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    style={styles.input}/>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    style={styles.input}/>    
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    input:{
        height:40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor: '#0A2F37',
        paddingVertical:10,
    },
    buttonText:{
            textAlign: 'center',
            color:'#FFF',
            fontWeight:'700',
    }
    


});
export default loginForm;
import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import LoginForm from './loginForm';

class loginForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={{uri:'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png'}}
                    />
                    <Text style={styles.title}>This is myApp</Text>
                </View>
                <View style={styles.containerLoginForm}>
                    <LoginForm></LoginForm>
                </View>
                <Text>Don't Have account? register</Text>
            </View>
        );
    }
}

export default loginForm;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#7FFFD4',
        
        justifyContent:'center',
    },
    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:100,
        height:100,
    },
    title:{
        width:100,
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
    },
    containerLoginForm:{
        marginBottom:150,
    },
    signUpText:{
        color:'rgba(255,255,255,0.2)',
    },
    

});
import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, Button} from 'react-native';

export default class UserChat extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}


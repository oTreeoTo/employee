import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator, Button, StyleSheet} from 'react-native';

import UserChat from "./UserChat";

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('User')}
                    title="Chat with Lucy"
                />
                <Button
                    onPress={() => navigate('Profile')}
                    title="Profile"
                />
                <Button
                    onPress={() => navigate('Button')}
                    title="Button"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff8dc',
    }
});




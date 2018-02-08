import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {StackNavigator,} from 'react-navigation';



export default class MyComponent6 extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user.name}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user.name}</Text>
            </View>
        );
    }
}

import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';


export default class MyComponent3 extends Component{
        constructor(){
            super();
            this.state = {
                textValue:'Hello'
            }
        }
        onChangeText(value){
            this.setState({
                textValue:value
            });
        }
        onSubmit(){
            console.log("Input Submit")
        }
        onSwitchChange(value){
            this.setState({
                SwitchValue:value
            });
        }

    render(){
        return(
            <View>
                <TextInput
                    placeholder="Enter Text"
                    Value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit}
                >
                </TextInput>
                <Text>{this.state.textValue}</Text>
                <Switch
                    value={this.state.switchValue}
                    onValueChange={(value)=>this.onSwitchChange(value)}
                />
            </View>
        );
     }
}






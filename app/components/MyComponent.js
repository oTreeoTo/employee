import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Mek',
            showName: true,
            message: this.props.message
        }
    }

        static defaultProps = {
            message: 'Hi There'
        }

    render(){
        let name = this.state.showName ? this.state.name :'No name';
    return(
      <View>
        <Text> {this.props.message} </Text>
          <Text> {name} </Text>
      </View>
      );
  }
}

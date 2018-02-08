import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';
import {NavigationScreenProp as navigate} from "react-navigation";


const users = [
    {name: 'Suriya Ta-rue'},
    {name: 'John Doe'},
    {name: 'Steve Smith'},
    {name: 'Tokisaki Kurumi'},
    {name: 'Tobiichi Origami'},
]


export default class MyComponent5 extends Component{
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    constructor(){
        super();
        const ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            userDataSource: ds,
        };
    }
    componentDidMount(){
        this.fetchUsers()
    }

    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((response)=> {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                });
            });
    }

    onPress(user){
        onPress
    }

    renderRow(user, sectionId, rowId, hightlightRow){
        const { navigate } = this.props.navigation;
        return(
            <TouchableHighlight onPress={() => navigate('Detail', { user })}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}: {user.address.city}</Text>
                </View>
           </TouchableHighlight>
        )
    }
    render(){

        return(
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}/>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#f4f4f4',
        marginBottom:3
    },
    rowText:{
        flex:1,
    },

})

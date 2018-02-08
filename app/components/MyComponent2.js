import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';


export default class MyComponent2 extends Component{
    onPressGG(){
        console.log('Area Passed');
    }
    onPressGGWP(){
        console.log('Area 2 Passed');
    }

    render(){
        return(
            <View>
                <View style={styles.myView}>
                    <Text style = {styles.myText}>Hello Mek</Text>
                </View>
                    <View style ={styles.container}>
                        <TouchableHighlight
                            style={styles.v1}
                            onPress={this.onPressGG}
                            underlayColor="blue"
                        >
                            <View>
                                <Text style={styles.vText}> View 1 </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableOpacity
                            onPress={this.onPressGGWP}
                            style={styles.v2}
                        >
                            <View>
                                <Text style={styles.vText}> View 2 </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.v3}>
                            <Text style={styles.vText}> View 3 </Text>
                        </View>
                </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    myView:{
        backgroundColor:'blue'
    },
    myText:{
        color:'white'
    },
    container:{
        flexDirection:'row',
        height:100
    },
    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10,
    },
    v2:{
        flex:1,
        backgroundColor:'green',
        padding:20,
    },
    v3:{
        flex:1,
        backgroundColor:'black',
        padding:30,
    },
    vText:{
        color:'white',
    }

})

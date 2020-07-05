import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons';


export default class LoginScreen extends Component {
    state = {
            name: ""
    }
    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    }
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.circle} >
               
                <Text style={styles.login}> Username</Text>
                <TextInput style={styles.input} placeholder="Code"
                onChangeText={name => {this.setState({name})}}
                value={this.state.name}
                />
                <View style={{alignItems: "flex-end", marginTop: 64}}>
                <TouchableOpacity style={styles.continue} onPress={this.continue}>
                    <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                </TouchableOpacity>
               
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    backgroundColor: "#F4F5F7"
    }, 
    circle: {
       width: 380,
       height: 400,
       borderRadius: 500 / 2,
       backgroundColor: "#FFF",
       position: "absolute",
       right: 20
      
    },
    login: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize:30,
    },
    input: {
        marginTop: 32,
        height: 50,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#514e5A',
        fontWeight: "600", 
        borderWidth: StyleSheet.hairlineWidth,
       
    }, 
    continue: {
        width: 70, 
        height: 70, 
        borderRadius: 70 / 2, 
        backgroundColor: "#9075E3",
        alignItems: 'center', 
        justifyContent: 'center', 

    }
})

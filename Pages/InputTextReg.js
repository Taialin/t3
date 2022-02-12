import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class InputsReg extends Component {
    /*   state = {
           email: '',
           password: ''
       }
       handleEmail = (text) => {
           this.setState({ email: text })
       }
       handlePassword = (text) => {
           this.setState({ password: text })
       }
       login = (email, pass) => {
           alert('email: ' + email + ' password: ' + pass)
       }*/
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "NAME"
                           placeholderTextColor = "#FFFFFF"

                           autoCapitalize = "none"
                           onChangeText = {this.handleEmail}/>

                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "SURNAME"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           alignItems = "end"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "E-MAIL"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           alignItems = "end"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "TELEPHONE"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           alignItems = "end"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "PASSWORD"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           alignItems = "end"
                           onChangeText = {this.handlePassword}/>


            </View>
        )
    }
}
export default InputsReg

const styles = StyleSheet.create({
    container: {
        paddingTop: 5
    },
    reg: {
        alignItems:"center",
        display: "flex",
        position: 'relative',
        margin: 5,
        width: '350%',
        height:'12%',
        right: '130%',
        top: '45%',
        backgroundColor: 'rgba(213, 139, 66, 0.6)',
        color: '#FFFFFF',
        borderRadius: 53,

    },

})

import React, { Component } from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar} from 'react-native'
import statusBar from "react-native-web/dist/exports/StatusBar";

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
            <View >
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "ИМЯ"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           onChangeText = {this.props.fuck()}/>

                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "ФАМЛИЯ"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           alignItems = "end"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "ОТ КУДА ВЫ"
                           placeholderTextColor = "#FFFFFF"
                           autoCapitalize = "none"
                           alignItems = "end"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.reg}
                           underlineColorAndroid = "transparent"
                           placeholder = "ТЕЛЕФОН"
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


            </View>
        )
    }
}
export default InputsReg

const styles = StyleSheet.create({

    reg: {
        alignItems:"center",
        position: 'relative',
        width: 300,
        height: 50,
        margin: 10,
        padding: 17,
        backgroundColor: 'rgba(213, 139, 66, 0.3)',
        color: '#FFFFFF',
        borderRadius: 53,

    },

})

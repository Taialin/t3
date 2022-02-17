import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class Inputs extends Component {
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
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="NAME"
                           placeholderTextColor="#FFFFFF"

                           autoCapitalize="none"
                           onChangeText={this.handleEmail}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="PASSWORD"
                           placeholderTextColor="#FFFFFF"
                           autoCapitalize="none"
                           alignItems="end"
                           onChangeText={this.handlePassword}/>


            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 12
    },
    input: {
        alignItems: "center",
        display: "flex",
        position: 'relative',
        margin: 15,
        width: '290%',
        height: '16%',
        right: '155%',
        top: '100%',
        // backgroundColor: 'rgba(60, 16, 55, 0.6)',
        color: '#FFFFFF',
        borderRadius: 53,

    },

})

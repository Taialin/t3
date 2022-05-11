import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

export default class InputsReg extends React.Component<Props> {
    render() {
        return (
            <View>
                <TextInput style={styles.reg}
                           underlineColorAndroid="transparent"
                           placeholder="ИМЯ"
                           placeholderTextColor="#FFFFFF"
                           autoCapitalize="none"
                           onChangeText={(value) => this.props.changeName(value)}/>

                <TextInput style={styles.reg}
                           underlineColorAndroid="transparent"
                           placeholder="ФАМЛИЯ"
                           placeholderTextColor="#FFFFFF"
                           autoCapitalize="none"
                           alignItems="end"
                           onChangeText={(value) => this.props.changeSurname(value)}/>
                <TextInput style={styles.reg}
                           underlineColorAndroid="transparent"
                           placeholder="ОТ КУДА ВЫ"
                           placeholderTextColor="#FFFFFF"
                           autoCapitalize="none"
                           alignItems="end"
                           onChangeText={(value) => this.props.changePlace(value)}/>
                <TextInput style={styles.reg}
                           underlineColorAndroid="transparent"
                           placeholder="ТЕЛЕФОН"
                           placeholderTextColor="#FFFFFF"
                           autoCapitalize="none"
                           alignItems="end"
                           onChangeText={(value) => this.props.changePhone(value)}/>
                <TextInput style={styles.reg}
                           underlineColorAndroid="transparent"
                           placeholder="E-MAIL"
                           placeholderTextColor="#FFFFFF"
                           autoCapitalize="none"
                           alignItems="end"
                           onChangeText={(value) => this.props.changeEmail(value)}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    reg: {
        alignItems: "center",
        position: 'relative',
        top:"6%",
        width: 300,
        height: 50,
        margin: 10,
        padding: 17,
        backgroundColor: 'rgba(213, 139, 66, 0.3)',
        color: '#FFFFFF',
        borderRadius: 10,

    },

})

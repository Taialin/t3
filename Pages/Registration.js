import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import InputTextReg from "./InputTextReg";



const fonts = () => Font.loadAsync({
    'bruno': require('../android/app/src/main/assets/fonts/bruno.ttf')

});
export default function Registration({navigation}) {
    const loadScene = () => {
        navigation.navigate('Menu')
    }


    return (
        <ImageBackground source={{uri:'https://downloader.disk.yandex.ru/preview/ef9d2088c8bf3d7596a8e562c7ce7408a06c747e14c1584b86d3921ad5c241d8/620262e6/71uJYeeJ2g2ZJtco5473qqPo0g6z5Y53XW6XyJ33MfUvF2i2ZHeV1FvO79NK12N6BvWwpS572QE2Cp9TzZ9jgQ%3D%3D?uid=0&filename=regestration.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
        <View style={styles.container}>
            <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
            <InputTextReg >
                editable
                maxLength={40}
            </InputTextReg>
        </View>
            </ImageBackground>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backGround: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        left: '0%',
        top: '0%'
    },
    logo: {
        flex:1,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '20%',
        top: '10%',
        right:'-30%',
    },
    button: {
        alignItems:"center",
        backgroundColor: "transparent",
        display: "flex",
        width: 90,
        padding: 8,
        top:'32%'

    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',

    }

})

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
        <ImageBackground source={{uri:'https://downloader.disk.yandex.ru/preview/78c2edee2c3cca80ae3ba1f0216c9693b4290a20a56a2e37009f68fcdafaf484/620d4bb6/GXGV8OAwxGiCkjcmYYX2tPX-4QFbEd5OpKLyhrSEWyZuvCbagN7zc4Urzsug4gtFgC_bTorknC8DzFKaeyhvnQ%3D%3D?uid=0&filename=7ov4OTppgYg.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
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

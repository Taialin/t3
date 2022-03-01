import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
//import style from  './style.css';

const fonts = () => Font.loadAsync({
    'bruno': require('../../android/app/src/main/assets/fonts/bruno.ttf')

});
export default function SecondCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('firstCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('thirdCaruselScreen')
        }/*
        export default function firstCaruselScreen({navigation}) {
            const loadScene3 = () => {
                navigation.navigate('Registration')
            }*/



    return (
        <ImageBackground source={{uri: 'https://downloader.disk.yandex.ru/preview/3aca351f11e355989fc8caa447e44f769742aafe76e08cbe2492b265dc6670f7/6202781f/Zkrjf4n2-1X_urjoeuVUigklOI4CskU6SoxBbFLgEb-51lxHMYFm8454pYAI93UAm35PIHPEBV867QhyGxWfrg%3D%3D?uid=0&filename=booking.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{ position: "absolute", width: '52%', height: 436, left: '-35%', top: 237, backgroundColor: 'rgba(131, 89, 21, 0.3)', borderRadius: 45 }} />
                <Text style={styles.BigText}>ПОГОДА</Text>
                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene} style={styles.buttonCenter}>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene2} style={styles.buttonRight}>
                </TouchableOpacity>
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
        width:'170%',
        left: '-20%',
        top: '0%'
    },
    logo: {
        flex:1,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '53%',
        height: '20%',
        top: '10%',
        right:'-17.5%',

    },

    BigText: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right:'0%',
        top: '35%',

        fontFamily: 'bruno',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 43,
        letterSpacing: 0.09,
        color: '#FFFFFF'

    },
    buttonLeft:{
        position: 'absolute',
        left: '-30%',
        top: '85%',

        borderStyle: "solid",
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 72,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: '#797979',
        transform: [{ rotate: "-90deg" }],
        borderRadius: 6,

    },
    buttonCenter:{
        position: 'absolute',
        width: '17%',
        height: '5%',
        left: '-17.5%',
        top: '87.6%',

        backgroundColor: '#797979',
        borderRadius: 6

    },
    buttonRight:{
        position: 'absolute',
        left: '5%',
        top: '85%',
        borderStyle: "solid",
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 72,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: '#797979',
        transform: [{ rotate: "90deg" }],
        borderRadius: 6,
        shadowColor:'black'
    }

});



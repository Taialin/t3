import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
//import style from  './style.css';

const fonts = () => Font.loadAsync({
    'bruno': require('../../android/app/src/main/assets/fonts/bruno.ttf')

});
export default function fourthCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('thirdCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('fifthCaruselScreen')
        }/*
        export default function firstCaruselScreen({navigation}) {
            const loadScene3 = () => {
                navigation.navigate('Registration')
            }*/



    return (
        <ImageBackground source={{uri: 'https://downloader.disk.yandex.ru/preview/6a35162817c1134b323b286a7a661688cf07f48a0770a1b1993ddeb3ef93e128/62027ef4/QhFY9iANbOySLEtWFYLJr7DYAxYcpzLOAeOPuctkFpfFX96Qb3qmUl78FeRfknaqlqeFxHbKAcdD7OVbVa34sQ%3D%3D?uid=0&filename=make_a_trip.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{ position: "absolute", width: '88%', height: 436, left: '-44%', top: 237, backgroundColor: 'rgba(40,26,7,0.22)', borderRadius: 45 }} />
                <Text style={styles.BigText}>СОЗДАТЬ МАРШРУТ</Text>
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
        width:'100%',
        left: '0%',
        top: '0%'
    },
    logo: {
        flex:1,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '25%',
        top: '7%',
        right:'-48.5%',

    },

    BigText: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right:'-33%',
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
        left: '-36%',
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
        width: '29%',
        height: '5%',
        left: '-15.3%',
        top: '87.6%',

        backgroundColor: '#797979',
        borderRadius: 6

    },
    buttonRight:{
        position: 'absolute',
        left: '23.5%',
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



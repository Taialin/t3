import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
//import style from  './style.css';

const fonts = () => Font.loadAsync({
    'bruno': require('../../android/app/src/main/assets/fonts/bruno.ttf')

});
export default function firstCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('seventhCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('secondCaruselScreen')
        }
            const loadScene3 = () => {
                navigation.navigate('newsview')
            }



    return (
        <ImageBackground source={{uri: 'https://downloader.disk.yandex.ru/preview/7ab35a7610afe92bb5e0f77e62dad42ce8896c6bbdd89fb1d1c3577498944022/62026335/t9OupWL3pD3WCIM32EWb0ErMsRdWB8QyKMebL82-ueHmHpZ9PRjTp9sNDd8RVulYOORtNZm559Oxbv8IAWFQUA%3D%3D?uid=0&filename=news.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{ position: "absolute", width: '52%', height: 436, left: '-35%', top: 237, backgroundColor: 'rgba(40, 46, 60, 0.47)', borderRadius: 45 }} />
                <Text style={styles.BigText}>НОВОСТИ ГРОДНО</Text>
                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene3} style={styles.buttonCenter}>
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
        right:'-10%',
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



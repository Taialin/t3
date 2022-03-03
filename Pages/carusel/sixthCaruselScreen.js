import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    SafeAreaView,
    TextInput, StatusBar
} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
//import style from  './style.css';

const fonts = () => Font.loadAsync({
    'bruno': require('../../android/app/src/main/assets/fonts/bruno.ttf')

});
export default function sixthCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('fifthCaruselScreen')
    }
    const loadScene2 = () => {
        navigation.navigate('seventhCaruselScreen')
    }
    const loadScene1 = () => {
        navigation.navigate('map')
    }


    return (
        <ImageBackground
            source={{uri: 'https://downloader.disk.yandex.ru/preview/c040bc6ac1cbe3c9c8f81e000a4cebf8b95de7182145f78663a4295dab57c3b2/620e57b4/rtaIHpwdwZ3AhmvU3RiciV_viVyXWTRbGtHkY0a6PdIRKZPGq3UWt8cep1-cbZ79HVkvOXT_NAotDeT1U14HhQ%3D%3D?uid=0&filename=map.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}}
            style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{position: "absolute", width: '85%', height: '60%', top: "30%",
                    backgroundColor: 'rgba(168, 158, 218, 0.22)',
                    borderRadius: 45
                }}/>
                <Text style={styles.BigText}>КАРТА ГРОДНО</Text>
                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                    <Image source={require("../../assets/Img/LButton.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene1} style={styles.buttonCenter}>
                    <Image source={require("../../assets/Img/CButton.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene2} style={styles.buttonRight}>
                    <Image source={require("../../assets/Img/RButton.png")}/>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    backGround: {
        position:'relative',
        width:'100%',
        height:'100%',
        top: '0%'
    },
    logo: {
        position: "absolute",
        width: '87%',
        height: '25%',
        top: '9%',

    },

    BigText: {
        position: 'absolute',
        top: '27%',


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
        left:"10%",
        top:"95%"

    },
    buttonCenter:{
        position: 'absolute',
        top:"95.7%"

    },
    buttonRight:{
        position: 'absolute',
        right:"10%",
        top:"95%"

    }

});


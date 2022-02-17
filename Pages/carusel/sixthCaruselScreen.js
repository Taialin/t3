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
    TextInput
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
                <View style={{
                    position: "absolute",
                    width: '88%',
                    height: 436,
                    left: '-44%',
                    top: 237,
                    backgroundColor: 'rgba(168, 158, 218, 0.22)',
                    borderRadius: 45
                }}/>
                <Text style={styles.BigText}>КАРТА ГРОДНО</Text>
                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene1} style={styles.buttonCenter}>
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
        width: '100%',
        left: '0%',
        top: '0%'
    },
    logo: {
        flex: 1,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '93%',
        height: '25%',
        top: '8%',
        right: '-46.5%',

    },

    BigText: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: '-25%',
        top: '35%',

        fontFamily: 'bruno',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 43,
        letterSpacing: 0.09,
        color: '#FFFFFF'

    },
    buttonLeft: {
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
        transform: [{rotate: "-90deg"}],
        borderRadius: 6,

    },
    buttonCenter: {
        position: 'absolute',
        width: '29%',
        height: '5%',
        left: '-15.3%',
        top: '87.6%',

        backgroundColor: '#797979',
        borderRadius: 6

    },
    buttonRight: {
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
        transform: [{rotate: "90deg"}],
        borderRadius: 6,
        shadowColor: 'black'
    }

});


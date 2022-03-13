import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import TextImput from "./textImput";

const fonts = () => Font.loadAsync({
    'bruno': require('../assets/fonts/bruno.ttf')

});
export default function LogIn({navigation}) {
    const loadScene = () => {
        navigation.navigate('Registration')
    }
    const loadScene2 = () => {
        navigation.navigate('firstCaruselScreen')
    }

        return (
            <ImageBackground source={{uri:'https://downloader.disk.yandex.ru/preview/0ca8f57bceefd25fdf7d580290e45217f0516adccd50b7e45fd6cbcc49cb5ed0/6202623e/O8RJc04RuhPi0xW8PR43gwZZ0C-Q-sunPloSfxlXS5HO81xPDM_sZzIjyi2rID_izU8Q9ycJhGwZrJ7GGs0rEg%3D%3D?uid=0&filename=N3vrtOWidNk.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
                <View style={styles.container}>
                    <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                    <TextImput >

                        editable
                        maxLength={40}
                    </TextImput>
                    <TouchableOpacity title='TAP' font={fonts('bruno')} onPress={loadScene} style={styles.buttonREG}>
                        <Text style={styles.buttonText}>РЕГИСТРАЦИЯ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title='TAP' font={fonts('bruno')} onPress={loadScene2} style={styles.buttonGO}>
                        <Text style={styles.buttonText}>ВОЙТИ</Text>
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
        right:'-10%',
    },

    buttonREG: {

        alignItems:"center",
        backgroundColor: "transparent",
        display: "flex",
        left: '-25%',
        right: '52.1%',
        top: '50%',
    },
    buttonGO: {
        alignItems:"center",
        backgroundColor: "transparent",
        display: "flex",
        left: '11%',
        top: '45.5%',
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:12,
        lineHeight: 27,
        letterSpacing: 1
    }

});



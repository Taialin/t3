import React, {useState} from 'react';
import {AsyncStorage, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import LogIn from './LogIn'
import AppLoading from "expo-app-loading";


export default function Menu({navigation}) {

    const fetchFont = async () => {
        await Font.loadAsync({
            "bruno": require('../android/app/src/main/assets/fonts/bruno.ttf'),
            "Arsenal": require('../android/app/src/main/assets/fonts/Arsenal.ttf'),
            "futurisExtra": require('../android/app/src/main/assets/fonts/futurisExtra.ttf'),
            "pixel": require('../android/app/src/main/assets/fonts/pixel.ttf'),
            'prostoOne': require('../android/app/src/main/assets/fonts/prostoOne.ttf'),
            'PoiretOne': require('../android/app/src/main/assets/fonts/PoiretOne.ttf'),
            'Chulok': require('../android/app/src/main/assets/fonts/Chulok.ttf'),
        });
    };

    const [IsReady, SetIsReady] = useState(false);

    const LoadFonts = async () => {
        await fetchFont();
    };

    if (!IsReady) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReady(true)}
                onError={() => {
                }}
            />
        );
    }

    const loadScene = async () => {
        let registrated = await AsyncStorage.getItem('registrated');
        if (registrated === 'true') {
            navigation.navigate('firstCaruselScreen');
        } else {
            navigation.navigate('LogIn');
        }
    };

    return (

        <View style={styles.container}>

            <ImageBackground
                source={{uri: 'https://downloader.disk.yandex.ru/preview/138a2de34dbd02af0e61fbf6dff8664b61d759bc1dbe866b56a6e315d8567a35/620261b0/fi8P-pYTmxgEyaCrCKwe0r7rV3IJrN3ziC1fPQt95smcM_nblY7dutM5IgwAPS-flomTYbMnCn40C8rLnwXdyg%3D%3D?uid=0&filename=first.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}}
                style={[styles.backGround]}>
                <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <TouchableOpacity title='TAP' onPress={loadScene} style={styles.button}>
                    <Text style={styles.buttonText}>TAP</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>

    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backGround: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '130%',
        height: '112%',
        left: '-15%',
        top: '0%'
    },
    logo: {

        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '20%',
        top: '-27%',
    },
    button: {
        alignItems: "center",
        backgroundColor: "transparent",
        display: "flex",
        width: 90,
        padding: 8,
        top: '32%',


    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',

    }

})

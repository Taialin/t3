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

            <Image source={require('../assets/Img/Fones/menu.jpg')} style={[styles.backGround]}/>
                <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <TouchableOpacity title='TAP' onPress={loadScene} style={styles.button}>
                    <Text style={styles.buttonText}>TAP</Text>
                </TouchableOpacity>


        </View>

    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    backGround: {
        position:'absolute',
        width:'100%',
        height:'100%',
    },
    logo: {

        position: "absolute",
        width: '87%',
        height: '25%',
        top: '9%',
    },
    button: {
        color: "#FFFFFF",
        fontFamily: 'bruno',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:15,
        top: '40%'


    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',

    }

})

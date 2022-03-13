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
    TextInput,
    StatusBar
} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
//import style from  './style.css';

const fonts = () => Font.loadAsync({
    'bruno': require('../../assets/fonts/bruno.ttf')

});
export default function fourthCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('thirdCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('fifthCaruselScreen')
        }
            const loadScene3 = () => {
                navigation.navigate('tripMaker')
            }



    return (
        <ImageBackground source={{uri: 'https://downloader.disk.yandex.ru/preview/6a35162817c1134b323b286a7a661688cf07f48a0770a1b1993ddeb3ef93e128/62027ef4/QhFY9iANbOySLEtWFYLJr7DYAxYcpzLOAeOPuctkFpfFX96Qb3qmUl78FeRfknaqlqeFxHbKAcdD7OVbVa34sQ%3D%3D?uid=0&filename=make_a_trip.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{ position: "absolute", width: '88%', height: 436, left: '-44%', top: 237, backgroundColor: 'rgba(40,26,7,0.22)', borderRadius: 45 }} />
                <Text style={styles.BigText}>СОЗДАТЬ МАРШРУТ</Text>
                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                    <Image source={require("../../assets/Img/LButton.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene3} style={styles.buttonCenter}>
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



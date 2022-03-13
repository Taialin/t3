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
import title from "../components/Article";
import 'react-native-gesture-handler';
//import style from  './style.css';

const fonts = () => Font.loadAsync({
    'bruno': require('../../assets/fonts/bruno.ttf')

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
                <View style={{ position: "absolute", width: '85%', height: '60%', top: "30%", backgroundColor: 'rgba(40, 46, 60, 0.47)', borderRadius: 45 }}/>
                <Text style={styles.BigText}>НОВОСТИ ГРОДНО</Text>

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



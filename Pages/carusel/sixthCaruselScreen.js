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
import {useFonts} from "expo-font";
import {styles} from "../components/styles"


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

            <View style={styles.container}>
                <Image
                    source={{uri: 'https://downloader.disk.yandex.ru/preview/c040bc6ac1cbe3c9c8f81e000a4cebf8b95de7182145f78663a4295dab57c3b2/620e57b4/rtaIHpwdwZ3AhmvU3RiciV_viVyXWTRbGtHkY0a6PdIRKZPGq3UWt8cep1-cbZ79HVkvOXT_NAotDeT1U14HhQ%3D%3D?uid=0&filename=map.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}}
                    style={[styles.backGround]}/>
                <View style={{ backgroundColor: "#484848", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#484848", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />

                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>КАРТА ГРОДНО</Text>
                <Text style={styles.VerhText}>вся карта города Гродно{"\n"}и все </Text>
                <Text style={styles.NizText}>страны, мира. обновление каждый час </Text>
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


    );

}


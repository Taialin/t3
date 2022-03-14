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


export default function fifthCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('fourthCaruselScreen')
    }
    const loadScene2 = () => {
        navigation.navigate('sixthCaruselScreen')
    }

    /*   export default function firstCaruselScreen({navigation}) {
           const loadScene3 = () => {
               navigation.navigate('Registration')
           }
*/


    return (

            <View style={styles.container}>
                <Image
                    source={{uri: 'https://downloader.disk.yandex.ru/preview/37d872b0b1c38c23cd3cb7399c641a18fc50252204a29ccc1e221c7cf337805c/620e586c/3PhSlRGZTAi99fNmuiEwfIE2P1KRspp1FpnfpZsm0SMKvnyYdIjyPUA0lnR0Jk8l0ALTnM2nn9om9uPOfQ1iVQ%3D%3D?uid=0&filename=q2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}}
                    style={[styles.backGround]}/>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{ backgroundColor: "#293e41", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#293e41", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />

                <Text style={styles.BigText}>ГОТОВЫЕ РЕШЕНИЯ</Text>
                <Text style={styles.VerhText}>Главные события на сегодня{"\n"}в режиме онлайн</Text>
                <Text style={styles.NizText}>страны, мира. обновление каждый час </Text>
                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                    <Image source={require("../../assets/Img/LButton.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene} style={styles.buttonCenter}>
                    <Image source={require("../../assets/Img/CButton.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene2} style={styles.buttonRight}>
                    <Image source={require("../../assets/Img/RButton.png")}/>
                </TouchableOpacity>
            </View>


    );

}




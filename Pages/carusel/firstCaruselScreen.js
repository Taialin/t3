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
import {useFonts} from "expo-font";
import {styles} from "../components/styles"


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
            <View style={styles.container}>
                <View style={{ backgroundColor: "#ECD78D", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#ECD78D", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />

                <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/7ab35a7610afe92bb5e0f77e62dad42ce8896c6bbdd89fb1d1c3577498944022/62026335/t9OupWL3pD3WCIM32EWb0ErMsRdWB8QyKMebL82-ueHmHpZ9PRjTp9sNDd8RVulYOORtNZm559Oxbv8IAWFQUA%3D%3D?uid=0&filename=news.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}/>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>НОВОСТИ{"\n"}ГРОДНО</Text>
                <Text style={styles.VerhText}>Главные события на сегодня{"\n"}в режиме онлайн</Text>
                <Text style={styles.NizText}>страны, мира. обновление каждый час </Text>
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


    );

}

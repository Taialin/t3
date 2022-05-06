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
import {useFonts} from "expo-font";
import {styles} from "../components/styles"


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
            <View style={styles.container}>
                <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/6a35162817c1134b323b286a7a661688cf07f48a0770a1b1993ddeb3ef93e128/62027ef4/QhFY9iANbOySLEtWFYLJr7DYAxYcpzLOAeOPuctkFpfFX96Qb3qmUl78FeRfknaqlqeFxHbKAcdD7OVbVa34sQ%3D%3D?uid=0&filename=make_a_trip.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}/>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>СОЗДАТЬ МАРШРУТ</Text>
                <View style={{ backgroundColor: "#810B0B", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#810B0B", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
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




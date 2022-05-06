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



export default function SecondCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('firstCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('thirdCaruselScreen')
        }

            const loadScene3 = () => {
                navigation.navigate('WeatherPage')}
    const [fontloaded, fontLoadingError] = useFonts({
        "bruno": require('../../assets/fonts/bruno.ttf'),
    });


    return (
            <View style={styles.container}>

                <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/2c98a4b2aec810fcd778d9423fbd889e468172bb9e8d0b55d5896e143b24f312/6256eff4/Zkrjf4n2-1X_urjoeuVUigklOI4CskU6SoxBbFLgEb-51lxHMYFm8454pYAI93UAm35PIHPEBV867QhyGxWfrg%3D%3D?uid=0&filename=booking.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}/>
                <View style={{ backgroundColor: "#BF7621", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#BF7621", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />

                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>ПОГОДА РЕГИОНА</Text>
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




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
                <View style={{ backgroundColor: "#561728", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#561728", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />

                <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/4a8619a363a2d2e1263d811b6294686af444dfdc6dfc7dbc9244bcde2eb5c826/6220ebae/ryuftwBqMEdL39ozbNranJh-wMIIK9iJzoAnXw0TTDIvZa407pHHVbQYKgOI2Mk0xDsORIpKWSwboyHRMysUSA%3D%3D?uid=0&filename=booking.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}/>
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




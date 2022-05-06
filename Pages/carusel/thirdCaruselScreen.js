import React, {useState} from 'react';
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
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
//import style from  './style.css';



export default function thirdCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('secondCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('fourthCaruselScreen')
        }
    const loadSceneTaxi = () => {
        navigation.navigate('taxiOrder')
    }
    const loadSceneCinema = () => {
        navigation.navigate('cinemaOrder')
    }
    const loadSceneFlowers = () => {
        navigation.navigate('flowerOrder')
    }
    const loadSceneCafe = () => {
        navigation.navigate('cafeOrder')
    }




    return (
        <ImageBackground source={{uri: 'https://downloader.disk.yandex.ru/preview/200fa843b3d70e79a065dbacf32f912714da96370838cdad561e8fc00ccc5e58/6220d32e/GmrgHCPxfvOGa37PTvYi28-zm8i2iMuz9g4yd4xxG8to6AKHmT9E0YFa_yxuzmmHVHFFo0FxgiTjZQorUUPRWg%3D%3D?uid=0&filename=add_serv.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</Text>

                <TouchableOpacity onPress={loadSceneTaxi} style={styles.taxit}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/5dad0b3dbe1dfebea0483ddc0ad5e646efd1c818f5c83d903e061520f6e04a51/6220d390/yM1HiBGlbeR3Th0Ka4uh3G4Gcc6VLOP3JByBjGa3evrJ0NUCY38dDgn1taQ6VeVVxK50sw9Wa2xPJiD1syY4vQ%3D%3D?uid=0&filename=taxi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.taxi}   />
                </TouchableOpacity>

                <TouchableOpacity onPress={loadSceneCafe} style={styles.cafet}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/cb1c32fd39b3949027f727798c015c6c183dd005321372f1bb2c4a7c7afb478c/6220d462/XFph3Z_GOYts5e5aPiEPabMaOjOTEoHZlTjRnmbVjkpLqm3azKh9mJkAGV2i2piq02fLF-m8esxIevX0wAft5g%3D%3D?uid=0&filename=cafe.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.cafe} />
                </TouchableOpacity>

                <TouchableOpacity onPress={loadSceneCinema} style={styles.cinemas}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/f76c0ea90f93de58d30e54b7f98c0f4f85945f5d47216ed39570a5b3de651b88/6220d428/5R1xsH36wFBU1rH2qmy7MJwHxvyAvxMsO0nJ6cHO71GkWQGtRtMc9TRbcjM3HAxaKSnn9CO50xjp9wLOz9YZXw%3D%3D?uid=0&filename=cinema.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={styles.cinema} />
                </TouchableOpacity>

                <TouchableOpacity onPress={loadSceneFlowers}  style={styles.flowerst}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/8142f0f2ec91bfc57c34be6ff0a5868541800a1e25ed95ae1f1c0097b7cd694d/6220d3c0/pQRtPozFTEK6wDbZlgxqeH7DglcJIDZk8UtEBwe6PNtWKZqEBBYzY8HuFvzi_lIfcIfXItrukOoN7GNYydxZHw%3D%3D?uid=0&filename=flowers.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.flowers} />
                </TouchableOpacity>


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
        fontSize: 20,
        lineHeight: 43,
        letterSpacing: 0.09,
        color: '#FFFFFF'

    },
    buttonLeft:{
        position: 'absolute',
        left:"4%",
        top:"95%"

    },
    buttonCenter:{
        position: 'absolute',
        top:"95.7%"

    },

    buttonRight:{
        position: 'absolute',
        right:"4%",
        top:"95%"

    },
    taxi:{
        position:'absolute',
        width: '100%',
        height: '100%',


    },
    taxit:{
        position:'absolute',
        width: '43%',
        height: '30%',
        top: '34%',
        left: '6%',

    },
    cafe:{
        position:'absolute',
        width: '100%',
        height: '100%',
    },
    cafet:{
        position:'absolute',
        width: '43%',
        height: '30%',
        top: '34%',
        right: '6%',

    },
    flowers:{
        position:'absolute',
        width: '100%',
        height: '100%',
    },
    flowerst:{
        position:'absolute',
        width: '43%',
        height: '30%',
        bottom: '10%',
        right: '6%',

    },

    cinema:{
        position:'absolute',
        width: '100%',
        height: '100%',

    },
    cinemas:{
        position:'absolute',
        width: '43%',
        height: '30%',
        bottom: '10%',
        left: '6%',

    },




});



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
        <ImageBackground source={require('../../assets/Img/Fones/carusel3.jpg')} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</Text>

                <TouchableOpacity onPress={loadSceneTaxi} style={styles.taxit}>
                    <Image source={{uri: 'https://sun9-71.userapi.com/sun9-5/s/v1/if2/y2dPzT0-AqSaaRBsPmyFPQkv8y5gLeb_iOQIFESLeXrQc5Qv_r0igHQpVyhpOFWdumbz0TAtihqSR-42yt_FXaBZ.jpg?size=358x466&quality=96&type=album'}}  style={styles.taxi}   />
                </TouchableOpacity>

                <TouchableOpacity onPress={loadSceneCafe} style={styles.cafet}>
                    <Image source={{uri: 'https://sun9-71.userapi.com/sun9-4/s/v1/if2/L6jRgXfiI2wqd437dEnVKdL1MQ0E6gIYQrjjTsQ6618GDIr87iD_tS1xk_QQoIZNolqaZc9I_R-AmkMTqbwrvbcV.jpg?size=358x466&quality=96&type=album'}}  style={styles.cafe} />
                </TouchableOpacity>

                <TouchableOpacity onPress={loadSceneCinema} style={styles.cinemas}>
                    <Image source={{uri: 'https://sun9-84.userapi.com/sun9-88/s/v1/if2/oIKJxQSaSVssQVTH42kpveOCn-Dns28-yujUiSi-93ratXOqqJ3nM34YPw7dmxf4VfuDGRmd6ED_bYmVNej2Xfpr.jpg?size=358x466&quality=96&type=album'}} style={styles.cinema} />
                </TouchableOpacity>

                <TouchableOpacity onPress={loadSceneFlowers}  style={styles.flowerst}>
                    <Image source={{uri: 'https://sun9-84.userapi.com/sun9-84/s/v1/if2/d6N88KE5jI72PGHHaFzZDaHeqrSPfm9pfT_cYpT_Zi9JwtXBUyg4V3xVtq--A88mG0OlJXOfFXP-IDghwb50NJzV.jpg?size=358x466&quality=96&type=album'}}  style={styles.flowers} />
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
        top: '26%',

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
        top: '32.7%',
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
        top: '32.7%',
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
        bottom: '11%',
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
        bottom: '11%',
        left: '6%',

    },




});



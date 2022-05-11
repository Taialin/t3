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
                navigation.navigate('AAAVibor')
            }

    return (
            <View style={styles.container}>
                <Image source={require('../../assets/Img/Fones/carusel4.jpg')} style={[styles.backGround]}/>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>МИНИ СЕРВИСЫ</Text>
                <Text style={styles.VerhText}>Ваши маршруты, телефоны, афиша,{"\n"}мероприятия Гродно</Text>
                <Text style={styles.NizText}>всё можно узнать здесь </Text>
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




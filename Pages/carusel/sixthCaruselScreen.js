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
                    source={require('../../assets/Img/Fones/carusel6.jpg')}
                    style={[styles.backGround]}/>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>КАРТА ГРОДНО</Text>
                <Text style={styles.VerhText}>карта вснго города Гродно{"\n"}со всеми местами </Text>
                <Text style={styles.NizText}>просмотри город в приложении </Text>
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


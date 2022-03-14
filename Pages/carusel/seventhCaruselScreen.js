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
import 'react-native-gesture-handler';
import {styles} from "../components/styles"

export default function seventhCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('sixthCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('firstCaruselScreen')
        }
            const loadScene3 = () => {
                navigation.navigate('DostoprimMain')
            }




    return (
            <View style={styles.container}>
                <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/3f5c293362062d175ec24b6d3cfd369359a2d7cc0796575bf5dd918b4dec077a/62028ae1/diaLmynLxNVMIb6tVSs6BU3WH__lUhpDYueRpDb678g7Hra3RpS2iLmlkuyegI5gZlpict6FolgPN3X4bcTfyw%3D%3D?uid=0&filename=all_dost.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}/>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <View style={{ backgroundColor: "#d5d5d5", height: 25, width: 90, top: '26.36%',left:'10%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                <View style={{ backgroundColor: "#d5d5d5", height: 10, width: 205, bottom: '13%',right:'0%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />

                <Text style={styles.BigText} >МЕСТА{"\n"}ГОРОДА</Text>
                <Text style={styles.VerhText}>Все достопимечательности гродно{"\n"}и даже те, которых уже нет</Text>
                <Text style={styles.NizText}>вся история нашего города Гродно</Text>
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

const te = StyleSheet.create({
        text: {
            position: 'absolute',
            top: '70%',
            left:"7%",
            fontFamily: 'futurisExtra',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 40,
            lineHeight: 54,
            color: '#FFFFFF',
        }
    }
    )

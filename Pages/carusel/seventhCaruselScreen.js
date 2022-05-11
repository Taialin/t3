import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
        navigation.navigate('Place_category')
    }


    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Img/Fones/carusel7.jpg')}
                style={[styles.backGround]}/>
            <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>

            <Text style={styles.BigText}>МЕСТА{"\n"}ГОРОДА</Text>
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
            left: "7%",
            fontFamily: 'futurisExtra',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 40,
            lineHeight: 54,
            color: '#FFFFFF',
        }
    }
)

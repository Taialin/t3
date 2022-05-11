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
import TextImput from "./textImput";
import {useFonts} from "expo-font";



export default function LogIn({navigation}) {
    const loadScene = () => {
        navigation.navigate('Registration')
    }
    const [fontloaded, fontLoadingError] = useFonts({
        "bruno": require('../assets/fonts/bruno.ttf')
    });

        return (

                <View style={styles.container}>
                    <Image source={require('../assets/Img/Fones/sorry.jpg')} style={[styles.backGround]}/>
                    <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                    <View style={{ backgroundColor: "rgba(0,0,0,0.37)", height: 190, width: '90%', top: '41%',left:'5%', position:'absolute',  alignItems: 'center', justifyContent: 'center',}} />
                    <Text style={[styles.sm]}> Здравствуйте, это дипломный проект, он не совершенен,но будет исправляться по ходу улучшения мох знаний, буду рад если вы зарегиструетесь и напишете отзыв</Text>
                    <TouchableOpacity onPress={loadScene} style={styles.buttonText}>
                        <Text style={styles.buttonText}>РЕГИСТРАЦИЯ</Text>
                    </TouchableOpacity>


                </View>


        );

    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backGround: {
        position:'absolute',
        width:'100%',
        height:'100%',

    },
    logo: {
        position: "absolute",
        width: '87%',
        height: '25%',
        top: '9%',
    },
    sm: {
        position: "absolute",
        fontFamily: 'pixel',
        color: "#fafafa",
        width: '90%',
        left:'10%',
        top: '45%',
        fontSize:14,
        lineHeight: 27,
    },

    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',

        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:15,
        top: '36%'
    }

});



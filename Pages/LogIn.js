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
            <ImageBackground source={{uri:'https://downloader.disk.yandex.ru/preview/0ca8f57bceefd25fdf7d580290e45217f0516adccd50b7e45fd6cbcc49cb5ed0/6202623e/O8RJc04RuhPi0xW8PR43gwZZ0C-Q-sunPloSfxlXS5HO81xPDM_sZzIjyi2rID_izU8Q9ycJhGwZrJ7GGs0rEg%3D%3D?uid=0&filename=N3vrtOWidNk.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
                <View style={styles.container}>
                    <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                   <Text style={[styles.sm]}> Здравствуйте, это дипломный проект, он не совершенен, но будет исправляться по ходу улучшения мох знаний, буду рад если вы зарегиструетесь и напишете отзыв</Text>
                    <TouchableOpacity onPress={loadScene} style={styles.buttonText}>
                        <Text style={styles.buttonText}>РЕГИСТРАЦИЯ</Text>
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
        justifyContent: 'center',
        color: "#e4e5a2",
        width: '100%',
        top: '40%',
    },

    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:12,
        lineHeight: 27,
        letterSpacing: 1,
        top: '35%'
    }

});



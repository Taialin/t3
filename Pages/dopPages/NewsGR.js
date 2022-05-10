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
import {WebView} from "react-native-webview";



export default function NewsGR() {


    return (
        <View style={[styles.container]}>
            <Image source={require('../../assets/Img/111.png')} style={[styles.logo]}/>
            <WebView
                source={{uri: 'https://s13.ru/'}}
                style={{marginTop: 2, width: '100%', top: 38}}
                startInLoadingState={true}
            />
        </View>
    );


}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ee0754',

    },
    noteStyle: {

        margin: 15,
        fontFamily: 'bruno',
        color: '#090707',
        fontSize: 10,
        top: 120
    },
    image: {
        width: 280,
        height: 180,
    },
    logo: {
        width: "80%",
        height: 55,
        top: '5%',
        left:'10%'
    },


};





import React, {useState} from 'react';
import {View, Linking, TouchableNativeFeedback, Image} from 'react-native';
import {Text, Button, Card, Divider} from 'react-native-elements';
import moment from 'moment';
import AppLoading from "expo-app-loading";
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"
import {BackgroundImage} from "react-native-elements/dist/config";
import {WebView} from "react-native-webview";

export default class MadeTripArticle extends React.Component {

    render() {
        const {
            id,
            name_of_the_trip,
            description,
            script
        } = this.props.selectedMadeTripArticles;

        const {noteStyle, featuredTitleStyle} = styles;




        return (
          <View style={styles.container}>
              <Text  style={{color:'#ffffff', top:10}}> {name_of_the_trip}</Text>
              <Text> {description}</Text>
              <WebView
                  source={{uri: 'https://yandex.by/maps/10274/grodno/?l=sat%2Cskl&ll=23.831150%2C53.679486&mode=usermaps&source=constructorLink&um=constructor%3A063b62b773f6ee95150b3e13cf11a40ac6721a35ea4a0acd751c83a0f9e67ad7&z=16'}}
                  style={{marginTop: 2, width: '100%', top: 38}}
                  startInLoadingState={true}
              />
              <Divider/>
         </View>
        );

    }

}


const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noteStyle: {

        margin: 10,
        fontFamily: 'bruno',
        position:'absolute',
        color: '#ffffff',
        fontSize: 10,
        top:'80%',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    featuredTitleStyle: {
        height: '30%',
        color: '#0a0808',
        marginHorizontal: 40,
        textShadowColor: '#000000',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3,

    },

    imagee: {
        justifyContent: 'center',
        width: "100%",
        height: 200,
        tintColor: "#000000",

    },

    tit: {
        top:'5%',
        left:'3%',
        color: '#ffffff',
        fontSize: 15
    },
    card: {
        backgroundColor: '#000000',
        fontSize: 15
    },
    hover: {


    }
};


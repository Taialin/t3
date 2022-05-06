import React, {useState} from 'react';
import {View, Linking, TouchableNativeFeedback, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Text, Button, Card, Divider} from 'react-native-elements';
import moment from 'moment';
import AppLoading from "expo-app-loading";
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"
import {BackgroundImage} from "react-native-elements/dist/config";
//import { Card } from "@paraboly/react-native-card";

export default class SelectedCatgoryArticle extends React.Component {

    render() {
        const { navigation } = this.props;
        const {
            id,
            name_of_place,
            image,
        } = this.props.selectedCatgoryArticles;

        const {noteStyle, featuredTitleStyle} = styles;



        return (
                <Card  style={styles.imagee}>


                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: image}}>
                    </Image>
                        <View  style={{
                            flex: 1,
                            backgroundColor: "#000000",
                            width:'113%',
                            height: 50,
                            left:'-6.5%'
                        }}>

                        <Text style={styles.noteStyle}>  {name_of_place}</Text>

                        </View>


                </Card>

        );

    }

}


const styles = {

    noteStyle: {

        margin: 10,
        backgroundColor: '#0a0808',
        fontFamily: 'bruno',
        color: '#ffffff',
        fontSize: 10,
        top:'17%'

    },
    image: {
        paddingTop: StatusBar.currentHeight +10,
        width: "50%",
        margin: '3%',
        padding:'3%',


    },
    featuredTitleStyle: {
        backgroundColor: '#0a0808',
        height: '30%',
        width: '10%',
        marginHorizontal: 40,
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3,

    },

    imagee: {
        justifyContent: 'center',
        width: "50%",
        height: 200,
        tintColor: "#000000",

    },

    tit: {
        top:'-20%',
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

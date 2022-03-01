import React, {useState} from 'react';
import {View, Linking, TouchableNativeFeedback, Image} from 'react-native';
import {Text, Button, Card, Divider} from 'react-native-elements';
import moment from 'moment';
import AppLoading from "expo-app-loading";
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"
import {BackgroundImage} from "react-native-elements/dist/config";

export default class Article extends React.Component {

    render() {
        const {
            title,
            description,
            publishedAt,
            source,
            urlToImage,
            url
        } = this.props.article;
        const {noteStyle, featuredTitleStyle} = styles;
        const time = moment(publishedAt || moment.now()).fromNow();
        const defaultImg = 'Картинку можно увидеть на сайте или увидеть никогда, хорошего вам дня CКАЖИТЕ СПАСИБО, ЧТО ОНО ХОТЬ ТАК РАБОТАЕТ';
        const def = 'https://cdnn11.img.sputnik.by/img/07e5/05/1a/1047722534_0:0:2048:1153_1920x0_80_0_0_3b79a99784692fe059eb2f6cd5b2fa97.jpg';


        return (

            <TouchableNativeFeedback
                useForeground
                onPress={() => Linking.openURL(url)}

            >

                <Card   resizeMode="cover"
                             style={[styles.hover, { backgroundColor: "black" }]}>
                    <BackgroundImage
                        style={styles.imagee}
                        resizeMode="cover"
                        source={{uri: urlToImage || def}}
                    >

                    <Text style={styles.tit}> {title}  </Text>


                    <Divider/>
                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                        <Text style={noteStyle}>{time}</Text>

                    </View>
                    </BackgroundImage>
                </Card>
            </TouchableNativeFeedback>
        );
    }
}

const styles = {

    noteStyle: {

        margin: 10,
        fontFamily: 'bruno',
        color: '#ffffff',
        fontSize: 10

    },
    featuredTitleStyle: {
        high: '30%',
        color: '#ffffff',
        marginHorizontal: 40,
        textShadowColor: '#ffffff',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3,

    },
    imagee: {
        justifyContent: 'center',
        width: "100%",
        height: 200,
        marginRight: 10,
        opacity: 1,
        filter: 'black',
        backgroundColor: '#ffffff'
    },
    tit: {
        color: '#ffffff',
        fontSize: 15
    },
    card: {
        color: '#000000',
        fontSize: 15
    },
    hover: {

        width: "100%",
        height: 190,
        opacity: 0.4,
    }
};

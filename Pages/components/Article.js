import React, {useState} from 'react';
import {View, Linking, TouchableNativeFeedback, Image} from 'react-native';
import {Text, Button, Card, Divider} from 'react-native-elements';
import moment from 'moment';
import AppLoading from "expo-app-loading";
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"

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

                <Card

                    featuredTitleStyle={featuredTitleStyle}

                >
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: urlToImage || def}}
                    />
                    <Text> {title} </Text>

                    <Text style={{marginBottom: 10, color: '#ffcdcd'}}>
                        {description || defaultImg}
                    </Text>
                    <Divider style={{backgroundColor: '#000000'}}/>
                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                        <Text style={noteStyle}>{time}</Text>
                    </View>

                </Card>
            </TouchableNativeFeedback>
        );
    }
}

const styles = {

    noteStyle: {

        margin: 10,
        fontFamily: 'bruno',
        color: '#b15318',
        fontSize: 10

    },
    featuredTitleStyle: {
        high: '30%',
        color: '#b15318',
        marginHorizontal: 40,
        textShadowColor: '#FFB000',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3
    },
    image: {

        padding: 0,
        width: "100%",
        height: 200,
        marginRight: 10,
        opacity: 0.8,
        filter: 'black',
        backgroundColor: '#0e0d09'
    },
    hover: {
        opacity: 4,
    }
};

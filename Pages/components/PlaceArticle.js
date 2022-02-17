import React, {useState} from 'react';
import {View, Linking, TouchableNativeFeedback, Image} from 'react-native';
import {Text, Button, Card, Divider} from 'react-native-elements';
import moment from 'moment';
import AppLoading from "expo-app-loading";
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"
import {id, category_of_place} from '../dto/Place_category'
export default class PlaceArticle extends React.Component {

    render() {
        const {
            id,
            category_of_place,
        } = this.props.place_articles;
        const {noteStyle, featuredTitleStyle} = styles;



        return (

            <TouchableNativeFeedback>
                <Card featuredTitleStyle={featuredTitleStyle}>

                    <Text> {id} </Text>
                    <Text style={{marginBottom: 10, color: '#ffcdcd'}}>
                        {category_of_place}
                    </Text>
                    <Divider style={{backgroundColor: '#000000'}}/>
                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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

};

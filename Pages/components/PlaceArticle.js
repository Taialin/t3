import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import bruno from "./../../assets/fonts/bruno.ttf"
import {BackgroundImage} from "react-native-elements/dist/config";
import {useNavigation} from "@react-navigation/native";

export default class PlaceArticle extends React.Component<Props> {

    constructor(props) {
        super(props);
    }

    loadScene() {
        this.props.navigation.navigate('MaketForListsOfNamePlaces',
            this.props.place_articles.id);
    }

    render() {

        const {
            id,
            category_of_place,
            image,
        } = this.props.place_articles;
        const {noteStyle, featuredTitleStyle} = styles;


        return (

            <TouchableOpacity onPress={() => this.loadScene()}>
                <BackgroundImage
                    style={styles.imagee}
                    resizeMode="cover"
                    source={{uri: image}}>
                </BackgroundImage>
            </TouchableOpacity>

        );
    }
}

const styles = {


    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    noteStyle: {

        margin: 10,
        fontFamily: 'bruno',
        color: '#000000',
        fontSize: 10,
        top: '17%'

    },
    r: {
        height: '10%',
        width: '10%',
        backgroundColor: '#0a0808',
    },

    imagee: {
        paddingTop: StatusBar.currentHeight + 10,
        width: "100%",
        margin: '3%',
        padding: '3%'

    },

};

import React, {useState} from 'react';
import {View, Linking, TouchableNativeFeedback, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Text, Button, Card, Divider} from 'react-native-elements';
import bruno from "./../../assets/fonts/bruno.ttf"
import {BackgroundImage} from "react-native-elements/dist/config";

export default class SelectedCatgoryArticle extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    loadScene() {
        this.props.navigation.navigate('MaketOfPlace',
            this.props.selectedCatgoryArticles.id);
    }

    render() {
        const {
            id,
            name_of_place,
            image,
        } = this.props.selectedCatgoryArticles;

        const {noteStyle, featuredTitleStyle} = styles;



        return (
            <View  style={styles.container}>
<Card>
            <TouchableOpacity style={styles.toch} onPress={() => this.loadScene()}>

                <BackgroundImage
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: image}}>
                    <View style={{ backgroundColor: "#ffffff", height: 45, width: 250, alignItems: 'center', top: 130,left:13,justifyContent:'center', position:"absolute"}} />
                    <Text style={styles.noteStyle}>  {name_of_place}</Text>

                    </BackgroundImage>

    </TouchableOpacity>
</Card>
            </View>
        );

    }

}


const styles = {
    container: {
        flex: 1,
       alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',

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
    toch: {
        width: 280,
        height: 180,
        flexDirection:'column'
    },

};

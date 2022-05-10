import React from 'react';
import {AsyncStorage, Image, StatusBar, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"
import {BackgroundImage} from "react-native-elements/dist/config";
import {LinearGradient} from "react-native-svg";
import {WebView} from "react-native-webview";

//import { Card } from "@paraboly/react-native-card";

export default class SelectedPlace extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    addToRoute = async () => {
        let route = await AsyncStorage.getItem('route');
        if (route == null) {
            route = [];
        } else {
            route = JSON.parse(route);
        }
        if (!route.includes(this.props.selectedPlaces.id)) {
            route.push(this.props.selectedPlaces.id);
            await AsyncStorage.setItem('route', JSON.stringify(route));
        }
    }
    static defaultProps = {
        overScrollMode: 'always',
        javaScriptEnabled: true,
        thirdPartyCookiesEnabled: true,
        scalesPageToFit: true,
        allowsFullscreenVideo: false,
        allowFileAccess: false,
        saveFormDataDisabled: false,
        cacheEnabled: true,
        androidHardwareAccelerationDisabled: false,
        androidLayerType: 'none',
        setSupportMultipleWindows: true,
        setBuiltInZoomControls: true,
        setDisplayZoomControls: false,
        nestedScrollEnabled: false,
    };

    render() {
        console.warn(this.props);
        const {
            id,
            place_category,
            name_of_place,
            image,
            age,
            years,
            style_of_the_place,
            opening_hours,
            place_on_map,
            history,
            visit_cost,
            Link_to_the_site,
            foto_vnutri,
            foto_vid1,
            foto_vid2,
            foto_vid3
        } = this.props.selectedPlaces;

        const {noteStyle, featuredTitleStyle} = styles;


        return (

            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{uri: foto_vnutri || image}}>
                </Image>
                <Text style={styles.title}>  {name_of_place}</Text>

                <Text style={styles.noteStyle}>  {history}</Text>
                <TouchableOpacity title='TAP' onPress={this.addToRoute} style={styles.button}>

                </TouchableOpacity>
                <Text style={styles.noteStyle}>Добавить в маршрут</Text>
                <Image
                    style={styles.image}
                    source={{uri: foto_vid1}}>
                </Image>
                <Image
                    style={styles.image}
                    source={{uri: foto_vid2}}>
                </Image>
                <Image
                    style={styles.image}
                    source={{uri: foto_vid3}}>
                </Image>
                <WebView
                    source={{uri: place_on_map}}
                    style={{width: 300, height: 500}}
                    startInLoadingState={true}
                />
            </View>


        );

    }

}


const styles = {

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight + 10,
        //backgroundColor: '#000000'
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
    title: {

        margin: 10,
        fontFamily: 'bruno',
        color: '#ffffff',
        fontSize: 20,
        paddingTop: 20,

    },
    noteStyle: {
        paddingTop: StatusBar.currentHeight,
        margin: 10,
        fontFamily: 'bruno',
        color: '#ffffff',
        fontSize: 15,

    },
    image: {
        justifyContent: 'center',
        width: "100%",
        height: 200,

    },


};

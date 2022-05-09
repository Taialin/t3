import React from 'react';
import {AsyncStorage, StatusBar, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
//import m from 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap';
import bruno from "./../../assets/fonts/bruno.ttf"

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

    render() {
        console.warn(this.props);
        const {
            id,
            place_category, name_of_place, image, age, years,
            style_of_the_place, opening_hours, place_on_map, history, visit_cost, Link_to_the_site
        } = this.props.selectedPlaces;

        const {noteStyle, featuredTitleStyle} = styles;


        return (

            <View style={styles.container}>

                {/*   <BackgroundImage
                    style={styles.image}
                    resizeMode="cover"
                    source={{uri: image}}>

*/}

                <Text style={styles.title}>  {name_of_place}</Text>

                <Text style={styles.noteStyle}>  {history}</Text>
                <TouchableOpacity title='TAP' onPress={this.addToRoute} style={styles.button}>
                    <Text style={styles.buttonText}>Добавить в маршрут</Text>
                </TouchableOpacity>
                {/*  </BackgroundImage>*/}
            </View>


        );

    }

}


const styles = {

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#000000'
    },
    title: {

        margin: 10,
        fontFamily: 'bruno',
        color: '#ffffff',
        fontSize: 15,
        top: '19%'

    },
    noteStyle: {
        paddingTop: StatusBar.currentHeight,
        margin: 10,
        fontFamily: 'bruno',
        color: '#ffffff',
        fontSize: 15,
        top: '20%'

    },
    image: {
        paddingTop: StatusBar.currentHeight + 10,
        width: "50%",
        margin: '3%',
        padding: '3%',


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
        top: '-20%',
        left: '3%',
        color: '#ffffff',
        fontSize: 15
    },
    card: {
        backgroundColor: '#000000',
        fontSize: 15
    },
    hover: {}
};

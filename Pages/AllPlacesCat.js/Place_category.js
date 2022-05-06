import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {getPlaceCategory} from '../service/Place_categoryService';
import PlaceArticle from '../components/PlaceArticle';

export default class Place_category extends React.Component<Props> {

    constructor(props) {
        super(props);
        this.state = {place_articles: [], refreshing: true};
        this.fetchPlaceCategory = this.fetchPlaceCategory.bind(this);
    }

    // Called after a component is mounted
    componentDidMount() {
        this.fetchPlaceCategory();
    }

    async fetchPlaceCategory() {
        try {
            let place_articles = await getPlaceCategory();
            this.setState({place_articles, refreshing: false});
        } catch (e) {
            console.error(e);
        }
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchPlaceCategory()
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: 'https://downloader.disk.yandex.ru/preview/a4884e044a5be759144a8efe1472a7541abd9a7fc8136e2ee716b10d6ae071d9/621e0c2d/Unk3_PMDtQLvbK6wAKTQwyDcEfZykhNj5DcIXPih_88cVpRDItjJBtlUQbKOkwtYoRK3r4gu7muPWyLXbTfOZg%3D%3D?uid=0&filename=fone.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}
                    style={[styles.fone]}/>
                <Image source={require('../../assets/Img/dotGreen.png')} style={styles.logo}/>
                <Text style={styles.text}>Достопримечательности Гродно</Text>
                <FlatList style={styles.ttt}
                          data={this.state.place_articles}
                          renderItem={({item}) => <PlaceArticle navigation={this.props.navigation}
                                                                place_articles={item}/>}
                          keyExtractor={item => item.url}

                />
            </View>
        );


    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#000000"
    },
    logo: {
        position: "relative",
        width: '70%',
        height: '6%',
        top: '-2%',
    },
    fone: {
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        top: '-0%'
    },
    ttt: {
        width: '100%',
        padding: 20,
    },
    text: {
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e0e0e0',
        top: '-1%',
        fontSize: 20,
        fontFamily: 'Arsenal'
    }

});

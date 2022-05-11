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
                    source={require('../../assets/Img/dostfone.png')}
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

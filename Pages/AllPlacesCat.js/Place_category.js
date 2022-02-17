import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

// Import getNews function from news.js
import { getPlaceCategory } from '../service/Place_categoryService';

import {id, category_of_place} from '../dto/Place_category'
// We'll get to this one later
import PlaceArticle from '../components/PlaceArticle';

export default class Place_category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { place_articles: [], refreshing: true };
        this.fetchPlaceCategory = this.fetchPlaceCategory.bind(this);
    }
    // Called after a component is mounted
    componentDidMount() {
        this.fetchPlaceCategory();
    }

    fetchPlaceCategory() {
        getPlaceCategory()
            .then(place_articles => this.setState({ place_articles, refreshing: false }))
            .catch(() => this.setState({ refreshing: false }));
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchPlaceCategory()
        );
    }

    render( )  {
        return (
            <View>
                <Image source={require('../../assets/Img/GRODNO.png')} style={styles.logo}/>

                <Text></Text>
                <Text style={styles.text}>Достопримечательности</Text>
                <Text></Text>
                <Text></Text>

                <FlatList
                    data={this.state.place_articles}
                    renderItem={({ item }) => <PlaceArticle place_articles={item} />}
                    keyExtractor={item => item.url}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}

                />
            </View>
        );


    }
}
const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: '100%',
        top: '15%',
    },
    text:{
        position:"relative",
        alignItems: 'center',
        justifyContent: 'center',
        right:'-15%',
        top:'5%',
        fontSize: 20,
    }

});

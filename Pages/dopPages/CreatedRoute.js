import React from 'react';
import {AsyncStorage, FlatList, Image, StatusBar, StyleSheet, View} from 'react-native';
import {getByIds} from "../service/AllPlacesService";
import SelectedPlace from "../components/SelectedPlace";
import SelectedCatgoryArticle from "../components/SelectedCatgoryArticle";

export default class CreatedRoute extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {allPlaces: [], refreshing: true};
        this.fetchAllPlace = this.fetchAllPlace.bind(this);
    }

    // Called after a component is mounted
    componentDidMount() {
        this.fetchAllPlace();
    }

    async fetchAllPlace() {
        try {
            let routePlaces = await AsyncStorage.getItem('route');
            if (routePlaces != null) {
                routePlaces = JSON.parse(routePlaces);
                console.warn(routePlaces);
                let allPlaces = await getByIds(routePlaces);
                console.warn(allPlaces);
                this.setState({allPlaces, refreshing: false});
            }
        } catch (e) {
            console.error(e);
        }
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchAllPlace()
        );
    }

    render( )  {

        return (
            <View style={styles.container}>

                <FlatList style={styles.ttt}
                          data={this.state.allPlaces}
                          renderItem={({ item }) => <SelectedCatgoryArticle navigation={this.props.navigation}
                                                                            selectedCatgoryArticles={item}/>}
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
        backgroundColor:"#000000"
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
    text:{
        position:"relative",
        alignItems: 'center',
        justifyContent: 'center',
        color:'#e0e0e0',
        top:'-1%',
        fontSize: 20,
        fontFamily:'Arsenal'
    }

});

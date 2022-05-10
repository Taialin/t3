import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, View} from 'react-native';
import SelectedCatgoryArticle from "../components/SelectedCatgoryArticle";
import {getByCategoryId} from "../service/AllPlacesService";
import PlaceArticle from "../components/PlaceArticle";


export default class MaketForListsOfNamePlaces extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.categoryId = props.route.params;
        this.state = { selectedCatgoryArticles: [], refreshing: true };
        this.fetchAllPlace = this.fetchAllPlace.bind(this);
    }
    // Called after a component is mounted
    componentDidMount() {
        this.fetchAllPlace();
    }

    async fetchAllPlace() {
        try {
            let selectedCatgoryArticles = await getByCategoryId(this.categoryId);
            this.setState({selectedCatgoryArticles, refreshing: false});
        } catch(e) {
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
                <Image source={require('../../assets/Img/dotGreen.png')} style={styles.logo}/>
                <FlatList style={styles.ttt}
                          data={this.state.selectedCatgoryArticles}
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
       // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor:"#000000"
    },
    logo: {
        position: "relative",
        width: '70%',
        height: '6%',
        top: '4%',
    },

    ttt: {
       paddingVertical: StatusBar.currentHeight
       //padding: 20,

    },


});

import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {getById} from "../service/AllPlacesService";
import SelectedPlace from "../components/SelectedPlace";
import {getPlaceCategory} from "../service/Place_categoryService";
import MadeTripArticle from "../components/MadeTripArticle";
import {getTrip} from "../service/Made_tripService";

export default class MadeTrip extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = { selectedTrip: [], refreshing: true };
        this.fetchAllTrip = this.fetchAllTrip.bind(this);
    }
    // Called after a component is mounted
    componentDidMount() {
        this.fetchAllTrip();
    }

    async fetchAllTrip() {
        try {
            let selectedMadeTripArticles = await getTrip();
            this.setState({selectedMadeTripArticles, refreshing: false});
        } catch(e) {
            console.error(e);
        }
    }


    render( )  {

        return (
            <View style={styles.container}>


                <FlatList style={styles.ttt}
                          data={this.state.selectedMadeTripArticles}
                          renderItem={({ item }) => <MadeTripArticle selectedMadeTripArticles={item}
                         />}
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
        backgroundColor:"#030303"
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
        padding: 10,

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

import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';

// Import getNews function from news.js
import { getNews } from './news';
// We'll get to this one later
import Article from '../components/Article';

export default class Newsview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { articles: [], refreshing: true };
        this.fetchNews = this.fetchNews.bind(this);
    }
    // Called after a component is mounted
    componentDidMount() {
        this.fetchNews();
    }

    fetchNews() {
        getNews()
            .then(articles => this.setState({ articles, refreshing: false }))
            .catch(() => this.setState({ refreshing: false }));
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchNews()
        );
    }

    render( )  {
        return (
            <View backgroundColor = {"#000000"}>
                <Image source={require('../../assets/Img/111.png')} style={styles.logo}/>

                <Text></Text>
                <Text style={styles.text}>НОВОСТИ</Text>
                <Text></Text>
                <Text></Text>

            <FlatList

                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
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
        width: '100%',
        height:'8%',
        top: '5%',
        right:'0%',
    },
    text:{

        paddingTop: StatusBar.currentHeight,
        position:"relative",
        right:'-37%',
        top:'3%',
        fontSize: 20,
        color:"#ffffff"
    }

});

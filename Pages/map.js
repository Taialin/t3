import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function map({navigation}) {

    const state = {
        region: {
            latitude: 59.947212,
            longitude: 30.336098,
            latitudeDelta: 0.09764120700999257,
            longitudeDelta: 0.1235961914638466,
        },
        address: ''
    };
    //
    // const onInteraction = (event) => {
    //     const {latitude, longitude, latitudeDelta, longitudeDelta, type} = event;
    //     console.log('Interaction', latitude, longitude, latitudeDelta, longitudeDelta, type);
    //     this.setState({region: {latitude, longitude, latitudeDelta, longitudeDelta}});
    // };
    //
    // const onGeocoding = (short, full) => {
    //     console.log('Geocoding response:', short, full);
    //     if (short) {
    //         this.setState({address: short.displayName});
    //     }
    // };


    // const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state.region;
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
            <MapView

                provider={PROVIDER_GOOGLE} // remove if not using Google Maps

                style={styles.map}
                region={{
                    latitude: 53.6966642383333,
                    longitude: 23.82995616,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.01,
                }}
            >
            </MapView>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
            flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#000000',
    },
    logo:{
        position:"absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '20%',
        top: '5%',

    },
    map: {
        position:"absolute",
        alignItems: 'center',
        width:'90%',
        height:'75%',
        top:'17%',
        right:'5%',

    },

});

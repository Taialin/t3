import React from 'react';
import {StyleSheet, View} from 'react-native';
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
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 53.741210,
                    longitude: 23.875396,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

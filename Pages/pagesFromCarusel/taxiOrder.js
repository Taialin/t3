import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {Image} from "react-native";
import { PermissionsAndroid } from 'react-native';

PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
        title: 'Location Access Permission',
        message: 'We would like to use your location',
        buttonPositive: 'Okay'
    }
);
const state = {
    region: {
        latitude: 59.947212,
        longitude: 30.336098,
        latitudeDelta: 0.09764120700999257,
        longitudeDelta: 0.1235961914638466,
    },
};
export class taxiOrder extends Component {

    static defaultProps = {

        overScrollMode: 'always',
        javaScriptEnabled: true,
        thirdPartyCookiesEnabled: true,
        scalesPageToFit: true,
        allowsFullscreenVideo: false,
        allowFileAccess: false,
        saveFormDataDisabled: false,
        cacheEnabled: true,
        androidHardwareAccelerationDisabled: false,
        androidLayerType: 'none',
        setSupportMultipleWindows: true,
        setBuiltInZoomControls: true,
        setDisplayZoomControls: false,
        nestedScrollEnabled: false,

    };

    render() {
        return (

        <WebView

                source={{ uri: 'https://taxi.yandex.by/grodno/tariff/' }}
                style={{ marginTop: 30 }}
                startInLoadingState={true}


            />

        );
    }
}
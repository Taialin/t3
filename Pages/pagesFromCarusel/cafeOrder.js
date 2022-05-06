import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {Image, ImageBackground, View} from "react-native";
import {styles} from "../components/styles";
import view from "react-native-web/dist/exports/View";
import {BackgroundImage} from "react-native";


export class cafeOrder extends Component {


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
                source={{ uri: 'https://carte.by/grodno/' }}
                style={{ marginTop: 100 }}
                startInLoadingState={true}
            />

    );
    }
}
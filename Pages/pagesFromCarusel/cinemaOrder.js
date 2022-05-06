import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {Image} from "react-native";

export class cinemaOrder extends Component {
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

                source={{ uri: 'http://megamag.by/' }}
                style={{ marginTop: 30 }}
                startInLoadingState={true}
            />

        );
    }
}
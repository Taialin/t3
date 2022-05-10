import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {Image, StyleSheet, View} from "react-native";


export class flowerOrder extends Component {
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
            <View style={[styles.container]}>
                <Image source={require('../../assets/Img/111.png')} style={[styles.logo]}/>
                <WebView
                    source={{uri: 'https://kvetkashop.by/?utm_source=google&utm_medium=cpc&utm_campaign=poisk&utm_term=%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%20%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2%20%D0%B3%D1%80%D0%BE%D0%B4%D0%BD%D0%BE&utm_content=92347264725_506843060873&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoMweCOk2pnP1YPnVvsAikhXZc4FoIj5XcaKDELt3Al-uJMvxTBlcthoCdqcQAvD_BwE'}}
                    style={{marginTop: 2, width: '100%', top: 38}}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: "80%",
        height: 55,
        top: '5%',
        left:'10%'
    },
})
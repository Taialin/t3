import React, {useState} from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    SafeAreaView,
    StatusBar,
    Text
} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import LogIn from '../LogIn'
import AppLoading from "expo-app-loading";


export default function DostoprimMain({navigation}) {
    const loadScene = () => {
        navigation.navigate('Place_category')
    };


    return (

        <View style={styles.container}>
            <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/a4884e044a5be759144a8efe1472a7541abd9a7fc8136e2ee716b10d6ae071d9/621e0c2d/Unk3_PMDtQLvbK6wAKTQwyDcEfZykhNj5DcIXPih_88cVpRDItjJBtlUQbKOkwtYoRK3r4gu7muPWyLXbTfOZg%3D%3D?uid=0&filename=fone.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.fone]}/>
            <Image source={require('../../assets/Img/dotGreen.png')} style={[styles.logo]}/>
            <Text style={styles.text}> Достопримечательности Гродно</Text>

            {/*<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true} >*/}
            {/*<View style={styles.row} >*/}


                    <TouchableOpacity onPress={loadScene} style={styles.lines}  >
                        <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/cbfd6263c0106b6867ecb7386e6b0b0947c666328c2bda2166832ffeef7be34d/621e1a8b/d0CVePxxrHjCfRKdz0vsTrS36nrijTa6ZHvGjkxgeclDw1a9eEsLQFl3y5-3o0qTQ8TxGzmYGEh_kC3Uv71FkQ%3D%3D?uid=0&filename=bolnici.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}   />
                    </TouchableOpacity>

          {/*     <TouchableOpacity onPress={loadScene} style={styles.proba} >
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/83a57d9db4571693598a82bdfe2f6d2c2f782b229157bf20443de992e9469377/621e1ad5/0Lml061oL1_-Qy8cmoqCydThn4TtsdQcgRLqfLZhiao6URnEXJCx0Chr8MHRpU6bRLWyCkaJWFjXjJm9QA8nDQ%3D%3D?uid=0&filename=galerei.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba} >
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/2213360f1a16ada06d2f07ea329e6277093424ed78fa8e0d17ec2df0f07bee06/621e1af4/oRrTi3BNJsAzW6Ce6O39-Eo--hr81jFOvS6r2MOcZYiOyU-2oIVYtRjmTkISY9qffu7RE4fBZhrWz1OczSWcag%3D%3D?uid=0&filename=hotels.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/2fa16696c3e9b15796624e196faae75600d0e512adf97a6f0af739d046c75812/621e1b11/7LfDWNQ_sj1d7JvWjHsKx5Ri1XyVyrdyVRbsPj1zxaZ_YG7HWJixXC8QHcrutwZknhzrvQyZ2HJbztGySB8nxg%3D%3D?uid=0&filename=cafe.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/05958a0dc634f7505d6d704a1949daa1dbd6cc17fb58c1568796ed49c8c10a4d/621e1b3a/o0ioM3fhuUD-M7Qdfv1WrxQGUdOSt8hNjVvXaOPe5zDB-hAPo3f7QkhCuUuS3YLzQmI4mHB6o4z1qDG0Jlu_-w%3D%3D?uid=0&filename=shops.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/fcd17307b8923d5bb50b5ac81a88ad135d6f2d66180acec247ed3f6c60367ee0/621e1b61/LUse3Oj29cT_Sqen40gZO2KRYZwucQV4pcnrcJB2NugolJj3w7RzibdHv5vVTs7UCx1Fie3jmH9tFupm1gVAAg%3D%3D?uid=0&filename=parki.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/f4652e0272f446008310e51673494a5910df5ca7f4253a3616a70f36e0093a39/621e1bb6/7ynwtTH4FijwP9WNSiij93l9cx7nmXNIKCdmBc4uCVdYh3eeERuFMLxGg_c91hnQJtCe3cs7Il1W0v0G8so0DQ%3D%3D?uid=0&filename=mus.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/c462560150294df4002507a0390e56f8e009093f4b5d09b509a6d706ee0bdf82/621e1bce/kzFEM70q0TnOtBt_4u2kEzZ2iQvcZmnJQZatzBemdfGoVsUmqIALuJMtJE4v8d9AI5AQqj3u3oc4UPO5BAFOng%3D%3D?uid=0&filename=policlinic.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/4d138902dd16c8cd4dbe43bad512e46a85ae8c7bdbe6885bb5b82367d1540b6a/621e1bf5/-rmzScjkQq-zkJQwSm3Qy4qDc2cHn6Q6ARq8VjRQxuui8HkTc-aM8A702dOum8Q4lA5ci1PjxruWfWhvnlOi4A%3D%3D?uid=0&filename=disap.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/3ce55e94f329f423ef3f6dc9b63b513046cc1cd3209152b70487f9c9de6f6942/621e1c19/JS5gIoSeAG4i-LeG-z77-bYeFQiul1s5LMbpfiPieeQxh_Yui1MAXd9_g4effyrqJhTC7WMr3S1z5cYDYd3g3Q%3D%3D?uid=0&filename=theatres.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.proba}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/9d12ee9cdc5690261fff416a835ba112420965a5b33761c1cceee343211abe12/621e1c37/jXld1CO38pmJ7fPtfdmhrs2aW87fBhbXWPLeqBr0OJ6vcjHMsZXmEiYPJbPH2D53I45QwxgPcBRlsCWGJwow0Q%3D%3D?uid=0&filename=temples.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.lines}/>
                </TouchableOpacity>*/}
            {/*</View>*/}
            {/*</ScrollView>*/}
        </View>

    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000000',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,

    },
    fone: {
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        top: '-0%'
    },
    logo: {
        width: '70%',
        height: '6%',
        top: '-5%',


    },



    scrollView: {
        position:'relative',
        backgroundColor: '#000000',
        top: '-3%',


    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        top: '-6%',
        fontFamily: 'Arsenal',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 43,
        letterSpacing: 0.09,
        color: '#FFFFFF'
    },
    row:{
        flex:1,
        justifyContent:'space-between',
        flexDirection: "column",
        flexWrap: "wrap",

    },
    lines:{
        width: '100%',
        height: '20%',
    },
    proba:{
        width: '100%',
        height: '100%',
        position:'absolute'




    },



})

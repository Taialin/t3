import React from 'react';
import {Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import InputTextReg from "./InputTextReg";
import {registrate} from "./service/CustomerService";


export default class Registration extends React.Component<Props> {

    changeName = (value) => {
        this.name = value;
    }

    changeSurname = (value) => {
        this.surname = value;
    }

    changePlace = (value) => {
        this.place = value;
    }

    changePhone = (value) => {
        this.phone = value;
    }

    changeEmail = (value) => {
        this.email = value;
    }

    loadScene() {
        // console.warn(this.name);
        // console.warn(this.surname);
        // console.warn(this.place);
        // console.warn(this.phone);
        // console.warn(this.email);
        let customer = {
            'name': this.name,
            'surname': this.surname,
            'telephone': this.phone,
            'geolocation': this.place
        }
        console.warn(customer);
        registrate(customer).then(() => {
            console.warn('finished');
            this.props.navigation.navigate('firstCaruselScreen')
        })
            .catch((e) => console.error(e));
    }

    render() {
        return (
            <ImageBackground
                source={{uri: 'https://downloader.disk.yandex.ru/preview/ef9d2088c8bf3d7596a8e562c7ce7408a06c747e14c1584b86d3921ad5c241d8/620262e6/71uJYeeJ2g2ZJtco5473qqPo0g6z5Y53XW6XyJ33MfUvF2i2ZHeV1FvO79NK12N6BvWwpS572QE2Cp9TzZ9jgQ%3D%3D?uid=0&filename=regestration.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}
                style={[styles.backGround]}>
                <View style={styles.container}>
                    <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                    <InputTextReg changeName={this.changeName}
                                  changeSurname={this.changeSurname}
                                  changePlace={this.changePlace}
                                  changePhone={this.changePhone}
                                  changeEmail={this.changeEmail}>
                        editable
                        maxLength={40}
                    </InputTextReg>
                    <TouchableOpacity title='TAP' onPress={() => this.loadScene()} style={styles.button}>
                        <Text style={styles.buttonText}>РЕГИСТРАЦИЯ</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,

    },
    backGround: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        position: 'absolute',
        width: '100%',
        height: '100%',

    },
    logo: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '20%',
        top: '10%',

    },
    button: {
        position: "absolute",
        alignItems: 'center',
        bottom: '12%'

    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: 'bruno',
        fontSize: 15,

    }

})

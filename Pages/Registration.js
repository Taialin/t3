import React from 'react';
import {AsyncStorage, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import InputTextReg from "./InputTextReg";
import {registrate} from "./service/CustomerService";

export default class Registration extends React.Component<Props> {

    constructor(props) {
        super(props);
        this.loadScene = this.loadScene.bind(this);
        this.state = {
            error: false
        }
    }

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

    renderError = () => {
        if (this.state.error === true) {
            return (
                <Text style={styles.error}>Пожалуйста заполните все поля</Text>
            );
        }
    }

    async loadScene() {
        let registrated = await AsyncStorage.getItem('registrated');
        if (registrated === 'true') {
            this.props.navigation.navigate('firstCaruselScreen');
        }
        if (this.name == null || this.surname == null || this.phone == null || this.place == null) {
            this.state.error = true;
            this.forceUpdate();
            return;
        }
        let customer = {
            'name': this.name,
            'surname': this.surname,
            'telephone': this.phone,
            'geolocation': this.place
        }
        try {
            let res = await registrate(customer);
            this.props.navigation.navigate('firstCaruselScreen');
            await AsyncStorage.setItem('registrated', 'true');
        } catch(e) {
            console.error(e);
        }
    }

    render() {
        return (

                <View style={styles.container}>
                    <Image source={require('../assets/Img/Fones/reg.jpg')} style={[styles.backGround]}/>
                    <Image source={require('../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                    <InputTextReg changeName={this.changeName}
                                  changeSurname={this.changeSurname}
                                  changePlace={this.changePlace}
                                  changePhone={this.changePhone}
                                  changeEmail={this.changeEmail} >
                        editable
                        maxLength={40}
                    </InputTextReg>
                    <TouchableOpacity title='TAP' onPress={() => this.loadScene()} style={styles.button}>
                        <Text style={styles.buttonText}>ВОЙТИ</Text>
                    </TouchableOpacity>
                    {this.renderError()}
                </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

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

    },
    error: {
        top:'5%',
        color: "white"
    }

})

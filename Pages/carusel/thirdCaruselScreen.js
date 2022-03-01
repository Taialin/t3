import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
//import style from  './style.css';


const fonts = () => Font.loadAsync({
    'bruno': require('../../android/app/src/main/assets/fonts/bruno.ttf')

});
export default function thirdCaruselScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('secondCaruselScreen')
    }
        const loadScene2 = () => {
            navigation.navigate('fourthCaruselScreen')
        }
    const loadSceneTaxi = () => {
        navigation.navigate('fourthCaruselScreen')
    }
    const loadSceneCinema = () => {
        navigation.navigate('')
    }
    const loadSceneFlowers = () => {
        navigation.navigate('')
    }
    const loadSceneCafe = () => {
        navigation.navigate('')
    }



    return (
        <ImageBackground source={{uri: 'https://downloader.disk.yandex.ru/preview/6205e96d765e840482709ea9abe95dd4da80abbbb688f14efcec0cc9210aaa96/62150699/uzEZc545f6Qc3Ur8bF5kqjgzZlWDKuGJfaS7l0yUVSZyfdBnAl_M57RyEGdXMJ1aS9nRbHUSoOC8E_qxkffJsA%3D%3D?uid=0&filename=add_serv.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={[styles.backGround]}>
            <View style={styles.container}>
                <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
                <Text style={styles.BigText}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</Text>

                <TouchableOpacity onPress={loadScene} style={styles.taxi}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/e4b14f85452f0f127924f7692b14bfab0870e459526193f5f306560492827159/62137ef6/D_26PsPOWwVGN_ClUDfnIUgFiyp8UDzSrjt-KjBWAyFf5Hw_d4XP7I5Vd0aWJeJA-YCceedK85_l7MAqzz3W7w%3D%3D?uid=0&filename=taxi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.taxi}   />
                    <Text style={styles.taxiT}>Заказ такси  {"\n"}</Text>
                    <Text style={styles.taxiST}>Такси на выброное место и время</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene}  style={styles.flowers}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/ad31af711621eaa57b305f1aebf567ebcea7af6d35eaae7938b5409488337fc5/62138a8d/azvB-TTlYwfjgVEwagX-OMrPmmp-zFKmlUil37RQLZcqMzmd6lndp5O9tyxUs_7NV226sbZ02r_GZ-uprwiq4w%3D%3D?uid=0&filename=flowers.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.flowers} />
                    <Text style={styles.FT}>Заказ цветов {"\n"}</Text>
                    <Text style={styles.FST}>Доставка цветов курером </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.cafe}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/bcd5cc490e8a4ea939e640430f256f76e422a3d0f055a5c7d94d5100c7d20a7a/62138ae8/DIESReJcMpnfKvKynTbHopQ6JTjYN-RL0-yF0AZFkTR25UAWh7efnfYrmGf66jDkXBxHVMTtxSZPh0SZGmwnEw%3D%3D?uid=0&filename=cafe.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}}  style={styles.flowers} />
                    <Text style={styles.CafT}>Заказ столика {"\n"}</Text>
                    <Text style={styles.CafST}>Заказ в выбранном кафе или ресторане столик </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.cinema}>
                    <Image source={{uri: 'https://downloader.disk.yandex.ru/preview/483421bc35f2c3daa8e65eb3bf61652fea423594a4c122c350b70cc6ff94cc92/62138abb/pDZctsovICQj-Wz4s4Rzd1dMOLoOXuAEFUO_n72StlOPdv-kxwjO_HiWxk9CGKwDX0V0DCnwslLWAZdVQTEdEA%3D%3D?uid=0&filename=cinema.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048'}} style={styles.flowers} />
                    <Text style={styles.CT}>Заказ билетов {"\n"}</Text>
                    <Text style={styles.CST}>Бронирование билетов в кинотетрах Гродно </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadScene} style={styles.buttonLeft}>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene} style={styles.buttonCenter}>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene2} style={styles.buttonRight}>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backGround: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'170%',
        left: '-20%',
        top: '0%'
    },
    logo: {
        flex:1,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: '53%',
        height: '20%',
        top: '10%',
        right:'-15%',

    },

    BigText: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right:'-10.5%',
        top: '24%',

        fontFamily: 'bruno',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 43,
        letterSpacing: 0.09,
        color: '#FFFFFF'

    },
    buttonLeft:{
        position: 'absolute',
        left: '-27%',
        top: '87%',

        borderStyle: "solid",
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 72,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: '#625A3E',
        transform: [{ rotate: "-90deg" }],
        borderRadius: 6,

    },
    buttonCenter:{
        position: 'absolute',
        width: '17%',
        height: '5%',
        left: '-15%',
        top: '89.6%',

        backgroundColor: '#625A3E',
        borderRadius: 6

    },

    buttonRight:{
        position: 'absolute',
        left: '7%',
        top: '87%',
        borderStyle: "solid",
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 72,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: '#625A3E',
        transform: [{ rotate: "90deg" }],
        borderRadius: 6,
        shadowColor:'black'
    },
    taxi:{
        flex:.2,
        position: 'absolute',
        width: '49%',
        height: '52%',
        left: '-23%',
        top: '20%',


    },
    taxiT:{
        flex:.1,
        position: 'absolute',
        width: '43%',
        height: '50%',
        left: '-16%',
        top: '27%',
        color: '#f6f6f6',
        fontSize:20,

    },
    taxiST:{
        flex:.1,
        position: 'absolute',
        width: '40%',
        height: '40%',
        left: '-16%',
        top: '40%',
        color: '#f6f6f6',
        fontSize:13,

    },
    flowers:{
        flex:.2,
        position: 'absolute',
        width: '49%',
        height: '52%',
        left: '-5%',
        top: '20%',
    },
    FT:{
        flex:.1,
        position: 'absolute',
        width: '50%',
        height: '55%',
        left: '0%',
        top: '23%',
        color: '#f6f6f6',
        fontSize:20,

    },
    FST:{
        flex:.1,
        position: 'absolute',
        width: '50%',
        height: '55%',
        left: '0%',
        top: '35%',
        color: '#f6f6f6',
        fontSize:14,

    },
    cinema:{
        flex:.2,
        position: 'absolute',
        width: '50%',
        height: '52%',
        left: '-5%',
        top: '50%',

    },
    CT:{
        flex:.1,
        position: 'absolute',
        width: '50%',
        height: '55%',
        left: '0%',
        top: '23%',
        color: '#f6f6f6',
        fontSize:20,

    },
    CST:{
        flex:.1,
        position: 'absolute',
        width: '50%',
        height: '55%',
        left: '0%',
        top: '35%',
        color: '#f6f6f6',
        fontSize:14,

    },
    cafe:{
        flex:.2,
        position: 'absolute',
        width: '50%',
        height: '52%',
        left: '-32%',
        top: '50%',

    },
    CafT:{
        flex:.1,
        position: 'absolute',
        width: '50%',
        height: '55%',
        left: '0%',
        top: '23%',
        color: '#f6f6f6',
        fontSize:20,

    },
    CafST:{
        flex:.1,
        position: 'absolute',
        width: '50%',
        height: '55%',
        left: '0%',
        top: '35%',
        color: '#f6f6f6',
        fontSize:14,

    },

});



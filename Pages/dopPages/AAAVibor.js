import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    SafeAreaView,
    TextInput, StatusBar
} from 'react-native';
import 'react-native-gesture-handler';




export default function AAAVibor({navigation}) {
    const loadScene1 = () => {
        navigation.navigate('CreatedRoute')
    }
    const loadScene2 = () => {
        navigation.navigate('AllTelephons')
    }
    const loadScene3 = () => {
        navigation.navigate('Afisha')
    }
    const loadScene4 = () => {
        navigation.navigate('Meroptiatia')
    }
    const loadScene5 = () => {
        navigation.navigate('NewsGR')
    }



    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Img/GRODNO.png')} style={[styles.logo]}/>
            <Text style={styles.noteStyle}> Доступные функции</Text>
            <TouchableOpacity onPress={loadScene1} style={styles.imagee}>
                <Image source={{url: "https://downloader.disk.yandex.ru/preview/9b739d4d38549a29c22abdab5a67236bb9ed1071e1c82457246f09a409eb438e/627ab0d5/O8RJc04RuhPi0xW8PR43gwZZ0C-Q-sunPloSfxlXS5HO81xPDM_sZzIjyi2rID_izU8Q9ycJhGwZrJ7GGs0rEg%3D%3D?uid=0&filename=N3vrtOWidNk.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048"}} style={styles.image} resizeMode="cover"/>
                 <Text style={styles.noteStyle}> Ваши маршруты </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={loadScene2} style={styles.imagee1}>
                <Image source={{url: "https://wl-adme.cf.tsp.li/resize/728x/jpg/b08/221/c63ec85c10a9b1c2ff00ccb952.jpg"}} style={styles.image1} resizeMode="cover"/>
                <Text style={styles.noteStyle}> Телефоны </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={loadScene3} style={styles.imagee2}>
                <Image source={{url: "https://abrakadabra.fun/uploads/posts/2022-01/1642280300_2-abrakadabra-fun-p-oboi-na-telefon-visokogo-kachestva-vertika-2.jpg"}} style={styles.image2} resizeMode="cover"/>
                <Text style={styles.noteStyle}> Афиша </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loadScene4} style={styles.imagee3}>
                <Image source={{url: "https://abrakadabra.fun/uploads/posts/2022-01/1642280300_2-abrakadabra-fun-p-oboi-na-telefon-visokogo-kachestva-vertika-2.jpg"}} style={styles.image3} resizeMode="cover"/>
                <Text style={styles.noteStyle}> Мероприятия </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loadScene5} style={styles.imagee4}>
                <Image source={{url: "https://abrakadabra.fun/uploads/posts/2022-01/1642280300_2-abrakadabra-fun-p-oboi-na-telefon-visokogo-kachestva-vertika-2.jpg"}} style={styles.image4} resizeMode="cover"/>
                <Text style={styles.noteStyle}> Новости Гродно </Text>
            </TouchableOpacity>

        </View>


    );


}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'#000000'
    },
    logo: {
        position: "absolute",
        width: '87%',
        height: '25%',
        top: '9%',
    },
    noteStyle: {
        position:'absolute',
        fontFamily: 'Arsenal',
        color: '#ffffff',
        fontSize: 20,
        top:'25%'

    },
    image:{
        position:'absolute',
        width: '100%',
        height: '15%',
    },
    imagee:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: "35%",
        left: '6%',

    },
    image1:{
        position:'absolute',
        width: '100%',
        height: '15%',
    },
    imagee1:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: "45%",
        left: '6%',

    },
    image2:{
        position:'absolute',
        width: '100%',
        height: '15%',
    },
    imagee2:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: '55%',
        left: '6%',

    },
    image3:{
        position:'absolute',
        width: '100%',
        height: '15%',
    },
    imagee3:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: '65%',
        left: '6%',

    },
    image4:{
        position:'absolute',
        width: '100%',
        height: '15%',
    },
    imagee4:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: '75%',
        left: '6%',

    },


};





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
                 <Text style={styles.noteStyle}> Ваши маршруты </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={loadScene2} style={styles.imagee1}>
                <Text style={styles.noteStyle}> Телефоны </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={loadScene3} style={styles.imagee2}>
                <Text style={styles.noteStyle}> Афиша </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loadScene4} style={styles.imagee3}>
                <Text style={styles.noteStyle}> Мероприятия </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={loadScene5} style={styles.imagee4}>
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
        height: '60%',
    },
    imagee:{
        position:'absolute',
        width: '90%',
        height: '14%',
        top: "35%",
        left: '6%',

    },

    imagee1:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: "45%",
        left: '6%',

    },

    imagee2:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: '55%',
        left: '6%',

    },

    imagee3:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: '65%',
        left: '6%',

    },

    imagee4:{
        position:'absolute',
        width: '90%',
        height: '15%',
        top: '75%',
        left: '6%',

    },


};





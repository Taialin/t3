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
    TextInput, StatusBar, ListView, ScrollView
} from 'react-native';
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import {useFonts} from "expo-font";



export default function AllTelephons() {

    return (

        <View style={styles.container}>
            <Text style={styles.noteStyle}>Справочные телефоны города</Text>
            <ScrollView style={styles.containe1r}>
                <Text style={styles.noteStyle1}>
            101 — Служба спасения{"\n"}
            102 — Милиция{"\n"}
            103 — Скорая медицинская помощь, экстренный вызов{"\n"}
            104 — Аварийная служба газовой сети{"\n"}
            105 — Справочная ж/д транспорта{"\n"}
            151 — Заказ ж/д билетов{"\n"}
            106 — Справочная воздушного транспорта{"\n"}
            109 — Справочная служба о номерах телефонов квартир и организаций{"\n"}
            114 — Справочная автовокзалов{"\n"}
            +375 17 327 29 22 – Министерство иностранных дел (визовые и другие вопросы){"\n"}
            118 — Общереспубликанская круглосуточная платная справочная служба{"\n"}
            153 — Справочная служба междугородных и международных кодов{"\n"}
            154 — Справочно-информационные услуги почты{"\n"}
            167 — Информационно-справочная служба бытовых услуг 169 — Справочная аптек{"\n"}
            115 — Единая диспетчерская служба ЖКХ{"\n"}
            185 — Общая справка{"\n"}
            188 — Автоинформатор «Точное время»{"\n"}
            191 — Автоинформатор «Киноафиша»{"\n"}
            192 — Автоинформатор «Посмеёмся»{"\n"}
            194 — Автоинформатор «Гороскоп»{"\n"}
            195 — Автоинформатор «Прогноз погоды»{"\n"}
            196 — Автоинформатор «Сказки»{"\n"}
            197 — Автоинформатор «Именины»{"\n"}
            0880 — Справочная служба оператора мобильной связи МТС{"\n"}
            150 — Справочная служба оператора мобильной связи Velcom{"\n"}
            909 — Справочная служба оператора мобильной связи life:)
                </Text>
            </ScrollView>
        </View>


    );


}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',


    },
    container1: {

        paddingBottom: StatusBar.currentHeight - 10,
        top:'10%',
        width: "80%"


    },
    noteStyle: {

        margin: 15,
        fontFamily: 'bruno',
        color: '#fcf9f9',
        fontSize: 20,
        top: 100
    },
    noteStyle1: {

        margin: 15,
        fontFamily: 'bruno',
        color: '#fcf9f9',
        fontSize: 15,
        top: 150
    },
    image: {
        width: 280,
        height: 180,
    },


};





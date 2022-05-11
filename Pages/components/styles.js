import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#000000'
    },
    backGround: {
        position:'absolute',
        width:'100%',
        height:'100%',

    },
    logo: {
        position: "absolute",
        width: '87%',
        height: '25%',
        top: '9%',
    },

    BigText: {
        position: 'absolute',
        top: '50%',
        left:"2%",
        fontFamily: 'futurisExtra',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 60,
        lineHeight: 64,
        color: '#FFFFFF',
    },
    VerhText: {
        position: 'absolute',
        top: '35%',
        right:"5%",
        fontFamily: 'PoiretOne',
        textTransform:'uppercase',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '800',
    /*    lineHeight: 18,*/
        color: '#e7e7e7',
        textAlign:'right',
        backgroundColor:'rgba(0,0,0,0.27)',
        letterSpacing:-0.4
    },
    NizText: {
        position: 'absolute',
        bottom: '29%',
        left:"2%",
        fontFamily: 'PoiretOne',
        textTransform:'uppercase',
        fontStyle: 'normal',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 18,
        color: '#FFFFFF',
        backgroundColor:'rgba(0,0,0,0.27)',
        textAlign:'right',
        letterSpacing:-0.4
    },
    buttonLeft:{
        position: 'absolute',
        left:"4%",
        top:"91%"

    },
    buttonCenter:{
        position: 'absolute',
        top:"91.7%"

    },
    buttonRight:{
        position: 'absolute',
        right:"4%",
        top:"91%"

    }

});

export {styles}

import {StatusBar, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'#000000'
    },
    backGround: {
        position:'absolute',
        width:'100%',
        height:'100%',
        top: '5%'
    },
    logo: {
        position: "absolute",
        width: '87%',
        height: '25%',
        top: '9%',
    },

    BigText: {
        position: 'absolute',
        top: '55%',
        left:"2%",
        fontFamily: 'futurisExtra',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 65,
        lineHeight: 60,
        color: '#FFFFFF',
    },
    VerhText: {
        position: 'absolute',
        top: '48%',
        right:"8%",
        fontFamily: 'Chulok',
       /* textTransform:'uppercase',*/
        fontStyle: 'normal',
        fontSize: 23,
        fontWeight: '800',
    /*    lineHeight: 18,*/
        color: '#b2b2b2',
        textAlign:'right',
        letterSpacing:-0.4
    },
    NizText: {
        position: 'absolute',
        bottom: '30%',
        left:"2%",
        fontFamily: 'Chulok',
       /* textTransform:'uppercase',*/
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        color: '#FFFFFF',
        textAlign:'right',
        letterSpacing:-0.4
    },
    buttonLeft:{
        position: 'absolute',
        left:"4%",
        top:"95%"

    },
    buttonCenter:{
        position: 'absolute',
        top:"95.7%"

    },
    buttonRight:{
        position: 'absolute',
        right:"4%",
        top:"95%"

    }

});

export {styles}

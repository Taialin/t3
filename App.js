
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';




export default function App() {
  return (

    <View style={styles.container}>

        <ImageBackground source={require('./cEARhIEOpd4.jpg')} style={{ alignItems: 'center', justifyContent: 'center',width: '130%', height: '112%', left: '-30%', top: '0%'}}>
            <Image source={require('./GRODNO.png')}style={{ alignItems: 'center', justifyContent: 'center', width: '70%', height: '20%', top:'-27%',left: '12 %' }} />
            <Text style={{ alignItems: 'center'}} >"Это начало" </Text>
        </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

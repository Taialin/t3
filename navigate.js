import * as React from 'react';
import LogIn from './Pages/LogIn';
import Menu from './Pages/Menu';
import firstCaruselScreen from './Pages/carusel/firstCaruselScreen';
import newsview from './Pages/newsPage/newsview';
import secondCaruselScreen from './Pages/carusel/secondCaruselScreen';
import WeatherPage from './Pages/WeatherPage'
import thirdCaruselScreen from './Pages/carusel/thirdCaruselScreen';
import fourthCaruselScreen from './Pages/carusel/fourthCaruselScreen';
import tripMaker from './Pages/tripMaker';
import fifthCaruselScreen from './Pages/carusel/fifthCaruselScreen';
import sixthCaruselScreen from './Pages/carusel/sixthCaruselScreen';
import seventhCaruselScreen from './Pages/carusel/seventhCaruselScreen';
import Place_category from './Pages/AllPlacesCat.js/Place_category';
import DostoprimMain from "./Pages/AllPlacesCat.js/DostoprimMain";
import map from './Pages/map';
import Registration from './Pages/Registration';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {

    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
                hideStatusBar: true,

        }}>
            <Stack.Screen
                name="Menu"
                component={Menu}
            />
            <Stack.Screen
                name="LogIn"
                component={LogIn}
            />
            <Stack.Screen
                name="Registration"
                component={Registration}
            />
            <Stack.Screen
                name="firstCaruselScreen"
                component={firstCaruselScreen}
            />
            <Stack.Screen
                name="newsview"
                component={newsview}
            />
            <Stack.Screen
                name="secondCaruselScreen"
                component={secondCaruselScreen}
            />
            <Stack.Screen
                name="WeatherPage"
                component={WeatherPage}
            />
            <Stack.Screen
                name="thirdCaruselScreen"
                component={thirdCaruselScreen}
            />
            <Stack.Screen
                name="fourthCaruselScreen"
                component={fourthCaruselScreen}
            />
            <Stack.Screen
                name="tripMaker"
                component={tripMaker}
            />
            <Stack.Screen
                name="fifthCaruselScreen"
                component={fifthCaruselScreen}
            />
            <Stack.Screen
                name="sixthCaruselScreen"
                component={sixthCaruselScreen}
            />
            <Stack.Screen
                name="map"
                component={map}
            />
            <Stack.Screen
                name="seventhCaruselScreen"
                component={seventhCaruselScreen}
            />
            <Stack.Screen
                name="DostoprimMain"
                component={DostoprimMain}
            />
            <Stack.Screen
                name="Place_category"
                component={Place_category}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

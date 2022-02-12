import * as React from 'react';
import LogIn from './Pages/LogIn';
import Menu from './Pages/Menu';
import firstCaruselScreen from './Pages/carusel/firstCaruselScreen';
import secondCaruselScreen from './Pages/carusel/secondCaruselScreen';
import thirdCaruselScreen from './Pages/carusel/thirdCaruselScreen';
import fourthCaruselScreen from './Pages/carusel/fourthCaruselScreen';
import fifthCaruselScreen from './Pages/carusel/fifthCaruselScreen';
import sixthCaruselScreen from './Pages/carusel/sixthCaruselScreen';
import seventhCaruselScreen from './Pages/carusel/seventhCaruselScreen';
import map from './Pages/map';
import Registration from './Pages/Registration';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {

    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerShown: false
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
                name="secondCaruselScreen"
                component={secondCaruselScreen}
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
        </Stack.Navigator>
    </NavigationContainer>
}

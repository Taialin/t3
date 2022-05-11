import * as React from 'react';
import LogIn from './Pages/LogIn';
import Menu from './Pages/Menu';
import firstCaruselScreen from './Pages/carusel/firstCaruselScreen';
import newsview from './Pages/newsPage/newsview';
import secondCaruselScreen from './Pages/carusel/secondCaruselScreen';
import WeatherPage from './Pages/WeatherPage'
import thirdCaruselScreen from './Pages/carusel/thirdCaruselScreen';
import {flowerOrder} from './Pages/pagesFromCarusel/flowerOrder';
import {taxiOrder} from './Pages/pagesFromCarusel/taxiOrder';
import {cinemaOrder} from './Pages/pagesFromCarusel/cinemaOrder';
import {cafeOrder} from './Pages/pagesFromCarusel/cafeOrder';
import fourthCaruselScreen from './Pages/carusel/fourthCaruselScreen';
import fifthCaruselScreen from './Pages/carusel/fifthCaruselScreen';
import sixthCaruselScreen from './Pages/carusel/sixthCaruselScreen';
import seventhCaruselScreen from './Pages/carusel/seventhCaruselScreen';
import Place_category from './Pages/AllPlacesCat.js/Place_category';
import DostoprimMain from "./Pages/AllPlacesCat.js/DostoprimMain";
import map from './Pages/map';
import Registration from './Pages/Registration';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MaketForListsOfNamePlaces from "./Pages/AllPlacesCat.js/MaketForListsOfNamePlaces";
import SelectedPlace from "./Pages/components/SelectedPlace";
import MaketOfPlace from "./Pages/AllPlacesCat.js/MaketOfPlace";
import CreatedRoute from "./Pages/dopPages/CreatedRoute";
import AAAVibor from "./Pages/dopPages/AAAVibor"
import AllTelephons from "./Pages/dopPages/AllTelephons"
import Afisha from "./Pages/dopPages/Afisha"
import Meroptiatia from "./Pages/dopPages/Meroptiatia"
import NewsGR from "./Pages/dopPages/NewsGR";
import MadeTrip from "./Pages/AllPlacesCat.js/MadeTrip";

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
                name="flowerOrder"
                component={flowerOrder}
            />
            <Stack.Screen
                name="taxiOrder"
                component={taxiOrder}
            />
            <Stack.Screen
                name="cinemaOrder"
                component={cinemaOrder}
            />
            <Stack.Screen
                name="cafeOrder"
                component={cafeOrder}
            />
            <Stack.Screen
                name="fourthCaruselScreen"
                component={fourthCaruselScreen}
            />
            <Stack.Screen
                name="AAAVibor"
                component={AAAVibor}
            />
            <Stack.Screen
                name="AllTelephons"
                component={AllTelephons}
            />
            <Stack.Screen
                name="Afisha"
                component={Afisha}
            />
            <Stack.Screen
                name="Meroptiatia"
                component={Meroptiatia}
            />
            <Stack.Screen
                name="NewsGR"
                component={NewsGR}
            />
            <Stack.Screen
                name="fifthCaruselScreen"
                component={fifthCaruselScreen}
            />
            <Stack.Screen
                name="MadeTrip"
                component={MadeTrip}
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
            <Stack.Screen
                name="MaketForListsOfNamePlaces"
                component={MaketForListsOfNamePlaces}
            />
            <Stack.Screen
                name="MaketOfPlace"
                component={MaketOfPlace}
            />
            <Stack.Screen
                name="SelectedPlace"
                component={SelectedPlace}
            />
            <Stack.Screen
                name="CreatedRoute"
                component={CreatedRoute}
            />
        </Stack.Navigator>
    </NavigationContainer>
}


module.exports = Navigate;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import { API_KEY } from '../utils/WeatherAPIkey';

const cord ={  latitude: 59.947212,
    longitude: 30.336098}
export default class WeatherPage extends React.Component {
    state = {
        isLoading: false,
        temperature: 22,
        weatherCondition: 'Clear',
        error: null
    }


    componentDidMount() {
       this.fetchWeather(cord.latitude, cord.longitude)
    }

    fetchWeather(lat = 25, lon = 25) {
        console.error(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`);
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(resp => resp.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    isLoading: false
                })
            });
    }

    render() {
        const { temperature, weatherCondition, isLoading } = this.state;
        return (
            <View style={styles.container}>
                { isLoading ? <Text>Fetching Weather Data</Text> :
                    <Weather weather={ weatherCondition } temperature={ temperature } /> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
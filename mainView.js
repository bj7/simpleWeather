/*
@flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import {styles} from './styles';
import {key} from './secretKey';
import CurrentWeather from './currentWeatherDisplay';

export default class MainView extends Component {
    constructor() {
        super();
    }
    state = {
        initialPos: {},
        lastPos: {},
        currentWeather: {}
    };

    watchId: ?number = null;

    /**
     * Responsible for initial location pull and weather data pull.
     * Saves states of gathered data.
     */
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("POSITION RETRIEVED: ", position);
                var initialPost = position;
                this.setState({initialPos: initialPost});
                let component = this;
                // get the current weather and update the state
                this.getWeather(position).then((res) => {
                    // console.log("GATHERED WEATHER DATA: ", Object.keys(res.currently).length, res.currently.temperature);
                    component.setState({
                        currentWeather: res
                    });
                })
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchId = navigator.geolocation.watchPosition((position) => {
            var lastPosition = position;
            this.setState({lastPos: lastPosition});
        });
    }

    /**
     * Get's the weather using the coordinates passed in, or if no coordinates
     * were passed, then attempts to use the last known location.
     * @type {Object}   The coordinate data.
     */
    getWeather(position: Object) {
        // if no position passed in, use the last known position
        if (position === undefined || position === null || Object.keys(position).length === 0) {
            position = this.state.lastPos;
        }
        let longitude = position.coords.longitude;
        let latitude  = position.coords.latitude;
        let url = "https://api.darksky.net/forecast/" + key + "/" + latitude + "," + longitude;
        // console.log(url);
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((status) => {
            return status.json();
        }).catch((error) => {

        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        return (
            <View style={styles.container}>
                <CurrentWeather currently={this.state.currentWeather.currently}/>
                {/* <Text style={styles.welcome}>
                    {JSON.stringify(this.state.currentWeather.currently)}
                </Text> */}
            </View>
        )
    }
}

AppRegistry.registerComponent('MainView', () => MainView);

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

export default class CurrentWeather extends Component {
    state = {
        currently: {}
    }
    constructor(props: Object) {
        super(props);
        this.state = {
            currently: this.props.currently || {}
        };
    }

    componentWillReceiveProps(nextProps: Object) {
        if (nextProps.hasOwnProperty('currently') && this.props.currently != nextProps.currently) {
            this.setState({
                currently: nextProps.currently
            });
        }
    }

    render() {
        for (var variable in this.state.currently) {
            if (this.state.currently.hasOwnProperty(variable)) {
                console.log(variable, this.state.currently[variable]);
            }
        }
        let temp = "--";
        if (this.state.currently.hasOwnProperty('temperature')) {
            temp = this.state.currently.temperature;
        }
        return (
            <View style={styles.currentWeatherBanner}>
                <Text style={styles.currentWeatherBannerTemperature}>
                    {temp}
                </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('CurrentWeather', () => CurrentWeather);

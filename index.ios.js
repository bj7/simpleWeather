/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import {styles} from './styles';
import MainView from './mainView';

export default class simpleWeather extends Component {
    render() {
        return (
            <MainView/>
        );
    }
}

AppRegistry.registerComponent('simpleWeather', () => simpleWeather);

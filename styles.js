import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    currentWeatherBanner: {
        top: 15,
        margin: 0,
        flex: 1,
        backgroundColor: 'powderblue'
    },
    currentWeatherBannerTemperature: {
        textAlign: 'left',
        fontSize: 90,
    }
});

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Authentication from './authentication'
import Screen from './Screen'
import PhotoDetail from './photoDetails'
export default createStackNavigator(
    {
        Login: {
            screen: Authentication
        },
        MainMenu: {
            screen:  ({ navigation }) => <Screen screenProps={{ rootNavigation: navigation }} />
        },
        Detail:{
            screen:PhotoDetail
        }

    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Authentication from './authentication'
import Screen from './Screen'

export default createStackNavigator(
    {
        Login: {
            screen: Authentication
        },
        MainMenu: {
            screen: Screen
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);
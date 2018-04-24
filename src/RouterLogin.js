import React, {Component} from 'react';
import LoginScreen from './Component/LoginScreen.js';
import HomeScreen from './Component/HomeScreen.js';
import { StackNavigator } from 'react-navigation';

 const RouterLogin = StackNavigator({
    Login: {
      screen: LoginScreen,
    },
    Home:{
        screen:HomeScreen,
    }},
    {
        initialRouteName: 'Home',
      }
    );

  export default RouterLogin;
import React, {Component} from 'react';
import HomeScreen from './Screen/HomeScreen.js';
import { StackNavigator } from 'react-navigation';

 const RouterHome = StackNavigator({
    Home:{
        screen:HomeScreen,
    }},
    {
        initialRouteName: 'Home',
      }
    );

  export default RouterHome;
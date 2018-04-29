import React, {Component} from 'react';
import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Component/LoginScreen.js';
import HomeScreen from './Component/HomeScreen.js';
import AuthLoadingScreen from './Component/AuthLoadingScreen.js';
import SelfProfileScreen from './Component/SelfProfileScreen.js';
import RegisterOneStepScreen from './Component/RegisterOneStepScreen.js';
import { StackNavigator,SwitchNavigator,TabNavigator,TabBarBottom,addNavigationHelpers } from 'react-navigation';



const HomeStack = StackNavigator({ Home: HomeScreen });

const SelfProfileStack = StackNavigator({
  SelfProfile: { screen: SelfProfileScreen },
});




const AppStack=TabNavigator(
  {
    Home: { screen: HomeStack },
    SelfProfile: { screen: SelfProfileStack },
  },{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'SelfProfile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e84a5f',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);

const AuthStack = StackNavigator({ Login: LoginScreen,Register:RegisterOneStepScreen});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);



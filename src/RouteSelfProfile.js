import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator,SwitchNavigator,TabNavigator,TabBarBottom,TabBarTop  } from 'react-navigation';
import PlacesTogoScreen from './Component/PlacesTogoScreen';
import PlacesDidnotGoScreen from './Component/PlacesDidnotGoScreen.js';
import HomeScreen from './Component/HomeScreen.js';
import AuthLoadingScreen from './Component/AuthLoadingScreen.js';
import SelfProfileEditScreen from './Component/SelfProfileEditScreen.js'
import LoginScreen from './Component/LoginScreen.js';

//const HomeStack = StackNavigator({ Home: HomeScreen });

export default  AppStack=TabNavigator(
  {
    PlacesDidnotGo: { screen: PlacesDidnotGoScreen },
    PlacesTogo: { screen: PlacesTogoScreen },
  
  },
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === 'PlacesDidnotGo') {
    //       iconName = `ios-home${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'PlacesToGo') {
    //       iconName = `ios-person${focused ? '' : '-outline'}`;
    //     }

    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Ionicons name={iconName} size={30} color={tintColor}  />;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#ffc5e1',
      style: {
        backgroundColor: '#e84a5f',
      },
    },
   
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: true,
  }
);




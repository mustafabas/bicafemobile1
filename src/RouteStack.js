import React, {Component} from 'react';
import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './Screen/LoginScreen.js';
import HomeScreen from './Screen/HomeScreen.js';
import AuthLoadingScreen from './Screen/AuthLoadingScreen.js';
import SelfProfileScreen from './Screen/SelfProfileScreen.js';
import RegisterOneStepScreen from './Screen/RegisterOneStepScreen.js';
import { StackNavigator,SwitchNavigator,TabNavigator,TabBarBottom,addNavigationHelpers } from 'react-navigation';
import SettingsScreen from './Screen/SettingsScreen';
import SelfProfileEditProfileScreen from './Screen/SelfProfileEditProfileScreen';
import CompanyCreateProfileScreen from './Screen/CompanyCreateProfileScreen';


const HomeStack = StackNavigator({ Home: HomeScreen });

const SelfProfileStack = StackNavigator({
  SelfProfile: { screen: SelfProfileScreen },
  Settings: {screen:SettingsScreen},
  SelfProfileEditProfile: {screen: SelfProfileEditProfileScreen},
  CompanyCreateProfile: {screen: CompanyCreateProfileScreen},
  
});


// const SelfProfileEdiStack = StackNavigator({
//   SelfProfileEdit: {screen:SelfProfileEditScreen},
//   SelfProfileEditProfile: {screen: SelfProfileEditProfileScreen},
// });



 AppStack=TabNavigator(
  {
    Home: { screen: HomeStack },
    SelfProfile: { screen: SelfProfileStack },
  },{
    navigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
      
        if (routeName === 'Home') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        } else if (routeName === 'SelfProfile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {

      showLabel:false,

      activeTintColor: '#2a363b',
      inactiveTintColor: '#ccc',
      style: {
        backgroundColor: '#fff',
   
      }
    }
,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    lazy:true
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
    initialRouteName: 'App',
  }
);


import React, {Component} from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator,SwitchNavigator,TabNavigator,TabBarBottom,TabBarTop  } from 'react-navigation';
import PlacesTogoScreen from './Screen/PlacesTogoScreen';
import PlacesDidnotGoScreen from './Screen/PlacesDidnotGoScreen.js';
import SelfProfileAboutScreen from './Screen/SelfProfileAboutScreen.js';



//const HomeStack = StackNavigator({ Home: HomeScreen });

export default  AppStack1=TabNavigator(
  {
    SelfProfileAbout:SelfProfileAboutScreen,
    PlacesDidnotGo: { screen: PlacesDidnotGoScreen },
    PlacesTogo: { screen: PlacesTogoScreen },
    
  
  },
  {
     navigationOptions: ({ navigation }) => ({
       tabBarIcon: ({ focused, tintColor }) => {
         const { routeName } = navigation.state;
         let iconName;
         if (routeName === 'PlacesDidnotGo') {
         iconName = `ios-home${focused ? '' : '-outline'}`;
         } else if (routeName === 'PlacesTogo') {
           iconName = `ios-person${focused ? '' : '-outline'}`;
         }

         // You can return any component that you like here! We usually use an
         // icon component from react-native-vector-icons
         return <Ionicons name={iconName} size={20} color={tintColor}  />;
       },
       tabBarLabel:()=>{
        const { routeName } = navigation.state;
        if(routeName=='PlacesDidnotGo')
        {
          return <Text style={{fontFamily:'OpenSans-SemiBold',color:'#000'}}>Katıldığı Yemekler</Text>;
        }
        else if (routeName=='PlacesTogo')
        {
          return <Text style={{fontFamily:'OpenSans-SemiBold',color:'#000'}}>Paylaştığı Yemekler</Text>;
        }
        else if(routeName=='SelfProfileAbout'){
          return <Text style={{fontFamily:'OpenSans-SemiBold',color:'#000'}}>Hakkında</Text>
        }
       }
    }),

    
    tabBarOptions: {
      activeTintColor: '#355c7d',
      inactiveTintColor: '#ccc',
      style: {
        backgroundColor: '#fff',
   
      }, 
      labelStyle: {
   
        fontWeight: 'bold',
        color: '#000',
        // height: (deviceHeight * 4) / 67,
       
        fontFamily: 'Open-Sans',
        // padding: 6,
      

    },
    indicatorStyle: {
      backgroundColor: '#f67280',
  }
       },
   
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: true,
  }
);




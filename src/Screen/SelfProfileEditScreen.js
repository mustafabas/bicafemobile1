import React, { Component } from 'react';
import { View,Text } from 'react-native';
import RouteSelfProfile from '../RouteSelfProfile';
import SelfProfileScreen from './SelfProfileScreen';


export default class SelfProfileEditScreen extends Component {


    static navigationOptions = ({ navigation}) => {

        const { params = {} } = navigation.state;
        
        return {
          headerTitle: 'Settings',
            headerTitleStyle: {
                color: "#fff",
                fontFamily: 'Roboto',
              fontFamily: 'MuseoSansRounded-300',
              justifyContent: 'space-between',    
               textAlign: 'center'
              
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
            headerStyle: {
                backgroundColor: '#e84a5f', borderWidth: 0,
          },
            
        };

    };
    render() {
        return (
            <View>
                <Text> yeni bir sayfa </Text>
            </View>
        )
    };
}
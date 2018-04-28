import React, { Component }  from 'react';
import {View,ScrollView,Alert,AsyncStorage} from 'react-native';
import {Button,Thumbnail} from 'native-base';
import {Icon} from 'native-base';
import ShareListItem from './ShareListItem';


import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component{

static navigationOptions = ({ navigation}) => {
        const { params = {} } = navigation.state;

        _signOutAsync = async () => {
            await AsyncStorage.clear();
            navigation.navigate('Auth');
          };
          
        return {
          headerTitle: 'SHARE FOOD',
          headerLeft: null,
          headerTitleStyle:{
              color:"#fff",
              fontFamily: 'Raleway',
              justifyContent: 'space-between',    
               textAlign: 'center'
              
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
          headerStyle:{
          backgroundColor: '#e84a5f', borderWidth: 1, borderBottomColor: '#fff'
          },
            headerRight:<Button onPress={this._signOutAsync} transparent><Ionicons style={{color:'#fff'}} name='md-log-out' size={25}/></Button>
        };
    };
    

    render()
    {
        return(
            <View style={{backgroundColor:'#fff',flex: 1}}>
            <ScrollView style={{flex:1,marginTop:10}} >
                <ShareListItem/>   
                <ShareListItem/>  
                <ShareListItem/>  
                 
            </ScrollView>
            </View>
        );

    }

}
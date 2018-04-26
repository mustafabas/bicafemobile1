import React, { Component }  from 'react';
import {View,ScrollView} from 'react-native';
import {Button,Thumbnail} from 'native-base';
import {Icon} from 'native-base';
import ShareListItem from './ShareListItem';



export default class HomeScreen extends Component{

static navigationOptions = ({ navigation}) => {
        const { params = {} } = navigation.state;
        return {
          headerTitle: 'SHARE FOOD',
          headerTitleStyle:{
              color:"#fff",
              fontFamily:'Roboto',
              fontFamily: 'MuseoSansRounded-300',
              justifyContent: 'space-between',    
               textAlign: 'center'
              
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
          headerStyle:{
          backgroundColor: '#e84a5f', borderWidth: 1, borderBottomColor: '#333'
          },
            headerRight:<Button transparent></Button>
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
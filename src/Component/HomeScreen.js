import React, { Component }  from 'react';
import {View} from 'react-native';
import {Button,Thumbnail} from 'native-base';
import {Icon} from 'native-base';
import ShareListItem from './ShareListItem';



export default class HomeScreen extends Component{

static navigationOptions = ({ navigation}) => {
        const { params = {} } = navigation.state;
        return {
          headerTitle: 'Share Food',
          headerTitleStyle:{
              color:"#fff",
              fontFamily:'Roboto'
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
          headerStyle:{
          backgroundColor: '#B21108', borderWidth: 1, borderBottomColor: 'white'
          },
            headerRight:<Button transparent></Button>
        };
    };
    render()
    {
        return(
                <ShareListItem/>   
        );

    }
}
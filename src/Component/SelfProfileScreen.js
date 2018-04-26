import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Button,Icon} from "native-base";
import { human } from 'react-native-typography'

export default class SelfProfileScreen extends Component{

    static navigationOptions = ({ navigation}) => {
        const { params = {} } = navigation.state;
        return {
          headerTitle: 'Profilim',
          headerTitleStyle:{
              color:"#fff",
              fontFamily:'Roboto',
              fontFamily: 'MuseoSansRounded-300',
              justifyContent: 'space-between',    
               textAlign: 'center'
              
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
          headerStyle:{
          backgroundColor: '#e84a5f', borderWidth: 1, borderBottomColor: 'white'
          },
            headerRight:<Button transparent><Icon name="settings" style={{color:'#fff'}}/></Button>
        };
    };

    render(){
        return(
            <View>
            <Text style={[human.largeTitle, styles.txtRoboto]}>Hello Human!</Text>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    txtRoboto:{
        fontFamily:'Roboto',
        color:'#e1e1e1'
    }
}

);
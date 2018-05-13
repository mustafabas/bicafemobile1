import React, { Component }  from 'react';
import {NavigationActions} from 'react-navigation';
import {View,ScrollView,Alert,AsyncStorage,Text,TextInput,StyleSheet} from 'react-native';
import {Button,Thumbnail,Input} from 'native-base';

import ShareListItem from '.././Component/ShareListItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeScreen extends Component{

static navigationOptions = ({ navigation}) => {
        const { params = {} } = navigation.state;

        _signOutAsync = async () => {
            await AsyncStorage.clear();
            navigation.navigate('Auth');
          };
          _goToTab=()=>{
            const navigationAction = NavigationActions.navigate({
                routeName: "AppStack1", // <==== this is parent Profile tabNavigator
                action: NavigationActions.navigate({
                  routeName: "PlacesTogo", // <===== this is default child Screen for Profile tabNavigator
                  params: { name: "JADE" }
                })
              });
         navigation.dispatch(navigationAction);

          }
        return {
          headerTitle: 'Sharefood',
          headerLeft:<Button style={{marginLeft:10}} onPress={this._goToTab} transparent><Ionicons style={{color:'#355c7d'}} name='md-add-circle' size={25}/></Button> ,
          headerTitleStyle:{
              color:"#355c7d",
              fontFamily: 'GothicA1-Bold',
              width:'90%',
              textAlign:'center'
              
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
          headerStyle:{
          backgroundColor: '#fff', borderWidth: 1, borderBottomColor: '#f67280'
          },
          headerRightStyle:{
              marginRight:5,
          },
            headerRight:<Button style={{marginRight:10}} onPress={this._signOutAsync} transparent><Ionicons style={{color:'#355c7d'}} name='ios-settings' size={25}/></Button>
        };
    };
    
    render()
    {
        return(
    
            <View style={{backgroundColor:'#fff',flex: 1}}>
            <TextInput underlineColorAndroid='transparent' placeHolderStyle={{color:'#333',fontSize:12}} placeholder='Şehir veya ilçe..' style={styles.searchBox} />
           
            <ScrollView style={{flex:1,marginTop:5}} >
                <ShareListItem/>   
                <ShareListItem/>  
                <ShareListItem/>  
                 
            </ScrollView>
            </View>
        
        );

    }

}

const styles=StyleSheet.create({
    searchBox:{
        backgroundColor:'#E8E8E8',
        borderRadius:7,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height:30,
        fontSize:12,
        marginTop:10,
        paddingBottom:5,
        paddingLeft:7,
        marginLeft:5,marginRight:5,
        textAlign:'center',
        color:"#000",
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 15, width: 15 },
  
    }

});
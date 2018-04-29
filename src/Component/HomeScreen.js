import React, { Component }  from 'react';
import {View,ScrollView,Alert,AsyncStorage,Text,TextInput,StyleSheet} from 'react-native';
import {Button,Thumbnail,Input} from 'native-base';

import ShareListItem from './ShareListItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeScreen extends Component{

static navigationOptions = ({ navigation}) => {
        const { params = {} } = navigation.state;

        _signOutAsync = async () => {
            await AsyncStorage.clear();
            navigation.navigate('Auth');
          };
          
        return {
          headerTitle: 'Sharefood',
          headerLeft:<Button style={{marginLeft:10}} onPress={this._signOutAsync} transparent><Ionicons style={{color:'#fff'}} name='md-add-circle' size={25}/></Button> ,
          headerTitleStyle:{
              color:"#fff",
              fontFamily: 'GothicA1-Bold',
              width:'90%',
              textAlign:'center'
              
          },
          //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
          headerStyle:{
          backgroundColor: '#2a363b', borderWidth: 2, borderBottomColor: '#3eaca8'
          },
          headerRightStyle:{
              marginRight:5,
          },
            headerRight:<Button style={{marginRight:10}} onPress={this._signOutAsync} transparent><Ionicons style={{color:'#fff'}} name='ios-settings' size={25}/></Button>
        };
    };
    

    render()
    {
        return(
            <View style={{backgroundColor:'#fff',flex: 1}}>
            <TextInput underlineColorAndroid='transparent' placeHolderStyle={{color:'#333',fontSize:12}} placeholder='Şehir veya ilçe..' style={styles.searchBox} />
            <Text style={{marginLeft:10,color:'#333',marginTop:5,fontSize:13, fontFamily:'GothicA1-Bold'}}>En Yakındakiler<Icon style={{marginTop:10}} name='angle-down' size={20}/></Text>
            <View style={{borderBottomColor:'#c4c4c4',borderStyle:'solid',borderBottomWidth:1,marginRight:5,marginLeft:5}}></View>
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
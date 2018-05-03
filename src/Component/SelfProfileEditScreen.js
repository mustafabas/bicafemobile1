import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Button ,Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from 'react-navigation';
import RouteSelfProfile from '../RouteSelfProfile';
import SelfProfileScreen from './SelfProfileScreen';
import RouteStack from '../RouteStack'

export default class SelfProfileEditScreen extends Component {
    

    static navigationOptions = ({ navigation }) => {

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
        const navigation = this.props.navigation;
        return (
           
            <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>

                <Text style={{ fontSize: 20, marginTop: 10, textAlign: 'center', fontWeight: 'bold',  }}  >
                    Hesap
                    </Text>
                {/* <View style={{borderBottomColor:'#c4c4c4',borderStyle:'solid',borderBottomWidth:1,marginRight:5,marginLeft:5,marginTop:2}}></View> */}

                <View style={{backgroundColor:'#FFFFFF',marginRight:10,marginLeft:10,borderRadius:4,marginTop:5}}>
                    
                    <TouchableOpacity style={{ flexDirection:'row', marginTop: 10, marginLeft: 5 ,marginBottom:10}} >
                        <Text style={{flex:0.9,fontSize: 15}}>
                            Bildirimleri Ayarla
                        </Text>
                     
                        <Ionicons name='md-alert' style={{color:'#8D8D8D',flex:0.1}} size={20 }/>

                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#F3F3F3',borderStyle:'solid',borderBottomWidth:3,marginTop:2}}></View>
                    <TouchableOpacity onPress={()=>navigation.navigate("SelfProfileEditProfile")} style={{ flexDirection:'row', marginTop: 10, marginLeft: 5 ,marginBottom:10}} >
                        <Text style={{flex:0.9,fontSize: 15}}>
                            Profili Düzenle
                        </Text>
                     
                        <Ionicons name='md-contact' style={{color:'#8D8D8D',flex:0.1}} size={20 }/>

                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#F3F3F3',borderStyle:'solid',borderBottomWidth:3,marginTop:2}}></View>
                    <TouchableOpacity onPress={()=>navigation.navigate("CompanyCreateProfile")} style={{ flexDirection:'row', marginTop: 10, marginLeft: 5 ,marginBottom:10}} >
                        <Text style={{flex:0.9,fontSize: 15}}>
                             Şirket Hesabına Geç
                        </Text>
                     
                        <Ionicons name='md-at' style={{color:'#8D8D8D',flex:0.1}} size={20 }/>

                    </TouchableOpacity>
                </View>
                

            </View>
            
        )
    };
}
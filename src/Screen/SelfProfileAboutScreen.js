import React, {Component} from 'react';
import {Text,StyleSheet,ScrollView,View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Thumbnail} from 'native-base';
export default class SelfProfileAboutScreen extends Component{

    render()
    {
        const {container,textAbout,sHr,txtGeneral,iconDesc,svReferans,vReferansContainer,txtRefUsername,txtRefDescription}=styles;
        return(

        <ScrollView style={container}>
            <Text style={textAbout}>{this.props.screenProps.data.ShortAbout}</Text>
         <View style={sHr}></View>
            <View style={{flex:1,flexDirection: 'row'}}>
                <Text style={txtGeneral}>Telefon Onaylandı</Text>
                <Ionicons name='ios-checkmark' size={25} style={iconDesc}/>
            </View>
            <View style={sHr}></View>
            <View style={{flex:1,flexDirection: 'row'}}>
                <Text style={txtGeneral}>Tc Kimlik Onaylandı</Text>
                <Ionicons name='ios-checkmark' size={25} style={iconDesc}/>
            </View>
            <View style={sHr}></View>
            <View style={{flex:1,flexDirection: 'row'}}>
                <Text style={txtGeneral}>Facebook Arkadaşları(<Text style={{color:'#7D7C7C'}}>{/*this.props.screenProps.data.Member.FacebookFriendsCount*/}</Text>)</Text>
               
            </View>
            <View style={sHr}></View>
            <View style={{flex:1,flexDirection: 'column'}}>
                <Text style={txtGeneral}>Referanslar(3)</Text>
                    <ScrollView style={svReferans}>
                            <View style={vReferansContainer}>
                                <Thumbnail small source={{uri: 'http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg'}}/>
                                    <View style={{marginLeft:5}}>
                                    <Text style={txtRefUsername}>aylinkantarci</Text>
                                    <Text style={{color:'#ff847c',fontSize:9}}>4.8/5</Text>
                                    <Text style={txtRefDescription}>Sohbetiyle güzel bir insan, kesinlikle tavsiye ederim.Tekrar görüşmek üzere :)</Text>
                                    </View>
                            </View>
                            <View style={vReferansContainer}>
                                <Thumbnail small source={{uri: 'http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg'}}/>
                                    <View style={{marginLeft:5}}>
                                    <Text style={txtRefUsername}>aylinkantarci</Text>
                                    <Text style={{color:'#ff847c',fontSize:9}}>4.8/5</Text>
                                    <Text style={txtRefDescription}>Sohbetiyle güzel bir insan, kesinlikle tavsiye ederim.Tekrar görüşmek üzere :)</Text>
                                    </View>
                            </View>
                            <View style={vReferansContainer}>
                                <Thumbnail small source={{uri: 'http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg'}}/>
                                    <View style={{marginLeft:5}}>
                                    <Text style={txtRefUsername}>aylinkantarci</Text>
                                    <Text style={{color:'#ff847c',fontSize:9}}>4.8/5</Text>
                                    <Text style={txtRefDescription}>Sohbetiyle güzel bir insan, kesinlikle tavsiye ederim.Tekrar görüşmek üzere :)</Text>
                                    </View>
                            </View>
                           
                    </ScrollView>
               
            </View>
            <View style={sHr}></View>
            <View style={{flex:1}}>
                <Text style={txtGeneral}>Fotoğraflar</Text>
               
            </View>
            <View style={sHr}></View>
            <View style={{flex:1}}>
                <Text style={txtGeneral}>Sosyal Medya Hesapları</Text>
               
            </View>
        </ScrollView>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        marginTop:5,
        marginLeft:10,
        marginRight:3,
        flex:1
    }
    ,textAbout:{
        fontFamily: 'Raleway-Regular',
        color:'#505050',
        fontSize:14
    },
    sHr:{
        borderTopColor: '#A4ACB2',
        borderWidth:0.5,
        marginTop:2,
        marginRight:3,
        
    
    },

    txtGeneral:{
        fontFamily:'OpenSans-SemiBold',
        fontSize:15,
        color:'#2a363b',

   
    },

    iconDesc:{
        marginLeft:10
      
 
    },
    svReferans:{
        maxHeight:200,
        marginTop:5,
        marginLeft:30,
        marginRight:20,
    },
    vReferansContainer:{
        
            padding:10,
            backgroundColor:'#FBFBFB',
            minHeight:100,
            flex:1,
            flexDirection:'row',
            marginBottom:10


    },   
     txtRefUsername:{
        fontSize:12,
        fontFamily:'Roboto-SemiBold',
        color:'#000'
        },
        txtRefDescription:{
            fontSize:12,
            fontFamily:'Roboto-SemiBold',
            color:'#4B4A4A'
        }

  

});
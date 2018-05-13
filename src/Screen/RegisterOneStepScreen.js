import React, {Component} from 'react';
import {View,ImageBackground,Alert} from 'react-native';
import { Container,Icon, Content, Form, Item, Input, Label,Text,Button,Spinner} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from "react-redux";
import {RegisterChanged, RegisterCreate} from '.././actions';

class RegisterOneStepScreen extends Component{
  static navigationOptions = ({ navigation}) => {
    const { params = {} } = navigation.state;

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
      };
      
    return {
      headerTitle: "Yeni Hesap Oluştur",
      headerTitleStyle:{
        fontFamily:'OpenSans-SemiBold'
      },
      headerTintColor:'#fff',
      //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
      headerStyle:{
      backgroundColor: '#e84a5f',  borderWidth: 1, borderBottomColor: '#fff'
      },
        headerRight:null
    };
};

      constructor(props) {
        super(props);
      }
 
      RegisterCreate1()
      {
        const {email, nameSurname, password, username}=this.props;
    
        this.props.RegisterCreate({username,password,nameSurname,email});
      }

      renderButton(){
   
        if(this.props.loading)
        {
          return (<Spinner size='small'/>);
        }
        
          return (<Button rounded  onPress={this.RegisterCreate1.bind(this)} style={{width:125,backgroundColor:'#e84a5f'}} >
          <Text style={{textAlign:'center',fontFamily:'Lato-Bold'}} >Kayıt Ol</Text>
          <Ionicons name='md-arrow-forward' style={{color:'#fff'}} size={20}/>
        </Button>);
        
      }
      renderTextEmail()
      {
        if(this.props.emailFailed)
        {
          return (<Item error><Ionicons active name='md-mail' style={{color:'#fff'}} size={20} /><Input autoFocus={true} placeholder='Email' value={this.props.email} onChangeText={email1=>this.props.RegisterChanged({props:'email',value:email1})}  placeholderTextColor='#e1e1e1' placeholderStyle={{fontFamily:'OpenSans-Regular',fontSize:10}} style={{color:'#fff'}}/><Ionicons name='md-alert' size={25} style={{color:'#A90329'}}/></Item>);
        }
        return (
          <Item><Ionicons active name='md-mail' style={{color:'#fff'}} size={20} /><Input placeholder='Email' value={this.props.email} onChangeText={email1=>this.props.RegisterChanged({props:'email',value:email1})}  placeholderTextColor='#e1e1e1' placeholderStyle={{fontFamily:'OpenSans-Regular',fontSize:10}} style={{color:'#fff'}}/></Item>
        );
      }
      goToHome()
      {
        this.props.navigation.navigate('App');
      }
    render(){
 
        return(
          <ImageBackground style={{flex:1,justifyContent:"space-between",flexDirection:'column',position:'absolute', top: 0, bottom: 0, left: 0, right: 0}} source={require('.././images/back-register.jpg')}>
              <View style={{height:100}}>
              
            </View>  
            <View style={{height:700}}>
            <Form>
            <Item >
            <Ionicons active name='md-reorder' size={20} style={{color:'#fff'}} />
            <Input placeholder='İsim Soyisim' value={this.props.nameSurname} onChangeText={nameSurname1=>this.props.RegisterChanged({props:'nameSurname',value:nameSurname1})} placeholderStyle={{fontFamily:'OpenSans-Regular',fontSize:10}} placeholderTextColor='#e1e1e1' style={{color:'#fff',fontFamily:'Lato-Regular'}}/>
          </Item>
            <Item > 
            <Ionicons active name='md-person' size={20} style={{color:'#fff'}} />
           
            <Input placeholder='Kullanıcı Adı' value={this.props.username} onChangeText={username1=>this.props.RegisterChanged({props:'username',value:username1})} placeholderStyle={{fontFamily:'OpenSans-Regular',fontSize:10}} placeholderTextColor='#e1e1e1' style={{color:'#fff',fontFamily:'Lato-Regular'}}/>
          </Item>
          {this.renderTextEmail()}
          <Item >
            <Ionicons active name='md-key' size={20} style={{color:'#fff'}} />
            <Input placeholder='Password' value={this.props.password}  onChangeText={password1=>this.props.RegisterChanged({props:'password',value:password1})} secureTextEntry placeholderTextColor='#e1e1e1'  placeholderStyle={{fontFamily:'OpenSans-Regular',fontSize:10}} style={{color:'#fff'}}/>
          </Item>
          </Form>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end',marginTop:20}}>
        
          <Text style={{textAlign:'center',color:'#fff',fontFamily:'GothicA1-Bold',marginTop:5,marginRight:10}}>Üyelik Sözleşmesi</Text>
            {this.renderButton()}
          </View>
          <View>
            
          </View>
         </View>
        </ImageBackground>

        );
    }
}

const mapToStateProps=({RegisterResponse})=>{
  const{username,password,email,nameSurname,loading,emailFailed,success}=RegisterResponse;
  return {
      username,
      password,
      email,
      nameSurname,
      loading,
      emailFailed,
      success
      
  };
};
export default connect(mapToStateProps,{RegisterChanged,RegisterCreate})(RegisterOneStepScreen);
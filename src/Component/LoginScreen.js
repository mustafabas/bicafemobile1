import React,{Component   } from "react";
import { View, Image,AsyncStorage,StyleSheet,ImageBackground,Alert } from 'react-native';
import { Form, Item, Input, Label, Content, Button, Text, Spinner,Icon }  from 'native-base';
import { connect } from "react-redux";
import {LoginChanged,LoginMember} from '.././actions';



 class LoginScreen extends Component{
    static navigationOptions = {
        header:null
      };
    
    render(){
      

        return(
        <ImageBackground style={{flex:1,justifyContent:"space-between",flexDirection:'column',position:'absolute', top: 0, bottom: 0, left: 0, right: 0}} source={require('.././images/back-login1.png')}>
            <View style={{ marginTop:30,height:100}} >
                <Text style={styles.tWelcome}>HOŞGELDİN</Text>
                <Text style={styles.tSubText}>Giriş yaparak indirimleri dilediğin gibi </Text>
                <Text style={styles.tSubText}>kullanabilirsin..</Text>
            </View>
            <View style={{height:300}}>
                  
                    <Text style={styles.tHeadLogin}>GİRİŞ <Text style={{color:'white',textDecorationLine:'underline'}} onPress={()=>this.props.navigation.navigate("Register")}>Hesap Oluştur</Text></Text>
                    <Content>
                    <Form>
                    <Item>
                    <Icon active style={{color:'white'}} name='person' />
                    <Input value={this.props.username} onChangeText={username1 =>this.props.LoginChanged({ props: 'username', value: username1 })} placeholderTextColor='#fff' style={styles.formInput} placeholder='Kullanıcı Adı'/>
                    </Item>
                    <Item>
                    <Icon active style={{color:'white'}} name='person' />
                    <Input secureTextEntry value={this.props.password} onChangeText={password1=>this.props.LoginChanged({props:'password',value:password1})} placeholderTextColor='#fff' style={styles.formInput} placeholder='Şifre'/>
                </Item>
                    </Form>
                    <Button full iconLeft light style={{marginTop:10,backgroundColor:'#FF4917'}} onPress={this._signIn.bind(this)} >
                    <Icon style={{color:'white'}} name='arrow-forward' />
                    <Text style={{color:'white'}}>GİRİŞ YAP</Text>
                

                    </Button>
                    <Button full iconLeft light style={{marginTop:10,backgroundColor:'#4267B2'}}>
                    <Icon style={{color:'white'}} name='arrow-forward' />
                    <Text style={{color:'white'}}>Facebookla Bağlan</Text>
                    </Button>
                    </Content>
            </View>
            
            <View>
                  
            </View>
         
        </ImageBackground>
 
        );
        
    }
    _signIn () {
        const {username, password}=this.props;
        console.log(username+password);
        this.props.LoginMember({username,password});
      };
    
}

const styles = StyleSheet.create({
    mBackground:{
        backgroundColor:"#FF2F63",
        flex: 1,
        flexDirection: 'column',
    },
    tHeadLogin:{
        fontSize:25,
        color:'#fff',
        fontFamily:'Roboto',
        marginLeft:30,
      
    },
    tWelcome:{
        fontSize:24,
        color:'#fff',
        fontWeight: '800',
        fontFamily: 'Raleway',
        marginLeft:25,
        
    },
    formInput:{
        color:'#fff',
    },
    tSubText:{
        color:'#fff',
        fontFamily:'Open sans',
        fontSize:16,
        marginLeft:25
    },

    red: {
      color: 'red',
    },
  });
  const mapToStateProps=({LoginResponse})=>{
    const{username,password,loading,success}=LoginResponse;
    return {
    username,
    password,
    loading,
    success
        
    };
  };
  export default connect(mapToStateProps,{LoginChanged,LoginMember})(LoginScreen);
import { NavigationActions } from 'react-navigation';
import {Alert,AsyncStorage} from 'react-native';
import {Toast} from 'native-base';
import axios from 'axios';
import { navigate } from '.././services/navigator';
import qs from 'qs';

import {REGISTER_CHANGE,REGISTER_CREATE,REGISTER_CREATE_SUCCESS, REGISTER_CREATE_FAILED,REGISTER_CREATE_FAILED_EMAIL} from './types';


export const RegisterChanged = ({ props, value }) => {
    return (dispatch) => {
      dispatch({
        type: REGISTER_CHANGE,
        payload: { props, value }
      });
    };
  };

export const RegisterCreate=({username,password,nameSurname,email})=>{
      return(dispatch)=>{
        dispatch({
          type:REGISTER_CREATE
        });
       
        if(email=='' || password=='' || nameSurname=='' || username=='')
        {
       
          Alert.alert("Lütfen Tüm Alanları Doldurunuz.");
          RegisterCreateError(dispatch);
        }
        else{
          if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
          {

           axios.post('http://test3.makinaturkiye.com/api/account/register?email=' + email +'&password=' + password+'&username='+username+'&nameSurname='+nameSurname)
            .then(function (response) {
              dispatch({
                type:REGISTER_CREATE_SUCCESS
              });
          
              AsyncStorage.setItem('memberId', response.data.toString());
              axios.post('http://test3.makinaturkiye.com/token', qs.stringify({ 'grant_type': 'password','username':username,'password':password }))
              .then(function(response){
                   // dispatch({

               // });

              
                AsyncStorage.setItem('accessToken',response.data.access_token);
                navigate('Home');
            
              
              }).catch(function(error){
                dispatch({
                  type:REGISTER_CREATE_FAILED
                });
                Alert.alert('Bir Hata Oluştu Düzeltmek İçin uğraşıyoruz.');
                console.log(error);
              });
              //Alert.alert(response.data.toString());
            /*const navigateAction = NavigationActions.navigate({
                routeName: "App",
                params: {},
                action: NavigationActions.navigate({ routeName: "App" })
              });*/
           
           
            
               
            })
            .catch(function (error) {
              Alert.alert('Bir hata oluştu.');
              console.log(error.message);
            });
           
          }
          else{

          RegisterCreateErrorForEmail(dispatch);
          }
        
        
        }
      };
};

const RegisterCreateError=(dispatch)=>{
  dispatch({
    type:REGISTER_CREATE_FAILED
  });

};


const RegisterCreateErrorForEmail=(dispatch)=>{
    dispatch({
      type:REGISTER_CREATE_FAILED_EMAIL
    });

  };
  const RegisterCreateSuccess=(dispatch,response)=>{
  };
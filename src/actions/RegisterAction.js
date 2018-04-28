import { NavigationActions } from 'react-navigation';
import {Alert,AsyncStorage} from 'react-native';
import {Toast} from 'native-base';
import axios from 'axios';
import { navigate } from '.././services/navigator';

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
           axios.get('http://test3.makinaturkiye.com/api/member/createMember?email=' + email +'&password=' + password+'&username='+username+'&nameSurname='+nameSurname)
            .then(function (response) {
              dispatch({
                type:REGISTER_CREATE_SUCCESS
              });
          
              AsyncStorage.setItem('memberId', response.data.toString());
              //Alert.alert(response.data.toString());
            /*const navigateAction = NavigationActions.navigate({
                routeName: "App",
                params: {},
                action: NavigationActions.navigate({ routeName: "App" })
              });*/
           
              navigate('Home');
            
               
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
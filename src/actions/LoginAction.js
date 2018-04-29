import {Alert,AsyncStorage} from 'react-native';
import axios from 'axios';
import {LOGIN_CHANGE,LOGIN_USER,LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, REGISTER_CREATE_FAILED} from './types';
import { navigate } from '.././services/navigator';
export const LoginChanged = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_CHANGE,
      payload: { props, value }
    });
  };
  };

export const LoginMember=({username,password})=>{
  
  return(dispatch)=>{
    dispatch({
      type:LOGIN_USER
    }); 


    if(username=='' || password=='')
    {
      Alert.alert("Tüm alanları doldurunuz.");
    }
    axios.get('http://test3.makinaturkiye.com/api/member/anyMember?emailP=' + username +'&passwordP=' + password)
    .then(function (response) {
      console.log(response);
      if(response.data.toString()!='0')
      {
        AsyncStorage.setItem('memberId', response.data.toString());
        //Alert.alert(response.data.toString());
      /*const navigateAction = NavigationActions.navigate({
          routeName: "App",
          params: {},
          action: NavigationActions.navigate({ routeName: "App" })
        });*/
        dispatch({
          type:LOGIN_USER_SUCCESS
        });
        navigate('Home');
  
      }
      else{
        Alert.alert('Kullanıcı adı veya şifre hatalı.');
        dispatch({
          type:LOGIN_USER_FAILED
        });
      }
  
       
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert("Bir hata oluştu, lütfen tekrar deneyiniz.");
  
    });

  };
};

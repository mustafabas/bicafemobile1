
import axios from 'axios';
import {AsyncStorage,Alert} from 'react-native';
import {MEMBER_INFORMATION,WEB_SERVICE_URL,MEMBER_INFORMATION_DATA_SUCCESS,MEMBER_INFORMATION_LOADING} from './types';
import { navigate } from '.././services/navigator';



const _GetStorageAsync = async (key) => {
  const userToken = await AsyncStorage.getItem(key);


 
};

export const GetMemberInformation = () => {
  
    return (dispatch) => {   

      dispatch({
        type: MEMBER_INFORMATION_LOADING,
        
      });
      AsyncStorage.getItem("memberId").then((value) => {
        if(value){  
              
          AsyncStorage.getItem("accessToken").then((accessToken)=>{
            if(accessToken)
            {
            
            
              axios({
                method:'get',
                url:'http://test3.makinaturkiye.com/api/member/getMember?id='+value,
                headers:{'Content-Type':' application/json','Authorization':'Bearer '+accessToken},
              })
                .then(function(response) {

                      console.log('action:'+response.data);
                    dispatch({
                        type: MEMBER_INFORMATION,
                        payload:response.data
                      });
                 
                
               
              }).catch(function(error){
                    console.log(error);
                    /*Alert.alert('Oturumunuz zaman aşımına uğradı, lütfen tekrar giriş yapınız.');
                    AsyncStorage.removeItem('memberId').then((memberId)=>{
                      navigate('Login');
                    });*/
                   
              });
            }

          });
  
    
        }
        

    
    }).catch(function(err) {    }).done();



    };
  };
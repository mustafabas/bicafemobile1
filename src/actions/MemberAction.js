
import axios from 'axios';
import {AsyncStorage,Alert} from 'react-native';
import {MEMBER_INFORMATION,WEB_SERVICE_URL,MEMBER_INFORMATION_DATA_SUCCESS,MEMBER_INFORMATION_LOADING,MEMBER_UPDATE_CHANGE,MEMBER_UPDATE_SUCCESS} from './types';
import { navigate } from '.././services/navigator';




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
                url:WEB_SERVICE_URL+'/member/getMember?id='+value,
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


  export const MemberUpdateChanged = ({ props, value }) => {
    return (dispatch) => {
      dispatch({
        type: MEMBER_UPDATE_CHANGE,
        payload: { props, value }
      });
      
  
    };
    };
export const MemberUpdate=({namesurname,email,shortabout})=>{
  return(dispatch)=>{


    AsyncStorage.getItem("memberId").then((value) => {
      if(value){  
            
        AsyncStorage.getItem("accessToken").then((accessToken)=>{
          if(accessToken)
          {
            console.log('action short'+shortabout);
          
            axios({
              method:'post',
              url:WEB_SERVICE_URL+'/member/MemberUpdate?id='+value+'&namesurname='+namesurname+'&email='+email+'&shortabout='+shortabout,
              headers:{'Content-Type':' application/json','Authorization':'Bearer '+accessToken},
            })
              .then(function(response) {

                    if(response.data=="1")
                    {
                      dispatch({
                        type: MEMBER_UPDATE_SUCCESS,
                        payload:response.data
                      });
                      console.log(response.data);
                    }
                    else
                    {
               
                    }
             
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
}
  
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,state,
  ActivityIndicator,
  StatusBar,
  Alert,
  AsyncStorage
} from 'react-native';
import {Button,Thumbnail,Spinner} from "native-base";
import { human } from 'react-native-typography'
import {StackNavigator} from 'react-navigation';
import RouteSelfProfile from '../RouteSelfProfile';
import { connect } from 'react-redux';
import { GetMemberInformation } from '.././actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


 class SelfProfileScreen extends Component{
    state={
        memberId:'',
        accessToken:''
        };
        constructor(props){
            super(props);
     
     
        }
   
        static navigationOptions = ({ navigation}) => {
          
            const {state} = navigation;
      
              
            return {
              headerTitle:'Profilim',
              headerTitleStyle:{
                  color:"#355c7d",
                  fontFamily: 'GothicA1-Bold',
               
                  
              },
             
             
              headerStyle:{
              backgroundColor: '#fff', borderWidth: 1, borderBottomColor: '#f67280'
              },
              headerRightStyle:{
                  marginRight:5,
              },
                headerRight:<Button style={{marginRight:10}} onPress={this._signOutAsync} transparent><Ionicons style={{color:'#355c7d'}} name='ios-settings' size={25}/></Button>
            };
        };


    renderThumnail()
    {
        if(this.props.member.MemberProfilePicture)
        {
            return (<Thumbnail large source={{ uri: this.props.data.Member.ProfilePicture }} />);

        }
        else{
            let noPictureName=this.props.data.Member.NameSurname;
            noPictureName=noPictureName.substring(0,1);
                <View style={{backgroundColor:'#fff',width:100,height:100}}><Text style={{fontSize:40}}>{noPictureName}</Text></View>
        }
    }
    componentWillMount()
    {
        this.props.GetMemberInformation();
    }

    componentDidMount(){
     
      
    }
 
    render() {  
   
            if(this.props.loading)
            {
                return (<Spinner size='small'/>);
            }
            else{

                return (
                    
                    <View style={{ flex: 1,backgroundColor:'#fff' }}>
                        <View style={{ flex: 0.2,flexDirection:'row',paddingLeft:10,paddingTop:10, backgroundColor: '#F6F6F6' }}>
                            <View style={{ flex: 0.25}}>
                            <Thumbnail large source={{ uri:'http://1.bp.blogspot.com/-DKzHkOGWzRI/VPdpSpkaApI/AAAAAAAAAP8/thGcMVC6qGI/s1600/Jason%2BDavis%2Bheadshot.jpg' }} />
              
                            </View>
                            <View style={{ flex: 0.4}}>
                <Text style={{ color: '#2a363b', fontFamily: 'Roboto', fontSize: 14 }}>{this.props.member.NameSurname}{/*this.props.data.Member.NameSurname*/}</Text>
                                <Text style={{ color: '#9A9DA0', fontFamily: 'Raleway', fontSize: 14 }}><Icon name='map-marker' size={16} style={{color:'#ccc'}}/>İzmir</Text>
                                <Text style={{ color: '#D77808', fontFamily: 'Lato', fontSize: 12 }}>4.5 Referans(10)</Text>
                            </View>
                            
                            <View style={{flex:0.35}}>
                                <Button style={{backgroundColor:'#f67280',height:25,padding:5,marginRight:10,borderRadius:5}}>
                                    <Text style={{fontFamily:'Lato-Bold',color:'#fff',fontSize:13}}> Profili Düzenle</Text>
                                </Button>
                           
                            
                            </View>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <RouteSelfProfile screenProps={{data:this.props.member}}/>
                        </View>
        
        
                    </View>
                );
            }
    
    }
}


const styles = StyleSheet.create({
    txtRoboto: {
        fontFamily: 'Roboto',
        color: '#e1e1e1'
    },
    SettingsButton: {

        marginTop: 15,
        marginRight: 15,
    },
    SettingsContainer: {

        flex: 1,
        marginRight: 45,
        marginTop: 45,
        zIndex: 999
}
});



const mapToStateProps = ({ MemberResponse }) => {
    const{member,loading}=MemberResponse;

    return {member,loading};
};


export default connect(mapToStateProps, { GetMemberInformation })(SelfProfileScreen);
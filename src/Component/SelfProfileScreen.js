import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,state
} from 'react-native';
import {Button,Icon,Thumbnail} from "native-base";
import { human } from 'react-native-typography'
import {StackNavigator} from 'react-navigation';
import RouteSelfProfile from '../RouteSelfProfile';
export default class SelfProfileScreen extends Component{

  
    static navigationOptions = ({ navigation}) => {

        const { params = {} } = navigation.state;
        
        return {
          headerTitle: 'Profilim',
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
            headerRight:
                <Button onPress={()=>navigation.navigate("SelfProfileEdit")} transparent ><Icon name="settings" style={{ color: '#fff' }} /></Button>
        };

    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.3, backgroundColor: '#e84a5f' }}>
                    <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Thumbnail large source={{ uri: 'https://scontent-yyz1-1.cdninstagram.com/vp/f7d93620f6e52fb4f4a2ce20c8034f5e/5B9BDF20/t51.2885-19/s150x150/29417795_1569755439810468_4691826964254687232_n.jpg' }} />
      
                    </View>
                    <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                        <Text style={{ color: '#fff', fontFamily: 'roboto', fontSize: 20 }}>Merve Özbey</Text>
                        <Text style={{ color: '#fff', fontFamily: 'Impact', fontSize: 14 }}>İzmir, Beşiktaş Ege Üniversitesi...</Text>
                    </View>
                </View>
                <View style={{ flex: 0.7 }}>
                    <RouteSelfProfile />
                </View>


            </View>
        );
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




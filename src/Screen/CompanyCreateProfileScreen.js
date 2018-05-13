import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class CompanyCreateProfileScreen extends Component {
    
        static navigationOptions = ({ navigation }) => {

            const { params = {} } = navigation.state;
    
            return {
                headerTitle: 'Kafe Sahibi',
                headerTitleStyle: {
                    color: "#fff",
                    fontFamily: 'Roboto',
                    fontFamily: 'MuseoSansRounded-300',
                    justifyContent: 'space-between',
                    textAlign: 'center'
    
                },
                //headerLeft:<Button transparent><Icon name="bars"  style={{ color: 'white' }} size={20} /></Button>,
                headerStyle: {
                    backgroundColor: '#4D9DCB', borderWidth: 0,
                },
    
            };
    
        };
        render() {
            const navigation = this.props.navigation;
            return (
               
                <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
    
                   
    
                </View>
                
            )
        };
    }
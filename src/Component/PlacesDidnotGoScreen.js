import React, { Component } from 'react';
import { View ,ScrollView} from 'react-native';
import ShareListItemMin from './ShareListItemMin';


export default class PlacesDidnotGoScreen extends Component {

    render() {

        return (
            <View style={{backgroundColor:'#fff',flex: 1}}>
   
            <ShareListItemMin/> 
            </View>
        );
    }
    
}
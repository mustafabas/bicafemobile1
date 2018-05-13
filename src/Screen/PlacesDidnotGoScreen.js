import React, { Component } from 'react';
import { View ,ScrollView,Text} from 'react-native';
import ShareListItemMin from './../Component/ShareListItemMin';


export default class PlacesDidnotGoScreen extends Component {

    render() {

        return (
            <View style={{backgroundColor:'#fff',flex: 1}}>
            <Text>{this.props.screenProps.cat}</Text>

            <ShareListItemMin/> 
            </View>
        );
    }
    
}
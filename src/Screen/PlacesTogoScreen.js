import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ShareListItemMin from '../Component/ShareListItemMin.js';



export default class PlacesTogoScreen extends Component {

    render() {

        return (
            <View style={{ flex: 1 }}>

                <ScrollView style={{flex:1}} >
                    <ShareListItemMin />
              
                    <ShareListItemMin />

                </ScrollView>
            </View>
        );

    }
}
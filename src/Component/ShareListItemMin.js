import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Left, Body, Right } from 'native-base';

import { human } from 'react-native-typography';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default class ShareListItemMin extends Component {

    render() {
        return (
           
            
                <Content style={{flex:1}}>
                    <Card style={{flex:1}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/11/30/66/1130660541155da406becb6d3cc910ec.jpg' }} />
                                <Body>
                                    <Text>@StarBucks</Text>
                                    
                                        
                                    <Text note>StarBucks</Text>
                                    <Text> Filtre kahvede %50 indirim fırsatı.. </Text>
                                </Body>
                            </Left>
                            <Right>
                            <Body>
                            <Ionicons style={{marginBottom:4}} name="ios-trash" size={25}/>
                            <Text>12.00 - 14.00</Text>
                            </Body>
                            </Right>
                        </CardItem>
                        
                    </Card>

                </Content>

       
        );
    }
}
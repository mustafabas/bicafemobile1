import React, {Component} from 'react';
import { Image, View,StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Button, Text, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { human } from 'react-native-typography';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class ShareListItem extends Component{

    render()
    {
        return(
            <Content>
            <Card style={{marginLeft:10,marginRight:10}}>
            <View style={styles.storeDiv}>
              <View style={styles.storeHead}>
                <Thumbnail style={{marginTop:-5}} source={{uri: 'https://i.pinimg.com/originals/11/30/66/1130660541155da406becb6d3cc910ec.jpg'}} />
                <View>
                  <Text style={{fontWeight:'bold',color:'#2a363b'}}>Starbucks </Text>
                  <Text note>@starbucks </Text>
                </View>
              </View>
              <View style={{marginRight:10}} >
              <Ionicons style={{fontSize:30,color:'#ccc',justifyContent: 'flex-end'}} name="ios-more"/>
              <Text note>15 dk</Text>
              </View>
            </View>
            <CardItem cardBody>
              <Image style={{marginLeft:-10,marginRight:-10}} source={{uri: 'http://www.yemektarifi.com/wp-content/uploads/2017/02/filtre-kahve-french-press-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
        
            <View style={{flexDirection:'column',marginLeft:18}}>
                <Text style={[human.title3,{color:'#000',fontFamily:'Open Sans',marginTop:10}]}>Filtre kahvede %50 indirim fırsatı..</Text>
                <View style={{marginTop:10}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                    <Icon style={{fontSize:20,color:'#355c7d'}} name="map-marker"/>
                    <Text note style={{fontWeight:'bold',textDecorationLine:'underline' }}> Bornova/İzmir
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderBottomColor:'#e1e1e1',borderStyle:'solid',borderBottomWidth:1,marginRight:15,marginTop:10,marginLeft:15}}></View>

            <View style={styles.listFooter}>
                <View style={{flex:0.3,flexDirection:'row',marginTop:20,marginRight:20,marginLeft:20}}>
                <Ionicons name="ios-clock-outline" size={25}/>
                    <Text  style={[human.subhead,{color:'#333',fontFamily:'Roboto'}]}>15:00-17:00</Text>
                </View>
                <View style={{flex:0.3,flexDirection:'row',marginRight:20,marginTop:20}}>
                <Ionicons name="ios-people-outline" size={25}/>
                <Text  style={[human.subhead,{color:'#333',fontFamily:'Roboto',marginLeft:5}]}>2 Kişi</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                <Text style={{color:'#2a363b',fontSize:18,fontWeight:'bold',marginTop:15,textAlign:'right'}}>Rezerve Et</Text>
                </TouchableOpacity>
                </View>

            </View>
          </Card>
          </Content>
        );
    }
}

const styles = StyleSheet.create({
    storeDiv:{
        flex: 1,
        flexDirection: 'row',
        marginTop:20,
        marginLeft:18
    },
    storeHead:{
        flex:1,
        flexDirection:'row'
    },
    listFooter:{
        flex:1,
        flexDirection:'row',
        marginTop:5,
        height:50
  

    }
});
import React, {Component} from 'react';
import { Image, View,StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Button, Text, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ShareListItem extends Component{

    render()
    {
        return(
            <Content>
            <Card style={{marginLeft:10,marginRight:10}}>
     
            <CardItem cardBody>
              <Image style={{marginLeft:-10,marginRight:-10}} source={{uri: 'http://www.yemektarifi.com/wp-content/uploads/2017/02/filtre-kahve-french-press-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <View style={styles.storeDiv}>
              <View style={styles.storeHead}>
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/11/30/66/1130660541155da406becb6d3cc910ec.jpg'}} />
                <View>
                  <Text style={{fontWeight:'bold'}}>Kahve Deryası </Text>
                  <Text note>@kahvederyasi </Text>
                </View>
              </View>
              <View style={{marginRight:10}} >
              <Icon style={{fontSize:30,color:'#B21108',marginRight:-10,   justifyContent: 'flex-end'}} name="ellipsis-h"/>
              <Text note>15 dk</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:18}}>
                <Text style={{color:'#000',fontSize:18,fontFamily:'Roboto'}}>Filtre kahvede %50 indirim fırsatı..</Text>
                <View style={{marginTop:10}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                    <Icon style={{fontSize:20,color:'#B21108'}} name="map-marker"/>
                    <Text note style={{fontWeight:'bold',textDecorationLine:'underline' }}> Bornova/İzmir
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderBottomColor:'#e1e1e1',borderStyle:'solid',borderBottomWidth:1}}></View>
    
            <View style={{borderBottomColor:'#e1e1e1',borderStyle:'solid',borderBottomWidth:1}}></View>
            <View style={styles.listFooter}>
                <View style={{flex:0.3,flexDirection:'column',marginRight:20,marginLeft:20}}>
                    <Text  style={{color:'#848484',fontSize:15,fontWeight:'700',fontFamily:'Roboto'}}>15:00-17:00</Text>
                </View>
                <View style={{flex:0.3,flexDirection:'column',marginRight:20}}>
                <Text  style={{color:'#848484',fontSize:15,fontWeight:'700',fontFamily:'Roboto'}}>2 Kişi</Text>
                </View>
                <View style={{flex:0.4}}>
                <Button iconLeft light style={{backgroundColor:'#fff'}}>
               
                <Text style={{color:'#B21108',fontSize:13,fontWeight:'bold'}}>Rezerve Et</Text>
            </Button>
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
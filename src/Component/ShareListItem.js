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
            <Content >
            <Card style={{backgroundColor:'#fff'}}>
            <View style={styles.storeDiv}>
              <View style={styles.storeHead}>
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/11/30/66/1130660541155da406becb6d3cc910ec.jpg'}} />
                <View>
                  <Text style={{color:'#2a363b',fontSize:12,fontFamily:'Lato-SemiBold'}}>@starbucks</Text>
              
                <Text note style={{color:'#ccc',textDecorationLine:'underline',fontSize:10}}>Bornova/İzmir</Text>
                
                </View>
              </View>
              <View style={{marginRight:10}} >
              <Ionicons style={{fontSize:30,color:'#ccc',justifyContent: 'flex-end'}} name="ios-more"/>
              <Text note style={[human.caption2,{color:'#ccc'}]}>15 dk</Text>
              </View>
            </View>
            <CardItem cardBody>
              <Image style={{marginLeft:-10,marginRight:-10}} source={{uri: 'http://www.yemektarifi.com/wp-content/uploads/2017/02/filtre-kahve-french-press-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <View style={{flexDirection:'column',marginLeft:18}}>
                <Text style={{color:'#000',fontFamily:'Roboto-Regular',marginTop:10,fontSize:13}}>Bu grupta Bakü’den birileri var mı merak ediyorum,yoksa sadece Türkiye içinde misiniz? Buralara yolunuz düşerse misafir etmek isteriz,yada buralardaysanız güzel bir pazar kahvesi içebiliriz 🙂 siz sormadan ben söyleyeyim aslında manisalıyım ama eğitimim dolayısıyla Bakü’de bulunuyorum</Text>
                <View style={{marginTop:10}}>
                    <TouchableOpacity style={{flexDirection:'row',width:300}}>
                    <Icon style={{fontSize:18,color:'#355c7d'}} name="location-arrow"/>
                    <Text note style={{textDecorationLine:'underline',fontSize:11,color:'#B5B5B5',width:300,fontFamily:'Roboto' }}>Güzeltepe sok. No:2
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderBottomColor:'#e1e1e1',borderStyle:'solid',borderBottomWidth:1,marginRight:15,marginTop:10,marginLeft:15}}></View>

            <View style={styles.listFooter}>
                <View style={{flex:0.4,flexDirection:'row',marginTop:20,marginRight:20,marginLeft:20}}>
                <Ionicons name="ios-clock-outline" style={{color:'#355c7d'}} size={17} />
                    <Text  style={[human.caption2,{color:'#333',fontFamily:'OpenSans-SemiBold',marginLeft:2,marginTop:2}]}>15:00-17:00</Text>
                </View>
                <View style={{flex:0.4,flexDirection:'row',marginRight:20,marginTop:20}}>
                <Ionicons name="ios-people-outline" style={{color:'#355c7d'}} size={17}/>
                <Text  style={[human.caption2,{color:'#333',fontFamily:'OpenSans-SemiBold',marginLeft:2,marginTop:2}]}>2 Kişi</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                <Text style={{color:'#2a363b',fontSize:14,fontWeight:'bold',marginTop:17,textAlign:'right',fontFamily:'GothicA1-Regular'}}>Rezerve Et</Text>
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
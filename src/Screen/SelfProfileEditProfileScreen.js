import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import { Thumbnail, Button } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import { GetMemberInformation,MemberUpdate } from '../actions';



 class SelfProfileEditProfileScreen extends Component {
        state={
                NameSurname:'',
                Email:'',
                ShortAbout:''
        }
    static navigationOptions = ({ navigation}) => {
          
        const {state} = navigation;
  
    
        return {
          headerTitle:'Profili Düzenle',
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
          
        };
    };
    state = {
        visibleModal: null
    };
    componentWillMount()
    {
        this.props.GetMemberInformation();
        this.setState({NameSurname:this.props.member.NameSurname,
        
            ShortAbout:this.props.member.ShortAbout});


    


    }

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>

            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'left' }}>Bir Profil Fotoğrafı Belirle</Text>
            <View style={{ borderBottomColor: '#F3F3F3', borderStyle: 'solid', borderBottomWidth: 3, marginTop: 2 }}></View>
            <TouchableOpacity>
                <Text style={{ fontSize: 15, textAlign: 'left', marginTop: 10, marginBottom: 5 }}>Telefondan yükle</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: 15, textAlign: 'left', marginTop: 5, marginBottom: 5 }}>Fotoğraf Çek</Text>
            </TouchableOpacity>
            {this._renderButton("Kapat", () => this.setState({ visibleModal: null }))}
        </View>
    );

    MemberUpdate()
    {  
        const {   NameSurname,
        Email,
        ShortAbout}=this.state;
      console.log(NameSurname);
        this.props.MemberUpdate({NameSurname,Email,ShortAbout});
        
    }


    render() {

        return (
            <View style={{ flex: 1,backgroundColor:'#fff' }}>
                <View style={{ flex: 0.3, backgroundColor: '#F6F6F6' }}>
                    <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Thumbnail large source={{ uri: 'https://scontent-yyz1-1.cdninstagram.com/vp/f7d93620f6e52fb4f4a2ce20c8034f5e/5B9BDF20/t51.2885-19/s150x150/29417795_1569755439810468_4691826964254687232_n.jpg' }} />

                    </View>
                    <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                        <TouchableOpacity>
                            <Text onPress={() => this.setState({ visibleModal: 6 })} style={{ color: '#f67280', fontFamily: 'roboto', fontSize: 20 }}>Fotoğrafı Değiştir</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <Modal
                        isVisible={this.state.visibleModal === 6}
                        onBackdropPress={() => this.setState({ visibleModal: null })}
                    >
                        {this._renderModalContent()}
                    </Modal>
                    <View style={{ flex: 1, marginLeft: 15, marginTop: 10, marginRight: 10 }}>
                        <Text style={{ marginLeft: 3 }}>Ad
                            </Text>
                        <TextInput
                            value={this.state.NameSurname}
                            onChangeText={(NameSurname1) => this.setState({NameSurname:NameSurname1})}
                            placeholderTextColor="black"
                            underlineColorAndroid="#b0b0b0"
                        />
                        <Text style={{ marginLeft: 3 }}>Email</Text>
                        <TextInput

                            value={this.state.Email}
                            onChangeText={(Email1) => this.setState({Email:Email1})}
                            placeholderTextColor="black"
                            underlineColorAndroid="#b0b0b0"

                        />
                        <Text style={{ marginLeft: 3 }}>Hakkında</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={3}
                            value={this.state.ShortAbout}
                            onChangeText={(ShortAbout1) => this.setState({ShortAbout:ShortAbout1})}
                            placeholderTextColor="black"
                            underlineColorAndroid="#b0b0b0"

                        />
                        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <Button onPress={this.MemberUpdate.bind(this)} style={{backgroundColor:'#f67280',height:25,padding:5,marginRight:10,borderRadius:5}}>
                                    <Text style={{fontFamily:'Lato-Bold',color:'#fff',fontSize:13}}>Kaydet</Text>
                                </Button>

                        </View>
                            
                        <View style={{ justifyContent: 'flex-end', marginLeft: 5 ,marginTop:15}}>
                            <TouchableOpacity>
                                <Text style={{ color: '#000000' }}>
                                    Şirket Hesabına Geçmek İster Misiniz?
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>

            </View>
        );

    }


}
const styles= StyleSheet.create({
   
    button: {
      backgroundColor: "lightblue",
      padding: 12,
      margin: 16,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    modalContent: {
      backgroundColor: "white",
      padding: 22,
      justifyContent: "center",
     
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)"
    }
  });


  const mapToStateProps = ({ MemberResponse }) => {
    const{member}=MemberResponse;

    return {member};
};


export default connect(mapToStateProps, { GetMemberInformation,MemberUpdate })(SelfProfileEditProfileScreen);
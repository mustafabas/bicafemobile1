import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import { Thumbnail, Button } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";


export default class SelfProfileEditProfileScreen extends Component {
    state = {
        visibleModal: null
    };

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

    static navigationOptions = ({ navigation }) => {

        const { params = {} } = navigation.state;

        return {
            headerTitle: 'Profili Düzenle',
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
                <Button onPress={() => navigation.pop(1)} transparent style={{ marginRight: 10 }} ><Ionicons style={{ color: '#fff' }} name='ios-checkmark' size={50} /></Button>


        };

    };


    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.3, backgroundColor: '#e84a5f' }}>
                    <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Thumbnail large source={{ uri: 'https://scontent-yyz1-1.cdninstagram.com/vp/f7d93620f6e52fb4f4a2ce20c8034f5e/5B9BDF20/t51.2885-19/s150x150/29417795_1569755439810468_4691826964254687232_n.jpg' }} />

                    </View>
                    <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                        <TouchableOpacity>
                            <Text onPress={() => this.setState({ visibleModal: 6 })} style={{ color: '#fff', fontFamily: 'roboto', fontSize: 20 }}>Fotoğrafı Değiştir</Text>
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

                            onChangeText={(text) => this.setState({ text })}
                            placeholder="Merve"
                            placeholderTextColor="black"
                            underlineColorAndroid="#b0b0b0"
                        />
                        <Text style={{ marginLeft: 3 }}>Soyad</Text>
                        <TextInput

                            onChangeText={(text) => this.setState({ text })}
                            placeholder="Özbey"
                            placeholderTextColor="black"
                            underlineColorAndroid="#b0b0b0"

                        />
                        <Text style={{ marginLeft: 3 }}>Biyografi</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={3}

                            onChangeText={(text) => this.setState({ text })}
                            placeholder="İzmir                                                        Beşiktaş, Ege Üniversitesi"
                            placeholderTextColor="black"
                            underlineColorAndroid="#b0b0b0"

                        />


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
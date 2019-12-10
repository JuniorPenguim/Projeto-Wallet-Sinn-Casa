import React, {Component} from 'react';
import {
  View,
  WebView,
  Text,
  Image,
  Linking,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import {Drawer} from 'native-base';
import SideBar from './MenuInterno';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScreen extends Component {
  state = {
    modalVisible: false,
    success: null,
    url: '',
  };

  openLink = () => {
    Linking.openURL(this.state.url).catch(err =>
      alert('An error occured', err),
    );
    this.setState({success: false});
  };

  handleButton = () => {
    this.setState({modalVisible: !this.state.modalVisible, success: false});
    this.scanner.reactivate();
  };

  onSuccess = async e => {
    await this.setState({success: true, modalVisible: true, url: e.data});
  };

  closeDrawer() {
    this._drawer._root.close();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            <View style={{flex: 1.1, flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Perfil')}>
                  <View
                    style={{
                      marginLeft: wp('2.5%'),
                      marginTop: hp('5%'),
                    }}>
                    <Image
                      style={{
                        width: 13,
                        height: 18,
                      }}
                      source={require('../../imagens/seta-voltar.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>

                <View
                  style={{
                    marginLeft: wp('5%'),
                    marginTop: hp('4.8%'),
                  }}>
                  <Image
                    style={{
                      width: 140,
                      height: 21,
                    }}
                    source={require('../../imagens/logo-internas-header.png')}
                  />
                </View>

                <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                  <View
                    style={{
                      marginLeft: wp('40%'),
                      marginTop: hp('4%'),
                    }}>
                    <Image
                      style={{
                        width: 35,
                        height: 30,
                      }}
                      source={require('../../imagens/ico-menu-abrir.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View
                style={{
                  marginTop: hp('2%'),
                  marginLeft: wp('3%'),
                }}>
                <Image
                  style={{
                    width: 390,
                    height: 1,
                  }}
                  source={require('../../imagens/line-div-header.png')}
                />
              </View>

              <Text
                style={{
                  marginTop: hp('2%'),
                  marginLeft: wp('4%'),
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: 25,
                }}>
                Minha Sinn.id
              </Text>

              <Text
                style={{
                  marginTop: hp('1%'),
                  marginLeft: wp('4%'),
                  fontSize: 18,
                  color: 'white',
                }}>
                Esta é a sua{' '}
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  CHAVE PRIVADA,{' '}
                </Text>
                não a
              </Text>
              <Text
                style={{marginLeft: wp('4%'), fontSize: 18, color: 'white'}}>
                entregue ou mostre para desconhecidos
              </Text>
              <Text
                style={{marginLeft: wp('4%'), fontSize: 18, color: 'white'}}>
                e em ambientes cuja rede não seja
              </Text>
              <Text
                style={{marginLeft: wp('4%'), fontSize: 18, color: 'white'}}>
                segura.
              </Text>
              <QRCodeScanner
                onRead={e => alert(e.data)}
                showMarker={true}
                checkAndroid6Permissions={true}
                ref={elem => {
                  this.scanner = elem;
                }}
                cameraStyle={styles.cameraContainer}
              />
            </View>
          </ImageBackground>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  touchable: {
    padding: 16,
  },

  text: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  cameraContainer: {
    height: Dimensions.get('window').height - 150,
  },
});

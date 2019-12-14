import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {Drawer} from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SideBar from './MenuInterno';
import NavigationService from '../../../NavigationService';

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
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/bg-internas.png')}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={{
                width: wp('100%'),
                height: hp('15%'),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableWithoutFeedback
                onPress={() => NavigationService.simpleNavigate('Perfil')}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    marginLeft: wp('2%'),
                    width: wp('5%'),
                    height: hp('5%'),
                  }}
                  source={require('../../imagens/seta-voltar.png')}
                />
              </TouchableWithoutFeedback>
              <Image
                style={{
                  marginLeft: wp('4%'),
                  resizeMode: 'contain',
                  width: wp('50%'),
                  height: wp('30%'),
                }}
                source={require('../../imagens/logo-internas-header.png')}
              />
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View
                  style={{
                    flex: 1,
                    marginRight: wp('4%'),
                    alignItems: 'flex-end',
                  }}>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      width: wp('9%'),
                      height: hp('9%'),
                    }}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Image
              style={{
                marginTop: hp('-2%'),
                resizeMode: 'contain',
                width: wp('100%'),
                height: hp('1%'),
              }}
              source={require('../../imagens/line-div-header.png')}
            />

            <Text
              style={{
                fontSize: 0.03 * windowH,
                color: 'gray',
                marginLeft: wp('4%'),
              }}>
              Minha Sinn.id
            </Text>

            <Text
              style={{
                marginTop: hp('1%'),
                marginLeft: wp('4%'),
                fontSize: 0.025 * windowH,
                color: 'white',
              }}>
              Esta é a sua{' '}
              <Text style={{ffontSize: 0.025 * windowH, fontWeight: 'bold'}}>
                CHAVE PRIVADA,{' '}
              </Text>
              não a
            </Text>
            <Text
              style={{
                marginLeft: wp('4%'),
                fontSize: 0.025 * windowH,
                color: 'white',
              }}>
              entregue ou mostre para desconhecidos
            </Text>
            <Text
              style={{
                marginLeft: wp('4%'),
                fontSize: 0.025 * windowH,
                color: 'white',
              }}>
              e em ambientes cuja rede não seja segura
            </Text>

            <View
              style={{
                width: wp('100%'),
                height: hp('68%'),
                overflow: 'hidden',
              }}>
              <QRCodeScanner
                onRead={e => alert(e.data)}
                showMarker={true}
                checkAndroid6Permissions={true}
                ref={elem => {
                  this.scanner = elem;
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

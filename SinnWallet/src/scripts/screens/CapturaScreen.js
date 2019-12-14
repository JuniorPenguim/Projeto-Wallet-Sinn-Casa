import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Drawer} from 'native-base';
import {RNCamera} from 'react-native-camera';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NavigationService from '../../../NavigationService';
import SideBar from './MenuInterno';

export default class SplashScreen extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);

      alert(data.uri);
    }
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
                onPress={() => NavigationService.simpleNavigate('Carteira')}>
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

            <View
              style={{
                marginTop: hp('1%'),
                width: wp('100%'),
                height: hp('70%'),
                overflow: 'hidden',
              }}>
              <RNCamera
                width={wp('100%')}
                height={hp('70%')}
                ref={camera => {
                  this.camera = camera;
                }}
                resizeMode="contain"
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                flashMode={RNCamera.Constants.FlashMode.off}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={
                  'We need your permission to use your camera phone'
                }
              />
            </View>

            <View
              style={{
                position: 'absolute',
                marginLeft: wp('2%'),
                marginTop: hp('17.5%'),
              }}>
              <Image
                style={{
                  width: wp('95%'),
                  height: hp('65%'),
                }}
                source={require('../../imagens/mascara-captura-foto-documento.png')}
              />
            </View>

            <TouchableWithoutFeedback
              onPress={this.takePicture}
              style={styles.capture}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: wp('70%'),
                    height: hp('10%'),
                  }}
                  source={require('../../imagens/bt-capturar-documento.png')}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 14,
  },
});

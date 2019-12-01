import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Container, Text, Card, CardItem} from 'native-base';
import {Image} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import Biometrics from 'react-native-biometrics';

export default class LoginScreen extends Component {
  _idSignIn() {
    Biometrics.simplePrompt('Load fingerprint')
      .then(() => {
        console.log('successful fingerprint provided');
        NavigationService.simpleNavigate('Perfil');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <ImageBackground
          style={{width: windowW, height: windowH}}
          resizeMode="cover"
          source={require('../../imagens/splash-2.png')}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={{
                marginLeft: wp('20%'),
                marginTop: hp('10%'),
              }}>
              <Image
                style={{
                  width: 260,
                  height: 210,
                }}
                source={require('../../imagens/logo-icon-login.png')}
              />
            </View>

            <View
              style={{
                marginLeft: wp('21%'),
                marginTop: hp('8%'),
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>
                OLÁ, EFETUE SEU LOGIN DE ACESSO:
              </Text>
            </View>

            <View
              style={{
                marginLeft: wp('17%'),
                marginTop: hp('4%'),
              }}>
              <Image
                style={{
                  width: 285,
                  height: 50,
                }}
                source={require('../../imagens/bt-login-facebook.png')}
              />
            </View>

            <View
              style={{
                marginLeft: wp('17%'),
                marginTop: hp('2%'),
              }}>
              <Image
                style={{
                  width: 285,
                  height: 50,
                }}
                source={require('../../imagens/bt-login-gmail.png')}
              />
            </View>

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <View
                style={{
                  marginLeft: wp('17%'),
                  marginTop: hp('2%'),
                }}>
                <Image
                  style={{
                    width: 285,
                    height: 50,
                  }}
                  source={require('../../imagens/bt-login-email.png')}
                />
              </View>
            </TouchableWithoutFeedback>

            <View
              style={{
                marginLeft: wp('44%'),
                marginTop: hp('10%'),
              }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                }}
                source={require('../../imagens/logo-sinn-selo.png')}
              />
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

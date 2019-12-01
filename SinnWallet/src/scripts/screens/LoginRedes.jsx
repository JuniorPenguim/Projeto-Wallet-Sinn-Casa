import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Switch,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';
import * as styleClass from '../constants/StyleClass';
import {Avatar, Image, Input} from 'react-native-elements';
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
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                marginLeft: '20%',
                marginTop: '20%',
                position: 'relative',
              }}>
              <Image
                style={{
                  width: wp('60%'),
                  height: hp('25%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/logo-icon-login.png')}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: '21%',
                marginTop: '83%',
                position: 'absolute',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                OLÁ, EFETUE SEU LOGIN DE ACESSO:
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: '14%',
                marginTop: '95%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('73%'),
                  height: hp('6.5%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/bt-login-facebook.png')}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: '14%',
                marginTop: '113%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('73%'),
                  height: hp('6.5%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/bt-login-gmail.png')}
              />
            </View>

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <View
                style={{
                  flex: 1,
                  marginLeft: '15%',
                  marginTop: '131%',
                  position: 'absolute',
                }}>
                <Image
                  style={{
                    width: wp('73%'),
                    height: hp('6.5%'),
                    resizeMode: 'cover',
                  }}
                  source={require('../../imagens/bt-login-email.png')}
                />
              </View>
            </TouchableWithoutFeedback>

            <View
              style={{
                flex: 1,
                marginLeft: '42%',
                marginRight: '15%',
                marginTop: '171%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('18%'),
                  height: hp('9%'),
                  resizeMode: 'cover',
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

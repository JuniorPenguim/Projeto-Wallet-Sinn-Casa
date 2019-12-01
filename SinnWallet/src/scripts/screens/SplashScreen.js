import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {Image} from 'react-native-elements';
import {Container} from 'native-base';
import NavigationService from '../../../NavigationService';
import {ImageBackground, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(function() {
      NavigationService.simpleNavigate('LoginRedes');
    }, 5000);
  }

  render() {
    return (
      <Container>
        <ImageBackground
          style={{width: windowW, height: windowH}}
          resizeMode="cover"
          source={require('../../imagens/splash.png')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View
              style={{
                marginLeft: wp('42%'),
                marginTop: hp('3%'),
              }}>
              <Image
                style={{
                  width: 65,
                  height: 65,
                }}
                source={require('../../imagens/logo-sinn-selo.png')}
              />
            </View>

            <View
              style={{
                marginLeft: wp('15%'),
                marginTop: hp('15%'),
              }}>
              <Image
                style={{
                  width: 300,
                  height: 50,
                }}
                source={require('../../imagens/logo-splash.png')}
              />
            </View>

            <View
              style={{
                marginLeft: wp('20%'),
                marginTop: hp('2.5%'),
              }}>
              <Image
                style={{
                  width: 250,
                  height: 150,
                }}
                source={require('../../imagens/icon-splash.png')}
              />
            </View>

            <View
              style={{
                marginLeft: wp('10.5%'),
                marginTop: hp('8%'),
              }}>
              <Text style={{color: '#FFFF', fontWeight: 'bold', fontSize: 17}}>
                FISCALIZAÇÃO DO SISTEMA EDUCACIONAL
              </Text>
            </View>

            <View
              style={{
                marginLeft: wp('21%'),
              }}>
              <Text style={{color: '#FFFF', fontWeight: 'bold', fontSize: 17}}>
                PREFEITURA DO RIO DE JANEIRO
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: hp('3.3%'),
              }}>
              <Image
                style={{
                  width: 410,
                  height: 105,
                  resizeMode: 'stretch',
                }}
                source={require('../../imagens/imagem-rodape-ilustracao-splash.png')}
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

import React, {Component} from 'react';
import {Container} from 'native-base';
import * as colorClass from '../constants/ColorClass';
import * as styleClass from '../constants/StyleClass';
import {Button, Input, Image, Text} from 'react-native-elements';
import {ImageBackground, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Biometrics from 'react-native-biometrics';
import NavigationService from '../../../NavigationService';

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
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/splash-2.png')}>
          <View style={{flex: 1}}>
            <View
              style={{
                marginLeft: '20%',
                marginTop: '20%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: 255,
                  height: 210,
                }}
                source={require('../../imagens/logo-icon-login.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '30%',
                marginTop: '79%',
                position: 'absolute',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                ENTRE COM SEUS DADOS
              </Text>
            </View>

            <View
              style={{
                marginLeft: '19%',
                marginTop: '83%',
                position: 'absolute',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold'}}>
                PARA EFETURAR SEU LOGIN DE ACESSO:
              </Text>
            </View>

            <View
              style={{
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
                source={require('../../imagens/bt-branco.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '19%',
                marginTop: '98.5%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 23,
                }}
                source={require('../../imagens/ico-email.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '14%',
                marginTop: '113%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('73%'),
                  height: hp('6.5%'),
                }}
                source={require('../../imagens/bt-branco.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '20%',
                marginTop: '117.5%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('3.5%'),
                  height: hp('2%'),
                }}
                source={require('../../imagens/ico-password.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '8%',
                marginTop: '131%',
                position: 'absolute',
              }}>
              <Button
                title="ENTRAR"
                onPress={() => NavigationService.simpleNavigate('Iniciar')}
                containerStyle={styleClass.loginStyles.enterButton}
                buttonStyle={{
                  backgroundColor: colorClass.colors.gray,
                  width: '120%',
                  height: '110%',
                  borderRadius: 25,
                }}
              />
            </View>

            <View
              style={{
                marginLeft: wp('43%'),
                marginRight: wp('15%'),
                marginTop: hp('87%'),
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                }}
                source={require('../../imagens/logo-sinn-selo.png')}
              />
            </View>

            <View>
              <Input
                placeholder="Entre com seu e-mail"
                placeholderTextColor="#000"
                overflow="hidden"
                autoCapitalize="none"
                marginTop="100.5%"
                marginLeft="25%"
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
              />

              <Input
                placeholder="Digite a sua senha"
                placeholderTextColor="#000"
                overflow="hidden"
                autoCapitalize="none"
                marginTop="6%"
                marginLeft="25%"
                secureTextEntry={true}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

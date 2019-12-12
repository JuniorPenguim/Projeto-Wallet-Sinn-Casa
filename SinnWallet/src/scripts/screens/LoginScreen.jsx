import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import Biometrics from 'react-native-biometrics';
import {TextInput} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NavigationService from '../../../NavigationService';
import * as styleClass from '../constants/StyleClass';

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
      <KeyboardAvoidingView>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/splash-2.png')}>
          {/*      
            <View style={styleClass.loginStyles.viewIconeUm}>
              <Image
                style={styleClass.loginStyles.imagemIconeUm}
                source={require('../../imagens/ico-email.png')}
              />
            </View>         

            <View style={styleClass.loginStyles.viewIconeDois}>
              <Image
                style={styleClass.loginStyles.imagemIconeDois}
                source={require('../../imagens/ico-password.png')}
              />
            </View>   */}

          <View style={styleClass.loginStyles.viewMaior}>
            <View style={styleClass.loginStyles.viewLogoIcone}>
              <Image
                style={styleClass.loginStyles.imagemLogoIcone}
                resizeMode="contain"
                source={require('../../imagens/logo-icon-login.png')}
              />
              <Text style={styleClass.loginStyles.mensagemTextoUm}>
                ENTRE COM SEUS DADOS
              </Text>
              <Text style={styleClass.loginStyles.mensagemTextoDois}>
                PARA EFETURAR SEU LOGIN DE ACESSO:
              </Text>
            </View>
            <View style={styleClass.loginStyles.viewBotoes}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: wp('6.5%'),
                    height: hp('4.1%'),
                  }}
                  source={require('../../imagens/ico-email.png')}
                />
                <TextInput
                  placeholder="Entre com seu e-mail"
                  placeholderTextColor="black"
                  style={styleClass.loginStyles.inputUm}></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('3%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: wp('5%'),
                    height: hp('3%'),
                  }}
                  source={require('../../imagens/ico-password.png')}
                />
                <TextInput
                  placeholder="Digite a sua senha"
                  placeholderTextColor="black"
                  style={styleClass.loginStyles.inputDois}></TextInput>
              </View>
              <Button
                title="ENTRAR"
                onPress={() => NavigationService.simpleNavigate('Iniciar')}
                containerStyle={styleClass.loginStyles.botaoContainer}
                buttonStyle={styleClass.loginStyles.botaoStyle}
              />
              <Image
                style={styleClass.loginStyles.imagemSelo}
                resizeMode="contain"
                source={require('../../imagens/logo-sinn-selo.png')}
              />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

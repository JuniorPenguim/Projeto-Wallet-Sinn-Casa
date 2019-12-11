import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';
import Biometrics from 'react-native-biometrics';


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
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../../imagens/splash-2.png')}>
        <View style={styleClass.loginRedesStyles.viewMaior}>
          <View style={styleClass.loginRedesStyles.viewLogo}>
            <Image
              style={styleClass.loginRedesStyles.imagemLogo}
              source={require('../../imagens/logo-icon-login.png')}
            />
          </View>

          <View style={styleClass.loginRedesStyles.viewTexto}>
            <Text style={styleClass.loginRedesStyles.mensagemTexto}>
              OLÁ, EFETUE SEU LOGIN DE ACESSO:
            </Text>
          </View>

          <View style={styleClass.loginRedesStyles.viewBotao}>
            <Image
              style={styleClass.loginRedesStyles.imagemBotao}
              source={require('../../imagens/bt-login-facebook.png')}
            />

            <Image
              style={styleClass.loginRedesStyles.imagemBotaoDois}
              source={require('../../imagens/bt-login-gmail.png')}
            />

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <Image
                style={styleClass.loginRedesStyles.imagemBotaoTres}
                source={require('../../imagens/bt-login-email.png')}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styleClass.loginRedesStyles.viewSelo}>
            <Image
              style={styleClass.loginRedesStyles.imagemSelo}
              source={require('../../imagens/logo-sinn-selo.png')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  // componentDidMount(){

  //   this._idSignIn();

  // }
}

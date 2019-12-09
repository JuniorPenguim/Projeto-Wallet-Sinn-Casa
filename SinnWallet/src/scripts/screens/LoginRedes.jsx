import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Image,
} from 'react-native';

import NavigationService from '../../../NavigationService';
import Biometrics from 'react-native-biometrics';
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
        style={{width: windowW, height: windowH}}
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

          <View style={styleClass.loginRedesStyles.viewBotaoFace}>
            <Image
              style={styleClass.loginRedesStyles.imagemBotao}
              source={require('../../imagens/bt-login-facebook.png')}
            />
          </View>

          <View style={styleClass.loginRedesStyles.viewBotaoGmail}>
            <Image
              style={styleClass.loginRedesStyles.imagemBotao}
              source={require('../../imagens/bt-login-gmail.png')}
            />
          </View>

          <TouchableWithoutFeedback
            onPress={() => NavigationService.simpleNavigate('ScanScanner')}>
            <View style={styleClass.loginRedesStyles.viewBotaoEmail}>
              <Image
                style={styleClass.loginRedesStyles.imagemBotao}
                source={require('../../imagens/bt-login-email.png')}
              />
            </View>
          </TouchableWithoutFeedback>

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

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

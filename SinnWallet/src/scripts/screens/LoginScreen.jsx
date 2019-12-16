import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Image, Text, Icon} from 'react-native-elements';
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
              <View style={styleClass.loginStyles.searchSectionUm}>
                <Icon
                  style={styleClass.loginStyles.searchIcon}
                  name="at"
                  type="font-awesome"
                  size={hp('4%')}
                  color="#000"
                />
                <TextInput
                  style={styleClass.loginStyles.input}
                  placeholder="Entre com seu e-mail"
                  placeholderTextColor="black"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styleClass.loginStyles.searchSectionDois}>
                <Icon
                  style={styleClass.loginStyles.searchIcon}
                  name="asterisk"
                  type="font-awesome"
                  size={hp('4%')}
                  color="#000"
                />
                <TextInput
                  style={styleClass.loginStyles.input}
                  placeholder="Digite a sua senha"
                  placeholderTextColor="black"
                  underlineColorAndroid="transparent"
                  secureTextEntry
                />
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

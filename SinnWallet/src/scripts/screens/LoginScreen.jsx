import React, {Component} from 'react';
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
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../../imagens/splash-2.png')}>
        <View style={styleClass.loginStyles.viewMaior}>
          <View style={styleClass.loginStyles.viewLogoIcone}>
            <Image
              style={styleClass.loginStyles.imagemLogoIcone}
              source={require('../../imagens/logo-icon-login.png')}
            />
          </View>

          <View style={styleClass.loginStyles.viewTextoUm}>
            <Text style={styleClass.loginStyles.mensagemTextos}>
              ENTRE COM SEUS DADOS
            </Text>
          </View>

          <View style={styleClass.loginStyles.viewTextoDois}>
            <Text style={styleClass.loginStyles.mensagemTextos}>
              PARA EFETURAR SEU LOGIN DE ACESSO:
            </Text>
          </View>

          <View style={styleClass.loginStyles.viewBotaoBUm}>
            <Image
              style={styleClass.loginStyles.imagemBotoesB}
              source={require('../../imagens/bt-branco.png')}
            />
          </View>

          <View style={styleClass.loginStyles.viewIconeUm}>
            <Image
              style={styleClass.loginStyles.imagemIconeUm}
              source={require('../../imagens/ico-email.png')}
            />
          </View>

          <View style={styleClass.loginStyles.viewBotaoBDois}>
            <Image
              style={styleClass.loginStyles.imagemBotoesB}
              source={require('../../imagens/bt-branco.png')}
            />
          </View>

          <View style={styleClass.loginStyles.viewIconeDois}>
            <Image
              style={styleClass.loginStyles.imagemIconeDois}
              source={require('../../imagens/ico-password.png')}
            />
          </View>

          <View style={styleClass.loginStyles.viewBotaoEntrar}>
            <Button
              title="ENTRAR"
              onPress={() => NavigationService.simpleNavigate('Iniciar')}
              containerStyle={styleClass.loginStyles.botaoEntrar}
              buttonStyle={styleClass.loginStyles.botaoEntrarStyle}
            />
          </View>

          <View style={styleClass.loginStyles.viewSelo}>
            <Image
              style={styleClass.loginStyles.imagemSelo}
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
    );
  }
}

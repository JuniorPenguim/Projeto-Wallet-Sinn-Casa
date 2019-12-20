import React, {Component} from 'react';
import {ImageBackground, Image, Text, View} from 'react-native';


import * as styleClass from '../constants/StyleClass';
import NavigationService from '../../../NavigationService';
import { translate } from '../../i18n';

export default class SplashScreen extends Component {
    async componentDidMount() {
      setTimeout(function() {
        NavigationService.simpleNavigate('LoginRedes');
      }, 5000);
    }

  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../../imagens/splash.png')}>
        <View style={styleClass.splashStyles.viewMaior}>
          <View style={styleClass.splashStyles.viewSelo}>
            <Image
              style={styleClass.splashStyles.imagemSelo}
              source={require('../../imagens/logo-sinn-selo.png')}
            />
          </View>
          <View style={styleClass.splashStyles.viewLogo}>
            <Image
              style={styleClass.splashStyles.imagemLogo}
              source={require('../../imagens/logo-splash.png')}
            />
            <Image
              style={styleClass.splashStyles.imagemIcone}
              source={require('../../imagens/icon-splash.png')}
            />
          </View>
          <View style={styleClass.splashStyles.viewTextos}>
            <Text adjustsFontSizeToFit style={styleClass.splashStyles.textoUm}>{translate('splashUm')}</Text>
            <Text
              adjustsFontSizeToFit
              style={styleClass.splashStyles.textoDois}>{translate('splashDois')}</Text>
          </View>
          <View style={styleClass.splashStyles.viewRodape}>
            <Image
              style={styleClass.splashStyles.imagemRodape}
              source={require('../../imagens/imagem-rodape-ilustracao-splash.png')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

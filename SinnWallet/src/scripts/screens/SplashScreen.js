import React, {Component} from 'react';
import NavigationService from '../../../NavigationService';
import {ImageBackground, Dimensions, Image, Text, View} from 'react-native';
import * as styleClass from '../constants/StyleClass';

export default class SplashScreen extends Component {
   async componentDidMount() {
     setTimeout(function() {
       NavigationService.simpleNavigate('LoginRedes');
     }, 5000);
   }

  render() {
    return (
      
        <ImageBackground
          style={{width: windowW, height: windowH}}
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
            </View>

            <View style={styleClass.splashStyles.viewIcone}>
              <Image
                style={styleClass.splashStyles.imagemIcone}
                source={require('../../imagens/icon-splash.png')}
              />
            </View>

            <View style={styleClass.splashStyles.viewTextoUm}>
              <Text style={styleClass.splashStyles.texto}>
                FISCALIZAÇÃO DO SISTEMA EDUCACIONAL
              </Text>
            </View>

            <View style={styleClass.splashStyles.viewTextoDois}>
              <Text style={styleClass.splashStyles.texto}>
                PREFEITURA DO RIO DE JANEIRO
              </Text>
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

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

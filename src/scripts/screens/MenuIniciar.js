import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Text,
  } from 'react-native';
import {Drawer} from 'native-base';



import NavigationService from '../../../NavigationService';
import MenuInterno from './MenuInterno';
import {translate} from '../../i18n/index';
import * as styleClass from '../constants/StyleClass';



export default class MenuIniciar extends Component {
  closeDrawer = () => {
    this._drawer._root.close();
  };

  openDrawer() {
    this._drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={
          <MenuInterno
            navigator={this._navigator}
            closeDrawer={this.closeDrawer}
          />
        }
        onClose={() => this.closeDrawer()}>
        
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            <View style={styleClass.menuIniciarStyles.viewMaior}>
              <View style={styleClass.menuIniciarStyles.viewHead}>
                <Image
                  style={styleClass.menuIniciarStyles.imagemLogo}
                  source={require('../../imagens/logo-internas-header.png')}
                />
                <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                  <View style={styleClass.menuIniciarStyles.viewMenu}>
                    <Image
                      style={styleClass.menuIniciarStyles.imagemMenu}
                      source={require('../../imagens/ico-menu-abrir.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <Image
                style={styleClass.menuIniciarStyles.imagemLinha}
                source={require('../../imagens/line-div-header.png')}
              />
              <View style={styleClass.menuIniciarStyles.viewApresentacao}>
                <Image
                  style={styleClass.menuIniciarStyles.imagemApresentacao}
                  source={require('../../imagens/imagem-apresentacao.png')}
                /> 
              </View>
              
            </View>
             
            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Perfil')}>
              <View>
                <Image
                  style={styleClass.menuIniciarStyles.imagemBotao}
                  source={require('../../imagens/bt-limpo-sair.png')}
                />
                <Text style={styleClass.menuIniciarStyles.textoBotao}>{translate('iniciarBotao')}</Text>
              </View>

            </TouchableWithoutFeedback>
                     
          </ImageBackground>        
      </Drawer>
    );
  }
}

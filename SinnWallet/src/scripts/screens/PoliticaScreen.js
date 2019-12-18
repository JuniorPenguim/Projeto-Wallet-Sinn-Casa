import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
} from 'react-native';
import {Drawer} from 'native-base';

import * as styleClass from '../constants/StyleClass';
import NavigationService from '../../../NavigationService';
import MenuInterno from './MenuInterno';

export default class PoliticaScreen extends Component {
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
          <View style={styleClass.politicaStyles.viewMaior}>
            <View style={styleClass.politicaStyles.viewHead}>
              <TouchableWithoutFeedback
                onPress={() => NavigationService.simpleNavigate('Perfil')}>
                <Image
                  style={styleClass.politicaStyles.imagemSeta}
                  source={require('../../imagens/seta-voltar.png')}
                />
              </TouchableWithoutFeedback>
              <Image
                style={styleClass.politicaStyles.imagemLogo}
                source={require('../../imagens/logo-internas-header.png')}
              />
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View style={styleClass.politicaStyles.viewMenu}>
                  <Image
                    style={styleClass.politicaStyles.imagemMenu}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Image
              style={styleClass.politicaStyles.imagemLinha}
              source={require('../../imagens/line-div-header.png')}
            />
            <Text style={{textAlign: 'center'}}>
              ALGUMA COISA SOBRE POLÍTICA DE PRIVACIDADE
            </Text>
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}

import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {Text} from 'react-native-elements';
import {Container, Drawer} from 'native-base';

import MenuInterno from './MenuInterno';
import * as styleClass from '../constants/StyleClass';
import NavigationService from '../../../NavigationService';

export default class CarteiraScreen extends Component {
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
        <Container>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            <View style={styleClass.carteiraStyles.viewMaior}>
              <View style={styleClass.carteiraStyles.viewHead}>
                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Perfil')}>
                  <Image
                    style={styleClass.carteiraStyles.imagemSeta}
                    source={require('../../imagens/seta-voltar.png')}
                  />
                </TouchableWithoutFeedback>
                <Image
                  style={styleClass.carteiraStyles.imagemLogo}
                  source={require('../../imagens/logo-internas-header.png')}
                />
                <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                  <View style={styleClass.carteiraStyles.viewMenu}>
                    <Image
                      style={styleClass.carteiraStyles.imagemMenu}
                      source={require('../../imagens/ico-menu-abrir.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <Image
                style={styleClass.carteiraStyles.imagemLinha}
                source={require('../../imagens/line-div-header.png')}
              />
              <Text style={styleClass.carteiraStyles.textoCarteira}>
                Minha carteira
              </Text>
              <View style={styleClass.carteiraStyles.viewDocumentos}></View>
              <View style={styleClass.carteiraStyles.viewBottom}>
                <Text style={styleClass.carteiraStyles.textoBottom}>
                  Adicione um novo documento digital à sua{' '}
                  <Text style={styleClass.carteiraStyles.textoBottomUm}>
                    wallet
                  </Text>
                </Text>

                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Captura')}>
                  <Image
                    style={styleClass.carteiraStyles.imagemDocumento}
                    source={require('../../imagens/bt-novo-documento.png')}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </ImageBackground>
        </Container>
      </Drawer>
    );
  }
}

import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-elements';
import {Container, Drawer} from 'native-base';

import SideBar from './MenuInterno';
import * as styleClass from '../constants/StyleClass';
import NavigationService from '../../../NavigationService';

export default class SplashScreen extends Component {
  closeDrawer() {
    this._drawer._root.close();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}>
        <Container>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            <View style={styleClass.CarteiraStyles.viewMaior}>
              <View style={styleClass.CarteiraStyles.viewHead}>
                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Perfil')}>
                  <Image
                    style={styleClass.CarteiraStyles.imagemSeta}
                    source={require('../../imagens/seta-voltar.png')}
                  />
                </TouchableWithoutFeedback>
                <Image
                  style={styleClass.CarteiraStyles.imagemLogo}
                  source={require('../../imagens/logo-internas-header.png')}
                />
                <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                  <View style={styleClass.CarteiraStyles.viewMenu}>
                    <Image
                      style={styleClass.CarteiraStyles.imagemMenu}
                      source={require('../../imagens/ico-menu-abrir.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <Image
                style={styleClass.CarteiraStyles.imagemLinha}
                source={require('../../imagens/line-div-header.png')}
              />
              <Text style={styleClass.CarteiraStyles.textoCarteira}>
                Minha carteira
              </Text>
              <View style={styleClass.CarteiraStyles.viewDocumentos}></View>
              <View style={styleClass.CarteiraStyles.viewBottom}>
                <Text style={styleClass.CarteiraStyles.textoBottom}>
                  Adicione um novo documento digital à sua{' '}
                  <Text style={styleClass.CarteiraStyles.textoBottomUm}>
                    wallet
                  </Text>
                </Text>

                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Captura')}>
                  <Image
                    style={styleClass.CarteiraStyles.imagemDocumento}
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

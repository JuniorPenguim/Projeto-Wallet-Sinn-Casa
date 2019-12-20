import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,  
} from 'react-native';
import {Drawer} from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';


import * as styleClass from '../constants/StyleClass';
import MenuInterno from './MenuInterno';
import NavigationService from '../../../NavigationService';
import { translate } from '../../i18n';



export default class QRCodeScreen extends Component {
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
          <View style={styleClass.qrStyles.viewMaior}>
            <View style={styleClass.qrStyles.viewHead}>
              <TouchableWithoutFeedback
                onPress={() => NavigationService.simpleNavigate('Perfil')}>
                <Image
                  style={styleClass.qrStyles.imagemSeta}
                  source={require('../../imagens/seta-voltar.png')}
                />
              </TouchableWithoutFeedback>
              <Image
                style={styleClass.qrStyles.imagemLogo}
                source={require('../../imagens/logo-internas-header.png')}
              />
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View style={styleClass.qrStyles.viewMenu}>
                  <Image
                    style={styleClass.qrStyles.imagemMenu}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Image
              style={styleClass.qrStyles.imagemLinha}
              source={require('../../imagens/line-div-header.png')}
            />

            <Text style={styleClass.qrStyles.textoUm}>{translate('scannerUm')}</Text>

            <Text style={styleClass.qrStyles.textoDois}>{translate('scannerDois')}{' '}
              <Text style={styleClass.qrStyles.textoDoisUm}>{translate('scannerDoisUm')}{' '}</Text>              
            </Text>
            <Text style={styleClass.qrStyles.textoTres}>{translate('scannerTres')}</Text>
            

            <View style={styleClass.qrStyles.viewQr}>
              <QRCodeScanner
                onRead={e => alert(e.data)}
                showMarker={true}
                checkAndroid6Permissions={true}
                ref={elem => {
                  this.scanner = elem;
                }}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={styleClass.qrStyles.imagemBotao}
                source={require('../../imagens/bt-novo-limpo.png')}
              />
              <Text style={styleClass.qrStyles.textoBotao}>{translate('scannerChave')}</Text>
            </View>
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}

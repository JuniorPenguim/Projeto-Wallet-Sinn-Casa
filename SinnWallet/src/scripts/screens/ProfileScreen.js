import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Switch,
  AsyncStorage,
} from 'react-native';
import {Text, Drawer} from 'native-base';
import {connect} from 'react-redux';

import NavigationService from '../../../NavigationService';
import MenuInterno from './MenuInterno';
import * as styleClass from '../constants/StyleClass';
import {clickButton} from '../../actions/index';

export class ProfileScreen extends Component {
  // state = {
  //   switchValue: false,
  // };

  // _handleToggleSwitch = () => {
  //   this.setState(state => ({switchValue: !state.switchValue}));
  //   this._storeData();
  // }

  closeDrawer = () => {
    this._drawer._root.close();
  };
  openDrawer() {
    this._drawer._root.open();
  }
  mudaSwitch(e) {
    this.props.clickButton(String(e)); //chamada de função do redux
    this._storeData(e); //chamada de função para guardar dado do switch com redux
  }

  _storeData = valorSwitchSalvo => {
    try {
      const valorSwitch = JSON.stringify(valorSwitchSalvo);
      AsyncStorage.setItem('@biometry_switch', valorSwitch).then(() => {
        AsyncStorage.getItem('@biometry_switch').then(response => {
          console.log('response do storage', response);
        });
      });
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    {
      console.log(this.props.newValue.newValue);
    }
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
          <View style={styleClass.profileStyles.viewMaior}>
            <View style={styleClass.profileStyles.viewHead}>
              <Image
                style={styleClass.profileStyles.imagemLogo}
                source={require('../../imagens/logo-internas-header.png')}
              />
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View style={styleClass.profileStyles.viewMenu}>
                  <Image
                    style={styleClass.profileStyles.imagemMenu}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Image
              style={styleClass.profileStyles.imagemLinha}
              source={require('../../imagens/line-div-header.png')}
            />
            <View style={styleClass.profileStyles.viewPerfil}>
              <Image
                style={styleClass.profileStyles.imagemMascara}
                source={require('../../imagens/mascara-foto-usuario.png')}
              />
              <Text style={styleClass.profileStyles.textoMascara}>N</Text>
            </View>
            <View style={styleClass.profileStyles.viewTextos}>
              <Text style={styleClass.profileStyles.textoNome}>
                Nome Extremamente Grande Para Teste de Centragem
              </Text>
              <Text style={styleClass.profileStyles.textoCpf}>
                000.000.000-00
              </Text>
            </View>

            <View style={styleClass.profileStyles.viewBotoes}>
              <Image
                style={styleClass.profileStyles.imagemBotoes}
                source={require('../../imagens/bt-limpo-publica.png')}
              />
              <Text style={styleClass.profileStyles.textoChavePublica}>
                CHAVE PÚBLICA
              </Text>

              <Image
                style={styleClass.profileStyles.imagemBotoes}
                source={require('../../imagens/bt-limpo-privada.png')}
              />
              <Text style={styleClass.profileStyles.textoChavePrivada}>
                CHAVE PRIVADA
              </Text>

              <View style={styleClass.profileStyles.viewSwitch}>
                <Switch
                  onValueChange={e => this.mudaSwitch(e)}
                  value={this.props.newValue.newValue === 'true'}
                  style={styleClass.profileStyles.chaveSwtich}
                />
                <Text style={styleClass.profileStyles.textoSwitch}>
                  Usar Touch ID
                </Text>
              </View>
            </View>
            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('LoginRedes')}>
              <View style={styleClass.profileStyles.viewSair}>
                <Image
                  style={styleClass.profileStyles.imagemBotoes}
                  source={require('../../imagens/bt-sair-da-conta.png')}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}
function mapStateToProps(state) {
  return {newValue: state.newValue};
}

export default connect(mapStateToProps, {clickButton})(ProfileScreen);

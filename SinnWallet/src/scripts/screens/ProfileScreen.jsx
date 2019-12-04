import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import {Container, Text, Drawer} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import SideBar from './MenuInterno';
import * as styleClass from '../constants/StyleClass';


export default class ProfileScreen extends Component {
  state = {
    switchValue: false,
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({switchValue: !state.switchValue}));

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
        content={<SideBar navigator={this._navigator}/>}
        onClose={() => this.closeDrawer()}>        
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            <View style={styleClass.profileStyles.viewMaior}>
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View style={styleClass.profileStyles.viewBarra}>
                  <Image
                    style={styleClass.profileStyles.imagemBarra}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Login')}>
                <View style={styleClass.profileStyles.viewSeta}>
                  <Image
                    style={styleClass.profileStyles.imagemSeta}
                    source={require('../../imagens/seta-voltar.png')}
                  />
                </View>
              </TouchableWithoutFeedback>

              <View style={styleClass.profileStyles.viewLogo}>
                <Image
                  style={styleClass.profileStyles.imagemLogo}
                  source={require('../../imagens/logo-internas-header.png')}
                />
              </View>

              <View style={styleClass.profileStyles.viewLinha}>
                <Image
                  style={styleClass.profileStyles.imagemLinha}
                  source={require('../../imagens/line-div-header.png')}
                />
              </View>

              <View style={styleClass.profileStyles.viewColuna}>
                <View style={styleClass.profileStyles.viewMascara}>
                  <Image
                    style={styleClass.profileStyles.imagemMascara}
                    source={require('../../imagens/mascara-foto-usuario.png')}
                  />
                  <Text style={styleClass.profileStyles.textoMascara}>N</Text>
                </View>

                <View style={styleClass.profileStyles.viewTexto}>
                  <Text style={styleClass.profileStyles.textoNome}>Nome Sobrenome</Text>
                  <Text style={styleClass.profileStyles.textoCpf}>000.000.000-00</Text>
                </View>

                <View style={styleClass.profileStyles.viewChavePublica}>
                  <Image
                    style={styleClass.profileStyles.imagemBotoes}
                    source={require('../../imagens/bt-limpo-publica.png')}
                  />
                  <Text style={styleClass.profileStyles.textoChavePublica}>CHAVE PÚBLICA</Text>
                </View>

                <View style={styleClass.profileStyles.viewChavePrivada}>
                  <Image
                    style={styleClass.profileStyles.imagemBotoes}
                    source={require('../../imagens/bt-limpo-privada.png')}
                  />
                  <Text style={styleClass.profileStyles.textoChavePrivada}>CHAVE PRIVADA</Text>
                </View>

                <View style={styleClass.profileStyles.viewSwitch}>
                  <Switch
                    onValueChange={this._handleToggleSwitch}
                    value={this.state.switchValue}
                    style={styleClass.profileStyles.chaveSwtich}
                  />
                  <Text style={styleClass.profileStyles.textoSwitch}>Usar Touch ID</Text>
                </View>

                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Login')}>
                  <View style={styleClass.profileStyles.viewSair}>
                    <Image
                      style={styleClass.profileStyles.imagemBotoes}
                      source={require('../../imagens/bt-sair-da-conta.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </ImageBackground>        
      </Drawer>
    );
  }
}

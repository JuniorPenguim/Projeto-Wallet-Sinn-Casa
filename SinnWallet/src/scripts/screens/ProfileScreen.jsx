import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import {Text, Drawer} from 'native-base';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NavigationService from '../../../NavigationService';
import SideBar from './MenuInterno';
import * as styleClass from '../constants/StyleClass';
import {clickButton} from '../../actions/index';

export class ProfileScreen extends Component {
  state = {
    switchValue: this.props.newValue.newValue,
  };
  // _handleToggleSwitch = () =>
  //   this.setState(state => ({switchValue: !state.switchValue}));
  _handleSwitch(value) {
    this.props.clickButton(value);
  }

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
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/bg-internas.png')}>
          <View style={styleClass.profileStyles.viewMaior}>
            <View style={{width: wp('100%'), height:hp('15%'), alignItems:'center', flexDirection: 'row'}}>              
                <Image
                  style={{                
                    
                    marginLeft: wp('4%'),
                    resizeMode: 'contain',
                    width: wp('50%'),
                    height: wp('30%'),
                    
                  }}
                  source={require('../../imagens/logo-internas-header.png')}
                />
                <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                  <View style={{ flex: 1, marginRight:wp('4%'), alignItems:'flex-end'}}>
                    <Image
                      style={{                                        
                        resizeMode: 'contain',
                        width: wp('9%'),
                        height: hp('9%'),
                      }}
                      source={require('../../imagens/ico-menu-abrir.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>             

              </View>
              <Image
                  style={{
                    marginTop:hp('-3%'),                 
                    resizeMode: 'contain',
                    width: wp('100%'),
                    height: hp('1%'),
                  }}
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
                  onValueChange={this._handleSwitch}
                  value={this.state.switchValue}
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

export default connect(mapStateToProps)(ProfileScreen);

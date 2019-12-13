import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {Drawer} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import NavigationService from '../../../NavigationService';
import SideBar from './MenuInterno';
import * as styleClass from '../constants/StyleClass';

export default class ProfileScreen extends Component {
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
        <View style={styleClass.menuIniciarStyles.viewMaior}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
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

            <View style={styleClass.menuIniciarStyles.viewApresentacao}>
              <Image
                style={styleClass.menuIniciarStyles.imagemApresentacao}
                source={require('../../imagens/imagem-apresentacao.png')}
              />
            </View>
            <View style={styleClass.menuIniciarStyles.viewBotao}>
              <TouchableWithoutFeedback
                onPress={() => NavigationService.simpleNavigate('Perfil')}>
                <Image
                  style={styleClass.menuIniciarStyles.imagemBotao}
                  source={require('../../imagens/bt-iniciar.png')}
                />
              </TouchableWithoutFeedback>
            </View>

            <View style={styleClass.menuIniciarStyles.viewTextos}>
              <Text style={styleClass.menuIniciarStyles.textoUm}>
                Seja bem vindo à sua
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoDois}>
                Sinn.wallet
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoTres}>
                Através do{' '}
                <Text style={styleClass.menuIniciarStyles.textoTresUm}>
                  Sinn.id
                </Text>
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                você tem acesso à
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                sua{' '}
                <Text style={styleClass.menuIniciarStyles.textoCincoUm}>
                  wallet,
                </Text>{' '}
                aonde
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                todas as suas informações
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                serão guardadas e protegidas,
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                através de criptografia e altos
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                padrões de segurança
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoDez}>
                Documentos digitais,
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoTres}>
                assinaturas, consultas médicas,
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoTres}>
                histórico escolas, contratos
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoBlocoTres}>
                e muito mais.
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoQuatorze}>
                Com toda segurança e aonde estiver,
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoQuinze}>
                seus dados estarão com você.
              </Text>
              <Text style={styleClass.menuIniciarStyles.textoDezesseis}>
                Vamos começar?
              </Text>
            </View>
          </ImageBackground>
        </View>
      </Drawer>
    );
  }
}

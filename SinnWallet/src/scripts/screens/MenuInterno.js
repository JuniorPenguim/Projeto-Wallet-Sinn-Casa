import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import * as styleClass from '../constants/StyleClass';

//import ProfileScreen, * as profileScreen from '../screens/ProfileScreen';
//import {Avatar} from 'react-native-elements';
//import NavigationService from '../../../NavigationService';

export default class MenuInterno extends Component {
  render() {
    return (
      <Content style={styleClass.menuInterno.container}>
        <View style={styleClass.menuInterno.viewMaior}>
          <View style={styleClass.menuInterno.viewBotao}>
            <TouchableWithoutFeedback>
              <Image
                style={styleClass.menuInterno.imagemBotao}
                source={require('../../imagens/ico-menu-fechar.png')}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styleClass.menuInterno.viewHead}>
            <Image
              style={styleClass.menuInterno.imagemMascara}
              source={require('../../imagens/mascara-foto-usuario-interna-menu.png')}
            />
            <Text style={styleClass.menuInterno.textoMascara}>N</Text>
            <View style={styleClass.menuInterno.viewTextos}>
              <Text style={styleClass.menuInterno.textoNome}>
                Nome Sobrenome Muito Grande 
              </Text>
              <Text style={styleClass.menuInterno.textoCpf}>
                000.000.000-00
              </Text>
            </View>
          </View>

          <Image
            style={styleClass.menuInterno.imagemLinha}
            source={require('../../imagens/line-div-menu.png')}
          />

          <View style={styleClass.menuInterno.viewBody}>
            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Carteira')}>
              <View style={styleClass.menuInterno.viewCarteira}>
                <Image
                  style={styleClass.menuInterno.imagemCarteira}
                  source={require('../../imagens/ico-menu-carteira.png')}
                />
                <Text style={styleClass.menuInterno.textoCarteira}>
                  Carteira
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styleClass.menuInterno.viewConta}>
              <Image
                style={styleClass.menuInterno.imagemConta}
                source={require('../../imagens/ico-menu-conta.png')}
              />
              <Text style={styleClass.menuInterno.textoConta}>Conta</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('ScanScanner')}>
              <View style={styleClass.menuInterno.viewContratos}>
                <Image
                  style={styleClass.menuInterno.imagemContratos}
                  source={require('../../imagens/ico-menu-contratos.png')}
                />
                <Text style={styleClass.menuInterno.textoContratos}>
                  Contratos
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <View style={styleClass.menuInterno.viewColecionaveis}>
              <Image
                style={styleClass.menuInterno.imagemColecionaveis}
                source={require('../../imagens/ico-menu-colecionaveis.png')}
              />
              <Text style={styleClass.menuInterno.textoColecionaveis}>
                Colecionáveis
              </Text>
            </View>

            <View style={styleClass.menuInterno.viewPolitica}>
              <Image
                style={styleClass.menuInterno.imagemPolitica}
                source={require('../../imagens/ico-menu-politica-privacidade.png')}
              />
              <Text style={styleClass.menuInterno.textoPolitica}>
                Política de Privacidade
              </Text>
            </View>

            <View style={styleClass.menuInterno.viewTermo}>
              <Image
                style={styleClass.menuInterno.imagemTermo}
                source={require('../../imagens/ico-menu-termo-responsabilidade.png')}
              />
              <Text style={styleClass.menuInterno.textoTermo}>
                Termo de Responsabilidade
              </Text>
            </View>

            <View style={styleClass.menuInterno.viewSobre}>
              <Image
                style={styleClass.menuInterno.imagemSobre}
                source={require('../../imagens/ico-menu-sobre.png')}
              />
              <Text style={styleClass.menuInterno.textoSobre}>Sobre</Text>
            </View>

            <View style={styleClass.menuInterno.viewSuporte}>
              <Image
                style={styleClass.menuInterno.imagemSuporte}
                source={require('../../imagens/ico-menu-suporte.png')}
              />
              <Text style={styleClass.menuInterno.textoSuporte}>Suporte</Text>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

import React, { Component } from 'react'
import { View, Image, TouchableWithoutFeedback, ImageBackground, Text, Dimensions, BackHandler } from 'react-native'
import { Drawer } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import * as styleClass from '../constants/StyleClass'
import NavigationService from '../../../NavigationService'
import MenuInterno from './MenuInterno'

export default class PoliticaScreen extends Component {
    closeDrawer = () => {
        this._drawer._root.close()
    }
    openDrawer() {
        this._drawer._root.open()
    }

    render() {
        return (
            <Drawer
                ref={ref => {
                    this._drawer = ref
                }}
                content={<MenuInterno navigator={this._navigator} closeDrawer={this.closeDrawer} />}
                onClose={() => this.closeDrawer()}
            >
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    source={require('../../imagens/bg-internas.png')}
                >
                    <View style={styleClass.politicaStyles.viewMaior}>
                        <View style={styleClass.politicaStyles.viewHead}>
                            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Perfil')}>
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
                        <Text
                            style={{
                                fontSize: 0.025 * windowH,
                                marginTop: hp('2%'),
                                color: 'white',
                                marginLeft: wp('3%'),
                                textAlign: 'left'
                            }}
                        >
                            POLÍTICA DE PRIVACIDADE
                        </Text>
                        <Text
                            style={{
                                fontSize: 0.022 * windowH,
                                marginTop: hp('2%'),
                                color: 'white',
                                marginLeft: wp('3%'),
                                marginRight: wp('3%')
                            }}
                        >
                            A politica de privacidade é o documento por meio do qual a pessoa física ou jurídica que
                            mantém um site ou aplicativo expõe e explica a todos os interessados a forma como os dados
                            pessoais dos usuários da plataforma serão tratados.
                        </Text>
                        <Text
                            style={{
                                fontSize: 0.022 * windowH,
                                marginTop: hp('1%'),
                                color: 'white',
                                marginLeft: wp('3%'),
                                marginRight: wp('3%')
                            }}
                        >
                            A proteção de dados pessoais ganhou especial relevância após a entrada em vigor do
                            Regulamento Geral de Proteção de Dados da União Europeia (RGPD), também conhecido como
                            General Data Protection Regulation (GDPR), que é o regulamento adotado pelos países da União
                            Europeia sobre o assunto. Esta norma estabeleceu uma série de exigências e de punições
                            àqueles que realizam o tratamento de dados pessoais de usuários da internet.
                        </Text>
                        <Text
                            style={{
                                fontSize: 0.022 * windowH,
                                color: 'white',
                                marginLeft: wp('3%'),
                                marginRight: wp('3%')
                            }}
                        >
                            A adoção do RGPD pela União Europeia levou o Brasil a adotar uma legislação muito
                            semelhante, que também trata do assunto: a Lei Federal n.º 13.709 (Lei de Proteção de Dados
                            Pessoais).
                        </Text>
                        <Text
                            style={{
                                fontSize: 0.022 * windowH,
                                marginTop: hp('1%'),
                                color: 'white',
                                marginLeft: wp('3%'),
                                marginRight: wp('3%')
                            }}
                        >
                            Vale ressaltar, neste ponto, que, ainda que a pessoa física ou jurídica responsável pelo
                            site ou aplicativo seja brasileira, é possível que se lhe apliquem ambas as normas, a
                            depender do caso.
                        </Text>
                    </View>
                </ImageBackground>
            </Drawer>
        )
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
  
          NavigationService.simpleNavigate('Perfil')
          
        });
        
      }
}

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height

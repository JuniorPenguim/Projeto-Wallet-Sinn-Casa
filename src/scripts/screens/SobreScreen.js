import React, { Component } from 'react'
import { View, Image, TouchableWithoutFeedback, ImageBackground, Text, Dimensions, BackHandler } from 'react-native'
import { Drawer } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import * as styleClass from '../constants/StyleClass'
import NavigationService from '../../../NavigationService'
import MenuInterno from './MenuInterno'

export default class SobreScreen extends Component {
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
                            SOBRE
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
                            A Sinn.wallet foi desenvolvida pela Sinn Tecnologia, o aplicativo faz parte do nosso pacote
                            de soluções de tecnologias disruptivas e do novo panorama de desenvolvimento da empresa.
                        </Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text
                                style={{
                                    fontSize: 0.025 * windowH,
                                    marginTop: hp('1%'),
                                    color: 'white',
                                    marginLeft: wp('3%'),
                                    marginRight: wp('3%')
                                }}
                            >
                                ENTRE EM CONTATO CONOSCO EM CASO DE DÚVIDAS:
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Image
                                style={{
                                    marginTop: hp('3%'),
                                    resizeMode: 'contain',
                                    width: wp('70%'),
                                    height: hp('10%')
                                }}
                                source={require('../../imagens/bt-contato-email.png')}
                            />
                            <Image
                                style={{
                                    resizeMode: 'contain',
                                    width: wp('70%'),
                                    height: hp('10%')
                                }}
                                source={require('../../imagens/bt-contato-telefone.png')}
                            />
                        </View>
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

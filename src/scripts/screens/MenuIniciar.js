import React, { Component } from 'react'
import { View, ImageBackground, Image, TouchableWithoutFeedback, Text } from 'react-native'
import { Drawer } from 'native-base'

import NavigationService from '../../../NavigationService'
import MenuInterno from './MenuInterno'
import * as styleClass from '../constants/StyleClass'

export default class MenuIniciar extends Component {
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
                <View style={styleClass.menuIniciarStyles.viewMaior}>
                    <ImageBackground
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                        source={require('../../imagens/bg-internas.png')}
                    >
                        <View style={styleClass.menuIniciarStyles.viewHead}>
                            <Image
                                style={styleClass.menuIniciarStyles.imagemLogo}
                                source={require('../../imagens/logo-internas-header.png')}
                            />
                            <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                                <View style={styleClass.menuIniciarStyles.viewMenu}>
                                    <Image
                                        style={styleClass.menuIniciarStyles.imagemMenu}
                                        source={require('../../imagens/ico-menu-abrir.png')}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <Image
                            style={styleClass.menuIniciarStyles.imagemLinha}
                            source={require('../../imagens/line-div-header.png')}
                        />
                        <View style={styleClass.menuIniciarStyles.viewApresentacao}>
                            <Image
                                style={styleClass.menuIniciarStyles.imagemApresentacao}
                                source={require('../../imagens/imagem-apresentacao.png')}
                            />
                        </View>
                        <View style={styleClass.menuIniciarStyles.viewBotao}>
                            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Perfil')}>
                                <Image
                                    style={styleClass.menuIniciarStyles.imagemBotao}
                                    source={require('../../imagens/bt-iniciar.png')}
                                />
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styleClass.menuIniciarStyles.viewTextos}>
                            <Text style={styleClass.menuIniciarStyles.textoUm}>Seja bem vindo à sua</Text>
                            <Text style={styleClass.menuIniciarStyles.textoDois}>Sinn.wallet</Text>
                            <Text style={styleClass.menuIniciarStyles.textoTres}>
                                Através do <Text style={styleClass.menuIniciarStyles.textoTresUm}>Sinn.id</Text>
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>você tem acesso à</Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                                sua <Text style={styleClass.menuIniciarStyles.textoCincoUm}>wallet,</Text> aonde
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>todas as suas informações</Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                                serão guardadas e protegidas,
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>
                                através de criptografia e altos
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoDois}>padrões de segurança</Text>
                            <Text style={styleClass.menuIniciarStyles.textoDez}>Documentos digitais,</Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoTres}>
                                assinaturas, consultas médicas,
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoTres}>
                                histórico escolas, contratos
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoBlocoTres}>e muito mais.</Text>
                            <Text style={styleClass.menuIniciarStyles.textoQuatorze}>
                                Com toda segurança e aonde estiver,
                            </Text>
                            <Text style={styleClass.menuIniciarStyles.textoQuinze}>seus dados estarão com você.</Text>
                            <Text style={styleClass.menuIniciarStyles.textoDezesseis}>Vamos começar?</Text>
                        </View>
                    </ImageBackground>
                </View>
            </Drawer>
        )
    }
}

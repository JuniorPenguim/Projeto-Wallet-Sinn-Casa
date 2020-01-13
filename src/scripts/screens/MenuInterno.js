import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Content } from 'native-base'
import { Icon } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import NavigationService from '../../../NavigationService'
import * as styleClass from '../constants/StyleClass'
import { translate } from '../../i18n'

export default class MenuInterno extends Component {
    state = {
        mostraElemento: false,
        drop: true
    }

    mudaEstadoDrop() {
        this.setState({ mostraElemento: !this.state.mostraElemento })
        this.setState({ drop: !this.state.drop })
    }

    dropDown() {
        return (
            <Icon
                containerStyle={{ flex: 1, justifyContent: 'center' }}
                name="chevron-down"
                type="font-awesome"
                size={hp('4%')}
                color="white"
            ></Icon>
        )
    }

    dropUp() {
        return (
            <Icon
                containerStyle={{ flex: 1, justifyContent: 'center' }}
                name="chevron-up"
                type="font-awesome"
                size={hp('4%')}
                color="white"
            ></Icon>
        )
    }

    chamaDrop() {
        return (
            <View style={{backgroundColor: '#2f2f2f'}}>
                <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Politica')}>
                    <View style={styleClass.menuInterno.viewPolitica}>
                        <Image
                            style={styleClass.menuInterno.imagemPolitica}
                            source={require('../../imagens/ico-menu-politica-privacidade.png')}
                        />
                        <Text style={styleClass.menuInterno.textoPolitica}>{translate('internoPolitica')}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styleClass.menuInterno.viewTermo}>
                    <Image
                        style={styleClass.menuInterno.imagemTermo}
                        source={require('../../imagens/ico-menu-termo-responsabilidade.png')}
                    />
                    <Text style={styleClass.menuInterno.textoTermo}>{translate('internoTermo')}</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Sobre')}>
                    <View style={styleClass.menuInterno.viewSobre}>
                        <Image
                            style={styleClass.menuInterno.imagemSobre}
                            source={require('../../imagens/ico-menu-sobre.png')}
                        />
                        <Text style={styleClass.menuInterno.textoSobre}>{translate('internoSobre')}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styleClass.menuInterno.viewSuporte}>
                    <Image
                        style={styleClass.menuInterno.imagemSuporte}
                        source={require('../../imagens/ico-menu-suporte.png')}
                    />
                    <Text style={styleClass.menuInterno.textoSuporte}>{translate('internoSuporte')}</Text>
                </View>
            </View>
        )
    }

    render() {
        
        return (
            <Content style={styleClass.menuInterno.container}>
                <View style={styleClass.menuInterno.viewMaior}>
                    <View style={styleClass.menuInterno.viewBotao}>
                        <TouchableWithoutFeedback onPress={this.props.closeDrawer}>
                            <Image
                                style={styleClass.menuInterno.imagemBotao}
                                source={require('../../imagens/ico-menu-fechar.png')}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styleClass.menuInterno.viewHead}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={styleClass.menuInterno.imagemMascara}
                                source={require('../../imagens/mascara-foto-usuario-interna-menu.png')}
                            />
                            <Text style={styleClass.menuInterno.textoMascara}>N</Text>
                        </View>
                        <View style={styleClass.menuInterno.viewTextos}>
                            <Text style={styleClass.menuInterno.textoNome}>Nome Sobrenome Muito Grande</Text>
                            <Text style={styleClass.menuInterno.textoCpf}>000.000.000-00</Text>
                        </View>
                    </View>
                    <Image
                        style={styleClass.menuInterno.imagemLinha}
                        source={require('../../imagens/line-div-menu.png')}
                    />

                    <ScrollView>
                        <View style={styleClass.menuInterno.viewBody}>
                            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Carteira')}>
                                <View style={styleClass.menuInterno.viewCarteira}>
                                    <Image
                                        style={styleClass.menuInterno.imagemCarteira}
                                        source={require('../../imagens/ico-menu-carteira.png')}
                                    />
                                    <Text style={styleClass.menuInterno.textoCarteira}>
                                        {translate('internoCarteira')}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styleClass.menuInterno.viewConta}>
                                <Image
                                    style={styleClass.menuInterno.imagemConta}
                                    source={require('../../imagens/ico-menu-conta.png')}
                                />
                                <Text style={styleClass.menuInterno.textoConta}>{translate('internoConta')}</Text>
                            </View>

                            <View style={styleClass.menuInterno.viewContratos}>
                                <Image
                                    style={styleClass.menuInterno.imagemContratos}
                                    source={require('../../imagens/ico-menu-contratos.png')}
                                />
                                <Text style={styleClass.menuInterno.textoContratos}>
                                    {translate('internoContratos')}
                                </Text>
                            </View>

                            <View style={styleClass.menuInterno.viewColecionaveis}>
                                <Image
                                    style={styleClass.menuInterno.imagemColecionaveis}
                                    source={require('../../imagens/ico-menu-colecionaveis.png')}
                                />
                                <Text style={styleClass.menuInterno.textoColecionaveis}>
                                    {translate('internoColecionaveis')}
                                </Text>
                            </View>

                            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('ScanScanner')}>
                                <View style={styleClass.menuInterno.viewAutenticacao}>
                                    <Image
                                        style={styleClass.menuInterno.imagemAutenticacao}
                                        source={require('../../imagens/ico-menu-autenticacao.png')}
                                    />
                                    <Text style={styleClass.menuInterno.textoAutenticacao}>
                                        {translate('internoAutenticacao')}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => this.mudaEstadoDrop()}>
                                <View>
                                    <View style={styleClass.menuInterno.viewConfiguracoes}>
                                        <Image
                                            style={styleClass.menuInterno.imagemConfiguracoes}
                                            source={require('../../imagens/ico-menu-contratos.png')}
                                        />
                                        <Text style={styleClass.menuInterno.textoConfigurações}>
                                            {translate('internoConfiguracoes')}
                                        </Text>
                                        {this.state.drop ? this.dropDown() : this.dropUp()}
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            {this.state.mostraElemento ? this.chamaDrop() : null}
                        </View>
                    </ScrollView>
                </View>
            </Content>
        )
    }
}

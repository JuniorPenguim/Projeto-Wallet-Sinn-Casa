import React, { Component } from 'react'
import { View, ImageBackground, Image, TouchableWithoutFeedback, Switch } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Text, Drawer } from 'native-base'
import { connect } from 'react-redux'

import NavigationService from '../../../NavigationService'
import MenuInterno from './MenuInterno'
import * as styleClass from '../constants/StyleClass'
import { actions } from '../../store/ducks/mainDuck'

export class ProfileScreen extends Component {
    closeDrawer = () => {
        this._drawer._root.close()
    }
    openDrawer() {
        this._drawer._root.open()
    }
    mudaSwitch(e) {
        this.props.setSwitch(String(e)) //chamada de função do redux
        this._storeData(e) //chamada de função para guardar dado do switch com redux
    }

    _storeData = valorSwitchSalvo => {
        try {
            const valorSwitch = JSON.stringify(valorSwitchSalvo)
            AsyncStorage.setItem('@biometry_switch', valorSwitch).then(() => {
                AsyncStorage.getItem('@biometry_switch').then(response => {})
            })
        } catch (error) {
            // Error saving data
        }
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
                            <Text style={styleClass.profileStyles.textoCpf}>000.000.000-00</Text>
                        </View>

                        <View style={styleClass.profileStyles.viewBotoes}>
                            <Image
                                style={styleClass.profileStyles.imagemBotoes}
                                source={require('../../imagens/bt-limpo-publica.png')}
                            />
                            <Text style={styleClass.profileStyles.textoChavePublica}>CHAVE PÚBLICA</Text>

                            <Image
                                style={styleClass.profileStyles.imagemBotoes}
                                source={require('../../imagens/bt-limpo-privada.png')}
                            />
                            <Text style={styleClass.profileStyles.textoChavePrivada}>CHAVE PRIVADA</Text>

                            <View style={styleClass.profileStyles.viewSwitch}>
                                <Switch
                                    onValueChange={e => this.mudaSwitch(e)}
                                    value={this.props.switchValue === 'true'}
                                    style={styleClass.profileStyles.chaveSwtich}
                                />
                                <Text style={styleClass.profileStyles.textoSwitch}>Usar Touch ID</Text>
                            </View>
                        </View>
                        <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('LoginRedes')}>
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
        )
    }
}

const { setSwitch } = actions

function mapStateToProps(state) {
    return { switchValue: state.switchValue }
}

export default connect(mapStateToProps, { setSwitch })(ProfileScreen)

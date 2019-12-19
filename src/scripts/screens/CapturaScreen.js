import React, { Component } from 'react'
import { View, Image, TouchableWithoutFeedback, ImageBackground, Text } from 'react-native'
import { Drawer } from 'native-base'
import { RNCamera } from 'react-native-camera'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import * as styleClass from '../constants/StyleClass'
import NavigationService from '../../../NavigationService'
import MenuInterno from './MenuInterno'

export default class CapturaScreen extends Component {
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true }
            const data = await this.camera.takePictureAsync(options)

            alert(data.uri)
        }
    }

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
                    <View style={styleClass.capturaStyles.viewMaior}>
                        <View style={styleClass.capturaStyles.viewHead}>
                            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Carteira')}>
                                <Image
                                    style={styleClass.capturaStyles.imagemSeta}
                                    source={require('../../imagens/seta-voltar.png')}
                                />
                            </TouchableWithoutFeedback>
                            <Image
                                style={styleClass.capturaStyles.imagemLogo}
                                source={require('../../imagens/logo-internas-header.png')}
                            />
                            <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                                <View style={styleClass.capturaStyles.viewMenu}>
                                    <Image
                                        style={styleClass.capturaStyles.imagemMenu}
                                        source={require('../../imagens/ico-menu-abrir.png')}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <Image
                            style={styleClass.capturaStyles.imagemLinha}
                            source={require('../../imagens/line-div-header.png')}
                        />

                        <Text style={styleClass.capturaStyles.textoUm}>Adicionar documento</Text>

                        <View style={styleClass.capturaStyles.viewCamera}>
                            <RNCamera
                                width={wp('100%')}
                                height={hp('70%')}
                                ref={camera => {
                                    this.camera = camera
                                }}
                                resizeMode="contain"
                                type={RNCamera.Constants.Type.back}
                                autoFocus={RNCamera.Constants.AutoFocus.on}
                                flashMode={RNCamera.Constants.FlashMode.off}
                                permissionDialogTitle={'Permission to use camera'}
                                permissionDialogMessage={'We need your permission to use your camera phone'}
                            />

                            <Image
                                style={styleClass.capturaStyles.imagemMascara}
                                source={require('../../imagens/mascara-captura-foto-documento.png')}
                            />
                        </View>

                        <TouchableWithoutFeedback
                            onPress={this.takePicture}
                            style={styleClass.capturaStyles.estiloCaptura}
                        >
                            <View style={styleClass.capturaStyles.viewCaptura}>
                                <Image
                                    style={styleClass.capturaStyles.imagemCaptura}
                                    source={require('../../imagens/bt-capturar-documento.png')}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>
            </Drawer>
        )
    }
}

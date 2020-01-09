import React, { Component } from 'react'
import { ImageBackground, View, ScrollView, ToastAndroid } from 'react-native'
import { Button, Image, Text, Icon } from 'react-native-elements'
import Biometrics from 'react-native-biometrics'
import { TextInput } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Header } from 'react-navigation-stack'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as axios from 'axios'
import { Toast, Root } from "native-base"

import NavigationService from '../../../NavigationService'
import * as styleClass from '../constants/StyleClass'
import { translate } from '../../i18n'

export default class LoginScreen extends Component {
    state = {
        email: '',
        senha: ''
    }

    _idSignIn() {
        Biometrics.simplePrompt('Load fingerprint')
            .then(() => {
                //console.log('successful fingerprint provided');
                NavigationService.simpleNavigate('Perfil')
            })
            .catch(error => {
                //console.log(error);
            })
    }

    loga(usuario, senha) {
        //console.log(usuario, senha)

        let collection = {}
        collection.email = this.state.email,
        collection.password = this.state.senha


        if (this.state.email.length === 0 || this.state.senha.length === 0) {
            Toast.show({
                text: 'Por favor, preencha os campos corretamente',
                buttonText: "Ok",                
                type: 'warning',
                duration: 3000
            })

        } 

        const data = {
            login: this.state.email,
            password: this.state.senha
        }
        axios
            .post('http://206.189.216.9:8080/' + 'login', data)
            .then(resp => {
                NavigationService.simpleNavigate('Iniciar')
            })
            .catch(function(error) {
                console.log(error)
            })
            
    }
    

    render() {
        return (
            <Root>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
                source={require('../../imagens/splash-2.png')}
            >
                {/* <KeyboardAwareScrollView scrollEnabled={true} ref={'scroll'}> */}
                <View style={styleClass.loginStyles.viewMaior}>
                    <View style={styleClass.loginStyles.viewLogoIcone}>
                        <Image
                            style={styleClass.loginStyles.imagemLogoIcone}
                            resizeMode="contain"
                            source={require('../../imagens/logo-icon-login.png')}
                        />
                        <Text style={styleClass.loginStyles.mensagemTextoUm}>{translate('loginUm')}</Text>
                        <Text style={styleClass.loginStyles.mensagemTextoDois}>{translate('loginDois')}</Text>
                    </View>
                    <View style={styleClass.loginStyles.viewBotoes}>
                        <View style={styleClass.loginStyles.searchSectionUm}>
                            <Icon
                                style={styleClass.loginStyles.searchIcon}
                                name="at"
                                type="font-awesome"
                                size={hp('4%')}
                                color="#000"
                            />

                            <TextInput
                                style={styleClass.loginStyles.input}
                                onChangeText={text => this.setState({ email: text })}
                                placeholder={translate('loginEmail')}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styleClass.loginStyles.searchSectionDois}>
                            <Icon
                                style={styleClass.loginStyles.searchIcon}
                                name="asterisk"
                                type="font-awesome"
                                size={hp('4%')}
                                color="#000"
                            />
                            <TextInput
                                style={styleClass.loginStyles.input}
                                onChangeText={text => this.setState({ senha: text })}
                                placeholder={translate('loginSenha')}
                                placeholderTextColor="black"
                                underlineColorAndroid="transparent"
                                secureTextEntry
                            />
                        </View>

                        <Button
                            title={translate('loginEntrar')}
                            onPress={() => this.loga(this.state.email, this.state.senha)}
                            containerStyle={styleClass.loginStyles.botaoContainer}
                            buttonStyle={styleClass.loginStyles.botaoStyle}
                        />
                        <Image
                            style={styleClass.loginStyles.imagemSelo}
                            resizeMode="contain"
                            source={require('../../imagens/logo-sinn-selo.png')}
                        />
                    </View>
                </View>
                {/* </KeyboardAwareScrollView> */}
            </ImageBackground>
            </Root>
        )
    }
}

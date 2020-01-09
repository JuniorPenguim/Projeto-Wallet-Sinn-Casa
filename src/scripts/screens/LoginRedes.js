import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
  Image,
  BackHandler   
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Biometrics from 'react-native-biometrics';
import {connect} from 'react-redux';


import NavigationService from '../../../NavigationService';
import * as styleClass from '../constants/StyleClass';
import { actions } from '../../store/ducks/mainDuck'
import {translate} from '../../i18n/index';




export class LoginRedesScreen extends Component {
  _idSignIn() {
    Biometrics.simplePrompt('Load fingerprint')
      .then(() => {
        //console.log('successful fingerprint provided');
        NavigationService.simpleNavigate('Perfil');
      })
      .catch(error => {
        //console.log(error);
      });
  }

  existeLeitor() {
    Biometrics.isSensorAvailable().then(resultObject => {
        const available = resultObject

        if (available && this.props.switchValue === 'true') {
            this._idSignIn()
        }
    })
}

  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../../imagens/splash-2.png')}>
        <View style={styleClass.loginRedesStyles.viewMaior}>
          <View style={styleClass.loginRedesStyles.viewLogo}>
            <Image
              style={styleClass.loginRedesStyles.imagemLogo}
              source={require('../../imagens/logo-icon-login.png')}
            />
          </View>

          <View style={styleClass.loginRedesStyles.viewTexto}>
            <Text style={styleClass.loginRedesStyles.mensagemTexto}>{translate('loginRedesOla')}</Text>
            
          </View>

          <View style={styleClass.loginRedesStyles.viewBotao}>
            <Image
              style={styleClass.loginRedesStyles.imagemBotao}
              source={require('../../imagens/bt-login-facebook.png')}
            />
            <Text style={styleClass.loginRedesStyles.textoFacebook}>{translate('loginRedesFacebook')}</Text>

            <Image
              style={styleClass.loginRedesStyles.imagemBotaoDois}
              source={require('../../imagens/bt-login-gmail.png')}
            />
            <Text style={styleClass.loginRedesStyles.textoGmail}>{translate('loginRedesGmail')}</Text>

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <View>
                <Image
                  style={styleClass.loginRedesStyles.imagemBotaoTres}
                  source={require('../../imagens/bt-login-email.png')}
                />
                <Text style={styleClass.loginRedesStyles.textoEmail}>{translate('loginRedesEmail')}</Text>
              </View>
              
            </TouchableWithoutFeedback>
            
          </View>

          <View style={styleClass.loginRedesStyles.viewSelo}>
            <Image
              style={styleClass.loginRedesStyles.imagemSelo}
              source={require('../../imagens/logo-sinn-selo.png')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  componentDidMount() {
    try {
        AsyncStorage.getItem('@biometry_switch').then(response => {
            this.props.setSwitch(response)
            this.existeLeitor()
        })
    } catch (error) {
        // Error saving data
    }
    BackHandler.addEventListener('hardwareBackPress', function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.  
      
      return true;
    });
}
}

const { setSwitch } = actions

function mapStateToProps(state) {
  return { switchValue: state.switchValue }
}

export default connect(mapStateToProps, { setSwitch })(LoginRedesScreen)

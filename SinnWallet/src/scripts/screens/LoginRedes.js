import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
  Image,
  AsyncStorage,
} from 'react-native';
import Biometrics from 'react-native-biometrics';
import {connect} from 'react-redux';

import NavigationService from '../../../NavigationService';
import * as styleClass from '../constants/StyleClass';
import {clickButton} from '../../actions';

export class LoginRedesScreen extends Component {
  _idSignIn() {
    Biometrics.simplePrompt('Load fingerprint')
      .then(() => {
        console.log('successful fingerprint provided');
        NavigationService.simpleNavigate('Perfil');
      })
      .catch(error => {
        console.log(error);
      });
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
            <Text style={styleClass.loginRedesStyles.mensagemTexto}>
              OLÁ, EFETUE SEU LOGIN DE ACESSO:
            </Text>
          </View>

          <View style={styleClass.loginRedesStyles.viewBotao}>
            <Image
              style={styleClass.loginRedesStyles.imagemBotao}
              source={require('../../imagens/bt-login-facebook.png')}
            />

            <Image
              style={styleClass.loginRedesStyles.imagemBotaoDois}
              source={require('../../imagens/bt-login-gmail.png')}
            />

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <Image
                style={styleClass.loginRedesStyles.imagemBotaoTres}
                source={require('../../imagens/bt-login-email.png')}
              />
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

  // componentDidMount() {
  //   try {
  //     AsyncStorage.getItem('@biometry_switch').then(response => {
  //       this.props.clickButton(response);
  //       console.log('props', this.props.newValue.newValue);
  //       console.log('response do did', response);

  //       if (this.props.newValue.newValue === 'true') {
  //         this._idSignIn();
  //       }
  //     });
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }
}

function mapStateToProps(state) {
  return {newValue: state.newValue};
}

export default connect(mapStateToProps, {clickButton})(LoginRedesScreen);

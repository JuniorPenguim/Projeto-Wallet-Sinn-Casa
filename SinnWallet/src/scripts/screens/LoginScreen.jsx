import React, {Component} from 'react';
import {Container} from 'native-base';
import {View,Text} from 'react-native';
import * as colorClass from '../constants/ColorClass';
import * as styleClass from '../constants/StyleClass';
import {Button, Input, Image} from 'react-native-elements';
import {KeyboardAvoidingView, Keyboard, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Biometrics from 'react-native-biometrics';
import NavigationService from '../../../NavigationService';
import {ImageBackground} from 'react-native';

export default class LoginScreen extends Component {
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
      <Container style={styleClass.loginStyles.loginContainer}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/splash-2.png')}>
          {/*  <KeyboardAvoidingView
            style={{flex: 1, marginLeft: wp('10%'), marginRight: wp('10%')}}
            behavior="padding"
            enabled>
            <View style={styleClass.loginStyles.inputView}>
              <Input //input do email
                placeholder="Entre com seu e-mail"
                overflow="hidden"
                autoCapitalize="none"
                //onChangeText = {this.changeOrgState}

                inputStyle={styleClass.loginStyles.inputStyle}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
              />
            </View>

            <View style={styleClass.loginStyles.inputView}>
              <Input
                style={{flex: 1}} //input da senha
                placeholder="Digite sua senha"
                autoCapitalize="none"
                //onChangeText = {this.changePassState}
                secureTextEntry={true}
                inputStyle={styleClass.loginStyles.inputStyle}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
              />
            </View> 

            {/*<TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 5, right: 10}} onPress={()=>console.log('Esqueci a senha')} style={{marginLeft:'60%'}} >
              <Text style = {{alignSelf:'flex-end',fontSize:12}}> {constantClass.texts.esqueciSenha}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView> */}                 
                 

          <View style={{flex:1}}>

            <Image style={{
              alignSelf:'center',
              resizeMode:'contain',
               width:'80%',height:'50%'

              }} source ={require('../../imagens/logo-icon-login.png')}/>

            <Button
              title="Entrar"
              //color = {constantClass.colors.blue}
              onPress={() => NavigationService.simpleNavigate('Perfil')}
              containerStyle={styleClass.loginStyles.enterButton}
              buttonStyle={{
                //backgroundColor: constantClass.colors.enterBtnBlue,
                borderRadius: 10,
              }}
            />

            <Button
              title="Entrar com a digital"
              //color = {constantClass.colors.blue}
              onPress={() => this._idSignIn()} //chamando popup para utilizar digital
              containerStyle={styleClass.loginStyles.enterButton}
              buttonStyle={{
                //backgroundColor: constantClass.colors.enterBtnBlue,
                borderRadius: 10,
              }}
            />
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

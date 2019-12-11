import React, {Component} from 'react';
import {ImageBackground, View, Dimensions, KeyboardAvoidingView} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import Biometrics from 'react-native-biometrics';
import { TextInput } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';




import NavigationService from '../../../NavigationService';
import * as styleClass from '../constants/StyleClass';

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
      <KeyboardAvoidingView>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../../imagens/splash-2.png')}>
        {/*      
          <View style={styleClass.loginStyles.viewIconeUm}>
            <Image
              style={styleClass.loginStyles.imagemIconeUm}
              source={require('../../imagens/ico-email.png')}
            />
          </View>         

          <View style={styleClass.loginStyles.viewIconeDois}>
            <Image
              style={styleClass.loginStyles.imagemIconeDois}
              source={require('../../imagens/ico-password.png')}
            />
          </View>   */}
            
        <View style={{flex: 1, flexDirection:'column'}}>         

              
          <View style={{flex: 1, marginTop: hp('10%'), alignItems:'center'}}>
            <Image
              style={{                            
                width: windowW*0.71,
                height: windowH*0.33,
              }}
              resizeMode="contain"
              source={require('../../imagens/logo-icon-login.png')}
            />
            <Text style={{marginTop: hp('2%'), textAlign:'center', color: 'gray',fontWeight: 'bold', fontSize: 0.02 * windowH}}>
              ENTRE COM SEUS DADOS
            </Text>
            <Text style={{textAlign:'center', color: 'gray',fontWeight: 'bold', fontSize: 0.02 * windowH}}>
              PARA EFETURAR SEU LOGIN DE ACESSO:
            </Text> 
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>         

            
            
            <TextInput placeholder="Entre com seu e-mail" placeholderTextColor="black" style={{fontSize: 0.025 * windowH,  textAlign: 'center', borderRadius: 25 , backgroundColor: 'white', height: hp('7.5%'), width: wp('73%')}}>
               
            </TextInput>              

            <TextInput placeholder="Digite a sua senha" placeholderTextColor="black" style={{fontSize: 0.025 * windowH,  marginTop:hp('3%'), textAlign: 'center', borderRadius: 25 , backgroundColor: 'white', height: hp('7.5%'), width: wp('73%')}}>

            </TextInput>                      

            <Button
              title="ENTRAR"
              onPress={() => NavigationService.simpleNavigate('Iniciar')}
              containerStyle={{
                marginLeft: '10%',
                marginRight: '8%',
                marginTop: '4%',
                marginBottom: '3%',
              }}

              buttonStyle={{
                backgroundColor: '#9d9d9d',
                width: wp('73%'),
                height: hp('8%'),
                borderRadius: 25,
              }}
            />

            <Image
              style={{ 
              resizeMode: 'contain',              
              width: wp('20.5%'),
              height: hp('11.5%'),
              }}
              resizeMode="contain"
              source={require('../../imagens/logo-sinn-selo.png')}
            />
          </View>         

        </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;
import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Container} from 'native-base';
import * as styleClass from '../constants/StyleClass';
import {Button, Avatar, Input} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import {DrawerNavigator} from 'react-navigation-drawer';
import { createDrawerNavigator,DrawerActions } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';




export default class ProfileScreen extends Component {
  state = {
    switchValue: true,
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({switchValue: !state.switchValue}));

    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../imagens/ico-password.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
     
    };


  render() {
    return (
      <Container>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/bg-internas.png')}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            {console.log(this.props.navigation.navigate('Notifications'))}
            <View
              style={{
                marginLeft: '85%',
                marginTop: '6%',
                position: 'absolute',
              }}>
              
                
                <Image
                  style={{
                    width: wp('7.5%'),
                    height: hp('3%'),
                    resizeMode: 'cover',
                  }}
                  source={require('../../imagens/ico-menu-abrir.png')}
                />
              
            </View>

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <View
                style={{
                  marginLeft: '2.5%',
                  marginTop: '6%',
                  position: 'absolute',
                }}>
                <Image
                  style={{
                    width: wp('4%'),
                    height: hp('2.5%'),
                    resizeMode: 'cover',
                  }}
                  source={require('../../imagens/seta-voltar.png')}
                />
              </View>
            </TouchableWithoutFeedback>

            <View
              style={{
                marginLeft: '10.5%',
                marginTop: '5.5%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('40%'),
                  height: hp('3%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/logo-internas-header.png')}
              />
            </View>

            <View style={{marginTop: '17%', position: 'absolute'}}>
              <Image
                style={{
                  width: wp('100%'),
                  height: hp('0.15%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/line-div-header.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '38%',
                marginTop: '25%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('25%'),
                  height: hp('15%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/mascara-foto-usuario.png')}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  marginTop: '60%',
                  fontWeight: 'bold',
                }}>
                {' '}
                Nome Sobrenome{' '}
              </Text>
              <Text style={{fontSize: 20, color: 'gray', fontWeight: 'bold'}}>
                {' '}
                000.000.000-00{' '}
              </Text>
            </View>

            <View
              style={{
                marginLeft: '38%',
                marginTop: '25%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('25%'),
                  height: hp('15%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/mascara-foto-usuario.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '14%',
                marginTop: '81%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('73%'),
                  height: hp('7%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/bt-limpo-publica.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '34%',
                marginTop: '59%',
                position: 'absolute',
              }}>
              <Text style={{fontSize: 18, color: 'black', marginTop: '60%'}}>
                CHAVE PÚBLICA
              </Text>
            </View>

            <View
              style={{
                marginLeft: '14%',
                marginTop: '99%',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: wp('73%'),
                  height: hp('7%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/bt-limpo-privada.png')}
              />
            </View>

            <View
              style={{
                marginLeft: '34%',
                marginTop: '77%',
                position: 'absolute',
              }}>
              <Text style={{fontSize: 18, color: 'white', marginTop: '60%'}}>
                CHAVE PRIVADA
              </Text>
            </View>

            <View
              style={{
                marginLeft: '17%',
                marginTop: '123%',
                position: 'absolute',
              }}>
              <Switch
                onValueChange={this._handleToggleSwitch}
                value={this.state.switchValue}
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              />
            </View>

            <View
              style={{
                marginLeft: '46%',
                marginTop: '99%',
                position: 'absolute',
              }}>
              <Text style={{fontSize: 18, color: 'gray', marginTop: '60%'}}>
                Usar Touch ID
              </Text>
            </View>

            <TouchableWithoutFeedback
              onPress={() => NavigationService.simpleNavigate('Login')}>
              <View
                style={{
                  marginLeft: '15%',
                  marginTop: '152%',
                  position: 'absolute',
                }}>
                <Image
                  style={{
                    width: wp('73%'),
                    height: hp('7%'),
                    resizeMode: 'cover',
                  }}
                  source={require('../../imagens/bt-sair-da-conta.png')}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../imagens/ico-password.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),    
  };


  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }

}

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: ProfileScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

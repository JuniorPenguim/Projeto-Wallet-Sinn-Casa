import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import {Container, Text, Drawer} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import SideBar from './MenuInterno';

export default class ProfileScreen extends Component {
  state = {
    switchValue: false,
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({switchValue: !state.switchValue}));

  closeDrawer() {
    
    this._drawer._root.close();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this._navigator}/>}
        onClose={() => this.closeDrawer()}>
        <Container>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View
                  style={{
                    marginLeft: wp('85%'),
                    marginTop: hp('4%'),
                    position: 'absolute',
                  }}>
                  <Image
                    style={{
                      width: 35,
                      height: 30,
                      resizeMode: 'cover',
                    }}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => NavigationService.simpleNavigate('Login')}>
                <View
                  style={{
                    marginLeft: wp('2.5%'),
                    marginTop: hp('5%'),
                    position: 'absolute',
                  }}>
                  <Image
                    style={{
                      width: 13,
                      height: 18,
                      resizeMode: 'cover',
                    }}
                    source={require('../../imagens/seta-voltar.png')}
                  />
                </View>
              </TouchableWithoutFeedback>

              <View
                style={{
                  marginLeft: wp('10%'),
                  marginTop: hp('4.8%'),
                  position: 'absolute',
                }}>
                <Image
                  style={{
                    width: 140,
                    height: 21,
                    resizeMode: 'cover',
                  }}
                  source={require('../../imagens/logo-internas-header.png')}
                />
              </View>

              <View
                style={{
                  marginTop: hp('11%'),
                  marginLeft: wp('3%'),
                  position: 'absolute',
                }}>
                <Image
                  style={{
                    width: 390,
                    height: 1,
                    resizeMode: 'cover',
                  }}
                  source={require('../../imagens/line-div-header.png')}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    marginLeft: wp('38%'),
                    marginTop: hp('15%'),
                  }}>
                  <Image
                    style={{
                      width: 110,
                      height: 127,
                    }}
                    source={require('../../imagens/mascara-foto-usuario.png')}
                  />
                  <Text
                    style={{
                      fontSize: 90,
                      color: 'white',
                      marginLeft: wp('5.5%'),
                      position: 'absolute',
                    }}>
                    N
                  </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      marginTop: hp('2%'),
                      marginLeft: wp('5%'),
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    Nome Sobrenome{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'gray',
                      fontWeight: 'bold',
                      marginLeft: wp('4%'),
                    }}>
                    {' '}
                    000.000.000-00{' '}
                  </Text>
                </View>

                <View
                  style={{
                    marginLeft: wp('15%'),
                    marginTop: hp('5%'),
                  }}>
                  <Image
                    style={{
                      width: 300,
                      height: 60,
                    }}
                    source={require('../../imagens/bt-limpo-publica.png')}
                  />

                  <Text
                    style={{
                      marginLeft: wp('19%'),
                      marginTop: hp('2.5%'),
                      fontSize: 18,
                      color: 'black',
                      position: 'absolute',
                    }}>
                    CHAVE PÚBLICA
                  </Text>
                </View>

                <View
                  style={{
                    marginLeft: wp('15%'),
                    marginTop: hp('4%'),
                  }}>
                  <Image
                    style={{
                      width: 300,
                      height: 60,
                    }}
                    source={require('../../imagens/bt-limpo-privada.png')}
                  />

                  <Text
                    style={{
                      marginLeft: wp('19%'),
                      marginTop: hp('2.5%'),
                      fontSize: 18,
                      color: 'white',
                      position: 'absolute',
                    }}>
                    CHAVE PRIVADA
                  </Text>
                </View>

                <View
                  style={{
                    marginLeft: wp('25%'),
                    marginTop: hp('4%'),
                    flexDirection: 'row',
                  }}>
                  <Switch
                    onValueChange={this._handleToggleSwitch}
                    value={this.state.switchValue}
                    style={{
                      transform: [{scaleX: 2}, {scaleY: 2}],
                      position: 'absolute',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'gray',
                      marginLeft: wp('17%'),
                    }}>
                    Usar Touch ID
                  </Text>
                </View>

                <TouchableWithoutFeedback
                  onPress={() => NavigationService.simpleNavigate('Login')}>
                  <View
                    style={{
                      marginLeft: wp('15%'),
                      marginTop: hp('9%'),
                    }}>
                    <Image
                      style={{
                        width: 300,
                        height: 60,
                      }}
                      source={require('../../imagens/bt-sair-da-conta.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </ImageBackground>
        </Container>
      </Drawer>
    );
  }
}

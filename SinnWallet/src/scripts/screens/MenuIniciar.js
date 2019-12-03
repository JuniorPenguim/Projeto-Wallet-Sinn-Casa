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
    switchValue: true,
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
        content={<SideBar navigator={this._navigator} />}
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
                    
                  }}
                  source={require('../../imagens/line-div-header.png')}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                

                <View style={{marginLeft: wp('5%'), marginTop: hp('15%')}}>

                    <Image
                    style={{
                        width: 220,
                        height: 340,
                        
                    }}
                    source={require('../../imagens/imagem-apresentacao.png')}
                    />

                    <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Perfil')}>
                        <Image
                        style={{
                            marginLeft: wp('8%'),
                            marginTop: hp('20%'),
                            width: 300,
                            height: 60,
                            
                        }}
                        source={require('../../imagens/bt-iniciar.png')}
                        />
                    </TouchableWithoutFeedback>

                </View>

                <Text>oi</Text>
                <Text>oi</Text>

              </View>
            </View>
          </ImageBackground>
        </Container>
      </Drawer>
    );
  }
}

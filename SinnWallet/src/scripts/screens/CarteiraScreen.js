import React, {Component} from 'react';
import {View, Image, TouchableWithoutFeedback, ImageBackground, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';
import {Container, Drawer} from 'native-base';
import NavigationService from '../../../NavigationService';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SideBar from './MenuInterno';

export default class SplashScreen extends Component {


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
                onPress={() => NavigationService.simpleNavigate('Perfil')}>
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
                  flexDirection: 'column',
                }}>
                
                <Text
                    style={{
                    fontSize: 20,
                    color: 'gray',                    
                    marginLeft: wp('6%'),
                    marginTop: hp('13%'),
                    }}>Minha carteira</Text>


                <Text
                    style={{
                    textAlign:'left',
                    fontSize: 22,
                    color: 'white',                    
                    marginLeft: wp('6%'),
                    marginRight: wp('8%'),
                    marginTop: hp('53%'),
                    }}>Adicione um novo documento digital à sua wallet
                </Text>

                <Image
                  style={{
                    marginTop:hp('5%'),
                    marginLeft: wp('13%'),
                    width: 300,
                    height: 60,
                    
                  }}
                  source={require('../../imagens/bt-novo-documento.png')}
                />

                

              </View>
            </View>
          </ImageBackground>
        </Container>
      </Drawer>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

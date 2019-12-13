import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {Drawer} from 'native-base';
import {RNCamera} from 'react-native-camera';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import NavigationService from '../../../NavigationService';
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
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/bg-internas.png')}>
          <View style={{flex: 1, flexDirection: 'column'}}>            
            <View style={{width: wp('100%'), height:hp('15%'), alignItems:'center', flexDirection: 'row'}}>
              <TouchableWithoutFeedback
                onPress={() => NavigationService.simpleNavigate('Perfil')}>
                <Image
                  style={{                    
                    resizeMode: 'contain',
                    marginLeft: wp('2%'),
                    width: wp('5%'),
                    height: hp('5%'),
                  }}
                  source={require('../../imagens/seta-voltar.png')}
                />
              </TouchableWithoutFeedback>
              <Image
                style={{                
                  
                  marginLeft: wp('4%'),
                  resizeMode: 'contain',
                  width: wp('50%'),
                  height: wp('30%'),
                  
                }}
                source={require('../../imagens/logo-internas-header.png')}
              />
              <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                <View style={{ flex: 1, marginRight:wp('4%'), alignItems:'flex-end'}}>
                  <Image
                    style={{                                        
                      resizeMode: 'contain',
                      width: wp('9%'),
                      height: hp('9%'),
                    }}
                    source={require('../../imagens/ico-menu-abrir.png')}
                  />
                </View>
              </TouchableWithoutFeedback>             

            </View>
            <Image
                style={{                 
                  marginTop:hp('-2%'),
                  resizeMode: 'contain',
                  width: wp('100%'),
                  height: hp('1%'),
                }}
                source={require('../../imagens/line-div-header.png')}
              />
            <Text style={{textAlign:'center'}}>ALGUMA COISA SOBRE POLÍTICA DE PRIVACIDADE</Text>                                
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}

const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;


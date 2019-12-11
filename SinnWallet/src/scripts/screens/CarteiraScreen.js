import React, {Component} from 'react';
import {View, Image, TouchableWithoutFeedback, ImageBackground, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';
import {Container, Drawer} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import SideBar from './MenuInterno';
import * as styleClass from '../constants/StyleClass';
import NavigationService from '../../../NavigationService';

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
              
              <View style={{flex:1, flexDirection:'column'}}>
              
                <View style={{flex: 1,flexDirection: 'column',}}>
                  <View style={{flexDirection: 'row',}}>
                    <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Perfil')}>
                      <Image
                          style={{
                            resizeMode:'contain',
                            marginTop:hp('4%'),
                            marginLeft:wp('2%'),
                            width: wp('5%'),
                            height: hp('5%'),
                            
                          }}
                          source={require('../../imagens/seta-voltar.png')}
                      />
                    </TouchableWithoutFeedback>
                    <Image
                      style={{
                      marginTop: hp('5%'),
                      marginLeft: wp('4%'),
                      resizeMode: 'contain',
                      width: 140,
                      height: 21,}}
                      source={require('../../imagens/logo-internas-header.png')}
                    />
                    <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                      <View style={{marginLeft: wp('35%'), marginTop: hp('2%'),}}>
                        <Image
                          style={{
                          resizeMode: 'contain',
                          width: wp('9%'),
                          height: hp('9%'),}}
                          source={require('../../imagens/ico-menu-abrir.png')}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>

                  <Image
                    style={{
                    marginTop: hp('3%'),
                    resizeMode: 'contain',
                    width: wp('100%'),
                    height: 1,}}
                    source={require('../../imagens/line-div-header.png')}
                  />

                <Text
                    style={{
                      fontSize: 0.03 * windowH,
                    color: 'gray',                    
                    marginLeft: wp('6%'),
                    marginTop: hp('2%'),
                    }}>Minha carteira</Text>
                </View>
                <View style={{flex: 2.8}}>

                </View>
                <View style={{flex: 1.1, justifyContent:'flex-start', alignItems:'flex-start'}}>
                  <Text
                        style={{
                        textAlign:'left',
                        fontSize: 0.03 * windowH,
                        color: 'white',                    
                        marginLeft: wp('6%'),
                        marginRight: wp('8%'),
                        marginTop:hp('2%'),
                        
                        }}>Adicione um novo documento digital à sua <Text style={{fontWeight: 'bold'}}>wallet</Text>
                  </Text>

                  <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Captura')}>
                    <Image
                      style={{
                        alignSelf:'center',
                        resizeMode: 'contain',
                        marginTop:hp('2%'),
                        width: wp('70%'),
                        height: hp('10%'),
                        
                      }}
                      source={require('../../imagens/bt-novo-documento.png')}
                    />
                </TouchableWithoutFeedback>

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

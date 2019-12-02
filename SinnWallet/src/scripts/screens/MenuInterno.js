import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import ProfileScreen, * as profileScreen from '../screens/ProfileScreen';


//import {Avatar} from 'react-native-elements';
//import NavigationService from '../../../NavigationService';

export default class MenuInterno extends Component { 

  render() {
    return (
      <Content style={{backgroundColor: '#252525'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View style={{alignItems: 'flex-end'}}>
            
            <TouchableWithoutFeedback onPress={() => this.props.closeDrawer()}>
              <Image
                style={{
                  marginTop: hp('3%'),
                  marginRight: wp('6%'),
                  width: 25,
                  height: 25,
                }}
                source={require('../../imagens/ico-menu-fechar.png')}
              />
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              marginLeft: wp('6%'),
              marginTop: hp('3%'),
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 60,
                height: 70,
              }}
              source={require('../../imagens/mascara-foto-usuario-interna-menu.png')}
            />
            <Text
              style={{
                fontSize: 50,
                color: 'white',
                marginLeft: wp('3%'),
                position: 'absolute',
              }}>
              N
            </Text>

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginLeft: wp('7%'),
                  marginTop: hp('1%'),
                  fontSize: 17,
                  color: 'white',
                }}>
                Nome Sobrenome
              </Text>

              <Text
                style={{
                  marginLeft: wp('7%'),
                  marginTop: hp('1%'),
                  fontSize: 17,
                  color: 'gray',
                }}>
                000.000.000-00
              </Text>
            </View>
          </View>

          <Image
            style={{
              marginLeft: wp('5%'),
              marginTop: hp('4%'),
              width: 290,
              height: 1,
            }}
            source={require('../../imagens/line-div-menu.png')}
          />

          <View
            style={{
              flexDirection: 'column',
            }}>
            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Carteira')}>
              <View
                style={{
                  marginLeft: wp('6%'),
                  marginTop: hp('5%'),
                  flexDirection: 'row',
                }}>
                
                
                <Image
                    style={{
                      marginLeft: wp('1%'),
                      width: 38,
                      height: 28,
                    }}
                    source={require('../../imagens/ico-menu-carteira.png')}
                />

                <Text
                  style={{
                    marginLeft: wp('5%'),
                    marginTop: hp('0.5%'),
                    fontSize: 17,
                    color: 'white',
                  }}>
                  Carteira
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                marginLeft: wp('6%'),
                marginTop: hp('3%'),
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: wp('1.5%'),
                  width: 32.88,
                  height: 30,
                }}
                source={require('../../imagens/ico-menu-conta.png')}
              />

              <Text
                style={{
                  marginLeft: wp('6%'),
                  marginTop: hp('0.5%'),
                  fontSize: 17,
                  color: 'white',
                }}>
                Conta
              </Text>
            </View>

            <View
              style={{
                marginLeft: wp('5%'),
                marginTop: hp('3%'),
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: wp('4%'),
                  width: 24.58,
                  height: 31,
                }}
                source={require('../../imagens/ico-menu-politica-privacidade.png')}
              />

              <Text
                style={{
                  marginLeft: wp('7%'),
                  marginTop: hp('0.5%'),
                  fontSize: 17,
                  color: 'white',
                }}>
                Política de Privacidade
              </Text>
            </View>

            <View
              style={{
                marginLeft: wp('5%'),
                marginTop: hp('3%'),
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: wp('3%'),
                  width: 32.88,
                  height: 31.5,
                }}
                source={require('../../imagens/ico-menu-termo-responsabilidade.png')}
              />

              <Text
                style={{
                  marginLeft: wp('6.4%'),
                  marginTop: hp('0.5%'),
                  fontSize: 17,
                  color: 'white',
                }}>
                Termo de Responsabilidade
              </Text>
            </View>

            <View
              style={{
                marginLeft: wp('5%'),
                marginTop: hp('3%'),
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: wp('3%'),
                  width: 33.84,
                  height: 33.5,
                }}
                source={require('../../imagens/ico-menu-sobre.png')}
              />

              <Text
                style={{
                  marginLeft: wp('6.5%'),
                  marginTop: hp('0.5%'),
                  fontSize: 17,
                  color: 'white',
                }}>
                Sobre
              </Text>
            </View>

            <View
              style={{
                marginLeft: wp('5%'),
                marginTop: hp('3%'),
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: wp('4%'),
                  width: 29.37,
                  height: 29,
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/ico-menu-suporte.png')}
              />

              <Text
                style={{
                  marginLeft: wp('7%'),
                  marginTop: hp('0.5%'),
                  fontSize: 17,
                  color: 'white',
                }}>
                Suporte
              </Text>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';

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
            <TouchableWithoutFeedback>
              <Image
                style={{
                  marginTop: '6%',
                  marginRight: '5%',
                  width: wp('7%'),
                  height: hp('3%'),
                }}
                source={require('../../imagens/ico-menu-fechar.png')}
              />
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              marginLeft: '6%',
              marginTop: '10%',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: wp('16%'),
                height: hp('9.5%'),
              }}
              source={require('../../imagens/mascara-foto-usuario-interna-menu.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginLeft: '15%',
                  marginTop: '3%',
                  fontSize: 17,
                  color: 'white',
                }}>
                Nome Sobrenome
              </Text>

              <Text
                style={{
                  marginLeft: '15%',
                  marginTop: '5%',
                  fontSize: 17,
                  color: 'gray',
                }}>
                000.000.000-00
              </Text>
            </View>
          </View>

          <Image
            style={{
              marginLeft: '5%',
              marginTop: '10%',
              width: wp('72%'),
              height: hp('0.1%'),
            }}
            source={require('../../imagens/line-div-menu.png')}
          />

          <View
            style={{
              flexDirection: 'column',
              //alignItems: 'stretch',
            }}>
            <View
              style={{
                marginLeft: '6%',
                marginTop: '10%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: '1%',
                  width: wp('11.5%'),
                  height: hp('4.5%'),
                }}
                source={require('../../imagens/ico-menu-carteira.png')}
              />

              <Text
                style={{
                  marginLeft: '7%',
                  marginTop: '3%',
                  fontSize: 17,
                  color: 'white',
                }}>
                Carteira
              </Text>
            </View>

            <View
              style={{
                marginLeft: '6%',
                marginTop: '6%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: '2%',
                  width: wp('9.7%'),
                  height: hp('4.5%'),
                }}
                source={require('../../imagens/ico-menu-conta.png')}
              />

              <Text
                style={{
                  marginLeft: '9%',
                  marginTop: '3%',
                  fontSize: 17,
                  color: 'white',
                }}>
                Conta
              </Text>
            </View>

            <View
              style={{
                marginLeft: '6%',
                marginTop: '6%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: '4%',
                  width: wp('7%'),
                  height: hp('4.5%'),
                }}
                source={require('../../imagens/ico-menu-politica-privacidade.png')}
              />

              <Text
                style={{
                  marginLeft: '11%',
                  marginTop: '3%',
                  fontSize: 17,
                  color: 'white',
                }}>
                Política de Privacidade
              </Text>
            </View>

            <View
              style={{
                marginLeft: '6%',
                marginTop: '6%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: '3%',
                  width: wp('9.5%'),
                  height: hp('4.7%'),
                }}
                source={require('../../imagens/ico-menu-termo-responsabilidade.png')}
              />

              <Text
                style={{
                  marginLeft: '9%',
                  marginTop: '3%',
                  fontSize: 17,
                  color: 'white',
                }}>
                Termo de Responsabilidade
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: '6%',
                marginTop: '6%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: '2%',
                  width: wp('10%'),
                  height: hp('5%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/ico-menu-sobre.png')}
              />

              <Text
                style={{
                  marginLeft: '10%',
                  marginTop: '3%',
                  fontSize: 17,
                  color: 'white',
                }}>
                Sobre
              </Text>
            </View>

            <View
              style={{
                marginLeft: '6%',
                marginTop: '6%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginLeft: '3%',
                  width: wp('9.5%'),
                  height: hp('4.9%'),
                  resizeMode: 'cover',
                }}
                source={require('../../imagens/ico-menu-suporte.png')}
              />

              <Text
                style={{
                  marginLeft: '10%',
                  marginTop: '3%',
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

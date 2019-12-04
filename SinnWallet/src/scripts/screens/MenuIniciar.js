import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  
} from 'react-native';
import {Container, Text, Drawer} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationService from '../../../NavigationService';
import SideBar from './MenuInterno';

export default class ProfileScreen extends Component {
  
  

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
        
        <View style={{flexDirection:'column'}}>
          <ImageBackground
            
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>           

            

            <View style={{flexDirection:'row'}}>

                <TouchableWithoutFeedback
                    onPress={() => NavigationService.simpleNavigate('LoginRedes')}>
                    <View
                    style={{
                    marginLeft: wp('2.5%'),
                    marginTop: hp('5%'),                        
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
                        marginLeft: wp('5%'),
                        marginTop: hp('4.8%')
                        
                        }}>
                        <Image
                        style={{
                            width: 140,
                            height: 21,
                            
                        }}
                        source={require('../../imagens/logo-internas-header.png')}
                        />
                    </View>

                    <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
                        <View
                            style={{
                            marginLeft: wp('40%'),
                            marginTop: hp('4%'),
                            
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

            </View>

            <View
              style={{                  
                marginTop: hp('3%'),
                marginLeft: wp('3%'),
                  
              }}>
              <Image
                style={{
                  width: 390,
                  height: 1,
                    
                }}
                source={require('../../imagens/line-div-header.png')}
              />
            </View>            

            <View style={{flexDirection: 'row'}}>          
                
                  <Image
                    style={{
                      marginTop:hp('3%'),
                      marginLeft:wp('5%'),
                      width: 220,
                      height: 340,
                        
                  }}
                  source={require('../../imagens/imagem-apresentacao.png')}
                  />
                  {/* <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'column'}}>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', marginTop:hp('6%'), fontWeight:'bold'}}>Seja bem vindo à sua</Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', fontWeight:'bold'}}>Sinn.wallet,</Text>                    
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', marginTop:hp('3%')  }}>Através do <Text style={{fontWeight:'bold',color: 'white'}}>Sinn.id</Text></Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white' }}>você tem acesso à</Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white'}}>sua <Text style={{fontWeight:'bold', color:'white'}}>wallet,</Text> aonde</Text>                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                      <Text style={{textAlign:'left', fontSize: 15, color: 'white', marginTop:hp('6%'), fontWeight:'bold'}}>todas as suas</Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', fontWeight:'bold'}}>Sinn.wallet,</Text>                    
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', marginTop:hp('3%')  }}>Através do <Text style={{fontWeight:'bold',color: 'white'}}>Sinn.id</Text></Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white' }}>você tem acesso à</Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white'}}>sua <Text style={{fontWeight:'bold', color:'white'}}>wallet,</Text> aonde</Text>                    
                    </View>

                    {/* <View style={{flexDirection:'column'}}>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', marginTop:hp('6%'), fontWeight:'bold'}}>Seja bem vindo à sua</Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', fontWeight:'bold'}}>Sinn.wallet,</Text>                    
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white', marginTop:hp('3%')  }}>Através do <Text style={{fontWeight:'bold',color: 'white'}}>Sinn.id</Text></Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white' }}>você tem acesso à</Text>
                      <Text style={{textAlign:'right', fontSize: 15, color: 'white'}}>sua <Text style={{fontWeight:'bold', color:'white'}}>wallet,</Text> aonde</Text>                    
                    </View> 
                  </View>  */}

            </View>

            <TouchableWithoutFeedback onPress={() => NavigationService.simpleNavigate('Perfil')}>
                        <Image
                        style={{
                            marginLeft: wp('14%'),
                            marginTop: hp('20%'),
                            width: 300,
                            height: 60,
                            
                        }}
                        source={require('../../imagens/bt-iniciar.png')}
                        />
            </TouchableWithoutFeedback>


            <View style={{position:'absolute'}}>

              <Text style={{marginTop:hp('18%'), marginLeft:wp('57%') ,fontSize: 15, color: 'white', fontWeight:'bold'}}>Seja bem vindo à sua</Text>
              <Text style={{textAlign:'right', marginLeft:wp('57%') ,fontSize: 15, color: 'white', fontWeight:'bold'}}>Sinn.wallet</Text>

              <Text style={{marginTop:hp('0.1%'), textAlign:'right', marginTop:hp('2%'), marginLeft:wp('57%') ,fontSize: 16, color: 'white'}}>Através do <Text style={{fontWeight:'bold',color: 'white'}}>Sinn.id</Text></Text>
              <Text style={{marginTop:hp('0.1%'), textAlign:'right', fontSize: 15, color: 'white' }}>você tem acesso à</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign:'right', fontSize: 15, color: 'white'}}>sua <Text style={{fontWeight:'bold', color:'white'}}>wallet,</Text> aonde</Text>

              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>todas as suas informações</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>serão guardadas e protegidas,</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>através de criptografia e altos</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>padrões de segurança</Text>

              <Text style={{marginTop:hp('3%'), textAlign: 'right', fontSize: 15, color: 'white' }}>Documentos digitais,</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>assinaturas, consultas médicas,</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>histórico escolas, contratos</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>e muito mais.</Text>

              <Text style={{marginTop:hp('3%'), textAlign: 'right', fontSize: 15, color: 'white' }}>Com toda segurança e aonde estiver,</Text>
              <Text style={{marginTop:hp('0.1%'), textAlign: 'right', fontSize: 15, color: 'white' }}>seus dados estarão com você.</Text>

              <Text style={{marginTop:hp('3%'), textAlign: 'right', fontSize: 15, color: 'white' }}>Vamos começar?</Text>
            
            </View> 

            
          </ImageBackground>
        </View>
      </Drawer>
    );
  }
}

import React, {Component} from 'react';
import {View, Image, TouchableWithoutFeedback, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {Container, Drawer} from 'native-base';
import NavigationService from '../../../NavigationService';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SideBar from './MenuInterno';
import { RNCamera } from 'react-native-camera';

export default class SplashScreen extends Component {

    takePicture = async () => {
             if (this.camera) {
               const options = { quality: 0.5, base64: true };
               const data = await this.camera.takePictureAsync(options);
        
               alert(data.uri);
             }
           };


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
        <View style={{flex: 1, flexDirection:'column'}}>
          <ImageBackground
            
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            source={require('../../imagens/bg-internas.png')}>
            

            <View style={{flex: 1, flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>

                    <TouchableWithoutFeedback
                        onPress={() => NavigationService.simpleNavigate('Carteira')}>
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
                  marginTop: hp('4%'),
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

                <Text
                    style={{
                    fontSize: 20,
                    color: 'gray',                    
                    marginLeft: wp('6%'),
                    marginTop: hp('1.5%'),
                    
                    }}>Adicionar documento</Text>

            </View>
            
            

            <View style={{flex: 1, marginTop:hp('1%'), backgroundColor:'#FFFF00'}}>
                
                <RNCamera
                    //width={418}
                    //height={10}
                    ref={camera => { this.camera = camera }}
                    style = {{width:wp('100%'), height:hp('32%')}}
                    resizeMode="contain"
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}       
                />    
                    

            </View>

            <View

                style={{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'flex-end'            
                  
                }}>
                <Image
                  style={{
                    width: 300,
                    height: 60,
                  }}
                  source={require('../../imagens/bt-capturar-documento.png')}
                />
              
            </View> 
           
          </ImageBackground>
        </View>
      </Drawer>
    );
  }
}




const windowW = Dimensions.get('window').width;
const windowH = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "black"
    },
    preview: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    buttonContainer: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "center"
    },
    capture: {
      flex: 0,
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: "center",
      margin: 20
    },
    buttonText: {
      fontSize: 14
    }
  });
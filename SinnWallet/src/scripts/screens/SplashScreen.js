import React, {Component} from 'react';
import { View } from 'react-native';
import {Text} from 'react-native-elements';
import {Image} from 'react-native-elements';
//import AsyncStorage from '@react-native-community/async-storage';
import {Container} from 'native-base';
import NavigationService from '../../../NavigationService';
import {ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(function() {
      NavigationService.simpleNavigate('Login');
    }, 25000);
  }

  render() {
    return (
      <Container>

        <ImageBackground
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../imagens/splash.png')}>         

            <View style={{flex:1,justifyContent: 'space-between', marginTop: '50%'}}>

              <View style={{ marginLeft: '40%', marginRight: '15%', marginTop: '-45%',  position: "absolute"}}>

              <Image style={{              
                  width: wp('18%'),
                  height: hp('9%'),
                  resizeMode:'cover',        
                  }} source ={require('../../imagens/logo-sinn-selo.png')}/>  
            </View>
            

              <View style={{ marginLeft: '15%', marginRight: '15%',  position: "absolute"}}>

              <Image style={{              
                width: 300,
                height: 50,
                resizeMode:'contain',        
                }} source ={require('../../imagens/logo-splash.png')}/>  

              </View>

              <View style={{ marginRight: '10%', marginLeft:'15%', marginTop: '17%', position: "absolute"}}>

              <Image style={{              
                width: 300,
                height: 200,
                resizeMode:'cover',            
                }} source ={require('../../imagens/icon-splash.png')}/>

              </View>

              <View style={{ marginLeft: '17.5%', marginTop:'72%',position: "absolute"}}>

               <Text style={{color:'#FFFF', fontWeight:'bold', }}>FISCALIZAÇÃO DO SISTEMA EDUCACIONAL</Text>
              
              </View>

              <View style={{marginLeft: '25%',marginTop:'77%',position: "absolute"}}>

                <Text style={{color:'#FFFF', fontWeight:'bold'}}>PREFEITURA DO RIO DE JANEIRO</Text>
              
              </View> 
              
              <View style={{marginTop: '120%', position: "absolute"}}>

              <Image style={{              
                width: wp('100%'),
                height: hp('12%'),
                resizeMode:'cover',            
                }} source ={require('../../imagens/imagem-rodape-ilustracao-splash.png')}/>

              </View>
            
            </View>
           
        </ImageBackground>
      </Container>
    );
  }
}

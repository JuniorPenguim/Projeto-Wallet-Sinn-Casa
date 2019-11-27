import React, { Component } from 'react';
import { Container} from 'native-base';
import * as colorClass from '../constants/ColorClass'
import * as styleClass from '../constants/StyleClass'
import { Button,Input,Image, Text} from 'react-native-elements';
import {KeyboardAvoidingView,Keyboard,TouchableOpacity, ImageBackground, View} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Biometrics from 'react-native-biometrics'
import NavigationService from '../../../NavigationService'


export default class LoginScreen extends Component {

    _idSignIn(){

        Biometrics.simplePrompt('Load fingerprint')
        .then(() => {
        console.log('successful fingerprint provided')
        NavigationService.simpleNavigate('Perfil');
        }).catch(error =>{
            console.log(error)
        })
    }

  render() {
    return(        

        <ImageBackground
           style={{width: '100%', height: '100%'}}
           resizeMode="cover"
           source={require('../../imagens/splash-2.png')}>

          <View style={{flex:1}}>

            <View style={{marginLeft:'20%', marginTop:'20%', position: "absolute"}}>
              <Image style={{              
                width: wp('60%'),
                height: hp('25%'),
                resizeMode:'cover',        
              }} source ={require('../../imagens/logo-icon-login.png')}/>

            </View>

            <View style={{ marginLeft: '30%', marginTop:'79%',position: "absolute"}}>

              <Text style={{color:'gray', fontWeight:'bold', }}>ENTRE COM SEUS DADOS</Text>
              
            </View>

            <View style={{marginLeft: '19%',marginTop:'83%',position: "absolute"}}>

              <Text style={{color:'gray', fontWeight:'bold'}}>PARA EFETURAR SEU LOGIN DE ACESSO:</Text>
              
            </View>

            <View style={{marginLeft: '14%',marginTop:'95%',position: "absolute"}}>
              
              <Image style={{               
                  width: wp('73%'),
                  height: hp('6.5%'),
                  resizeMode:'cover',        
                }} source ={require('../../imagens/bt-branco.png')}/>           
              
            </View> 

            <View style={{marginLeft: '19%',marginTop:'98.5%',position: "absolute"}}>
              
              <Image style={{
                width: wp('5.5%'),
                height: hp('3.1%'),
                resizeMode:'cover',        
              }} source ={require('../../imagens/ico-email.png')}/>                       
              
            </View> 

            

            <View style={{marginLeft: '14%',marginTop:'113%',position: "absolute"}}>
              
              <Image style={{               
                  width: wp('73%'),
                  height: hp('6.5%'),
                  resizeMode:'cover',        
              }} source ={require('../../imagens/bt-branco.png')}/>                       
              
            </View>

            <View style={{marginLeft: '20%',marginTop:'117.5%',position: "absolute"}}>
              
              <Image style={{
                width: wp('3.5%'),
                height: hp('2%'),
                resizeMode:'cover',        
              }} source ={require('../../imagens/ico-password.png')}/>                       
              
            </View>

            <View style={{marginLeft: '25%',marginTop:'102%',position: "relative"}}>

               <Input 
                 placeholder = 'Entre com seu e-mail'
                 placeholderTextColor='#000'                 
                 overflow = "hidden"
                 autoCapitalize = 'none'                                  

                 inputContainerStyle = {{
                   borderBottomWidth:0          
                 }}           
                />

                <View style={{marginTop:'15.5%', position:"relative"}}>

                  <Input 
                  placeholder = 'Digite a sua senha'
                  placeholderTextColor='#000'
                  overflow = "hidden"
                  autoCapitalize = 'none'                                   

                  inputContainerStyle = {{
                    borderBottomWidth:0          
                  }}           
                />

                </View>

                

            </View>
            

            <View style={{marginLeft: '8%',marginTop:'131%',position: "absolute"}}>
              
            <Button
               title = 'ENTRAR'
               
               onPress={()=>NavigationService.simpleNavigate('Perfil')}              
               containerStyle = {styleClass.loginStyles.enterButton}
               buttonStyle = {{
                 backgroundColor: colorClass.colors.gray,
                 width: '120%',
                 height: '110%',                 
                 borderRadius: 25  
               }}
             />           
              
            </View>
            
            <View style={{ marginLeft: '42%', marginRight: '15%', marginTop: '171%' ,position: "absolute"}}>

                  <Image style={{              
                  width: wp('18%'),
                  height: hp('9%'),
                  resizeMode:'cover',        
                  }} source ={require('../../imagens/logo-sinn-selo.png')}/>  
                  
            </View>

          </View>

        </ImageBackground>
    );
  }
}

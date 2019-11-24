import React, {Component} from 'react';
//import { View } from 'react-native';
import {Text} from 'react-native-elements';
//import AsyncStorage from '@react-native-community/async-storage';
import {Container} from 'native-base';
import NavigationService from '../../../NavigationService';
import {ImageBackground} from 'react-native';

export default class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(function() {
      NavigationService.simpleNavigate('Login');
    }, 2500);
  }

  render() {
    return (
      <ImageBackground
        source={require('../../imagens/splash.png')}></ImageBackground>
    );
  }
}

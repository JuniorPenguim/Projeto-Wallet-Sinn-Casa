import React, { Component } from 'react';
import {createAppContainer, Header} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './NavigationService';
import SplashScreen from './src/scripts/screens/SplashScreen';
import LoginScreen from './src/scripts/screens/LoginScreen';
import ProfileScreen from './src/scripts/screens/ProfileScreen';
//import Loader from './src/scripts/Loading';
import { Container } from 'native-base';
import FlashMessage from "react-native-flash-message";


const TopLevelNavigator = createStackNavigator({
    Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    Perfil: {screen: ProfileScreen},
    //Loading: {screen: Loader},
  },
  {
    initialRouteName: 'Login',
    headerMode:'none'
    //transitionConfig: () => fromLeft(1000),
  }
);

const AppScreens = createAppContainer(TopLevelNavigator);

export default class SManager extends React.Component{

  render() {
    return (
      <Container>
        {<AppScreens
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />}
        <FlashMessage position="top" />
      </Container>
    );
  }
}
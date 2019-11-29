import React, { Component } from 'react';
import {createAppContainer, Header} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './NavigationService';
import SplashScreen from './src/scripts/screens/SplashScreen';
import LoginScreen from './src/scripts/screens/LoginScreen';
import LoginRedes from './src/scripts/screens/LoginRedes';
import ProfileScreen from './src/scripts/screens/ProfileScreen';
import { Container} from 'native-base';
import FlashMessage from "react-native-flash-message";



const TopLevelNavigator = createStackNavigator({
    Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    Perfil: {screen: ProfileScreen},
    LoginRedes: {screen: LoginRedes},
    //Loading: {screen: Loader},
  },
  {
    initialRouteName: 'Splash',
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


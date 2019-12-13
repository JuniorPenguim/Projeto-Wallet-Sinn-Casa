import React, {Component} from 'react';
import {createAppContainer, Header} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Container} from 'native-base';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';

import {Store} from './src/store';
import NavigationService from './NavigationService';
import SplashScreen from './src/scripts/screens/SplashScreen';
import LoginScreen from './src/scripts/screens/LoginScreen';
import LoginRedes from './src/scripts/screens/LoginRedes';
import ProfileScreen from './src/scripts/screens/ProfileScreen';
import CarteiraScreen from './src/scripts/screens/CarteiraScreen';
import CapturaScreen from './src/scripts/screens/CapturaScreen';
import ScanScanner from './src/scripts/screens/QrScanner';
import MenuIniciar from './src/scripts/screens/MenuIniciar';

const TopLevelNavigator = createStackNavigator(
  {
    Splash: {screen: SplashScreen},
    LoginRedes: {screen: LoginRedes},
    Login: {screen: LoginScreen},
    Iniciar: {screen: MenuIniciar},
    Perfil: {screen: ProfileScreen},
    Carteira: {screen: CarteiraScreen},
    Captura: {screen: CapturaScreen},
    ScanScanner: {screen: ScanScanner},
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

const AppScreens = createAppContainer(TopLevelNavigator);

export default class SManager extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Container>
          {
            <AppScreens
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          }
          <FlashMessage position="top" />
        </Container>
      </Provider>
    );
  }
}

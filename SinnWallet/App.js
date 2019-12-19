import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated} from 'react-native';
import {Container} from 'native-base';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';

import {Store} from './src/store';
import NavigationService from './NavigationService';
import SplashScreen from './src/scripts/screens/SplashScreen';
import LoginScreen from './src/scripts/screens/LoginScreen';
import LoginRedesScreen from './src/scripts/screens/LoginRedes';
import ProfileScreen from './src/scripts/screens/ProfileScreen';
import CarteiraScreen from './src/scripts/screens/CarteiraScreen';
import CapturaScreen from './src/scripts/screens/CapturaScreen';
import QRCodeScreen from './src/scripts/screens/QrScanner';
import MenuIniciar from './src/scripts/screens/MenuIniciar';
import PoliticaScreen from './src/scripts/screens/PoliticaScreen';
import SobreScreen from './src/scripts/screens/SobreScreen';

const TopLevelNavigator = createStackNavigator(
  {
    Splash: {screen: SplashScreen},
    LoginRedes: {screen: LoginRedesScreen},
    Login: {screen: LoginScreen},
    Iniciar: {screen: MenuIniciar},
    Perfil: {screen: ProfileScreen},
    Carteira: {screen: CarteiraScreen},
    Captura: {screen: CapturaScreen},
    ScanScanner: {screen: QRCodeScreen},
    Politica: {screen: PoliticaScreen},
    Sobre: {screen: SobreScreen},
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     timing: Animated.timing,
    //   },
    //   screenInterpolator: () => {},
    // }),
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

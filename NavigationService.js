import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
//import * as constantClass from './src/scripts/ConstantClass'

let _navigator; 

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function test(routeName,routeTitle) {
  constantClass.texts.commonHeaderTitle = routeTitle;
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      routeTitle
    })
  );
}

function simpleNavigate(routeName) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName
    })
  );
}


// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  test,
  simpleNavigate,
};

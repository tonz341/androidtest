import React, {Component} from 'react'
import {AppRegistry, Text, View, Button} from 'react-native'
import {StackNavigator,} from 'react-navigation';

import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

export default class HomeScreen extends React.Component {
    render() {
      return (
        <AppNavigator /> 
      );
    }
}

const AppNavigator =  StackNavigator({
  LoginScreen: { screen: LoginScreen },
  // HomeScreen: { screen: HomeScreen }
})

// AppRegistry.registerComponent('Component5', () => Component5)
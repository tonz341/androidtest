import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

import {StackNavigator, DrawerNavigator} from 'react-navigation';

import MainScreen from './app/components/Instagram/MainScreen'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class myapplication extends Component {
  
  render(){
    return(
     <AppStackNavigator />
    )
  }
}

const AppStackNavigator = StackNavigator({
  screen: MainScreen
})

AppRegistry.registerComponent('myapplication', () => myapplication)
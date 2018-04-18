import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

import {StackNavigator, DrawerNavigator} from 'react-navigation';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Component1 from './app/components/Component1/Component1'
import Component2 from './app/components/Component2/Component2'
import Component3 from './app/components/Component3/Component3'
import Component4 from './app/components/Component4/Component4'

import LoginScreen from './app/components/Component5/LoginScreen'
import HomeScreen from './app/components/Component5/HomeScreen'

export default class myapplication extends Component {
  render(){
    return(
       <AppDrawerNavigator /> 
    )
  }
}

// THIS IS PAGES ONLY
// const AppNavigator =  StackNavigator({ 
//   LoginScreen: { screen: LoginScreen },
//   HomeScreen: { screen: HomeScreen }  
// })

// THIS IS WITH SIDEBAR
const AppDrawerNavigator = DrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
  Props: { screen: Component1 },
  FlexAndTouchable: { screen: Component2 },
  BindVModel: { screen: Component3 },
  List: { screen: Component4 }    
})

AppRegistry.registerComponent('myapplication', () => myapplication)
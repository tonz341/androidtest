import React, {Component} from 'react'
import {AppRegistry, Text, View, Navigator, Button} from 'react-native'

import AddMediaTab from './AppTabNavigator/AddMediaTab'
import HomeTab from './AppTabNavigator/HomeTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'

import {TabNavigator} from 'react-navigation'
import {Icon} from 'native-base'


class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" 
    style={{ paddingLeft: 10 }}/>,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" 
    style={{ paddingRight: 10 }}/>
  }

  render(){
    return(
       <AppTabNavigator />
    )
  }
}

export default MainScreen

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }

})


import React, {Component} from 'react'
import {AppRegistry, Text, View, Navigator} from 'react-native'

import {TabNavigator} from 'react-navigation'

class HomeScreen extends Component {
  render(){
    return(
     <View>
       <Text> This is a home screen </Text>
     </View> 
    )
  }
}

class Notification extends Component{
  render(){
    return(
      <View>
        <Text>This is notification screen</Text>
      </View>
    )
  }
}

const HomeScreenTabNavigator = TabNavigator({
  HomeScreen:{
    screen: HomeScreen
  },
  Notifications:{
    screen: Notification
  }
},{
  animationEnabled: true
})

export default HomeScreenTabNavigator

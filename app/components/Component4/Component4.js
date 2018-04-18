import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

const users = [
  {name: 'John Doe'},
  {name: 'John 1'},
  {name: 'John 2'},
  {name: 'John 3'},
]

export default class Component4 extends Component {


  render(){
    return(
     <View>
       <Text>Yawa</Text>
     </View> 
    )
  }
}

AppRegistry.registerComponent('Component4', () => Component4)
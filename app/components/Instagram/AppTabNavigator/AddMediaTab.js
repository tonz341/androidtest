import React, {Component} from 'react'
import {Text, View, Navigator, Button} from 'react-native'

import {Icon} from 'native-base'

class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor}) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  }

  render(){
    return(
     <View>
       <Text>AddMediaTab</Text>
     </View> 
    )
  }
}

export default AddMediaTab
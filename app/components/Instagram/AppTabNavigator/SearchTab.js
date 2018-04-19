import React, {Component} from 'react'
import {Text, View, Navigator, Button} from 'react-native'

import {Icon} from 'native-base'

class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor}) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  }

  render(){
    return(
     <View>
       <Text>SearchTab</Text>
     </View> 
    )
  }
}

export default SearchTab
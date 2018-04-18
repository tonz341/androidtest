import React, {Component} from 'react'
import {AppRegistry, Text, View, Navigator, Button, Image, TextInput, StyleSheet} from 'react-native'

import {StackNavigator} from 'react-navigation'

import HomeScreen from './HomeScreen'

class LoginScreen extends Component {
  render(){
    return(
     <View>
       
      <Image
        style = {{ height:100, resizeMode: 'stretch', }}
        source={{uri:'https://weblog.west-wind.com/images/2016/ASP.NET%20Core%20and%20CORS%20Gotchas/Connected.png'}}
      />
      <Text style={styles.loginText}>Please Sign in here</Text>
      <TextInput style={{marginTop:50}}  placeholder="Username / Email"></TextInput>
      <TextInput style={{ marginBottom:50 }} placeholder="Password"></TextInput>

      <Button  onPress={()=>this.props.navigation.navigate('HomeScreen')} 
      title="Login"
      />
     </View> 
    )
  }
}

const styles = StyleSheet.create({
  loginText:{
    marginTop:50, 
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
  }
})


const LoginStackNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  HomeScreen:{
    screen: HomeScreen
  }
})

export default LoginStackNavigator

import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right , Button, Icon } from 'native-base'

export default class CardComponent extends Component {
  
  render(){
    return(
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../assets/me.jpg')} />
                    <Body>
                        <Text>Varun</Text>
                        <Text note>Jan 15, 2018</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Image source={require('../assets/gundam.jpg')} style={{height:200, width: null, flex: 1}} />
            </CardItem>
            <CardItem style={{height:20}}>
                <Left>
                    <Button transparent>
                        <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-send-outline" style={{ color: 'black' }} />
                    </Button>
                </Left>
            </CardItem>
            <CardItem style={{height:20}}>
                <Text>{this.props.likes} likes</Text>
            </CardItem>
            <CardItem>
                <Text>
                    <Text style={{ fontWeight:"900" }}>{this.props.name} </Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </CardItem>
        </Card>
    )
  }
}

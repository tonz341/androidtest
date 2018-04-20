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
                        <Text>{this.props.data.source.name}</Text>
                        <Text note>{this.props.data.publishedAt}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Image source={{uri: this.props.data.urlToImage}} style={{height:200, width: null, flex: 1}} />
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
                <Text>143 likes</Text>
            </CardItem>
            <CardItem>
                <Text>
                    <Text style={{ fontWeight:"900" }}>{this.props.data.name} </Text>
                    {this.props.data.description}
                </Text>
            </CardItem>
        </Card>
    )
  }
}

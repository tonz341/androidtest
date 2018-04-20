import React, {Component} from 'react'
import {Text, View, Navigator, Button, StyleSheet} from 'react-native'

import {Icon, Container, Content} from 'native-base'
import CardComponent from '../CardComponent';

class HomeTab extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      datas : []
    }
  }

  static navigationOptions = {
    tabBarIcon:({tintColor}) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  componentDidMount(){
    this.fetchNews()
  }
  
  async fetchNews(){
    let data = [];
    await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c775ba5c5cdf45bca09b05d77922096a', {
      method: 'GET'
    }).then((response) => response.json()).then((responseJson) => {
      data = responseJson.articles
    }).catch((error) => {
        console.error(error);
    });

    this.setState({ datas: data })
  }
  
  render(){
    // const data = [
    //   {
    //     likes: '100',
    //     image: 'https://d2ev13g7cze5ka.cloudfront.net/ban/ban965506_box_1485108727.jpg?v=1485108727',
    //     name: 'Tonz',
    //     message: 'Lorem Ipsum torealala',
    //     date: 'April 20, 2019'
    //   },
    //   {
    //     likes: '533',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWlh4Wylr6XKANzLsseSsqQnBx7zaYgVytMwwYM90R0BwnEi6',
    //     name: 'Tonz',
    //     message: 'ABCDEAHJAKSLAS ASASASASASA',
    //     date: 'March 14, 2019'
    //   },
    //   {
    //     likes: '9999',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmWlrJVu9hA3qWPKyTDyxyxsHVHNs5m1zJIFFFbwP6CuvDWZS',
    //     name: 'Tonz',
    //     message: 'AHHAHAHAHAHAHAHAHAHAHAHAHAHAHHAAHHAAAAAAAAAAAAHHAHAHAHAHAAHAHAHAHAHAHAHAHAHAHAH',
    //     date: 'May 31, 2018'
    //   }, {
    //     likes: '100',
    //     image: 'https://static.zerochan.net/Mobile.Suit.Gundam.SEED.Destiny.full.1346726.jpg',
    //     name: 'Tonz',
    //     message: 'PAKYU IKALIMAA',
    //     date: 'Dec 25, 2000'
    //   }
    // ]

    const {datas} = this.state

    return(
      <Container style={styles.container}>  
        <Content>
          <CardLoop datas={datas} />
        </Content>
      </Container>
    )
  }
}

function CardLoop({datas}){
  return(
    datas.map((data, index) => {
      return (
        <CardComponent key={index} data={data}/>
      )
    })
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  }
})

export default HomeTab
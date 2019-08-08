import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Button, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import MainHeader from '../components/MainHeader';
import { COLOR } from '../components/Vars';

import {
  StyleSheet,
  FlatList,
  // Text, 
  View,
  TextInput,
} from 'react-native';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false,
      color: 'white',
      links: [
        {name: 'first'},
        {name: 'second'},
        {name: 'third'},
        {name: '4'},
        {name: '5'},
        {name: '6'}
      ]
    };
  }

  endReached = () => {
    this.setState({color: 'blue'})
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container style={{backgroundColor: COLOR.grey}}>
        <MainHeader navigation={this.props.navigation} title="Home" />
        <Content 
        style={{flex: 1}}
        contentContainerStyle={{flex: 1}}
        padder>
          <FlatList
            data={this.state.links}
            keyExtractor={item => item.name}
            renderItem={({item}) => <Button style={[styles.button,{backgroundColor: this.state.color}]}><Text>{item.name}</Text></Button>}
            onEndReached={()=>this.endReached}
            onEndReachedThreshold={0.3}
          />
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    height: 124,
    width: '100%',
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
})
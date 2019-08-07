import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import MainHeader from '../components/MainHeader';

import {
  StyleSheet,
  // Text, 
  View,
  TextInput,
} from 'react-native';

export default class LinkScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false,

    };
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
      <Container>
        <MainHeader navigation={this.props.navigation} title="Link" />
        <Text>Link</Text>
      </Container>
    )
  }

}
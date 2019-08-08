import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';

import { COLOR } from './Vars';

// import MenuButton from './MenuButton';

export default class MainHeader extends Component {
  render() {
    return (
        <Header style={styles.headerBar}>
          <StatusBar backgroundColor={COLOR.redAlt} barStyle="light-content" />
          <Left>
            <Button transparent>
              <Icon name='menu'
              navigation={this.props.navigation} 
              onPress={() => this.props.navigation.toggleDrawer()}
              style={styles.menuButton}
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle} >{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}


const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: COLOR.red,
  },
  headerTitle: {
    color: '#fff'
  },  
  menuButton: {
    color: '#fff'
  }
})
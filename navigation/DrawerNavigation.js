import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinkScreen from '../screens/LinkScreen';
import SettingsScreen from '../screens/SettingsScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Links: {
            screen: LinkScreen
        },
        Settings: {
            screen: SettingsScreen
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);
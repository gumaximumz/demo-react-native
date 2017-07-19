/**
 * @flow
 */

import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MenuScreen from '../screens/MenuScreen/MenuScreen.react'
import WallScreen from '../screens/WallScreen'

export default TabNavigator(
  {
    Wall: {
      screen: WallScreen
    },
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Menu: {
      screen: MenuScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Wall':
            iconName = 'newspaper-o';
            break;
          case 'Home':
            iconName = 'users';
            break;
          case 'Links':
            iconName = 'comments';
            break;
          case 'Settings':
            iconName = 'inbox';
            break;
          case 'Menu':
            iconName = 'bars';
            break;
        }

        return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />

        );
      },
    }),

    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: true,
    // Don't show the labels
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#80C67D',
      }
    },
  }
);

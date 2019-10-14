import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//import { Icon } from 'expo';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import FriendScreen from './screens/FriendScreen';

const HomeStack = createStackNavigator(
  { HomeScreen, FriendScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'aliceblue'
      }
    }
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: () => ({
      title: 'Freunde',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Feather name="home" size={24} color={tintColor} />
      }
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      title: 'Settings',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Feather name="settings" size={24} color={tintColor} />
      }
    })
  }
},
  {
    tabBarOptions: {
      activeTintColor: 'darkorange',
      style: {
        backgroundColor: 'aliceblue'
      }
    }
  });

export default createAppContainer(TabNavigator);

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Checkin from './pages/Checkin';
import HelpOrders from './pages/HelpOrders';
import Order from './pages/HelpOrders/Order';
import NewOrder from './pages/HelpOrders/NewOrder';

import logo from './assets/logobar.png';

const stackConfig = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerTitle: <Image source={logo} />,
  },
};

const CheckinStack = createStackNavigator(
  {
    Checkin,
  },
  stackConfig
);

CheckinStack.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="beenhere" size={20} color={tintColor} />
  ),
};

const OrderStack = createStackNavigator(
  {
    HelpOrders,
    Order,
    NewOrder,
  },
  stackConfig
);

OrderStack.navigationOptions = {
  tabBarLabel: 'Help Orders',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};

const AppTab = createBottomTabNavigator(
  {
    Checkin: CheckinStack,
    HelpOrders: OrderStack,
  },
  {
    tabBarOptions: {
      activeTintColor: '#ee4e62',
      inactiveTintColor: '#999',
      style: {
        backgroundColor: '#FFFFFF',
        borderTopColor: '#DDDDDD',
        marginBottom: 10,
      },
    },
  }
);

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: AppTab,
      },
      {
        initialRouteName: signed ? 'App' : 'Sign',
      }
    )
  );

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import WalletScreen from './WalletScreen';
import FamilyScreen from './FamilyScreen';
import AddFamilyScreen from './AddFamilyScreen'

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Families" component={FamilyScreen} />
      <Tab.Screen name="Build" component={AddFamilyScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen;
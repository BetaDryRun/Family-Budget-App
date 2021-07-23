import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import WalletScreen from './WalletScreen';
import FamilyScreen from './FamilyScreen';
import AddFamilyScreen from './AddFamilyScreen'
import { background } from 'styled-system';

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  return (
    <Tab.Navigator styles={{color: 'blue'}}>
      <Tab.Screen name="Families" component={FamilyScreen} />
      <Tab.Screen name="Add Family" component={AddFamilyScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen;
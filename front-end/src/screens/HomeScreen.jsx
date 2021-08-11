import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FamilyList from './FamilyList';
import ReportsScreen from './ReportsScreen'
import WalletScreen from './WalletScreen';
import ProfileScreen from './ProfileScreen';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  Icon,
  IconButton,
  View
} from 'native-base';

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: 'fi.50', 
        inactiveTintColor: 'fi.300',
        adaptive: true, 
        allowFontScaling: true, 
        style: {
          backgroundColor: '#e85d04',
          height: 75, borderWidth: 0.5,
          borderBottomWidth: 1,
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
          borderColor: 'transparent',
          elevation: 20,
      }
    }}>
      <Tab.Screen name="Families" component={FamilyList} 
        options={{ 
          tabBarLabel: 'Families',
          tabBarIcon: 
            ({ focused }) => focused ? 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.50"
                  w='100%'
                  as={<FontAwesome name="users" color="fi.50"/>}
                  size="lg"
                  style={{ alignSelf: "center" }}
                />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.500"
                  w='100%'
                  as={<FontAwesome name="users" color="fi.500"/>}
                  size="md"
                  style={{ alignSelf: "center" }}
                />
              </View> 
        }}
      />
      <Tab.Screen name="Reports" component={ReportsScreen}
        options={{ 
          tabBarLabel: 'Reports', 
          tabBarIcon: 
            ({ focused }) => focused ? 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.50"
                  as={<FontAwesome name="pie-chart" color="fi.50"/>}
                  size="lg"
                  style={{ alignSelf: "center" }}
                />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.500"
                  as={<FontAwesome name="pie-chart" color="fi.500"/>}
                  size="md"
                  style={{ alignSelf: "center" }}
                />
              </View> 
        }}
      />
      <Tab.Screen name="Wallet" component={WalletScreen}
        options={{ 
          tabBarLabel: 'Wallet', 
          tabBarIcon: 
            ({ focused }) => focused ? 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.50"
                  w='100%'
                  as={<FontAwesome name="credit-card" color="fi.50"/>}
                  size="lg"
                  style={{ alignSelf: "center" }}
                />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.500"
                  w='100%'
                  as={<FontAwesome name="credit-card" color="fi.500"/>}
                  size="md"
                  style={{ alignSelf: "center" }}
                />
              </View> 
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ 
          tabBarLabel: 'Profile', 
          tabBarIcon: 
            ({ focused }) => focused ? 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.50"
                  as={<FontAwesome name="user-circle" color="fi.50"/>}
                  size="lg"
                  style={{ alignSelf: "center" }}
                />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  color="fi.500"
                  as={<FontAwesome name="user-circle" color="fi.500"/>}
                  size="md"
                  style={{ alignSelf: "center" }}
                />
              </View> 
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen;
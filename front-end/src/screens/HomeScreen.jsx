import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import WalletScreen from './WalletScreen';
import FamilyScreen from './FamilyScreen';
import AddFamilyScreen from './AddFamilyScreen'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
          backgroundColor: '#00c79b',
          height: 65, borderWidth: 0.5,
          borderBottomWidth: 1,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: 'transparent',
          elevation: 20,
      }
    }}>
      <Tab.Screen name="Families" component={FamilyScreen} 
        options={{ 
          tabBarLabel: 'Families',
          tabBarIcon: 
            ({ focused }) => focused ? 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  as={< MaterialCommunityIcons name="home-outline" />}
                  color='fi.50'
                  size="xl"
                />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  as={< MaterialCommunityIcons name="home-outline" />}
                  color='fi.500'
                  size="md"
                />
              </View> 
        }}
      />
      <Tab.Screen name="Add Family" component={AddFamilyScreen}
        options={{ 
          tabBarLabel: 'Reports', 
          tabBarIcon: 
            ({ focused }) => focused ? 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  as={< MaterialCommunityIcons name="file-edit-outline" />}
                  color='fi.50'
                  size="xl"
                />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                  as={< MaterialCommunityIcons name="file-edit-outline" />}
                  color='fi.500'
                  size="md"
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
                      as={< MaterialCommunityIcons name="wallet-outline" />}
                      color='fi.50'
                      size="xl"
                    />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                      as={< MaterialCommunityIcons name="wallet-outline" />}
                      color='fi.500'
                      size="md"
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
                    as={< MaterialCommunityIcons name="face-woman" />}
                    color='fi.50'
                    size="xl"
                  />
              </View> 
              : 
              <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: -14 }}>
                <Icon
                    as={< MaterialCommunityIcons name="face-woman" />}
                    color='fi.500'
                    size="md"
                  />
              </View> 
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen;
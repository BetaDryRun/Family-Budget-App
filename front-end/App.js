import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, FamilyList, WalletScreen, ReportsScreen, ProfileScreen} from './src/screens';
import {Family, AddFamily} from './src/components/FamilyScreenComponents'
import {Register, Login} from './src/components/RegisterScreenComponents'
import { createStackNavigator } from '@react-navigation/stack'
import { NativeBaseProvider, extendTheme} from 'native-base';
const Stack = createStackNavigator();
import {colors,fonts,spacing} from './theme';

export default function App({navigation}) {
  const theme = extendTheme({
    colors,
    fonts,
    spacing
  })
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="Families" options={{ headerShown: false }} component={FamilyList} />
          <Stack.Screen name="Wallet" options={{ headerShown: false }} component={WalletScreen} />
          <Stack.Screen name="Reports" options={{ headerShown: false }} component={ReportsScreen} />
          <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
          <Stack.Screen name="Family" options={{ headerShown: false }} component={Family} />
          <Stack.Screen name="Add Family" options={{ headerShown: false }} component={AddFamily} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
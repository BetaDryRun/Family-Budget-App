import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, FamilyList, WalletScreen, ReportsScreen, ProfileScreen} from './src/screens';
import { AddFamily, FamilySettings } from './src/components/FamilyScreenComponents'
import {FamilyForAdmin, FamilyForMember, FamilyForSeasoned } from './src/components/FamilyScreenComponents/Family'
import {Register, Login} from './src/components/RegisterScreenComponents'
import {PayScreen, AddMoneyScreen, QRScreen, WithdrawScreen} from './src/components/PayScreenComponents'
import AddMember from './src/components/FamilyScreenComponents/AddMember';
import { createStackNavigator } from '@react-navigation/stack'
import { NativeBaseProvider, extendTheme} from 'native-base';
import {DatePicker} from './src/components/Utility'
const Stack = createStackNavigator();
import { colors, fonts, spacing } from './theme';

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
          <Stack.Screen name="FamilyForAdmin" options={{ headerShown: false }} component={FamilyForAdmin} />
          <Stack.Screen name="FamilyForSeasoned" options={{ headerShown: false }} component={FamilyForSeasoned} />
          <Stack.Screen name="FamilyForMember" options={{ headerShown: false }} component={FamilyForMember} />
          <Stack.Screen name="Family Settings" options={{ headerShown: false }} component={FamilySettings} />
          <Stack.Screen name="Add Family" options={{ headerShown: false }} component={AddFamily} />
          <Stack.Screen name="Add Money" options={{ headerShown: false }} component={AddMoneyScreen} />
          <Stack.Screen name="Pay" options={{ headerShown: false }} component={PayScreen} />
          <Stack.Screen name="Withdraw" options={{ headerShown: false }} component={WithdrawScreen} />
          <Stack.Screen name="QR" options={{ headerShown: false }} component={QRScreen} />
          <Stack.Screen name="Add Member" options={{headerShown: false }} component = {AddMember} />
          <Stack.Screen name="Calender" date options={{ headerShown: false }} component={DatePicker} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
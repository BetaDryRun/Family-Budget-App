import React from 'react';
import RegistrationScreen from './src/screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
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
          <Stack.Screen name="Registration" options={{ headerShown: false }} component={RegistrationScreen} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
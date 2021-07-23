import React from 'react';
import {Register, Login} from '../components/RegisterScreenComponents'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const RegistrationScreen = (props) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        </Stack.Navigator>
    )
}

export default RegistrationScreen;
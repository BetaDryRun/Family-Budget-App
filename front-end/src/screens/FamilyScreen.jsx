import React from 'react';
import {Family, FamilyList, AddFamily} from '../components/FamilyScreenComponents'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const FamilyScreen = (props) => {
    return (
        <Stack.Navigator initialRouteName="Registration">
            <Stack.Screen name="Families" options={{ headerShown: false }} component={FamilyList} />
            <Stack.Screen name="Family" options={{ headerShown: false }} component={Family} />
            <Stack.Screen name="Add Family" options={{ headerShown: false }} component={AddFamily} />
        </Stack.Navigator>
    )
}

export default FamilyScreen;
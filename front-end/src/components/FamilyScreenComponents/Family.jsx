import React from 'react';
import { Button, Text, View } from 'react-native';

const Family = ({navigation}) => {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List of Families Page</Text>
        <Button
            title="Go Back"
            onPress={() => navigation.navigate('Families')}
        />
    </View>
)
}

export default Family;
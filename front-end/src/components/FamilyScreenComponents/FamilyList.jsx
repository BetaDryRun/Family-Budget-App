import React from 'react';
import { Button, Text, View } from 'react-native';

const FamilyList = ({navigation}) => {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List of Families Page</Text>
        <Button
            title="Go to Family 1"
            onPress={() => navigation.navigate('Family')}
        />
    </View>
)
}

export default FamilyList;
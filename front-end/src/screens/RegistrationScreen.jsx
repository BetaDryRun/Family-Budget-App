import React from 'react';
import { Button, View } from 'native-base';

const RegistrationScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Register"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default RegistrationScreen;
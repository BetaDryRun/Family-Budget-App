import React from 'react';
import {
    Box,
    Text,
    Center,
    View
  } from 'native-base';

const Header = ({Title}) => {
    return (
        <View
            flex={3}
            p={55}
            w="100%"
            h='100%'
            mx='auto'
            bg='fi.300'
        >
            <Center><Text color='fi.50' fontSize='2xl' alignContent='center' mt='10'>{Title}</Text></Center>
        </View>
    );
}

export default Header;
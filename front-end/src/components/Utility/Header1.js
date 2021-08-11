import React from 'react';
import {
    Box,
    Text,
    Center,
    View
  } from 'native-base';

const Header1 = ({Title}) => {
    return (
        <View
            flex={3}
            p={25}
            w="100%"
            h='10%'
            bg='fi.300'
        >
            <Center><Text color='fi.50' fontSize='2xl' alignContent='center' mt='10'>{Title}</Text></Center>
        </View>
    );
}

export default Header1;
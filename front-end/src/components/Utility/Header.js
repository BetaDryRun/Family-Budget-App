import React from 'react';
import {
    Box,
    Text,
    Center,
    View
  } from 'native-base';

const Header = ({Title}) => {
    console.log(Title)
    return (
        <View
            flex={1}
            p={10}
            w="100%"
            h='50%'
            mx='auto'
            bg='fi.300'
        >
            <Center><Text color='fi.50' fontSize='2xl' >{Title}</Text></Center>
        </View>
    );
}

export default Header;
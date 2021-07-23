import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  Center
} from 'native-base';

const RegistrationScreen = ({navigation}) => {

 return (
      <Box
        flex={1}
        p={2}
        w="100%"
        mx='auto'
        bg='fi.400'
      >
        <Box
        w="100%">
        <Center>
        <Heading size="lg" color='fi.200' mt='40%' >
          Welcome
        </Heading>
        <Heading color="fi.50" size="xs">
          Sign in to continue!
        </Heading>
        </Center>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{color: 'fi.200', fontSize: 'sm', fontWeight: 600}}>
                Email ID
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label  _text={{color: 'fi.200', fontSize: 'sm', fontWeight: 600}}>
                Password
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{ fontSize: 'xs', fontWeight: '700', color:'fi.200' }}
              alignSelf="flex-end"
              mt={1}
            >
              Forget Password?
            </Link>
          </FormControl>
          <VStack  space={2}>
          <Button bg="fi.300" _text={{color: 'white' }}
            onPress={()=> navigation.navigate('Home')}
          >
              Login
          </Button>

<HStack justifyContent="center" alignItem='center'>
          <IconButton
            variant='unstyled'
            startIcon={
              <Icon
                as={< MaterialCommunityIcons name="facebook" />}
                color='fi.300'
                size='sm'
              />
            }
          />
          <IconButton
            variant='unstyled'
            startIcon={
              <Icon
                as={< MaterialCommunityIcons name="google" />}
                color='fi.300'
                size="sm"
              />
            }
          />
          <IconButton
            variant='unstyled'
            startIcon={
              <Icon
                as={< MaterialCommunityIcons name="github" />}
                color='fi.300'
                size="sm"
              />
            }
          />
          </HStack>
          </VStack>
          <HStack justifyContent="center">
            <Text fontSize='sm' color='fi.100' fontWeight={400}>I'm a new user. </Text>
            <Link _text={{ color: 'fi.200', bold: true, fontSize: 'sm' }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
        </Box>
      </Box>
  );
}

export default RegistrationScreen;
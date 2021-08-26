import * as React from 'react';
import {useState,useEffect} from 'react';
import { FlatList, ImageBackground } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
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
  Center
} from 'native-base';

const Login = ({navigation}) => {

  const [loginForm,setLoginForm] = useState({
    phoneNumber:null,
    password:null
  })

 return (
      <Box
        flex={1}
        p={2}
        w="100%"
        mx='auto'
        bg='fi.50'
      >
        <Box
        w="100%">
        <Center>
        <Heading size="lg" color='fi.200' mt='40%' >
          Welcome
        </Heading>
        <Heading color="fi.500" size="xs">
          Sign in to continue!
        </Heading>
        </Center>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                Phone No.
            </FormControl.Label>
            <Input onChangeText={(text)=>setLoginForm({...loginForm, phoneNumber: text})}/>
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label  _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                Password
            </FormControl.Label>
            <Input type="password" autoCapitalize="none" onChangeText={(text)=>setLoginForm({...loginForm, password: text})}/>
            <Link
              _text={{ fontSize: 'xs', fontWeight: '700', color:'fi.500' }}
              alignSelf="flex-end"
              mt={1}
            >
              Forget Password?
            </Link>
          </FormControl>
          <VStack  space={2}>
          <Button bg="fi.300" _text={{color: 'white' }}
            onPress={()=> {
              console.log(loginForm.password);
              navigation.navigate('Home')
            }}
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
            <Text fontSize='sm' color='fi.500' fontWeight={400}>I'm a new user. </Text>
            <Link _text={{ color: 'fi.300', bold: true, fontSize: 'sm' }} onPress={()=>navigation.navigate('Register')}>
              Register!
            </Link>
          </HStack>
        </VStack>
        </Box>
      </Box>
  );
}

export default Login;
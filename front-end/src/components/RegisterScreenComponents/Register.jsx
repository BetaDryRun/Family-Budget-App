import React,{useRef, useState, useEffect} from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-input'
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
  KeyboardAvoidingView,
  HStack,
  Center
} from 'native-base';

const Register = ({navigation}) => {
  const [pickerData,setPickerData] = useState(null);
 return (
      <Box
        flex={1}
        p={2}
        w="100%"
        mx='auto'
        bg='fi.50'
      >
        <Center>
        <Heading size="lg" color='fi.200' mt='10%' >
          Register
        </Heading>
        <Heading color="fi.500" size="xs">
          To avail our services!
        </Heading>
        </Center>

        <VStack space={2} mt={3}>
          <HStack space={2} mt={3}>
            <FormControl  w='50%' >
              <FormControl.Label _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                  First Name
              </FormControl.Label>
              <Input />
            </FormControl>
            <FormControl w='47%'>
              <FormControl.Label _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                  Last Name
              </FormControl.Label>
              <Input />
            </FormControl>
          </HStack>
          <FormControl>
            <FormControl.Label _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                EmailId
            </FormControl.Label>
            <Input />
          </FormControl>
            <FormControl >
              <FormControl.Label _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                  Phone Number
              </FormControl.Label>
              {/* <HStack space={2}>
                <PhoneInput
                  ref={(ref) => {
                    this.phone = ref;
                  }}
                  onPressFlag={this.onPressFlag}
                />
                <Input w='73%'/>
              </HStack> */}
              <Input />
            </FormControl>
          <FormControl mb={5}>
            <FormControl.Label  _text={{color: 'fi.500', fontSize: 'sm', fontWeight: 600}}>
                Password
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <VStack  space={2}>
          <Button bg="fi.300" _text={{color: 'white' }}
            onPress={()=> navigation.navigate('Home')}
          >
              Register
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
            <Text fontSize='sm' color='fi.500' fontWeight={400}>Already Done! </Text>
            <Link _text={{ color: 'fi.300', bold: true, fontSize: 'sm' }} onPress={()=>navigation.navigate('Login')}>
              Log In
            </Link>
          </HStack>
        </VStack>
      </Box>
  );
}

export default Register;
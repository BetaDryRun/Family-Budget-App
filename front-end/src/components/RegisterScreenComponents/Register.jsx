import React,{useRef, useState, useEffect} from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-input'
import axios from 'axios';
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
import {base} from '../../BackendCall/config'

const Register = ({navigation}) => {
  const [stateRegister, setStateRegister] = useState({
    firstName: null,
    lastName: null,
    emailId: null,
    phoneNumber: null,
    families:[],
    password: null,
  });

  const handleRegister = async(navigation) => {
    console.log(stateRegister)
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'}
    try{
      const res = await axios.post(`${base}/user`,
      stateRegister, {headers})
      if(res.status===201 || res.status===200)
        navigation.navigate("Login");
      else
        navigation.navigate("Register");
    }
    catch(e){
      console.log(e)
    }
  }


 return (
   <Box flex={1} p={2} w="100%" mx="auto" bg="fi.50">
     <Center  mt='25%'>
       <Heading size="lg" color="fi.200" mt="10%">
         Register
       </Heading>
       <Heading color="fi.500" size="xs">
         To avail our services!
       </Heading>
     </Center>

     <VStack space={2} mt={3}>
       <HStack space={2} mt={3}>
         <FormControl w="50%">
           <FormControl.Label
             _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
           >
             First Name
           </FormControl.Label>
           <Input
             onChangeText={(Text) => {
               setStateRegister({ ...stateRegister, firstName: `${Text}` });
             }}
             placeholder="First Name"
           />
         </FormControl>
         <FormControl w="47%">
           <FormControl.Label
             _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
           >
             Last Name
           </FormControl.Label>
           <Input
             onChangeText={(Text) => {
               setStateRegister({ ...stateRegister, lastName: `${Text}` });
             }}
             placeholder="Last Name"
           />
         </FormControl>
       </HStack>
       <FormControl>
         <FormControl.Label
           _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
         >
           Email Id
         </FormControl.Label>
         <Input
           autoCapitalize="off"
           onChangeText={(Text) => {
             setStateRegister({ ...stateRegister, emailId: `${Text}` });
           }}
           placeholder="email"
         />
       </FormControl>
       <FormControl>
         <FormControl.Label
           _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
         >
           Phone Number
         </FormControl.Label>
         <Input
           onChangeText={(Text) => {
             setStateRegister({ ...stateRegister, phoneNumber: `${Text}` });
           }}
           placeholder="Phone"
         />
       </FormControl>
       <FormControl mb={5}>
         <FormControl.Label
           _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
         >
           Password
         </FormControl.Label>
         <Input
           type="password"
           autoCapitalize="off"
           onChangeText={(Text) => {
             setStateRegister({ ...stateRegister, password: `${Text}` });
           }}
         />
       </FormControl>
       <VStack space={2}>
         <Button
           bg="fi.300"
           _text={{ color: "white" }}
           onPress={async() => {
             const status = await handleRegister(navigation);
           }}
         >
           Register
         </Button>

         <HStack justifyContent="center" alignItem="center">
           <IconButton
             variant="unstyled"
             startIcon={
               <Icon
                 as={<MaterialCommunityIcons name="facebook" />}
                 color="fi.300"
                 size="sm"
               />
             }
           />
           <IconButton
             variant="unstyled"
             startIcon={
               <Icon
                 as={<MaterialCommunityIcons name="google" />}
                 color="fi.300"
                 size="sm"
               />
             }
           />
           <IconButton
             variant="unstyled"
             startIcon={
               <Icon
                 as={<MaterialCommunityIcons name="github" />}
                 color="fi.300"
                 size="sm"
               />
             }
           />
         </HStack>
       </VStack>
       <HStack justifyContent="center">
         <Text fontSize="sm" color="fi.500" fontWeight={400}>
           Already Done!{" "}
         </Text>
         <Link
           _text={{ color: 'fi.300', bold: true, fontSize: "sm" }}
           onPress={() => {
            navigation.navigate("Login")
          }}
         >
           Log In
         </Link>
       </HStack>
     </VStack>
   </Box>
 );
}

export default Register;
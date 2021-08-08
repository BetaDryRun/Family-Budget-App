import React, { useState } from "react";
import {StyleSheet } from "react-native";
import {
    VStack,
    FormControl,
    Input,
    Button,
    Icon,
    View,
    Select,
    Box,
    Heading,
    Center
  } from "native-base";
  import { useForm, Controller } from "react-hook-form";
  import { FontAwesome } from "@expo/vector-icons";
  

// import personService from '../../BackendCall/JustChecking/personService'

const AddMember = (props) => {

    const [addMemberForm, setMemberForm] = useState({
        mobileNo: null,
        role: null
    });

    console.log(addMemberForm);
    

    // personService.getAll()
    // .then(allPersons => {
    //   console.log(allPersons)
    // })

    const {control, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log("Submitting with ", data, addMemberForm);
    };

    return (
      <View bg={"fi.400"} h="100%">
        <Box
        flex={1}
        p={2}
        w="100%"
        mx='auto'
        bg='fi.50'
        >
  
          <Box w = "100%">
            <Center>
              <Heading size = "lg" color = "fi.200" mt = "10%">
                Add Member
              </Heading>
            </Center>
          </Box>
  
          <VStack space={5} mt={10} w="90%" pb={10}>
          <FormControl mr={5} ml={5}>
              <FormControl.Label
                _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
              >
                Mobile Number:
              </FormControl.Label>
              <Input value = {addMemberForm.mobileNo} onChangeText = {(text) => setMemberForm(prevState => {
                return {...prevState, mobileNo: text};
              })}/>
            </FormControl>

            <FormControl mr={5} ml={5}>
              <FormControl.Label
                _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
              >
                Role:
              </FormControl.Label>
              <Controller
                control={control}
                render={({ role }) => (
                  <Select
                    placeholder="Choose Iteration Period"
                    selectedValue={ addMemberForm.role }
                    width={"100%"} onValueChange = {(itemValue) => {
                      setMemberForm(prevState => {
                        return {...prevState, role: itemValue}
                      })
                    }}
                    selectedItemBg={"fi.300"}
                    dropdownOpenIcon={
                      <Icon as = {<FontAwesome name = "chevron-circle-up" />} size={6} />
                    }
                    dropdownCloseIcon={
                      <Icon as= {<FontAwesome name="chevron-circle-down" />} size = {6}/>
                    }
                  >
                    <Select.Item label="Admin" value="admin" />
                    <Select.Item label="Member" value="member" />
                    <Select.Item label="Seasoned" value="seasoned" />
                  </Select>
                )}
                name="Role"
                rules={{ required: "Field is required" }}
              />
            </FormControl>

            <Button onPress ={() => {console.log('mac')}} color="fi.300" ml = {5} width = "100%">
              Create Member
            </Button>
          </VStack>
        </Box>
      </View>
    );
  
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        margin: 50
    }
});

export default AddMember;
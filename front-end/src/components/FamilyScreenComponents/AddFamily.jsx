import React, { useState } from "react";
import { StyleSheet } from "react-native";
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

const AddFamily = (props) => {

  const [addFamilyForm, setFamilyForm] = useState({
    name: null,
    description: null,
    iterationPeriod: null,
    budget: null
  });

  console.log(addFamilyForm);

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data, addFamilyForm);
  };

  // let [timePeriod, setTimePeriod] = useState("")

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
              Add familys
            </Heading>
          </Center>
        </Box>

        <VStack space={5} mt={10} w="90%" pb={10}>
          <FormControl mr={5} ml={5}>
            <FormControl.Label
              _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
            >
              Family Name:
            </FormControl.Label>
            <Input value = {addFamilyForm.name} onChangeText = {(text) => setFamilyForm(prevState => {
              return {...prevState, name: text};
            })}/>
          </FormControl>
          <FormControl mr={5} ml={5}>
            <FormControl.Label
              _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
            >
              Family Description:
            </FormControl.Label>
            <Input multiline={true} numberOfLines={4} value = {addFamilyForm.description} onChangeText = {(text) => setFamilyForm(prevState => {
              return {...prevState, description: text};
            })}/>
          </FormControl>
          <FormControl mr={5} ml={5}>
            <FormControl.Label
              _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
            >
              Iteration Period:
            </FormControl.Label>
            <Controller
              control={control}
              render={({ timePeriod }) => (
                <Select
                  placeholder="Choose Iteration Period"
                  selectedValue={ addFamilyForm.iterationPeriod }
                  width={"100%"} onValueChange = {(itemValue) => {
                    setFamilyForm(prevState => {
                      return {...prevState, iterationPeriod: itemValue}
                    })
                  }}
                  // onValueChange={(itemValue) => {
                  //   setTimePeriod(itemValue);
                  // }}
                  selectedItemBg={"fi.300"}
                  dropdownOpenIcon={
                    <Icon as = {<FontAwesome name = "chevron-circle-up" />} size={6} />
                  }
                  dropdownCloseIcon={
                    <Icon as= {<FontAwesome name="chevron-circle-down" />} size = {6}/>
                  }
                >
                  <Select.Item label="Daily" value="daily" />
                  <Select.Item label="Weekly" value="weekly" />
                  <Select.Item label="Monthly" value="monthly" />
                  <Select.Item label="Yearly" value="yearly" />
                </Select>
              )}
              name="Iteration Time"
              rules={{ required: "Field is required" }}
            />
          </FormControl>
          <FormControl mr={5} ml={5}>
            <FormControl.Label
              _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
            >
              Family Budget For Selected Time Period:
            </FormControl.Label>
            <Input value = {addFamilyForm.budget} onChangeText = {(text) => setFamilyForm(prevState => {
              return {...prevState, budget: text};
            })}/>
          </FormControl>
          <Button onPress ={() => {console.log('mac')}} style={{backgroundColor:'#f48c06'}} ml = {5} width = "100%">
            Create Family
          </Button>
        </VStack>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    margin: 50,
  },
});

export default AddFamily;

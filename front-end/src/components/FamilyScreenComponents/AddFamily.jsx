import React, { useState } from "react";
import { StyleSheet } from "react-native";
import axios from 'axios';
import {base} from '../../BackendCall/config'
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

const AddFamily = ({navigation}) => {

  const [addFamilyForm, setFamilyForm] = useState({
    name: null,
    desc: null,
    link:"",
    iterationPeriod: null,
    budget: null,
    members_id:[],
    admins_id:[],
    seasoned_id:[],
    membersBudget:[],
    tags:[]
  });

  
  const handleAddFamily= async(navigation) =>{
    console.log(addFamilyForm);
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'}

    try{
      const res = await axios.post(`${base}/family`,
      addFamilyForm, {headers})
      console.log(res.status)

      if(res.status===201 || res.status===200)
        navigation.navigate('Home')
      else
        navigation.navigate('Add Family')
    }
    catch(e){
      console.log(e)
    }
  }

  const { control, handleSubmit, errors } = useForm();

  // let [timePeriod, setTimePeriod] = useState("")

  return (
    <View bg={"fi.400"} h="100%">
      <Box flex={1} p={2} w="100%" mx="auto" bg="fi.50">
        <Box w="100%">
          <Center>
            <Heading size="lg" color="fi.200" mt="10%">
              Add family
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
            <Input
              value={addFamilyForm.name}
              onChangeText={(text) =>
                setFamilyForm((prevState) => {
                  return { ...prevState, name: text };
                })
              }
            />
          </FormControl>
          <FormControl mr={5} ml={5}>
            <FormControl.Label
              _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
            >
              Family Description:
            </FormControl.Label>
            <Input
              multiline={true}
              numberOfLines={4}
              value={addFamilyForm.description}
              onChangeText={(text) =>
                setFamilyForm((prevState) => {
                  return { ...prevState, desc: text };
                })
              }
            />
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
                  selectedValue={addFamilyForm.iterationPeriod}
                  width={"100%"}
                  onValueChange={(itemValue) => {
                    setFamilyForm((prevState) => {
                      return { ...prevState, iterationPeriod: itemValue };
                    });
                  }}
                  // onValueChange={(itemValue) => {
                  //   setTimePeriod(itemValue);
                  // }}
                  selectedItemBg={"fi.300"}
                  dropdownOpenIcon={
                    <Icon
                      as={<FontAwesome name="chevron-circle-up" />}
                      size={6}
                    />
                  }
                  dropdownCloseIcon={
                    <Icon
                      as={<FontAwesome name="chevron-circle-down" />}
                      size={6}
                    />
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
            <Input
              value={addFamilyForm.budget}
              onChangeText={(text) =>
                setFamilyForm((prevState) => {
                  return { ...prevState, budget: text };
                })
              }
            />
          </FormControl>
          <Button onPress ={() => {handleAddFamily(navigation)}} style={{backgroundColor:'#f48c06'}} ml = {5} width = "100%">
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

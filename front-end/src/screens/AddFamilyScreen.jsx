import React from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Center,
  View,
  Select,
  NativeBaseProvider,
  TextArea
} from "native-base";
import { useForm, Controller } from "react-hook-form";

const AddFamilyScreen = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <View bg={"fi.400"}>
      {/* <Text style={styles.textStyle}>AddFamilyScreen Page</Text> */}
      {/* //name description iterationDuration budget */}
      <VStack space={5} mt={10} w="90%" pb={10}>
        <FormControl mr={5} ml={5}>
          <FormControl.Label
            _text={{ color: "fi.50", fontSize: "sm", fontWeight: 600 }}
          >
            Family Name:
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mr={5} ml={5}>
          <FormControl.Label
            _text={{ color: "fi.50", fontSize: "sm", fontWeight: 600 }}
          >
            Family Description:
          </FormControl.Label>
          <Input multiline={true} numberOfLines={4} />
            {/* <FormControl.Label>Fav language:</FormControl.Label>
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <Select
                  placeholder="Choose Iteration Period"
                  selectedValue={value}
                  width={150}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue);
                  }}
                  selectedItemBg={"teal.400"}
                  dropdownOpenIcon={
                    <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
                  }
                  dropdownCloseIcon={
                    <Icon
                      name="arrow-drop-down"
                      type="MaterialIcons"
                      size={6}
                    />
                  }
                >
                  <Select.Item label="JavaScript" value="js" />
                  <Select.Item label="TypeScript" value="ts" />
                  <Select.Item label="Java" value="java" />
                </Select>
              )}
              name="language"
              rules={{ required: "Field is required" }}
              defaultValue="js"
            /> */}
        </FormControl>
        <Button onPress={handleSubmit(onSubmit)} color="fi.300" ml={10}>
          Create Group
        </Button>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    margin: 50,
  },
});

export default AddFamilyScreen;

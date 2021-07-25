import React from "react";
import { StyleSheet } from "react-native";
import {
  VStack,
  FormControl,
  Input,
  Button,
  Icon,
  View,
  Select,
} from "native-base";
import { useForm, Controller } from "react-hook-form";

const AddFamily = (props) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };
  return (
    <View bg={"fi.400"} h="100%">
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
        </FormControl>
        <FormControl mr={5} ml={5}>
          <FormControl.Label
            _text={{ color: "fi.50", fontSize: "sm", fontWeight: 600 }}
          >
            Iteration Period:
          </FormControl.Label>
          <Controller
            control={control}
            render={({ onchange, value }) => (
              <Select
                placeholder="Choose Iteration Period"
                selectedValue={value}
                width={"100%"}
                onValueChange={(itemValue) => {
                  onchange(itemValue);
                }}
                selectedItemBg={"fi.300"}
                dropdownOpenIcon={
                  <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
                }
                dropdownCloseIcon={
                  <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
                }
              >
                <Select.Item label="Daily" value="dy" />
                <Select.Item label="Weekly" value="wy" />
                <Select.Item label="Monthly" value="my" />
                <Select.Item label="Yearly" value="yy" />
              </Select>
            )}
            name="Iteration Time"
            rules={{ required: "Field is required" }}
            defaultValue="my"
          />
        </FormControl>
        <FormControl mr={5} ml={5}>
          <FormControl.Label
            _text={{ color: "fi.50", fontSize: "sm", fontWeight: 600 }}
          >
            Family Budget For Selected Time Period:
          </FormControl.Label>
          <Input />
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

export default AddFamily;

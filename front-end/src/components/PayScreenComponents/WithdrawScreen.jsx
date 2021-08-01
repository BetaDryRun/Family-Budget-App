import React,{useState,useEffect} from "react";
import { StyleSheet } from "react-native";
import {
  Radio,
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
  Center,
  View,
  Image,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const WithdrawScreen = ({ navigation }) => {
  const [withdrawForm, setWithdrawForm] = React.useState({
    to:"Personal wallet",
    amount: null
  });
  return (
    <VStack flex={1} p={2} w="100%" mx="auto" bg="fi.50">
      <Center>
        <Heading size="xl" color="fi.200" mt="30%" mb="10%">
          WITHDRAW MONEY
        </Heading>
      </Center>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Withdraw Money To: </FormControl.Label>
        <Radio.Group
          name="myRadioGroup"
          value={withdrawForm.to}
          onChange={(nextValue) => {
            setWithdrawForm({...withdrawForm,to:nextValue})
          }}
        >
          <Radio value="Personal wallet" my={1}>
            Personal wallet
          </Radio>
          <Radio value="Bank Account" my={1}>
            Bank Account
          </Radio>
        </Radio.Group>
      </FormControl>
      <VStack space={2} mt={"10%"}>
        <FormControl marginBottom={2}>
          <FormControl.Label
            _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
          >
            Amount To Be Withdrawn
          </FormControl.Label>
          <Input
            size="2xl"
            variant="outline"
            onChangeText={(text)=>setWithdrawForm({...withdrawForm, amount: text})}
            InputLeftElement={
              <Icon
                as={<FontAwesome name="rupee" />}
                size="sm"
                ml={5}
                mt={2}
                mb={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            placeholder="0"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            value={withdrawForm.amount}
          />
        </FormControl>
        <VStack space={2} mt={"15%"}>
          <HStack justifyContent="flex-start" noOfLines={2}>
            <Text fontSize="sm" color="fi.500" fontWeight={400}>
              <Icon
                color="fi.500"
                as={<FontAwesome name="rupee" />}
                size="xs"
              />{" "}
              {withdrawForm.amount} will be added to your {withdrawForm.to} wallet.
            </Text>
          </HStack>
          <Button
            bg="fi.300"
            _text={{ color: "white" }}
            onPress={() => {
              console.log(withdrawForm)
              // navigation.navigate("Families")
            }}
          >
            Withdraw Funds
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    margin: 50,
  },
});

export default WithdrawScreen;

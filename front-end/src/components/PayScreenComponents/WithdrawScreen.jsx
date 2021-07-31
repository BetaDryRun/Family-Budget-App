import React from "react";
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
  const [value, setValue] = React.useState("1");
  return (
    <VStack flex={1} p={2} w="100%" mx="auto" bg="fi.50">
      <Center>
        <Heading size="lg" color="fi.200" mt="20%">
          WITHDRAW MONEY
        </Heading>
      </Center>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Withdraw Money To: </FormControl.Label>
        <Radio.Group
          name="myRadioGroup"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
        >
          <Radio value="1" my={1}>
            Personal wallet
          </Radio>
          <Radio value="2" my={1}>
            Bank Account
          </Radio>
        </Radio.Group>
      </FormControl>
      <HStack>
        {/* <Radio.Group
          name="myRadioGroup"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
        >
          <Radio value="one" my={1}>
            One
          </Radio>
          <Radio value="two" my={1}>
            Two
          </Radio>
        </Radio.Group> */}
      </HStack>
      <VStack space={2} mt={5}>
        <FormControl marginBottom={2}>
          <FormControl.Label
            _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
          >
            Amount To Be Withdrawn
          </FormControl.Label>
          <Input
            size="2xl"
            variant="outline"
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
          />
        </FormControl>
        <VStack alignSelf="flex-end">
          <HStack justifyContent="flex-start" noOfLines={2}>
            <Text fontSize="sm" color="fi.500" fontWeight={400}>
              Add{" "}
              {
                <Icon
                  color="fi.500"
                  as={<FontAwesome name="rupee" />}
                  size="xs"
                />
              }{" "}
              5000 or more to earn upto{" "}
              <Icon
                color="fi.500"
                as={<FontAwesome name="rupee" />}
                size="xs"
              />{" "}
              200 worth of rewards.
            </Text>
          </HStack>
          <VStack space={2} mt={2}>
            <Button
              bg="fi.300"
              _text={{ color: "white" }}
              //   onPress={() => navigation.navigate("Home")}
            >
              Add Funds
            </Button>
          </VStack>
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

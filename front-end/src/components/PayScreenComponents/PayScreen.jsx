import React from "react";
import { StyleSheet } from "react-native";
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
  Center,
  View,
  Image,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const PayScreen = ({ navigation }) => {
  return (
    <VStack flex={1} p={2} w="100%" mx="auto" bg="fi.50">
      <Button
        bg="fi.300"
        _text={{ color: "fi.50" }}
        mt="7"
        w="16%"
        style={{
          borderRadius: 20,
          alignSelf: "flex-end",
          justifyContent: "center",
        }}
        // onPress={() => navigation.navigate("Add Money")}
        startIcon={
          <Icon
            color="fi.50"
            as={<FontAwesome name="qrcode" />}
            size="md"
            ml="1"
            style={{ alignSelf: "center" }}
          />
        }
      />
      <Center>
        <Heading size="lg" color="fi.200" mt="2">
          PAY MONEY
        </Heading>
      </Center>

      <VStack space={2}>
        <FormControl marginBottom={2}>
          <FormControl.Label
            _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
          >
            Pay To
          </FormControl.Label>
          <Input
            size="2xl"
            variant="outline"
            InputLeftElement={
              <Icon
                as={<FontAwesome name="phone" />}
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
            placeholder=""
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </FormControl>
        <FormControl marginBottom={2}>
          <FormControl.Label
            _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
          >
            Amount
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
        <FormControl mb={5}>
          <FormControl.Label
            _text={{ color: "fi.500", fontSize: "md", fontWeight: 600 }}
          >
            Select UPI App
          </FormControl.Label>
          <HStack
            alignItem="center"
            marginBottom={1}
            marginTop={1}
            marginLeft={2}
          >
            <Box
              style={{ justifyContent: "center", alignContent: "center" }}
              bg="white"
              //   rounded="md"
              //   shadow={3}
              height={20}
              width={20}
            >
              <VStack
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <Image
                  size={10}
                  resizeMode={"contain"}
                  source={require("../../../assets/upi.png")}
                  alt="Alternate Text"
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{ alignSelf: "center" }}
                  fontSize={"15"}
                  color="black"
                >
                  BHIM
                </Text>
              </VStack>
            </Box>
            <Box
              style={{ justifyContent: "center", alignContent: "center" }}
              bg="white"
              //   rounded="md"
              //   shadow={3}
              height={20}
              width={20}
            >
              <VStack
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <Image
                  size={10}
                  source={require("../../../assets/gpay.png")}
                  alt="Alternate Text"
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{ alignSelf: "center" }}
                  fontSize={"15"}
                  color="black"
                >
                  GPAY
                </Text>
              </VStack>
            </Box>
            <Box
              style={{ justifyContent: "center", alignContent: "center" }}
              bg="white"
              //   rounded="md"
              //   shadow={3}
              height={20}
              width={20}
            >
              <VStack
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <Image
                  size={10}
                  resizeMode={"contain"}
                  source={require("../../../assets/icici.png")}
                  alt="Alternate Text"
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{ alignSelf: "center" }}
                  fontSize={"15"}
                  color="black"
                >
                  ICICI
                </Text>
              </VStack>
            </Box>
            <Box
              style={{ justifyContent: "center", alignContent: "center" }}
              bg="white"
              //   rounded="md"
              //   shadow={3}
              height={20}
              width={20}
            >
              <VStack
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <Image
                  size={10}
                  resizeMode={"contain"}
                  source={require("../../../assets/paytm.png")}
                  alt="Alternate Text"
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{ alignSelf: "center" }}
                  fontSize={"15"}
                  color="black"
                >
                  PAYTM
                </Text>
              </VStack>
            </Box>
          </HStack>
          <Link
            _text={{ fontSize: "xs", fontWeight: "700", color: "fi.500" }}
            alignSelf="flex-end"
          >
            Add via NEFT/IMPS
          </Link>
        </FormControl>
        <VStack alignSelf="flex-end">
          <HStack justifyContent="flex-start" noOfLines={2}>
            <Text fontSize="sm" color="fi.500" fontWeight={400}>
              Pay{" "}
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
              Pay from Wallet
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

export default PayScreen;

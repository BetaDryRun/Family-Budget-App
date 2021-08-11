import React,{useState} from "react";
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

const AddMoneyScreen = ({ navigation }) => {
  const [addAmountForm, setAddAmountForm] = useState({
    amount:null
  });

  return (
    <VStack flex={1} p={2} space={2} w="100%" mx="auto" bg="fi.50">
      <Center>
        <Heading size="lg" color="fi.200" mt="40%">
          ADD MONEY
        </Heading>
        <Heading size="lg" color="fi.200" mb="10%">
          TO THE WALLET
        </Heading>
      </Center>

      <VStack space={4} mt={5}>
        <FormControl marginBottom={2}>
          <FormControl.Label
            _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
          >
            Funds To Add
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
            onChangeText={(Text) => {
              setAddAmountForm({...addAmountForm,amount:parseInt(Text)});
            }}
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
            marginBottom={3}
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
            mt={1}
          >
            Add via NEFT/IMPS
          </Link>
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
              onPress={() => {
                console.log(addAmountForm)
                navigation.navigate("Home")
              }}
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

export default AddMoneyScreen;

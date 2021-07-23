import React from "react";
import { Button, View, TouchableOpacity, FlatList } from "react-native";
import { DummyFamily } from "../../dummyData/Data";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from "native-base";

const FamilyList = ({ navigation }) => {
    const changeBal = (item) => {
        let bal = 0;
        item.map((key) => {
            console.log(key);
            bal = bal + key.remainingBudget;
        })
        return (
            <Text color="gray.400">{bal}</Text>
        );
    }
  const renderItem = ({ item, index }) => {
    return (
      <Box bg="white" shadow={5} rounded="lg" maxWidth="100%" mt={5}>
        <Stack space={4} m={4}>
          <Text color="gray.400">
            No Of Members:{" "}
            {item.members.length + item.members.length + item.members.length}
          </Text>
          <Heading size={["md", "lg", "md"]}>{item.name}</Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
            {item.description}
          </Text>
          <Text color="gray.400">
            Family Account Balance: {changeBal(item.membersBudgets)}/{item.budget}
          </Text>
        </Stack>
      </Box>
    );
  };
  return (
      <View style={{ flex: 1 }}>
          {/* <TouchableOpacity onPress={()} */}
      <FlatList
        data={DummyFamily}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          marginTop: 16,
        }}
        keyExtractor={({ item, index }) => String(index)}
        renderItem={renderItem}
      ></FlatList>
      <Button
        title="Go to Family 1"
        onPress={() => navigation.navigate("Family")}
      />
    </View>
  );
};

export default FamilyList;

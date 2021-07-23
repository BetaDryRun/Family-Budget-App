import React from "react";
import { Button, TouchableOpacity, FlatList } from "react-native";
import { DummyFamily } from "../../dummyData/Data";
import {
  View,
  Text,
  Box,
  Stack,
  Heading,
  Fab, 
  Icon
} from "native-base";
import { AntDesign } from "@expo/vector-icons"


export const FabButton = () => {
  return (
      <Fab
        right={5}
        bottom={20}
        size="sm"
        bg='fi.300'
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
  )
}

const FamilyList = ({ navigation }) => {
    const changeBal = (item) => {
        let bal = 0;
        item.map((key) => {
            bal = bal + key.remainingBudget;
        })
        return (
            <Text color="fi.300">{bal}</Text>
        );
    }
  const renderItem = ({ item, index }) => {
    return (
      <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mt={5}>
        <Stack space={4} m={4}>
          <Heading color='fi.300' size={["md", "lg", "md"]}>{item.name}</Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
            {item.description}
          </Text>
          <Text color="fi.100">
            No Of Members:{" "}
            <Text color="fi.50">{item.members.length + item.members.length + item.members.length}</Text>
          </Text>
          <Text color="fi.100">
            Family Account Balance: {changeBal(item.membersBudgets)}/<Text color="fi.50">{item.budget}</Text>
          </Text>
        </Stack>
      </Box>
    );
  };
  return (
    <View bg={'fi.50'} style={{ flex: 1, height: "100%", paddingBottom: 10 }}>
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
      <FabButton/>
      {/* <View style={{ marginTop: 10 }}>
        <Button
          title="Go to Family 1"
          onPress={() => navigation.navigate("Family")}
        />
      </View> */}
    </View>
  );
};

export default FamilyList;

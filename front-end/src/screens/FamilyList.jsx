import React, { useState } from "react";
import { FlatList, ImageBackground } from "react-native";
import { DummyFamily } from "../dummyData/Data";
import {
  View,
  Text,
  Box,
  Stack,
  Heading,
  Button,
  Icon,
  Pressable,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "../components/Utility";

const image = {
  uri: "https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25",
};

const role = ['ADMIN', 'SEASONED', 'MEMBER'];

const FabButton = ({ navigation }) => {
  const [selecting, setSelecting] = useState();
  return (
    <Button
      bg="fi.300"
      style={{
        position: "absolute",
        bottom: 20,
        right: 10,
        height: 60,
        width: 60,
        borderRadius: 40,
      }}
      startIcon={
        <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
      }
      onPress={() => navigation.navigate("Add Family")}
    />
  );
};

const changeBal = (item) => {
  let bal = 0;
  item.map((key) => {
    bal = bal + key.remainingBudget;
  });
  return <Text color="fi.300">{bal}</Text>;
};
const FamilyList = ({ navigation }) => {
  const renderItem = ({ item, index }) => {
    return (
      <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mt={5}>
        <Pressable
          onPress={() => {
            role[index%3]==='ADMIN'?navigation.navigate("FamilyForAdmin", { selectedItem: item })
            :
            role[index%3]==='SEASONED'?navigation.navigate("FamilyForSeasoned", { selectedItem: item })
            :
            navigation.navigate("FamilyForMember", { selectedItem: item })
          }}
        >
          <Stack space={4} m={4}>
            <Heading color="fi.300" size={["md", "lg", "md"]}>
              {item.name}
            </Heading>
            <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
              {item.description}
            </Text>
            <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
              Role - {role[index%3]}
            </Text>
            <Text color="fi.100">
              No Of Members:{" "}
              <Text color="fi.50">
                {item.members.length +
                  item.members.length +
                  item.members.length}
              </Text>
            </Text>
            <Text color="fi.100">
              Family Account Balance: {changeBal(item.membersBudgets)}/
              <Text color="fi.50">{item.budget}</Text>
            </Text>
          </Stack>
        </Pressable>
      </Box>
    );
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Header Title={"My Families"} />
        <FlatList
          data={DummyFamily}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
            marginTop: 4,
          }}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
        />
        <FabButton navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

export default FamilyList;

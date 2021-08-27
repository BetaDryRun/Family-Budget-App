import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, ImageBackground } from "react-native";
import { DummyFamily } from "../dummyData/Data";
import axios from 'axios';
import {base} from '../BackendCall/config'
import {
  View,
  Text,
  Box,
  Stack,
  Heading,
  Button,
  Icon,
  Pressable,
  Center,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "../components/Utility";
import { Title } from "react-native-paper";

const image = {
  uri: "https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25",
};

const role = ['HEAD', 'SEASONED', 'MEMBER'];

const FabButton = ({ navigation }) => {
  const [selecting, setSelecting] = useState();
  return (
    <Button
      bg="fi.300"
      style={{
        position: "absolute",
        bottom: 85,
        right: 15,
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

const changeBal = (item,bal) => {
  item.map((key) => {
    bal = bal - (key.budget -  key.remainingBudget);
  });
  return <Text color="fi.300">{bal}</Text>;
};


const FamilyList = ({ navigation }) => {

  const [families,setFamilies] = useState([]);
  const [user,setUser] = useState(null);
  const isFocused = useIsFocused();

  const callAllFamilies = async() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'}

    try{
      const res1 = await axios.get(`${base}/user/families`, {headers})
      setFamilies(res1.data)
      console.log("Families loaded!")
      const res2 = await axios.get(`${base}/user`, {headers})
      setUser(res2.data)
      console.log("User loaded!")
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    if(isFocused)
      callAllFamilies()
  },[navigation, isFocused])


  const renderItem = ({ item, index }) => {
    return (
      
      <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mt={5}>
        <Pressable
          onPress={() => {
            role[index%3]==='HEAD'?navigation.navigate("FamilyForAdmin", { selectedItem: item, user:user })
            :
            role[index%3]==='SEASONED'?navigation.navigate("FamilyForSeasoned", { selectedItem: item, user:user })
            :
            navigation.navigate("FamilyForMember", { selectedItem: item, user:user  })
          }}
        >
          <Stack space={4} m={4}>
            <Heading color="fi.300" size={["md", "lg", "md"]}>
              {item.name}
            </Heading>
            <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
              {item.desc}
            </Text>
            <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
              Role - {role[index%3]}
            </Text>
            <Text color="fi.100">
              No Of Members:{" "}
              <Text color="fi.50">
                {item.members_id.length}
              </Text>
            </Text>
            <Text color="fi.100">
              Family Account Balance: {changeBal(item.membersBudget,item.budget)}/
              <Text color="fi.50">{item.budget}</Text>
            </Text>
          </Stack>
        </Pressable>
      </Box>
    );
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <Header Title={"My Families"} />
      <View h="95%">
      <ImageBackground
            source={image}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
      {
        families.length===0?
          <Center> <Title>No Families Present</Title> </Center>
        :
          <View>
            <FlatList
              data={families}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
                marginTop: 4,
              }}
              keyExtractor={(item) => String(item.id)}
              renderItem={renderItem}
            />
          </View>
      }

      <FabButton navigation={navigation} />
      </ImageBackground>
      </View>
    </View>
  );
};

export default FamilyList;

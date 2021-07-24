import React from "react";
import { FlatList, ImageBackground } from "react-native";
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
import {Header} from "../Utility"

const image = { uri: 'https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25' };
// const image = { uri: 'https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg' };
// const image = { uri: 'https://i.pinimg.com/474x/8f/b4/59/8fb4595307a2ad198fff92899d69ccb7.jpg' };


export const FabButton = ({navigation}) => {
  return (
      <Fab
        right={5}
        bottom={20}
        size="sm"
        bg='fi.300'
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        onPress={()=> navigation.navigate('Add Family')}
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
    <View style={{ flex: 1, height: "100%"}}>
      <ImageBackground 
        source={image} 
        resizeMode="cover" 
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >

      <Header Title={"My Families"}/>
      {/* <TouchableOpacity onPress={()} */}
      <FlatList
        data={DummyFamily}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          marginTop: 4,
        }}
        keyExtractor={({ item, index }) => String(index)}
        renderItem={renderItem}
      ></FlatList>
      <FabButton navigation={navigation}/>
      </ImageBackground>
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

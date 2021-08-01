import { useState, useEffect } from "react";
import * as React from "react";
import { DataTable } from "react-native-paper";
const optionsPerPage = [2, 3, 4];
import { SafeAreaView, FlatList, ImageBackground } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Header } from "../../../components/Utility";
import {
  Box,
  Text,
  View,
  VStack,
  Avatar,
  HStack,
  Button,
  Icon,
  Center,
  Heading,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import {
  AnimatedCircularProgress,
  Easing,
} from "react-native-circular-progress";
import WhiteCarousel from "./WhiteCarousel";

//Data
import { family } from "../../../dummyData/OrganisedData/Family";
import { familyTransactionsInThisIteration } from "../../../dummyData/OrganisedData/FamilyTransactions";
import { familyWallet } from "../../../dummyData/OrganisedData/FamilyWallet";
import { familyUsers } from "../../../dummyData/OrganisedData/FamilyUsers";
import { alignContent } from "styled-system";

const image = {
  uri: "https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25",
};

const FamilyInnerData = ({ type }) => {
  let value = familyWallet.currentAmount;
  return (
    <HStack>
      <Icon
        color="fi.300"
        as={<FontAwesome name="rupee" />}
        size="xs"
        alignContent="center"
      />
      <Text bold fontSize="md" color="fi.300" alignContent="center">
        {value}
      </Text>
    </HStack>
  );
};
const PerosnalInnerData = ({ type }) => {
  let value = 0;
  family.membersBudgets.map((member) => {
    if (member.id === "1") value += member.remainingBudget;
  });
  return (
    <HStack>
      <Icon
        color="fi.300"
        as={<FontAwesome name="rupee" />}
        size="xs"
        alignContent="center"
      />
      <Text bold fontSize="md" color="fi.300" alignContent="center">
        {value}
      </Text>
    </HStack>
  );
};

const AdminCarouselSelector = (item, navigation) => {
  switch (item) {
    case 0:
      return <FunctionalPage navigation={navigation} />;
    case 1:
      return <GeneralInfo />;
    case 2:
      return <SpendTable />;
    case 3:
      return <TransactionHistory />;
    default:
      return <Text>No Data</Text>;
  }
};

const FunctionalPage = (props) => {
  const { navigation } = props;
  //   const itemSelected = props?.route?.params?.selectedItem;

  const calculator = () => {
    let value = 0;
    let total = 0;
    family.membersBudgets.map((member) => {
      if (member.id === "1") {
        value += member.remainingBudget;
        total += member.budget;
      }
    });
    return (value / total) * 100;
  };

  return (
    <View>
      {/* <Header Title={itemSelected.name} /> */}
      <Box bg="fi.600" w="100%" h="100%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 90 }}>
          <VStack space={5} alignItems="center">
            <Text color="fi.50" style={{ fontSize: 25 }} mt="-20">
              {family.name}
            </Text>
            <AnimatedCircularProgress
              size={100}
              width={15}
              fill={(familyWallet.currentAmount / family.budget) * 100}
              tintColor="#00c69c"
              dashedTint={{ width: 1, gap: 2 }}
              // ref={(ref) => setCircularProgress(ref)}
              backgroundColor="#3d5875"
            >
              {FamilyInnerData}
            </AnimatedCircularProgress>
            <Text color="fi.100" mt="0">
              Family Balance
            </Text>

            <AnimatedCircularProgress
              size={100}
              width={15}
              fill={calculator()}
              tintColor="#00c69c"
              dashedTint={{ width: 1, gap: 2 }}
              // ref={(ref) => setCircularProgress(ref)}
              backgroundColor="#3d5875"
            >
              {PerosnalInnerData}
            </AnimatedCircularProgress>
            <Text color="fi.100" mt="0">
              Personal Balance
            </Text>
            <HStack mt="18" space={4}>
              <Button
                bg="fi.300"
                _text={{ color: "fi.50" }}
                mt="5"
                w="45%"
                style={{ borderRadius: 20 }}
                onPress={() => {
                  navigation.navigate("Add Money");
                }}
                startIcon={
                  <Icon
                    color="fi.50"
                    as={<FontAwesome name="puzzle-piece" />}
                    size="sm"
                  />
                }
              >
                Add Money
              </Button>
              <Button
                bg="fi.300"
                _text={{ color: "fi.50" }}
                mt="5"
                w="35%"
                h="50"
                style={{ borderRadius: 20 }}
                onPress={() => navigation.navigate("Pay")}
                startIcon={
                  <Icon
                    color="fi.50"
                    as={<FontAwesome name="share" />}
                    size="sm"
                  />
                }
              >
                Pay
              </Button>
            </HStack>
            <HStack mt="-12" space={3} alignContent="center">
              <Button
                bg="fi.300"
                _text={{ color: "fi.50" }}
                mt="5"
                w="45%"
                style={{ borderRadius: 20 }}
                onPress={() => navigation.navigate("Reports")}
                startIcon={
                  <Icon
                    color="fi.50"
                    as={<FontAwesome name="signal" />}
                    size="sm"
                  />
                }
              >
                Family Reports
              </Button>
              <Button
                bg="fi.300"
                _text={{ color: "fi.50" }}
                mt="5"
                w="35%"
                h="50"
                style={{ borderRadius: 20 }}
                onPress={() => navigation.navigate("Withdraw")}
                startIcon={
                  <Icon
                    color="fi.50"
                    as={<FontAwesome name="retweet" />}
                    size="sm"
                  />
                }
              >
                Withdraw
              </Button>
            </HStack>
          </VStack>
        </View>
      </Box>
    </View>
  );
};

const GeneralInfo = () => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Header Title={"General Info"} p="10"/>
      <VStack space={5} ml="5" mr="5" h="100%">
        <Box bg="fi.500" shadow={5} rounded="lg" mt={5} mr={5} p={2}>
          <Heading color="fi.300" size={"md"}>
            Highest Spender
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
            User 1
          </Text>
        </Box>
        <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mr={5} p={2}>
          <Heading color="fi.300" size={["md", "lg", "md"]}>
            Lowest Spender
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
            User 2
          </Text>
        </Box>
        <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mr={5} p={2}>
          <Heading color="fi.300" size={["md", "lg", "md"]}>
            Highest Contributor
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
            User 3
          </Text>
        </Box>
        <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mr={5} p={2}>
          <Heading color="fi.300" size={["md", "lg", "md"]}>
            Lowest Contributor
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
            User 1
          </Text>
        </Box>
        <Box bg="fi.500" shadow={5} rounded="lg" maxWidth="100%" mr={5} p={2}>
          <Heading color="fi.300" size={["md", "lg", "md"]}>
            Average Money spent per user
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="fi.50">
            Numeric Value
          </Text>
        </Box>
      </VStack>
    </ImageBackground>
  );
};

const SpendTable = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  return (
    <View>
      <Header Title={"Spendings"} />
      <Box bg="fi.50" w="100%" h="100%">
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Spending</DataTable.Title>
            <DataTable.Title numeric>Total</DataTable.Title>
          </DataTable.Header>
          {family.membersBudgets.map((member, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{member.firstName}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {member.remainingBudget}
                </DataTable.Cell>
                <DataTable.Cell numeric>{member.budget}</DataTable.Cell>
              </DataTable.Row>
            );
          })}

          <DataTable.Pagination
            page={page}
            numberOfPages={1}
            onPageChange={(page) => setPage(page)}
            label="1-3 of 3"
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={"Rows per page"}
          />
        </DataTable>
      </Box>
    </View>
  );
};

const TransactionHistory = () => {
  return (
    <View>
      <Header Title={"Family Transactions"} />
      <Box bg="fi.50" w="100%" h="100%">
        <VStack space={5}>
          <View
            mt="-10"
            style={{
              borderBottomColor: "#00c69c",
              borderBottomWidth: 3,
            }}
          />
          <FlatList
            data={familyTransactionsInThisIteration}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 16,
              marginTop: 4,
            }}
            keyExtractor={(item) => String(item.id)}
            renderItem={Transaction}
          />
        </VStack>
      </Box>
    </View>
  );
};

const Transaction = ({ item, index }) => {
  return (
    <View w="200" h="150">
      <HStack space={2}>
        <Avatar alignItems="center" style={{ alignSelf: "center" }} />
        <VStack space={3}>
          {item.amount < 0 ? (
            <Text>You gave money to {item.to}.</Text>
          ) : (
            <Text>You got money from {item.from}.</Text>
          )}
          <Text>{item.timeStamp}</Text>
        </VStack>
        {item.amount < 0 ? (
          <Text
            mt="5"
            fontSize="25"
            alignItems="center"
            style={{ color: "red", alignSelf: "center" }}
          >
            <Icon color="red" as={<FontAwesome name="rupee" />} size="sm" />
            {Math.abs(item.amount)}
          </Text>
        ) : (
          <Text
            mt="5"
            fontSize="25"
            alignItems="center"
            style={{ color: "#00c79b", alignSelf: "center" }}
          >
            <Icon color="fi.300" as={<FontAwesome name="rupee" />} size="sm" />
            {item.amount}
          </Text>
        )}
      </HStack>
      <View
        mt="7"
        w="200"
        ml="70"
        style={{
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default class FamilyForAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      activeIndex: 0,
      carouselItems: [0, 1, 2, 3],
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 5,
          height: 640,
        }}
      >
        {AdminCarouselSelector(item, this.props.navigation)}
      </View>
    );
  }
  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: "#282828", marginBottom: -15 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: "#00c79b",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#282828" }}>
        <View
          style={{ flex: 2, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            //   layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={385}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        {this.pagination}
      </SafeAreaView>
    );
  }
}

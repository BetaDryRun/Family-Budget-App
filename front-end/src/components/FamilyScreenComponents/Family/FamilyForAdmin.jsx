import { useState, useEffect } from "react";
import * as React from "react";
import { DataTable } from "react-native-paper";
const optionsPerPage = [2, 3, 4];
import { SafeAreaView, FlatList, ImageBackground } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Header } from "../../../components/Utility";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Text,
  View,
  VStack,
  Avatar,
  FormControl,Input,
  HStack,
  Button,
  Modal,
  Icon,
  Center,
  Heading,
  Image,
  Select
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
      return <SpendTable />;
    case 2:
      return <TransactionHistory />;
    default:
      return <Text>No Data</Text>;
  }
};

const AddMemberModal=({showModal,setShowModal})=>{
    const [addMemberForm, setMemberForm] = useState({
        mobileNo: null,
        role: null
    });

    const {control, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log("Submitting with ", data, addMemberForm);
    };

    return(
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          {/* <Modal.Header>Request Money from Heads</Modal.Header> */}
          <Modal.Body>
            <VStack>
              <Box w = "100%">
                <Center>
                  <Heading size = "lg" color = "fi.200">
                    Add Member
                  </Heading>
                </Center>
              </Box>
      
              <VStack space={5} mt={10} w="90%" pb={10}>
              <FormControl mr={5} ml={5}>
                  <FormControl.Label
                    _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
                  >
                    Mobile Number:
                  </FormControl.Label>
                  <Input value = {addMemberForm.mobileNo} onChangeText = {(text) => setMemberForm(prevState => {
                    return {...prevState, mobileNo: text};
                  })}/>
                </FormControl>

                <FormControl mr={5} ml={5}>
                  <FormControl.Label
                    _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
                  >
                    Member Role:
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ role }) => (
                      <Select
                        placeholder="Choose Role"
                        selectedValue={ addMemberForm.role }
                        width={"100%"} onValueChange = {(itemValue) => {
                          setMemberForm(prevState => {
                            return {...prevState, role: itemValue}
                          })
                        }}
                        selectedItemBg={"fi.300"}
                        dropdownOpenIcon={
                          <Icon as = {<FontAwesome name = "chevron-circle-up" />} size={6} />
                        }
                        dropdownCloseIcon={
                          <Icon as= {<FontAwesome name="chevron-circle-down" />} size = {6}/>
                        }
                      >
                        <Select.Item label="Head" value="head" />
                        <Select.Item label="Seasoned" value="seasoned" />
                        <Select.Item label="Member" value="member" />
                      </Select>
                    )}
                    name="Role"
                    rules={{ required: "Field is required" }}
                  />
                </FormControl>

                <Button onPress={() => {
                            setShowModal(false)
                          }} style={{backgroundColor:'#e85d04'}} ml = {5} width = "100%">
                  Add Member
                </Button>
              </VStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
}

const FunctionalPage = (props) => {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false)
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
      <AddMemberModal showModal={showModal} setShowModal={setShowModal}/>
      <Box bg="fi.600" w="100%" h="100%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 65 }}>
          <VStack space={5} alignItems="center">
            <Button
              bg="fi.600"
              _text={{ color: 'fi.50' }}
              onPress={() => setShowModal(true)}
              style={{
                borderRadius: 20,
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
              startIcon={
                <Icon
                  color="fi.300"
                  as={<FontAwesome name="plus-square" color="fi.50"/>}
                  size="lg"
                  style={{ alignSelf: "center" }}
                />
              }
            />
            <Text color="fi.50" style={{ fontSize: 25 }} mt="-20">
              {family.name}
            </Text>
            <AnimatedCircularProgress
              size={100}
              width={15}
              fill={(familyWallet.currentAmount / family.budget) * 100}
              tintColor="#f48c06"
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
              tintColor="#f48c06"
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
                _text={{ color: 'fi.50' }}
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
                _text={{ color: 'fi.50' }}
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
                _text={{ color: 'fi.50' }}
                mt="5"
                w="45%"
                style={{ borderRadius: 20 }}
                onPress={() => navigation.navigate("Family Reports")}
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
                _text={{ color: 'fi.50' }}
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
        <Image
            size={50}
            alignSelf='center'
            resizeMode={"contain"}
            borderRadius={250}
            source={{
                uri: "data:image/png;base64,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",
            }}
            alt="Alternate Text"
        />
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
            fontSize="22"
            alignItems="center"
            style={{ color: "red", alignSelf: "center" }}
          >
            <Icon color="red" as={<FontAwesome name="rupee" />} size="sm" />
            {Math.abs(item.amount)}
          </Text>
        ) : (
          <Text
            mt="5"
            fontSize="22"
            alignItems="center"
            style={{ color: "#e85d04", alignSelf: "center" }}
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
      carouselItems: [0, 1, 2],
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "#fff",
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
          backgroundColor: "#e85d04",
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

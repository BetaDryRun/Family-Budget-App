import { useState, useEffect } from "react";
import * as React from "react";
import { DataTable } from "react-native-paper";
const optionsPerPage = [2, 3, 4];
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Header1, Header } from "../components/Utility";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Text,
  View,
  VStack,
  Avatar,
  FormControl,
  Input,
  HStack,
  Button,
  Modal,
  Icon,
  Center,
  Heading,
  Image,
  Select,
  ScrollView,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import {BarChart,BarChart1, LineGraph, LineGraph1, PiChart, PiChart2} from '../components/Utility'

const AdminCarouselSelector = (item, navigation) => {
  switch (item) {
    case 0:
      return <ByMembers />;
    case 1:
      return <ByTags />;
    default:
      return <Text>No Data</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  chart: {
    flex: 1,
  },
});

const ByMembers = ({}) => {
  return (
    <View>
      <Header Title={"Members Analysis"} />
      <Box bg="fi.50" w="100%" h="100%">
      <ScrollView mb='100'>
        <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <BarChart />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <LineGraph />
          </View>
      </ScrollView>
      </Box>
    </View>
  );
};

const ByTags = ({}) => {
  return (
    <View>
      <Header Title={"Category Analysis"} />
      <Box bg="fi.50" w="100%" h="100%">
      <ScrollView mb='100'>
        <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <BarChart1 />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <LineGraph1 />
          </View>
      </ScrollView>
      </Box>
    </View>
  );
};

export default class ReportsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      activeIndex: 0,
      carouselItems: [0, 1],
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
        containerStyle={{ backgroundColor: "#ffffff", marginBottom: -20}}
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
          <View>
            <View  w="100%" h="93.5%">
            <Header Title={"Members Analysis"} />
            <Box bg="fi.50">
            <ScrollView mb='100'>
              <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
                  <BarChart1 />
                </View>
                <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
                  <LineGraph />
                </View>
            </ScrollView>
            </Box>
          </View>
        <Button
          bg="fi.600"
          _text={{ color: "fi.50" }}
          onPress={() => this.props.navigation.navigate("Calender")}
          startIcon={
            <Icon
              color="fi.50"
              as={<FontAwesome name="calendar" color="fi.50" />}
              size="sm"
              style={{ alignSelf: "center" }}
            />
          }
        >
          Select Time Interval
        </Button>
        </View>
    );
  }
}

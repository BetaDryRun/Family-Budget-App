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

import {BarChart, LineGraph, PiChart} from '../components/Utility'

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
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <BarChart />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <PiChart />
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
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <BarChart />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <PiChart />
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
            <LineGraph />
          </View>
      </ScrollView>
      </Box>
    </View>
  );
};

const Chart3 = ({}) => {
  return (
    <View>
      <Box bg="fi.50" w="100%" h="100%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 65 }}>
          <Text>Charts Page</Text>
          <View w="100%" h="100%" alignSelf="center">
            <PieChart
              data={[
                {
                  name: "Seoul",
                  population: 21500000,
                  color: "rgba(131, 167, 234, 1)",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
                {
                  name: "Toronto",
                  population: 2800000,
                  color: "#F00",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
                {
                  name: "Beijing",
                  population: 527612,
                  color: "red",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
                {
                  name: "New York",
                  population: 8538000,
                  color: "#ffffff",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
                {
                  name: "Moscow",
                  population: 11920000,
                  color: "rgb(0, 0, 255)",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
              ]}
              width={300}
              height={300}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(244, 140, 6)`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          </View>
        </View>
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
        containerStyle={{ backgroundColor: "#ffffff", marginBottom: -15 }}
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
              layout={"default"}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={385}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
          {this.pagination}
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
      </SafeAreaView>
    );
  }
}

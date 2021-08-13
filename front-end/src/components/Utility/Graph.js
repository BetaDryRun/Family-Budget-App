import React,{useState} from 'react';
import {
    Box,
    Text,
    Center,
    View,
    Button,
    Icon,
    Heading
  } from 'native-base';
  import { FontAwesome } from "@expo/vector-icons";

  import Calendar from "react-native-calendar-range-picker";

  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
  } from "react-native-chart-kit";

  const Graph = ({navigation}) => {
    return (
      <View>
        <Heading size="md" mt='4'>Spendings Per Day</Heading>
        <View alignContent='center'>
        <LineChart
          data={{
            labels: [
              "1st",
              "2nd",
              "3rd",
              "4th",
              "5th",
              "6th",
              "7th",
              '8th'
            ],
            datasets: [
              {
                data: [
                  Math.random() * 300,
                  Math.random() * 300,
                  Math.random() * 300,
                  Math.random() * 300,
                  Math.random() * 300,
                  Math.random() * 300,
                  Math.random() * 300,
                  Math.random() * 300
                ],
              },
            ],
          }}
          width={350} // from react-native
          height={350}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        </View>
        <Text w="341" mt='-20'>This is the per day sendings by the members of the family during 1st August, 2021 - 8th August, 2021</Text>
      </View>
    )
  }

export default Graph;
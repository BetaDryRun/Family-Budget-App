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

  const Barchart = ({navigation}) => {
    return (
        <View>
          <Heading size="md" mt='4'>Spendings Per Member</Heading>
          <View alignContent='center' mt='4'>
            <BarChart
              data={{
                labels: [
                  "Naman",
                  "Apoorv",
                  "March",
                  "Utkarsh",
                  "Sarthak",
                ],
                datasets: [
                  {
                    data: [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, 
                      Math.random() * 1000, Math.random() * 1000],
                  },
                ],
              }}
              width={320}
              height={350}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `#000000`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                alignContent:'center'
              }}
            />
            <Text w="341" mt='-20'>This is the per member sendings during 1st August, 2021 - 8th August, 2021</Text>
        </View>
      </View>
    )
  }

export default Barchart;
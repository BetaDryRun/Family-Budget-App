import React,{useState} from 'react';
import {
    Box,
    Text,
    Center,
    View,
    Button,
    Icon
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
          width={350}
          height={420}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgb(231, 84, 128)`,
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
    )
  }

export default Barchart;
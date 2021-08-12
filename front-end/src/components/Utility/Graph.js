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

  const Graph = ({navigation}) => {
    return (
      <View>
        <LineChart
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={400} // from react-native
          height={420}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 198, 156)`,
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

export default Graph;
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

  const DatePicker = ({navigation}) => {
    const [date,setDate] = useState({
      "endDate": "2021-08-27",
      "startDate": "2021-08-04"
    })
    const CUSTOM_LOCALE = {
      monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
      ],
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      today: 'Today',
      year: '', // letter behind year number -> 2020{year}
    }
  
    return (
      <View style={{ height: '100%' }}>
        <View style={{ height: '93%' }}>
          <Calendar
            locale={CUSTOM_LOCALE}
            startDate="2021-08-05"
            endDate="2021-08-12"
            onChange={(date) => setDate(date)}
          />
        </View>
        <Button
            bg="fi.600"
            _text={{ color: "fi.50" }}
            onPress={() =>  navigation.navigate("Family Reports", {date})}
            startIcon={
              <Icon
                color="fi.50"
                as={<FontAwesome name="check" color="fi.50"/>}
                size="sm"
                style={{ alignSelf: "center" }}
              />
            }
          >
            Pick
        </Button>
      </View>
    )
  }

export default DatePicker;
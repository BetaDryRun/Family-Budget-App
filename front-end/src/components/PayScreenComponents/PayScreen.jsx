import React from 'react';
import { Button, StyleSheet} from 'react-native';
import {
  View,
  Text,
} from "native-base";

const PayScreen = ({navigation}) => {
return (
    <View>
        <Text style={styles.textStyle}>PayScreen Page</Text>
    </View>
)
}

const styles = StyleSheet.create({
textStyle: {
    fontSize:30,
    margin:50
},
});

export default PayScreen;
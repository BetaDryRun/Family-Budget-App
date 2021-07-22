import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddFamilyScreen = (props) => {
  return (
      <View>
          <Text style={styles.textStyle}>AddFamilyScreen Page</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:30,
    margin:50
  },
});

export default AddFamilyScreen;
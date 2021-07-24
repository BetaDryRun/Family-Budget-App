import { Box, Text, View } from "native-base";
import React from "react";
import { Button } from "react-native";
import { Header } from "../Utility";

const Family = (props) => {
  const { navigation } = props;
  const itemSelected = props?.route?.params?.selectedItem;
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //       <Text>Families Page {itemSelected.name}</Text>
    //   <Button title="Go Back" onPress={() => navigation.navigate("Families")} />
    //   </View>
    <View>
      {/* <Header Title={itemSelected.name} /> */}
      <Box bg="fi.600" width="100%" height="200%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
          <Text color="fi.100">Current Balance</Text>
          <Text bold color="fi.200">
            Current Balance
          </Text>
        </View>
        <Box
          bg="fi.50"
          // roundedTop="xl"
          style={{ alignSelf: "flex-end", borderRadius: 50}}
          width="100%"
          height="90%"
        >
          <Text>HI</Text>
        </Box>
      </Box>
    </View>
  );
};

export default Family;

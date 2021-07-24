import { Box, Text } from "native-base";
import React from "react";
import { Button, View } from "react-native";
import { Header } from "../Utility";

const Family = props => {
    const { navigation } = props;
    const itemSelected = props?.route?.params?.selectedItem;
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //       <Text>Families Page {itemSelected.name}</Text>
    //   <Button title="Go Back" onPress={() => navigation.navigate("Families")} />
    //   </View>
    <View>
      {/* <Header Title={itemSelected.name} /> */}
      <Box bg={"fi.600"} width="100%" height="100%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
          <Text>Current Balance</Text>
          <Text bold color={"fi.200"}>
            Current Balance
          </Text>
        </View>
      </Box>
    </View>
  );
};

export default Family;

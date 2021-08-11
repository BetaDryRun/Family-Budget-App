import React from "react";
import { Header } from "../components/Utility";
import {transactions} from '../dummyData/Transaction'
import {Email, Separator, Tel, Setting} from '../components/ProfileScreenComponents'
import {
    Box,
    Text, 
    View,
    VStack,
    Avatar,    
    HStack,
    Button,
    Icon,
    Center,
    Image,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native";

const WalletScreen = (props) => {
  const { navigation } = props;
  const itemSelected = props?.route?.params?.selectedItem;

  const renderItem = ({ item, index }) => {
      return (
          <View w='200' h='150'>
            <HStack space={5}>
                <Image
                    size={50}
                    alignSelf='center'
                    resizeMode={"contain"}
                    borderRadius={250}
                    source={{
                        uri: "data:image/png;base64,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",
                    }}
                    alt="Alternate Text"
                />
                <VStack space={3}>
                    {item.amount<0? 
                        <Text>
                            You gave money to {item.to}.
                        </Text>
                        :
                        <Text>
                            You got money from {item.from}.
                        </Text>
                    }
                    <Text>{item.timeStamp}</Text>
                </VStack>
                {item.amount<0? 
                        <Text mt='5' fontSize='22' alignItems="center" style={{color:'red', alignSelf:'center'}}>
                            <Icon color="red" as={<FontAwesome name="rupee" />} size="sm" />
                             {Math.abs(item.amount)}
                        </Text>
                        :
                        <Text mt='5' fontSize='22' alignItems="center" style={{color:'#e85d04', alignSelf:'center'}}>
                            <Icon color="fi.300" as={<FontAwesome name="rupee" />} size="sm" />
                            {item.amount}
                        </Text>
                    }
            </HStack>
            <View
                mt='7'
                w='200'
                ml='70'
                style={{
                    borderBottomWidth: 1,
                }}
            />
          </View>
      )
  }
  return (
    <View>
      {/* <Header Title={itemSelected.name} /> */}
      <Box bg="fi.600" width="100%" height="200%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 90 }}>
            <VStack space={2} alignItems="center" mt="5">
                <Text color="fi.50" style={{fontSize:25}} mt='-20'>My Wallet</Text>
                <Text color="fi.100" mt='3'>Current Balance</Text>
                <HStack>
                    <Icon color="fi.300" as={<FontAwesome name="rupee" />} size="md" />
                    <Text bold fontSize='xl' color="fi.300">
                        2580.00
                    </Text>
                </HStack>
            </VStack>
            <HStack mt='45' space={4}>
                <Button bg="fi.300" _text={{color: 'fi.50'}}
                    mt='5'
                    w='45%'
                    style={{borderRadius:20}}
                    onPress={()=> navigation.navigate('Add Money')}
                    startIcon={
                        <Icon color="fi.50" as={<FontAwesome name="puzzle-piece" />} size="sm" />
                      }
                >
                    Add Money
                </Button>
                <Button bg="fi.300" _text={{color: 'fi.50'}}
                    mt='5'
                    w='35%'
                    h='50'
                    style={{borderRadius:20}}
                    onPress={()=> navigation.navigate('Pay')}
                    startIcon={
                        <Icon color="fi.50" as={<FontAwesome name="share" />} size="sm" />
                      }
                >
                    Pay
                </Button>

            </HStack>
        </View>
        <Box
          bg="fi.50"
          // roundedTop="xl"
          style={{ alignSelf: "flex-end", borderRadius: 50}}
          width="100%"
          height="88.5%"
        >
          <VStack mt='8' style={{alignSelf: 'center'}} space={5}>
                <Text style={{fontSize: 18}}>Recent Transactions</Text>
                <View
                    mt='-10'
                    style={{
                        borderBottomColor: '#f48c06',
                        borderBottomWidth: 3,
                    }}
                />
          </VStack>
          <View h='275' mt='10'>
                    <FlatList
                        data={transactions}
                        showsVerticalScrollIndicator={true}
                        contentContainerStyle={{
                            paddingHorizontal: 16,
                            paddingBottom: 16,
                            marginTop: 4
                        }}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={renderItem}
                    />
                </View>
        </Box>
      </Box>
    </View>
  );
};

export default WalletScreen;
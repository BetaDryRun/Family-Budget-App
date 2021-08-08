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
                <Avatar alignItems="center" style={{alignSelf:'center'}}/>
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
                        <Text mt='5' fontSize='25' alignItems="center" style={{color:'red', alignSelf:'center'}}>
                            <Icon color="red" as={<FontAwesome name="rupee" />} size="sm" />
                             {Math.abs(item.amount)}
                        </Text>
                        :
                        <Text mt='5' fontSize='25' alignItems="center" style={{color:'#e85d04', alignSelf:'center'}}>
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
            <VStack space={2} alignItems="center">
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
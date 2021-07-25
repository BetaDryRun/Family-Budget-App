import React,{useState,useEffect} from "react";
// import { Header } from "../components/Utility";
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
import { AnimatedCircularProgress, Easing } from 'react-native-circular-progress';
import WhiteCarousel from './WhiteCarousel'

//Data
import {family} from '../../../dummyData/OrganisedData/Family'
import {familyTransactionsInThisIteration} from '../../../dummyData/OrganisedData/FamilyTransactions'
import {familyWallet} from '../../../dummyData/OrganisedData/FamilyWallet'
import {familyUsers} from '../../../dummyData/OrganisedData/FamilyUsers'
import { alignContent } from "styled-system";


const InnerData=({})=>{
    return (
        <HStack>
            <Icon color="fi.300" as={<FontAwesome name="rupee" />} size="xs" alignContent='center'/>
            <Text bold fontSize='md' color="fi.300" alignContent='center'>
                {familyWallet.currentAmount}
            </Text>
        </HStack>
    )
}

const FamilyForAdmin = (props) => {
  const { navigation } = props;
  const [circularProgress,setCircularProgress] = useState(null);
  const itemSelected = props?.route?.params?.selectedItem;

//   useEffect(()=>{
//       console.log(circularProgress)
//     if(circularProgress!=null && circularProgress!=undefined)
//         circularProgress.animate(100, 8000, Easing.quad);
//   },[circularProgress, setCircularProgress])
 
  return (
    <View>
      {/* <Header Title={itemSelected.name} /> */}
      <Box bg="fi.600" width="100%" height="200%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 90 }}>
            <VStack space={2} alignItems="center">
                <Text color="fi.50" style={{fontSize:25}} mt='-20'>{family.name}</Text>
                    <AnimatedCircularProgress
                        size={100}
                        width={15}
                        fill={(familyWallet.currentAmount/family.budget)*100}
                        tintColor="#00c69c"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        dashedTint={{ width: 1, gap: 2 }}
                        // ref={(ref) => setCircularProgress(ref)}
                        backgroundColor="#3d5875" 
                    >
                        {InnerData}
                    </AnimatedCircularProgress>
                <Text color="fi.100" mt='0'>Current Balance</Text>
            </VStack>
            <HStack mt='18' space={4}>
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
          style={{ alignItems: "center", borderRadius: 50}}
          width="100%"
          height="88.5%"
        >
            <HStack mt='-12' space={3} alignContent='center'>
                <Button bg="fi.600" _text={{color: 'fi.300'}}
                    mt='5'
                    w='45%'
                    style={{borderRadius:20}}
                    onPress={()=> navigation.navigate('Add Money')}
                    startIcon={
                        <Icon color="fi.300" as={<FontAwesome name="signal" />} size="sm" />
                    }
                >
                    Family Reports
                </Button>
                <Button bg="fi.600" _text={{color: 'fi.300'}}
                    mt='5'
                    w='35%'
                    h='50'
                    style={{borderRadius:20}}
                    onPress={()=> navigation.navigate('Pay')}
                    startIcon={
                        <Icon color="fi.300" as={<FontAwesome name="retweet" />} size="sm" />
                    }
                >
                    Withdraw
                </Button>
            </HStack>
            <Box  width="100%" h='100%'>
                <WhiteCarousel /> 
            </Box>
            
        </Box>
      </Box>
    </View>
  );
};

export default FamilyForAdmin;

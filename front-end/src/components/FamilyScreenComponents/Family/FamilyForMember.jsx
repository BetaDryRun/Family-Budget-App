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
    Modal,
    Center,
    FormControl,
    Radio,
    Input
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

const ReqModal=({showModal,setShowModal,remainingBudget})=>{
  const [withdrawForm, setWithdrawForm] = React.useState({
    to:"Personal wallet",
    amount: null
  });
    return(
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Request Money from Heads</Modal.Header>
          <Modal.Body>
            <VStack>
                <FormControl isRequired isInvalid>
                <FormControl.Label>Receive Money In: </FormControl.Label>
                <Radio.Group
                name="myRadioGroup"
                value={withdrawForm.to}
                onChange={(nextValue) => {
                    setWithdrawForm({...withdrawForm,to:nextValue})
                }}
                >
                <Radio value="Personal wallet" my={1}>
                    Personal wallet
                </Radio>
                <Radio value="Bank Account" my={1}>
                    Bank Account
                </Radio>
                </Radio.Group>
                <Text fontSize="sm" color="fi.500" fontWeight={400}>You can request upto  {" "}
                <Icon
                    color="fi.500"
                    as={<FontAwesome name="rupee" />}
                    size="xs"
                />{" "}{remainingBudget}</Text>
                </FormControl>
                <VStack space={2} mt={"10%"}>
                    <FormControl marginBottom={2}>
                    <FormControl.Label
                        _text={{ color: "fi.500", fontSize: "sm", fontWeight: 600 }}
                    >
                        Amount To Be Requested
                    </FormControl.Label>
                    <Input
                        size="2xl"
                        variant="outline"
                        onChangeText={(text)=>setWithdrawForm({...withdrawForm, amount: text})}
                        InputLeftElement={
                        <Icon
                            as={<FontAwesome name="rupee" />}
                            size="sm"
                            ml={5}
                            mt={2}
                            mb={2}
                            _light={{
                            color: "black",
                            }}
                            _dark={{
                            color: "gray.300",
                            }}
                        />
                        }
                        placeholder="0"
                        _light={{
                        placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                        placeholderTextColor: "blueGray.50",
                        }}
                        value={withdrawForm.amount}
                    />
                    </FormControl>
                    <VStack space={2}>
                    <HStack justifyContent="flex-start" noOfLines={2}>
                        <Text fontSize="sm" color="fi.500" fontWeight={400}>
                        <Icon
                            color="fi.500"
                            as={<FontAwesome name="rupee" />}
                            size="xs"
                        />{" "}
                        {withdrawForm.amount} will be added to your {withdrawForm.to} wallet once the request 
                        is approved by on of the Heads.
                        </Text>
                    </HStack>
                    <Button
                        bg="fi.300"
                        _text={{ color: "white" }}
                        onPress={() => {
                            setShowModal(false)
                          }}
                    >
                        Request Money
                    </Button>
                    </VStack>
                </VStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
}

const FamilyForMember = (props) => {
  const { navigation } = props;
  const [circularProgress,setCircularProgress] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const itemSelected = props?.route?.params?.selectedItem;

//   useEffect(()=>{
//       console.log(circularProgress)
//     if(circularProgress!=null && circularProgress!=undefined)
//         circularProgress.animate(100, 8000, Easing.quad);
//   },[circularProgress, setCircularProgress])
 
  return (
    <View>
      {/* <Header Title={itemSelected.name} /> */}
      <ReqModal showModal={showModal} setShowModal={setShowModal} remainingBudget={familyWallet.currentAmount}/>
      <Box bg="fi.600" width="100%" height="200%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 90 }}>
            <VStack space={6} alignItems="center">
                <Text color="fi.50" style={{fontSize:25}}>{family.name}</Text>
                    <AnimatedCircularProgress
                        size={100}
                        width={15}
                        fill={(familyWallet.currentAmount/family.budget)*100}
                        tintColor="#f48c06"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        dashedTint={{ width: 1, gap: 2 }}
                        // ref={(ref) => setCircularProgress(ref)}
                        backgroundColor="#3d5875" 
                    >
                        {InnerData}
                    </AnimatedCircularProgress>
                <Text color="fi.100" mt='0'>Current Balance</Text>
            </VStack>
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
                    w='80%'
                    style={{borderRadius:20}}
                    onPress={() => setShowModal(true)}
                    startIcon={
                        <Icon color="fi.300" as={<FontAwesome name="reply-all" />} size="sm" />
                    }
                >
                    Request Money
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
export default FamilyForMember;

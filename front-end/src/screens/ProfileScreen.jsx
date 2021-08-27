import React,{useState,useEffect} from "react";
import { Header } from "../components/Utility";
import {user1} from '../dummyData/user'
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
    Center
} from "native-base";
import axios from 'axios';
import {base} from '../BackendCall/config'
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = (props) => {
  const { navigation } = props;
  const itemSelected = props?.route?.params?.selectedItem;

  const [user,setUser] = useState(null);

  const getUsers=async()=>{
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'}

    try{
      const res = await axios.get(`${base}/user`, {headers})
      setUser(res.data)
      console.log("User loaded!")
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getUsers();
  },[props]) 

  return (
    <View>
      {user===null? 
        <Center><Text></Text></Center>
      :
      <Box bg="fi.600" width="100%" height="200%">
        <View style={{ flex: 1, alignItems: "center", marginTop: 100}}>
            <VStack space={5}>
                <Avatar
                    mr={1}
                    size="2xl"
                    source={{
                    uri: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
                    }}
                    bg='fi.300'
                >
                    Profile Image
                </Avatar>
                <Text color="fi.50" style={{marginLeft: 5, fontSize: 18}}>{user.firstName} {user.lastName}</Text>
                {/* <HStack>
                <Text color="fi.50" style={{marginLeft: 5, fontSize: 18, marginTop:-15}}>Agg. :</Text>
                    <Text color="fi.300" style={{marginLeft: 5, fontSize: 18, marginTop:-15}}>20</Text>
                </HStack> */}
            </VStack>
        </View>
        <Box
          bg="fi.50"
          // roundedTop="xl"
          style={{ alignSelf: "flex-end", borderRadius: 50}}
          width="100%"
          height="88.5%"
        >
            <VStack mt='16' style={{alignSelf: 'center'}} space={5}>
                <Email emailId={user.emailId} index={1}></Email>
                <Separator />
                <Tel number={user.phoneNumber} index={1}/>
                <Separator />
                <Setting number={user.phoneNumber} index={1}/>
                <Button bg="fi.300" _text={{color: 'white'}}
                    mt='5'
                    onPress={()=> navigation.navigate('Login')}
                    startIcon={
                        <Icon color="white" as={<AntDesign name="logout" />} size="sm" />
                      }
                >
                    Log out
                </Button>
            </VStack>
        </Box>
      </Box>
      }
    </View>
  );
};

export default ProfileScreen

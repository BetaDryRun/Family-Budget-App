import * as React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
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

import Carousel, { Pagination } from 'react-native-snap-carousel';
import {familyTransactionsInThisIteration} from '../../../dummyData/OrganisedData/FamilyTransactions'

const whiteCarouselSelector = (item) =>{

    switch(item){
        case 0:
            return <GeneratInfo  />
        // case 1:
        //     return <SpendTable />
        case 1:
            return <TransactionHistory />
        default:
            return (<Text>No Data</Text>)
    }
}


const TransactionHistory = ()=>{
    return (
        <VStack  space={5}>
            <Text style={{fontSize: 18,alignSelf: 'center'}}>Recent Transactions</Text>
            <View
                mt='-10'
                style={{
                    borderBottomColor: '#00c69c',
                    borderBottomWidth: 3,
                }}
            />
            <View h='275'>
                <FlatList
                    data={familyTransactionsInThisIteration}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16,
                        marginTop: 4
                    }}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={Transaction}
                />
            </View>
        </VStack>
    )
}


const Transaction = ({ item, index }) => {
    return (
        <View w='200' h='150'>
          <HStack space={2}>
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
                      <Text mt='5' fontSize='25' alignItems="center" style={{color:'#00c79b', alignSelf:'center'}}>
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

const GeneratInfo = ()=>{
    return (
        <VStack space={5}>
            <Text style={{fontSize: 18, alignSelf: 'center'}}>General Info</Text>
        </VStack>
    )
}

export default class WhiteCarousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [0,1]
      }
    }

    _renderItem({item,index}){
        return (
            <View style={{
                backgroundColor:'#ffffff',
                borderRadius: 5,
                height: 280,
            }}>
                {whiteCarouselSelector(item)}
            </View>
        )
    }
    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: '#ffffff', marginBottom:-15 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  marginHorizontal: 8,
                  backgroundColor: '#00c79b'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1 }}>

            { this.pagination }
            <View style={{ flex: 2, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                //   layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={380}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  
            </View>
          </SafeAreaView>
        );
    }
}


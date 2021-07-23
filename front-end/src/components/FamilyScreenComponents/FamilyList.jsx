import React from 'react';
import { Button, View, TouchableOpacity, FlatList } from 'react-native';
import { DummyFamily } from '../../dummyData/Data';
import { Container, Content, Card, CardItem, Text } from 'native-base';

const FamilyList = ({navigation}) => {

    const renderItem = () => {
        <Container>
          <Content>
            <Card>
              <CardItem header>
                <Text>Card Header</Text>
              </CardItem>

              <CardItem>
                <Text>//Amount in family wallet</Text>
              </CardItem>

              <CardItem>
                <Text>//Description</Text>
              </CardItem>

            </Card>
          </Content>
        </Container>;
    };
    return (
  <View style={{ flex: 1, alignItems: "center"}}>
            <Text>List of Families Page</Text>
            {console.log('Naman')}
    <FlatList
      data={DummyFamily}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        marginTop: 16,
      }}
      keyExtractor={({ item, index }) => String(index)}
      renderItem={renderItem}
    ></FlatList>
    <Button
      title="Go to Family 1"
      onPress={() => navigation.navigate("Family")}
    />
  </View>
);
}

export default FamilyList;
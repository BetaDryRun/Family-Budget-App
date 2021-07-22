import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WalletScreen = (props) => {
return (
    <View>
        <Text style={styles.textStyle}>WalletScreen Page</Text>
    </View>
)
}

const styles = StyleSheet.create({
textStyle: {
    fontSize:30,
    margin:50
},
});

export default WalletScreen;
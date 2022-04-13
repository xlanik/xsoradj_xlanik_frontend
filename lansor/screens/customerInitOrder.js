import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CustomerInitOrder({ navigation }) {

    const pressHandlerOrders = () => {
        navigation.navigate('CustomerServiceOptions');
      }

    return (
        <View>
        <Text>Rok vyroby, znacka model</Text>
        <Button title='Pokračuj na úkony' onPress={pressHandlerOrders} />
        </View>
    );
}
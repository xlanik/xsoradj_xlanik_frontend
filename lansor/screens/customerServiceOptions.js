import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CustomerServiceOptions({ navigation }) {

    const pressHandlerOrders = () => {
        navigation.navigate('CustomerImageUpload');
      }

    return (
        <View>
        <Text>Oleje, filtre chcem menit atd</Text>
        <Button title='Pokračuj na upload obrazku' onPress={pressHandlerOrders} />
        </View>
    );
}
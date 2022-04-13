import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function TechnicianProfile({ navigation }) {

    const pressHandlerOrders = () => {
        navigation.navigate('TechnicianOrders');
    }

    const pressHandlerHistory = () => {
        navigation.navigate('TechnicianOrderHistory');
    }

    return (
        <View>
        <Text>Ja som technik Palo Nezbeda</Text>
        <Button title='Zobraz zakazky' onPress={pressHandlerOrders} />
        <Button title='Historia zakazok' onPress={pressHandlerHistory} />
        </View>
    );
}
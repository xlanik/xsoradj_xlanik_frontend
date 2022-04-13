import React from 'react';
import { StyleSheet, View, Text, Button, Alert} from 'react-native';

export default function CustomerImageUpload({ navigation }) {

    const pressHandlerOrders = () => {
        navigation.navigate('CustomerProfile');

        Alert.alert(
            "Dokončené",
            "Objednávka do servisu bola úspešná, budete presmerovaný na profil.",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }

    return (
        <View>
        <Text>Upload obrazka</Text>
        <Button title='Objednat vozidlo do servisu' onPress={pressHandlerOrders} />
        </View>
    );
}
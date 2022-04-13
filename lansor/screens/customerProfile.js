import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function CustomerProfile({ navigation }) {

  const pressHandlerDetails = () => {
    navigation.navigate('CustomerCarDetails');
  }

  const pressHandlerInitOrder = () => {
    navigation.navigate('CustomerInitOrder');
  }

  return (
    <View>
      <Text>Ferkov profil borciii</Text>
      <Button title='Car detaily' onPress={pressHandlerDetails} />
      <Button title='Objednat vozidlo do servisu' onPress={pressHandlerInitOrder} />
    </View>
  );
}
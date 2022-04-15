import React from 'react';
import { StyleSheet, View, Text, Button, Alert} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function CustomerImageUpload({ navigation }) {

  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

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
        <Button title='Objednat vozidlo do servisu' onPress={pressHandlerOrders} />
        <Button title='vyberfotku' onPress={handleChoosePhoto} />
        </View>
    );
}
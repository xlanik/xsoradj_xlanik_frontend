import React,{useState} from 'react';
import { StyleSheet, View, Text, Button, Alert,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CustomerImageUpload({ navigation }) {

  const [image, setImage] = useState(null);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(`data:image/jpeg;base64,${result.base64}`)
    }
  }

  

  const pressHandlerOrders = async () => {

    const car = {
      customer_id : navigation.getParam("customer_id"),
      technician_id : navigation.getParam("technician_id"),
      brand : navigation.getParam("brand"),
      model : navigation.getParam("model"),
      year : navigation.getParam("year"),
      oilChange : navigation.getParam("oilChange"),
      filterChange : navigation.getParam("filterChange"),
      tireChange : navigation.getParam("tireChange"),
      engineService : navigation.getParam("motorService"),
      number_plate: navigation.getParam("number_plate"),
      description : navigation.getParam("description"),
      state : "neopravene",
      image_url : image,
    }

    const postObj= {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(car)
    }

    console.log(postObj);

    try {
      const response = await fetch(`https://lansormtaa.herokuapp.com/cars`, postObj);
      const carJsonRes = await response.json();
      console.log(carJsonRes);
    } catch (error) {
      console.error(error);
    }

    Alert.alert(
        "Dokončené",
        "Objednávka do servisu bola úspešná, budete presmerovaný na profil.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
    navigation.navigate('CustomerProfile');
  }

    return (
        <View>
        <Button title='Objednat vozidlo do servisu' onPress={pressHandlerOrders} />
        <Button title="Pick an image from camera roll" onPress={handleChoosePhoto} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}
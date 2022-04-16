import React, {isValidElement, useState} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image, Button} from 'react-native';

export default function TechnicianOrderItem({ pressHandlerConfirmCar, item }) {
  
  const [desc, setDesc] = useState('');

  const base64Image = item.image_url;
  //console.log(base64Image);

  const pressHandlerVideoCall = () => {

  }

  return (
  
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={{ width: 200, height: 150 }} />
      <Text style={styles.item}>Značka: {item.brand}</Text>
      <Text style={styles.item}>Model: {item.model}</Text>
      <Text style={styles.item}>Rok výroby: {item.year}</Text>
      <Text style={styles.item}>Ev. číslo: {item.number_plate}</Text>
      <Text style={styles.item}>Popis zákazky: {item.description}</Text>
      <Text style={styles.item}>ID Technika: {item.technician_id}</Text>

      {item.state == "repaired" ? 
      <TouchableOpacity onPress={() => pressHandlerConfirmCar(item)}>
        <Text style={styles.itemConfirm}>Vozidlo opravené - potvrdiť prevzatie</Text>
      </TouchableOpacity> : 
      <Text style={styles.itemConfirmNotReady}>Vozidlo sa momentálne servisuje</Text>}

      <View style={styles.button}>
        <Button title='Začať videohovor s technikom' onPress={pressHandlerVideoCall} />
      </View>
    </View>
     
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bbb',
    borderWidth: 3,
    padding: 30,
  },
  item: {
    padding: 16,
    marginTop: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    
  },
  image: {
    width: 50, 
    height: 50,
    borderWidth: 1, 
    borderColor: 'red',
    resizeMode: "contain",
  },
  itemConfirm:{
    padding: 16,
    marginTop: 5,
    borderColor: '#434942',
    borderWidth: 1,
    borderRadius: 2,
    borderRadius: 10,
    backgroundColor: '#B7E3AE'
  },
  itemConfirmNotReady:{
    padding: 16,
    marginTop: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 2,
    borderRadius: 10,
    backgroundColor: '#FBF9C4'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  button:{
    marginTop: 5,
    width: 180,
  }
});
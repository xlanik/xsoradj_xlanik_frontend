import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput} from 'react-native';

export default function TechnicianOrderItem({ pressHandlerRepaired, item }) {
  
  var serviceActions = 'Potrebné úkony: ';
  var carState = "Potvrdiť dokončenie servisu";
  if(item.oilChange) serviceActions = serviceActions + '- výmena oleja - ';
  if(item.filterChange) serviceActions = serviceActions + '- výmena filtrov -';
  if(item.tireChange) serviceActions = serviceActions + '- prezutie pneu -';
  if(item.engineService) serviceActions = serviceActions + '- servis motora -';
  if(item.state == "repaired") carState = "Vyservisované, čaká sa na potvrdenie zákazníka"
  const base64Image = item.image_url;
  //console.log(base64Image);

  return (
  
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `data:image/png;base64,${base64Image}`}} />
      <Text style={styles.item}>Značka: {item.brand}</Text>
      <Text style={styles.item}>Model: {item.model}</Text>
      <Text style={styles.item}>Rok výroby: {item.year}</Text>
      <Text style={styles.item}>Ev. číslo: {item.number_plate}</Text>
      <Text style={styles.item}>{serviceActions}</Text>
      <TouchableOpacity onPress={() => pressHandlerRepaired(item)}>
        <Text style={styles.itemConfirm}>{carState}</Text>
      </TouchableOpacity>
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
    padding: 30
  },
  item: {
    padding: 16,
    marginTop: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: '#F7F7F7'
    
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
  }
});
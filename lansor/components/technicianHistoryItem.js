import React, {useState} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';

export default function TechnicianHistoryItem({ item }) {
  const base64Image = item.image_url;

    var formatedDate = item.last_service.slice(0, 10);
    console.log(formatedDate);
  //console.log(base64Image);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `data:image/png;base64,${base64Image}`}} />
      <Text style={styles.item}>Značka: {item.brand}</Text>
      <Text style={styles.item}>Model: {item.model}</Text>
      <Text style={styles.item}>Rok výroby: {item.year}</Text>
      <Text style={styles.item}>Ev. číslo: {item.number_plate}</Text>
      <Text style={styles.item}>Informácie: {item.description}</Text>
      <Text style={styles.item}>Posledný servis: {formatedDate}</Text>
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
  }
});
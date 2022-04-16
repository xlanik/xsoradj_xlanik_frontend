import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TechnicianAvailableItem({pressHandleTechChoice, item }) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pressHandleTechChoice(item)}>
        <Text style={styles.item}>{item.name}</Text>
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
    padding: 10,
  },
  item: {
    padding: 16,
    marginTop: 2,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    
  },
});
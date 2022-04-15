import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TechnicianOrderItem from '../components/technicianOrderItem';

export default function TechnicianOrders( {navigation} ) {
  
  const technicianOrders = navigation.getParam();

  const pressHandlerRepaired = (key) => {
    console.log("funguje!");
    return;
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.list}>
        <FlatList
          data={technicianOrders}
          //keyExtractor={technicianOrders._id}
          renderItem={({ item }) => (
            <TechnicianOrderItem item={item} pressHandler={pressHandlerRepaired} />
          )}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 20,
  },
});
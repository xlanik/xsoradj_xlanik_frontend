import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CustomerCarDetailsItem from '../components/customerCarDetailsItem';

export default function CustomerCarDetails( {navigation} ) {
  
  const customersCars = navigation.getParam('');
  
  const pressHandlerRepaired = (item, description) => {
    console.log(item._id);

    return;
  };

  return (
    
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={customersCars}
            renderItem={({item}) => <CustomerCarDetailsItem item={item} pressHandlerRepaired={pressHandlerRepaired}/>}
            keyExtractor={(item, index) => index.toString()}
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
    maxWidth: 300,
    paddingLeft:20
  },
});
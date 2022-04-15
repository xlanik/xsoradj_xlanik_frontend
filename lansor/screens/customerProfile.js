import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function CustomerProfile({ navigation }) {

  const customer = navigation.getParam('loginCustomer')

  const pressHandlerDetails = () => {
    navigation.navigate('CustomerCarDetails');
  }

  const pressHandlerInitOrder = () => {
    navigation.navigate('CustomerInitOrder');
  }

  const pressHandlerLogout = () => {  //skuska na tie data
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
        <Text style={styles.name}> Vitajte {customer.name}</Text>
        <View style={styles.info}>
          <Text>Meno a priezvisko: </Text>
          <Text>{customer.name}</Text>
        </View>

        <View style={styles.info}>
          <Text>Telefónne číslo: </Text>
          <Text>{customer.phoneNumber}</Text>
        </View>

        <View style={styles.info}>
          <Text>Email: </Text>
          <Text>{customer.email}</Text>
        </View>

        <View style={styles.info}>
          <Text>Vaše heslo: </Text>
          <Text>{customer.password}</Text>
        </View>
        
        <View style={styles.button}>
          <Button title='Stav servisovaného vozidla' onPress={pressHandlerDetails} />
        </View>
        <View style={styles.button}>
          <Button title='Objednať vozidlo do servisu' onPress={pressHandlerInitOrder} />
        </View>

        <View style={styles.button}>
          <Button title='Odhlásiť sa' onPress={pressHandlerLogout} />
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info:{
    padding: 8,
    flexDirection: "row",
  },
  name:{
    fontWeight: 'bold',
    fontSize: 24
  },
  button:{
    marginTop: 25,
    width: 250,
  }
});
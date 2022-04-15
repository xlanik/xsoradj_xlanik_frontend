import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function CustomerProfile({ navigation }) {

  const customer = navigation.getParam('loginCustomer')

  const pressHandlerCarDetails = async () => {
    try {

        const response = await fetch(`https://lansormtaa.herokuapp.com/CustomerCar/${customer._id}`);
        const customersCarsJsonRes = await response.json();
        //console.log(ordersJsonRes);
        
  
        if(customersCarsJsonRes.message){  //prisla error sprava, nema zakazky
          Alert.alert(
            "Žiadne auto v servise",
            "Momentálne nemáte autá u nás servisované.",
            [
              { text: "OK", onPress: () => console.log("Ziadne zakazky alert") }
            ]
          );

          return;
        }
        
        navigation.navigate('CustomerCarDetails', {'': customersCarsJsonRes});   //musi sa to zabalit do objektu....
  
      } catch (error) {
        console.error(error);
      }
  }

  const car ={
    customer_id:customer._id,
  }

  const pressHandlerInitOrder = () => {
    navigation.navigate('CustomerInitOrder',car);
  }

  const pressHandlerLogout = () => {  //skuska na tie data
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
        <Text style={styles.name}> Vitajte {customer.name}</Text>
        <View style={styles.info}>
          <Text>Meno a priezvisko: </Text>
          <Text style={styles.baseText}>{customer.name}</Text>
        </View>

        <View style={styles.info}>
          <Text>Telefónne číslo: </Text>
          <Text style={styles.baseText}>{customer.phoneNumber}</Text>
        </View>

        <View style={styles.info}>
          <Text>Email: </Text>
          <Text style={styles.baseText}>{customer.email}</Text>
        </View>

        <View style={styles.info}>
          <Text>Vaše heslo: </Text>
          <Text style={styles.baseText}>{customer.password}</Text>
        </View>
        
        <View style={styles.button}>
          <Button title='Stav servisovaných vozidiel' onPress={pressHandlerCarDetails} />
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
  baseText:{
    fontWeight: "bold",
  },
  info:{
    padding: 8,
    flexDirection: "row",
    marginTop: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 35,
    paddingBottom: 20
  },
  button:{
    marginTop: 30,
    width: 250,
  }
});
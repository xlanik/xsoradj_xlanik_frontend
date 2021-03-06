import React from 'react';
import { StyleSheet, View, Text, Button, Alert, Image} from 'react-native';
import NormalButton from '../components/normalButton';
import ConfirmButton from '../components/confirmButton';

export default function CustomerProfile({ navigation }) {

  const technician = navigation.getParam('loginTechnician')
  

  const pressHandlerOdrders = async () => {
    try {

        const response = await fetch(`https://lansormtaa.herokuapp.com/TechnicianCars/${technician._id}`);
        const ordersJsonRes = await response.json();
        
  
        if(ordersJsonRes.message){  //prisla error sprava, nema zakazky
          Alert.alert(
            "Žiadne aktívne zákazky",
            "Momentálne nemáte zákazku",
            [
              { text: "OK", onPress: () => console.log("Ziadne zakazky alert") }
            ]
          );

          return;
        }
        
        navigation.navigate('TechnicianOrders', {'': ordersJsonRes});   //musi sa to zabalit do objektu....
  
      } catch (error) {
        console.error(error);
      }
  }

  const pressHandlerHistory = async () => {
    try {

        const response = await fetch(`https://lansormtaa.herokuapp.com/RepairedCars`);
        const oderHistoryJsonRes = await response.json();
       
  
        if(oderHistoryJsonRes.message){  //prisla error sprava, nema zakazky
          Alert.alert(
            "Žiadne aktívne zákazky",
            "Momentálne nemáte zákazku",
            [
              { text: "OK", onPress: () => console.log("Ziadne zakazky alert") }
            ]
          );

          return;
        }

        navigation.navigate('TechnicianOrderHistory', {'': oderHistoryJsonRes});
  
      } catch (error) {
        console.error(error);
      }
  }

  const pressHandlerLogout = () => {  //skuska na tie data
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../logo.png')} />
        <Text style={styles.name}> Vitajte {technician.name}</Text>
        <Text> Vaše identifikačné číslo: {technician._id.slice(-5)}</Text>
        <ConfirmButton title={'Moje zákazky'} onPress={pressHandlerOdrders}></ConfirmButton>
        <NormalButton title={'História opravených áut'} onPress={pressHandlerHistory}></NormalButton>
        <NormalButton title={'Odhlásiť sa'} onPress={pressHandlerLogout}></NormalButton>
      </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D5E2EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info:{
    padding: 8,
    flexDirection: "row",
  },
  name:{
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15,
  },
  button:{
    marginTop: 50,
    width: 250,
  },
  logo:{
    height: 80,
    width: 90,
  },
});
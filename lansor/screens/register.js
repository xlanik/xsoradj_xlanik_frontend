import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';

export default function Register( {navigation}) {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pressHandlerBack = () => {
    navigation.navigate('Login');
  }

  const pressHandlerRegister = async () => {

    if(!name || !phoneNumber || !email || !password){ //validacia povinnych poli
      Alert.alert(
        "Neúspešná registrácia",
        "Prosím vyplnte všetky povinné polia",
        [
          { text: "OK", onPress: () => console.log("Nevyplnene polia") }
        ]
      );

      return;
    }

    const userCredentials = {
      name: name,
      phoneNumber: phoneNumber,
      email, email,
      password: password
    }

    const fetchObj= {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials)
    }

    try {

      const response = await fetch(`https://lansormtaa.herokuapp.com/Customers`, fetchObj);
      const userJsonRes = await response.json();
      console.log(userJsonRes);

      if(userJsonRes.name) {  //staci ked vrati menoa  viem, ze prebehla okej
        Alert.alert(
          "Registrácia úspešná",
          "Ste presmerovaný na úvodnú stránku",
          [
            { text: "OK", onPress: () => console.log("Zly register alert") }
          ]
        );
        navigation.navigate('Login', userJsonRes);
      } 
      if(userJsonRes.message){
        Alert.alert(
          "Neúspešná registrácia",
          userJsonRes.message,
          [
            { text: "OK", onPress: () => console.log("Zly register alert") }
          ]
        );
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.name}> Vyplňte registráciu</Text>

        <TextInput style={styles.input} placeholder="Prihlasovacie meno*" onChangeText={(value) => setName(value)} />
        <TextInput style={styles.input} placeholder="Telefónne číslo*" keyboardType = 'numeric' onChangeText={(value) => setPhoneNumber(value)} />
        <TextInput style={styles.input} placeholder="Email*" onChangeText={(value) => setEmail(value)} />
        <TextInput style={styles.input} placeholder="Heslo*" onChangeText={(value) => setPassword(value)} secureTextEntry={true} />
        <View style={styles.button}>
          <Button title='Registrovať sa' onPress={pressHandlerRegister} />
        </View>
        <View style={styles.button}>
          <Button title='Späť na úvodnú stránku' onPress={pressHandlerBack} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  }


  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    name:{
      fontWeight: 'bold',
      fontSize: 30
    },
    input:{
      borderWidth: 1,
      borderColor: '#C9C8C7',
      padding: 8,
      marginTop: 25,
      width: 200,
    },
    button:{
      marginTop: 25,
      width: 200,
    }
  });
  



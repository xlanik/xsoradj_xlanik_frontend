import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Login({ navigation }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const pressHandlerRegister = () => {
    navigation.navigate('Register');
  }

  const pressLoginHandle = async () => {

    const userCredentials = {
      name: name,
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

      const response = await fetch(`https://lansormtaa.herokuapp.com/login`, fetchObj);
      const userJsonRes = await response.json();
      console.log(userJsonRes);
     

      if(userJsonRes.loginCustomer) navigation.navigate('CustomerProfile', userJsonRes);
      if(userJsonRes.loginTechnician) navigation.navigate('TechnicianProfile', userJsonRes);
      if(userJsonRes.message){
        Alert.alert(
          "Nesprávne prihlasovacie údaje",
          "Prosím skontrolujte správnosť mena a hesla",
          [
            { text: "OK", onPress: () => console.log("Zly login alerttt") }
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
        <Text style={styles.name}> Autoservis Lansor</Text>

        <TextInput style={styles.input} placeholder="Prihlasovacie meno" onChangeText={(value) => setName(value)} />
        <TextInput style={styles.input} placeholder="Heslo" onChangeText={(value) => setPassword(value)} secureTextEntry={true} />
        <View style={styles.button}>
          <Button title='Prihlásiť sa' onPress={pressLoginHandle} />
        </View>
        <View style={styles.button}>
          <Button title='Registrácia' onPress={pressHandlerRegister} />
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
    fontSize: 24
  },
  input:{
    borderWidth: 1,
    borderColor: '#C9C8C7',
    padding: 8,
    marginTop: 25,
    width: 150,
  },
  button:{
    marginTop: 25
  }
});

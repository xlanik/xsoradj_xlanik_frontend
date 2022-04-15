import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function Login({ navigation }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const pressHandlerRegister = () => {
    navigation.navigate('Register');
  }

  const pressHandlerProfile = () => {
    navigation.navigate('CustomerProfile');
  }

  const pressHandlerTechnician = () => {
    navigation.navigate('TechnicianProfile');
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
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if(jsonResponse.loginCustomer) navigation.navigate('CustomerProfile');
      if(jsonResponse.loginTechnician) navigation.navigate('TechnicianProfile');
      if(jsonResponse.message) console.log("zle prihlasenie braši!!!");

    } catch (error) {
      console.error(error);
    }
  }

  const pressMoviesHandle = async () => {
    try {
      const response = await fetch(
        'https://reactnative.dev/movies.json'
      );
      const json = await response.json();
      console.log(json);
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Login Screenik</Text>

      <TextInput placeholder="Prihlasovacie meno" onChangeText={(value) => setName(value)} />
      <TextInput placeholder="Heslo" onChangeText={(value) => setPassword(value)} secureTextEntry={true} />
      <Button title='Fetch login skuska' onPress={pressLoginHandle} />
      <Button title='getmovies' onPress={pressMoviesHandle} />
      <Button title='Chod na registraciu' onPress={pressHandlerRegister} />
      <Button title='Zakaznik prihlaseny' onPress={pressHandlerProfile} />
      <Button title='Technik prihlaseny' onPress={pressHandlerTechnician} />
    </View>
  );
}
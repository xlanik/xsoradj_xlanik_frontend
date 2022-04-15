import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button,Text} from 'react-native';

export default function CustomerInitOrder({ navigation }) {

    const [printTechnicians, setPrintTechnicians] = useState(false);
    const [znacka, setZnacka] = useState('');
    const [model, setModel] = useState('');
    const [rokVyroby, setRokVyroby] = useState('');

    const cust_id = navigation.getParam("customer_id");
    
    const pressHandlerOrders = async() => {
        try{
            const response = await fetch(`https://lansormtaa.herokuapp.com/technicians`);
            const techJsonRes = await response.json();
            console.log(techJsonRes);
            const car = {
                customer_id : cust_id,
                technician_id : techJsonRes[Math.floor(Math.random() * techJsonRes.length)]._id,
                brand : znacka,
                model : model,
                year : rokVyroby,
            }
            navigation.navigate('CustomerServiceOptions',car);
        } catch (error) {
            console.error(error);
        }
        
    }

    const pressHandleTechChoice = async () =>{
        try{
            const response = await fetch(`https://lansormtaa.herokuapp.com/technicians`);
            const techJsonRes = await response.json();
            console.log(techJsonRes);
            setPrintTechnicians(true);
        } catch (error) {
            console.error(error);
        }
    };

    //{printTechnicians && <Text> Vypis technikov</Text>}   
    return (
        <View>
        <TextInput style={styles.input} placeholder="Značka" onChangeText={(value) => setZnacka(value)} />
        <TextInput style={styles.input} placeholder="Model" onChangeText={(value) => setModel(value)} />
        <TextInput style={styles.input} placeholder="Rok výroby" onChangeText={(value) => setRokVyroby(value)} />
        {printTechnicians == true ? <Text> Vypis technikov</Text> : null}  
        <Button title='Želám si aby servis môjho vozidla vykonával konkrétny technik' onPress={pressHandleTechChoice} />
        <Button title='Pokračuj na úkony' onPress={pressHandlerOrders} />
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
  
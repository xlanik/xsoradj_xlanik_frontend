import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button,Text, Switch, Alert} from 'react-native';

export default function CustomerInitOrder({ navigation }) {

    const [printTechnicians, setPrintTechnicians] = useState(false);
    const [znacka, setZnacka] = useState('');
    const [model, setModel] = useState('');
    const [rokVyroby, setRokVyroby] = useState('');

    const cust_id = navigation.getParam("customer_id");
    
    const pressHandlerOrders = async() => {

        if(!znacka || !model || !rokVyroby){
            Alert.alert(
                "Nevyplnené povinné údaje",
                "Prosím vyplňte všetky údaje o vozidle.",
                [
                  { text: "OK", onPress: () => console.log("Zly login alert") }
                ]
              );

              return;
        }

        try{
            const response = await fetch(`https://lansormtaa.herokuapp.com/technicians`);
            const techJsonRes = await response.json();
            //console.log(techJsonRes);
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
            //console.log(techJsonRes);
            setPrintTechnicians(true);
        } catch (error) {
            console.error(error);
        }
    };

    //{printTechnicians && <Text> Vypis technikov</Text>}   
    return (
        <View style={styles.container}>
            <Text style={styles.name}> Prosím zadajte údaje vozidla</Text>
            <TextInput style={styles.input} placeholder="Značka*" onChangeText={(value) => setZnacka(value)} />
            <TextInput style={styles.input} placeholder="Model*" onChangeText={(value) => setModel(value)} />
            <TextInput style={styles.input} placeholder="Rok výroby*" keyboardType = 'numeric' onChangeText={(value) => setRokVyroby(value)} /> 
            <View style={styles.option}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={printTechnicians ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setPrintTechnicians}
                    value={printTechnicians}
                />
                <Text style={styles.label}>Vybrať konkrétneho technika</Text>
            </View>
            {printTechnicians == true ? <Text> Vypis technikov</Text> : null} 
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
    },
    option:{
        flexDirection: "row"
    },
    label: {
        margin: 15,
        paddingLeft: 5,
        fontSize: 16
    },
  });
  
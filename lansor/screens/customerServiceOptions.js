import React, { useState } from 'react';
import { StyleSheet, View, Text, Button,CheckBox } from 'react-native';

export default function CustomerServiceOptions({ navigation }) {

    const [oilChange, setOilChange] = useState(false);
    const [filterChange, setFilterChange] = useState(false);
    const [tyreChange, setTyreChange] = useState(false);
    const [motorService, setMotorService] = useState(false);

    const pressHandlerOrders = () => {
        const car = {
            customer_id : navigation.getParam("customer_id"),
            technician_id : navigation.getParam("technician_id"),
            brand : navigation.getParam("brand"),
            model : navigation.getParam("model"),
            year : navigation.getParam("year"),
            oilChange : oilChange,
            filterChange : filterChange,
            tyreChange : tyreChange,
            motorService : motorService,
        }
        //console.log(car);
        navigation.navigate('CustomerImageUpload',car);
    }

    

    return (
        <View>
         <View style={styles.checkboxContainer}>
            <CheckBox
            value={oilChange}
            onValueChange={setOilChange}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Výmena oleja</Text>
            <CheckBox
            value={filterChange}
            onValueChange={setFilterChange}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Výmena filtrov</Text>
            <CheckBox
            value={tyreChange}
            onValueChange={setTyreChange}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Prezutie pneumatík</Text>
            <CheckBox
            value={motorService}
            onValueChange={setMotorService}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Servis motora</Text>
        </View>
        <Button title='Pokračuj na upload obrazku' onPress={pressHandlerOrders} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });
  
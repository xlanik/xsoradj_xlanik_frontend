import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: "",
            password: "",
            //isLoading: false
        }

        this.handleUser = this.handleUser.bind(this)
        this.handlePass = this.handlePass.bind(this)
    }

    handleUser = (text) => {
        this.setState({ user: text })
    }

    handlePass = (pass) => {
        this.setState({ password: pass })
    }

    login = () => {
        console.log(this.state.user,this.state.password)

        const userCredentials = {
            name: this.state.user,
            password: this.state.password
        }

        const fetchObj= {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userCredentials)
        }

        fetch(`http://localhost:3000/login`, fetchObj).then(result => {
            console.log(result)
        })


    }
    

    render() {
        return (
            <View>
                <Text>Lansor</Text>
                <View>
                    <TextInput placeholder="Prihlasovacie meno" onChangeText={this.handleUser} />
                    <View/>
                    <TextInput placeholder="Heslo" onChangeText={this.handlePass} secureTextEntry={true} />
                    <View/>
                    <Button title="Prihlásiť sa" onPress={this.login} />
                    <View/>
                    <Button title="Zaregistrovať sa" onPress={this.register} />
                </View>
                <View/>
                <View/>
                <StatusBar/>
            </View>
        )
    }

    
}

export default Login;
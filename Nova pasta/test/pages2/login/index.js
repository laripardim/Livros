import * as React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import style from './style.js'

export default function Login({ navigation }) {
    return (
        <View style={style.body}>
            <View style={style.header}>
                <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
            </View>
            <Text style={style.texto}>Bem vindos a Velaris Books!</Text>
                <TextInput style={style.input}></TextInput>
                <TextInput style={style.input}></TextInput>
                <TouchableOpacity style={style.login} onPress={() => { navigation.navigate('Home') }}>
                    <Text style={style.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cad}>
                    <Text style={style.text}>Cadastre-se</Text>
                </TouchableOpacity>
        </View>
    );
}
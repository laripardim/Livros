import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function Home({ navigation }) {
    return (
        <View style={style.body}>
            <View style={style.header}>
                <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                <TouchableOpacity onPress={() => { navigation.navigate('Escreva') }}>
                    <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={style.card}>
            </View>
            <Text style={style.textin}>Nome: </Text>
            <Text style={style.textin}>Autor: </Text>
            <Text style={style.textin}>LIVROS ESCRITOS POR VOCÊ</Text>
            <View style={style.org}>
                <View style={style.card1}>
                </View>
                <View style={style.card1}>

                </View>
                <View style={style.card1}>

                </View>
            </View>
            <Text>LIVROS NA SUA BIBLIOTECA</Text>
            <View style={style.org}>
                <View style={style.card1}>
                </View>
                <View style={style.card1}>

                </View>
                <View style={style.card1}>

                </View>
            </View>
            <View style={style.footer}>
                <Text style={style.text}>Entre em contato conosco por nossas redes sociais!</Text>
                <View style={style.imagefooter}>
                    <Image style={style.face} source={require('../../assets/facebook.png')}></Image>
                    <Image style={style.twitter} source={require('../../assets/twitter.png')}></Image>
                    <Image style={style.insta} source={require('../../assets/instagram.png')}></Image>
                </View>
                <Text style={style.text}>Developed by Elian, Larissa e Lavínia</Text>
            </View>
        </View>
    );
}
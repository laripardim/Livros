import  React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [like, setLike] = useState("");
  const [deslike, setDeslike] = useState("");

  return (
    <View style={style.body}>
    <View style={style.scroll}>
      <ScrollView>
        <View style={style.header}>
          <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
          <TouchableOpacity onPress={() => {navigation.navigate('Escreva')}}>
            
          </TouchableOpacity>
        </View>
        <View style={style.card}>
          <TextInput multiline
                    numberOfLines={10}
                    maxLength={300}
                    // onChangeText={text => onChangeText(text)}
                    style={style.input}>
          </TextInput>
        </View>
        <Image style={style.enviar} source={require("../../assets/enviar.png")}></Image>
        <View style={style.card}>
          <AntDesign name="like2" size={30} color="black" />
          <AntDesign name="dislike2" size={30} color={like ? "red" : "black"}/>
        </View>
        {/* <Image style={style.enviar} source={require("../../assets/enviar.png")}></Image> */}
        <View style={style.card}>
          <AntDesign name="like2" size={30} color="black" />
          <AntDesign name="dislike2" size={30} color={like ? "red" : "black"}/>
        </View>
        <View style={style.card}>
          <AntDesign name="like2" size={30} color="black" />
          <AntDesign name="dislike2" size={30} color={like ? "red" : "black"}/>
        </View>
        <View style={style.card}>
          <AntDesign name="like2" size={30} color="black" />
          <AntDesign name="dislike2" size={30} color={like ? "red" : "black"}/>
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
      </ScrollView>
    </View>
      
      
      
      
      
    </View>
  );
}
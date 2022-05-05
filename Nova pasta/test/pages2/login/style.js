import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'purple',
        // backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), darkmagenta)"
    
    },
    
    header: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        marginTop: "50%"
    },

    logo: {
        width: "60%",
        height: "60%",
    },

    texto: {
        fontSize: 17,
        marginTop: -90,
        color: 'white',
        fontFamily: 'Cochin',
        textAlign: 'center'
    },

    input: {
       width: "50%",
       height: 40,
       marginTop: 10,
       borderRadius: 5,
       backgroundColor: "white" 
    },

    login: {
        width: 60,
        borderRadius: 5,
        height: 30,
        marginTop: 10,
        alignItems: "center",
        // border: "1px solid white",
        justifyContent: "center",
    },

    text: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Cochin',
        textAlign: 'center'
    },

    cad: {
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
        // border: "1px solid white"
    }
})
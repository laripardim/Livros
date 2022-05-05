import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },

    card : {
        marginBottom: 10,
        width: "30%",
        height: "15%",
        borderWidth: 1,
        borderColor: "#A9A9A9",
        // border: "1px solid #A9A9A9",
        marginTop: 10,
        borderRadius: 100,

    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: "10%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), darkmagenta)"
    },

    footer: {
       width: "100%",
       height: "20%",
       alignItems: 'center',
       justifyContent: 'space-around',
    //    backgroundImage: "linear-gradient(to bottom, rgb(10, 10, 10), purple)",
       bottom: 0,
       position: "absolute",
    },

    logo: {
        width: 100,
        height: "100%",
    },

    menu: {
        width: 50,
        height: 50,
        marginRight: 20,
    },

    enviar: {
        width: 30,
        height: 30,
        marginRight: 350,
    },

    text: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },

    face: {
        width: 50,
        height: 50
    },

    twitter: {
        width: 50,
        height: 50
    },

    insta: {
        width: 50,
        height: 50
    },

    imagefooter: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    card1: {
        width: 70,
        borderRadius: 5,
        height: "100%",
        borderColor: "#A9A9A9",
        // border: "1px solid #A9A9A9",
    },

    org: {
        margin: 30,
        width: "100%",
        height: 100,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    textin: {
        marginTop: 20,
    }
});
import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },

    card : {
        marginBottom: 30,
        width: "95%",
        height: 150,
        marginTop: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 1,
        alignSelf: "center"
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: "8%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'purple'
    },

    footer: {
       width: "100%",
       height: 150,
       alignItems: 'center',
       justifyContent: 'space-around',
       backgroundColor: "purple"
    },

    logo: {
        marginTop: 18,
        padding: 0,
        width: 70,
        height: 70,
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

    like: {
        width: 30,
        height: 30,
    },

    deslike: {
        width: 30,
        height: 30,
    },

    scroll: {
        flex: 1,
    }
});
import React from 'react';
import { StyleSheet } from 'react-native';

export const MageButtonStyle = StyleSheet.create({
    textColor: {
        color: '#ffc300'
    },
    btn: {
        padding: 10,
        margin: 10,
        backgroundColor: '#a32fa3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a32fa3',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export const MageButtonInvStyle = StyleSheet.create({
    textColor: {
        color: '#a32fa3',
    },
    btn: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ffc300',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a32fa3',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

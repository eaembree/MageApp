import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { MageButtonStyle, MageButtonInvStyle } from './Styles'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ffc300',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a32fa3'
    },
    text: {
        color: '#a32fa3',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btn_inv: {
        padding: 10,
        margin: 10,
        backgroundColor: '#a32fa3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a32fa3'
    },
    text_inv: {
        color: '#ffc300',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

class MageButton extends Component {
    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity style={MageButtonStyle.btn}>
                    <Text style={MageButtonStyle.btnText}>Mage Button</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MageButtonInvStyle.btn}>
                    <Text style={MageButtonInvStyle.btnText}>Mage Button Inverse</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MageButton;
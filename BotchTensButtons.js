import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { MageButtonStyle as btn, MageButtonInvStyle as btnInv } from './Styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'baseline'
    }
});

class BotchTensButtons extends Component {

    render() {
        return (
            <View style={[styles.container, { alignSelf: 'baseline' }]}>
                <TouchableOpacity style={[btn.btn, { flex: 1, height: this.props.btnHeight }]}>
                    <Text style={[btn.btnText, btn.textColor]}>Botch: XXX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[btnInv.btn, { flex: 1, height: this.props.btnHeight }]}>
                    <Text style={[btnInv.btnText, btnInv.textColor]}>10s: XXX</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BotchTensButtons;
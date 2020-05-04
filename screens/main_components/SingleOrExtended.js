import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut,
    MageButtonInvStyle as btnInv
} from '../../Styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftButton: {
        flex: 1,
        height: 40,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: 0
    },
    rightButton: {
        flex: 1,
        height: 40,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: 0
    }
});

export function SingleOrExtended({ type, setSingle, setMulti }) {

    const singleCallback = setSingle;
    const multiCallback = setMulti;

    let leftBtnStyle, leftTextStyle, leftTextColor;
    let rightBtnStyle, rightTextStyle, rightTextColor;

    if (type == 'single') {
        leftBtnStyle = btn.btn;
        leftTextStyle = btn.btnText;
        leftTextColor = btn.textColor;
        rightBtnStyle = btnOut.btn;
        rightTextStyle = btnOut.btnText;
        rightTextColor = btnOut.textColor;
    }
    else {
        leftBtnStyle = btnOut.btn;
        leftTextStyle = btnOut.btnText;
        leftTextColor = btnOut.textColor;
        rightBtnStyle = btn.btn;
        rightTextStyle = btn.btnText;
        rightTextColor = btn.textColor;
    }




    return (
        <View style={[styles.container, { marginTop: 25, marginBottom: 20 }]}>
            <TouchableOpacity
                style={[leftBtnStyle, styles.leftButton]}
                onPress={singleCallback}
            >
                <Text style={[leftTextStyle, leftTextColor]}>Single Action</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[rightBtnStyle, styles.rightButton]}
                onPress={multiCallback}
            >
                <Text style={[rightTextStyle, rightTextColor]}>Extended Action</Text>
            </TouchableOpacity>
        </View>
    )
}
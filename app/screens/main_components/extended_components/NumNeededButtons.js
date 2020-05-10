import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
    MagePurple, MageGold, MageGrey,
    BtnHeight, BtnWidth, BtnFontSize, BtnFontWeight
} from '../../../Styles'

export function NumNeededButtons({value, modifyValue}) {
    
    const numStyle = {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: BtnHeight,
        width: BtnHeight,
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize,
        color: MagePurple
    }

    const modifyMargin = {
        marginLeft: 3,
        marginRight: 3
    }

    return (
        <View style={styles.card}>
            <Text style={styles.cardHeader}>Successes Needed:</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.yellowButton, modifyMargin]} onPress={() => modifyValue(-5)}>
                    <View style={styles.flexCenter}>
                        <Text style={styles.yellowButtonText}>{"-5"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.yellowButton, modifyMargin]} onPress={() => modifyValue(-1)}>
                    <View style={styles.flexCenter}>
                        <Text style={styles.yellowButtonText}>{"-1"}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={numStyle}>{value}</Text>
                <TouchableOpacity style={[styles.yellowButton, modifyMargin]} onPress={() => modifyValue(1)}>
                    <View style={styles.flexCenter}>
                        <Text style={styles.yellowButtonText}>{"+1"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.yellowButton, modifyMargin]} onPress={() => modifyValue(5)}>
                    <View style={styles.flexCenter}>
                        <Text style={styles.yellowButtonText}>{"+5"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MagePurple,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: MageGrey,
        marginLeft: 5,
        marginRight: 5,
        height: 66
    },
    cardHeader: {
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize,
        color: MagePurple
    },
    yellowButton: {
        borderWidth: BtnWidth,
        borderColor: MagePurple,
        backgroundColor: MageGold,
        borderRadius: 5,
        height: BtnHeight,
        width: BtnHeight,
        padding: 0,
        marginTop: 0,
        marginBottom: 10
    },
    yellowButtonText: {
        textAlign: 'center',
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize,
        color: MagePurple
    },
    flexCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    black: { borderWidth: 2, borderColor: 'black' }
})


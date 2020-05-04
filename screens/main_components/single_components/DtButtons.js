import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
    MagePurple, MageGold, MageGrey,
    BtnHeight, BtnWidth, BtnFontSize, BtnFontWeight
} from '../../../Styles'

export function DTButtons({ difficulty, threshold, modifyDifficulty, modifyThreshold }) {
    return (
        <View style={{ height: 67 }}>
            <View style={styles.boxesRowContainer}>
                <GreyBox title="Difficulty" value={difficulty} modifyValue={modifyDifficulty} />
                <GreyBox title="Threshold" value={threshold} modifyValue={modifyThreshold} />
            </View>
        </View>
    )
}

function GreyBox({ title, value, modifyValue }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <Text style={styles.cardHeader}>{title}</Text>
                <View style={styles.btnsRow}>
                    <TouchableOpacity style={styles.yellowButton} onPress={() => modifyValue(-1)}>
                        <View style={styles.flexCenter}>
                            <Text style={styles.yellowButtonText}>{"-1"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.valueDisplay}>
                        <View style={styles.flexCenter}>
                            <Text style={styles.yellowButtonText}>{value}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.yellowButton} onPress={() => modifyValue(1)}>
                        <View style={styles.flexCenter}>
                            <Text style={styles.yellowButtonText}>{"+1"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxesRowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardHeader: {
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize,
        color: MagePurple
    },
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
        height: 60
    },
    btnsRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    valueDisplay: {
        borderRadius: 5,
        height: BtnHeight,
        width: BtnHeight,
        padding: 0,
        borderWidth: 0,
        backgroundColor: 'transparent',
        marginTop: 0, marginBottom: 10
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
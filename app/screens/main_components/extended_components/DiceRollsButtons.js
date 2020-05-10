import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
    MagePurple, MageGold, MageGrey,
    BtnHeight, BtnWidth, BtnFontSize, BtnFontWeight
} from '../../../Styles'

import { FontAwesome5 } from '@expo/vector-icons';

export function DiceRollsButtons({difficulty, numRolls, modifyDifficulty, modifyNumRolls, rollsUnlimited, toggleRollsUnlimited}) {
    return (
        <View style={{ height: 73 }}>
            <View style={styles.boxesRowContainer}>
                <DiffBox value={difficulty} modifyValue={modifyDifficulty} />
                <NumRollsBox
                    value={numRolls}
                    modifyValue={modifyNumRolls}
                    rollsUnlimited={rollsUnlimited}
                    toggleRollsUnlimited={toggleRollsUnlimited} />
            </View>
        </View>
        
    )
}


function DiffBox({ value, modifyValue }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={styles.cardHeaderWrapper}>
                    <Text style={styles.cardHeader}>Difficulty</Text>
                </View>
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


function NumRollsBox({ value, modifyValue, rollsUnlimited, toggleRollsUnlimited }) {
    let content = rollsUnlimited ?
        <NumRollsInfinite/> :
        <NumRollsButtons value={value} modifyValue={modifyValue}/>;

        const toggleBtnStyle = {
            backgroundColor: MagePurple,
            borderColor: MagePurple,
            borderWidth: 1,
            borderRadius: 4,
        }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <TouchableOpacity
                    style={[styles.cardHeaderWrapper, toggleBtnStyle]}
                    onPress={() => toggleRollsUnlimited()}
                >
                    <Text style={[styles.cardHeader], {color: MageGold}}># Rolls</Text>
                </TouchableOpacity>
                {content}
            </View>
        </View>
    )
}

function NumRollsButtons({value, modifyValue}){
    return (
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
    )
}

function NumRollsInfinite() {
    return (
        <Text style={{flex: 1, textAlignVertical: 'center'}}>
            <FontAwesome5 name="infinity" size={24} color={MagePurple} />
        </Text>
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
    cardHeaderWrapper: {
        
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 2,
        marginBottom: 2
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

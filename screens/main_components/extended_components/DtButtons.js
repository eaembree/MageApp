import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut,
    MageButtonInvStyle as btnInv
} from '../../../Styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export function DTButtons({difficulty, numRolls, modifyDifficulty, modifyNumRolls}) {
    const greyCardBody = [
        btnOut.btn,
        { backgroundColor: '#ebebeb', flex: 1, height: 60, marginLeft: 5, marginRight: 5 },
        { paddingTop: 2, paddingBottom: 2 },
        { borderRadius: 5 }
    ];
    const greyCardHeader = [
        btnOut.btnText, btnOut.textColor,
        { marginBottom: 5 },
        //{ borderWidth: 3, borderColor: 'black' }
    ];
    const grayCardBtnRow = [
        { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
        //{ borderWidth: 3, borderColor: 'black' }
    ];
    const grayCardYellowBtn = [
        btnInv.btn,
        { borderRadius: 5 },
        { height: 30, width: 30 },
        { padding: 0 },
        { marginTop: 0, marginBottom: 10 }
    ];
    const grayCardNumber = [
        btnInv.btn,
        { borderRadius: 5 },
        { height: 30, width: 30 },
        { padding: 0 },
        { borderWidth: 0 },
        { backgroundColor: 'transparent' },
        { marginTop: 0, marginBottom: 10 }
    ];
    const grayCardYellowBtnText = [
        btnInv.btnText, btnInv.textColor
    ];
    const flexCenter = { flex: 1, justifyContent: 'center', alignItems: 'center' }
    return (
        <View style={[styles.container]}>
            <View style={greyCardBody}>
                <View styles={{ flex: 1 }}>
                    <View style={flexCenter}>
                        <Text style={greyCardHeader}>Difficulty</Text>
                    </View>
                    <View style={grayCardBtnRow}>
                        <TouchableOpacity style={grayCardYellowBtn} onPress={() => modifyDifficulty(-1)}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"-1"}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={grayCardNumber}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{difficulty}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={grayCardYellowBtn} onPress={() => modifyDifficulty(1)}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"+1"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={greyCardBody}>
                <View styles={{ flex: 1 }}>
                    <View style={flexCenter}>
                        <Text style={greyCardHeader}># Rolls</Text>
                    </View>
                    <View style={grayCardBtnRow}>
                        <TouchableOpacity style={grayCardYellowBtn} onPress={() => modifyNumRolls(-1)}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"-1"}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={grayCardNumber}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{numRolls}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={grayCardYellowBtn} onPress={() => modifyNumRolls(1)}>
                            <View style={flexCenter}>
                                <Text style={grayCardYellowBtnText}>{"+1"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
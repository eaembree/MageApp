import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import {
    MageButtonStyle as btn,
    MageButtonInvStyle as btnInv,
    MageGrey, MagePurple
} from '../../Styles'

export function NumDiceButtons({ numDice, modifyNumDice, rollDice }) {
    return (
        <View style={styles.compContainer}>
            <View style={styles.greyCardBody}>
                <View style={styles.btnsRowContainer}>
                    <View style={styles.plusMinusContainer}>
                        <TouchableOpacity
                            style={btn.btn}
                            onPress={() => modifyNumDice(-5)}>
                            <Text style={[btn.textColor, btn.btnText]}>{"-5"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={btn.btn}
                            onPress={() => modifyNumDice(-1)}>
                            <Text style={[btn.textColor, btn.btnText]}>{"-1"}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rollContainer}>
                        <TouchableOpacity
                            style={[btnInv.btn, { flex: 1 }]}
                            onPress={() => rollDice()}>
                            <Text style={[btnInv.textColor, btnInv.btnText]}>
                                {numDice} <FontAwesome5 name="dice-d20" />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.plusMinusContainer}>
                        <TouchableOpacity
                            style={btn.btn}
                            onPress={() => modifyNumDice(1)}>
                            <Text style={[btn.textColor, btn.btnText]}>{"+1"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={btn.btn}
                            onPress={() => modifyNumDice(5)}>
                            <Text style={[btn.textColor, btn.btnText]}>{"+5"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    compContainer: {
        height: 56
    },
    greyCardBody: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MagePurple,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: MageGrey,
        flex: 1,
        marginLeft: 25,
        marginRight: 25
    },
    btnsRowContainer: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    plusMinusContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rollContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10
    }
})
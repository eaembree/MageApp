import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut
} from '../../Styles'

export function YesNoOption({ title, yesTrue, yesClicked, noClicked }) {

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

    let leftBtnStyle, leftTextStyle, leftTextColor;
    let rightBtnStyle, rightTextStyle, rightTextColor;

    if (yesTrue) {
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
        <View>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>{title}</Text>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[leftBtnStyle, styles.leftButton]}
                    onPress={yesClicked}
                >
                    <Text style={[leftTextStyle, leftTextColor]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[rightBtnStyle, styles.rightButton]}
                    onPress={noClicked}
                >
                    <Text style={[rightTextStyle, rightTextColor]}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
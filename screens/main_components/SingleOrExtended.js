import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut
} from '../../Styles'

export function SingleOrExtended({ type, setSingle, setExtended }) {

    const singleCallback = setSingle;
    const extendedCallback = setExtended;

    let leftBtnStyle, leftTextStyle, leftTextColor, leftCheck;
    let rightBtnStyle, rightTextStyle, rightTextColor, rightCheck;

    if (type == 'single') {
        leftBtnStyle = btn.btn;
        leftTextStyle = btn.btnText;
        leftTextColor = btn.textColor;
        leftCheck = true;
        rightBtnStyle = btnOut.btn;
        rightTextStyle = btnOut.btnText;
        rightTextColor = btnOut.textColor;
        rightCheck = false;
    }
    else {
        leftBtnStyle = btnOut.btn;
        leftTextStyle = btnOut.btnText;
        leftTextColor = btnOut.textColor;
        leftCheck = false;
        rightBtnStyle = btn.btn;
        rightTextStyle = btn.btnText;
        rightTextColor = btn.textColor;
        rightCheck = true;
    }

    return (
        <View style={[styles.container, { marginTop: 25, marginBottom: 20 }]}>
            <TouchableOpacity
                style={[leftBtnStyle, styles.leftButton]}
                onPress={singleCallback}
            >
                <CheckOrNo text="Single Action"
                    showCheck={leftCheck}
                    stylesArray={[leftTextStyle, leftTextColor]}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[rightBtnStyle, styles.rightButton]}
                onPress={extendedCallback}
            >
                <CheckOrNo text="Extended Action"
                    showCheck={rightCheck}
                    stylesArray={[rightTextStyle, rightTextColor]}
                />
            </TouchableOpacity>
        </View>
    )
}

function CheckOrNo({showCheck, stylesArray, text}) {
    console.log(stylesArray)
    let result = <Text style={stylesArray}>{text}</Text>

    if(showCheck){
        result =
            <Text style={stylesArray}>
                <FontAwesome5 name="check" /> {text}
            </Text>
    }

    return result;
}

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

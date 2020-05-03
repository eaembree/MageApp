import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export function OptionButton({
    isSelected,
    btnStyleArr, btnUnselectedStyleArr, btnSelectedStyleArr,
    textUnselectedStyleArr, textSelectedStyleArr,
    onPress, btnText }) {

    const btnSt = isSelected ?
        [...btnStyleArr, ...btnSelectedStyleArr] :
        [...btnStyleArr, ...btnUnselectedStyleArr];
    const textSt = isSelected ?
        textSelectedStyleArr :
        textUnselectedStyleArr;

    return (
        <TouchableOpacity
            style={btnSt}
            onPress={onPress}
        >
            <Text style={textSt}>{btnText}</Text>
        </TouchableOpacity>
    )
}
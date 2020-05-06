import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut,
    MageButtonInvStyle as btnInv
} from '../../Styles'
import { SettingsContext, TensOptions, getTensText } from '../../SettingsData'
import { OptionButton } from './OptionButton';

export function TensOption() {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        btnContainer: {
            flex: 1,
            marginBottom: 20
        },
        header: {
            textAlign: 'center', fontSize: 20
        },
        firstBtn: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
        middleBtn: {
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0
        },
        lastBtn: { borderTopLeftRadius: 0, borderTopRightRadius: 0 }
    });

    const btnArr = [
        { height: 40 },
        { marginTop: 0, marginBottom: 0 }
    ]

    const textUnselectedArr = [
        btnInv.btnText,
        btnInv.textColor
    ];

    const textSelectedArr = [
        btn.btnText,
        btn.textColor
    ];

    const {
        tensOption, setTensOption
    } = React.useContext(SettingsContext);

    const btnData = [
        {
            id: 'tens-' + TensOptions.Regular,
            isSelected: tensOption == TensOptions.Regular,
            setFunc: () => { setTensOption(TensOptions.Regular) },
            text: getTensText(TensOptions.Regular),
            btnStyle: [...btnArr, styles.firstBtn],
            btnUnselectedStyle: [btnOut.btn],
            btnSelectedStyle: [btn.btn],
            textUnselectedStyle: [...textUnselectedArr],
            textSelectedStyle: [...textSelectedArr]
        },
        {
            id: 'tens-' + TensOptions.Reroll,
            isSelected: tensOption == TensOptions.Reroll,
            setFunc: () => { setTensOption(TensOptions.Reroll) },
            text: getTensText(TensOptions.Reroll),
            btnStyle: [...btnArr, styles.middleBtn],
            btnUnselectedStyle: [btnOut.btn],
            btnSelectedStyle: [btn.btn],
            textUnselectedStyle: [...textUnselectedArr],
            textSelectedStyle: [...textSelectedArr]
        },
        {
            id: 'tens-' + TensOptions.Double,
            isSelected: tensOption == TensOptions.Double,
            setFunc: () => { setTensOption(TensOptions.Double) },
            text: getTensText(TensOptions.Double),
            btnStyle: [...btnArr, styles.lastBtn],
            btnUnselectedStyle: [btnOut.btn],
            btnSelectedStyle: [btn.btn],
            textUnselectedStyle: [...textUnselectedArr],
            textSelectedStyle: [...textSelectedArr]
        }
    ]

    return (
        <View styles={styles.container}>
            <Text style={styles.header}>{"10s Type"}</Text>
            <FlatList
                data={btnData}
                renderItem={
                    ({ item }) =>
                        <OptionButton
                            isSelected={item.isSelected}
                            btnStyleArr={item.btnStyle}
                            btnUnselectedStyleArr={item.btnUnselectedStyle}
                            btnSelectedStyleArr={item.btnSelectedStyle}
                            textUnselectedStyleArr={item.textUnselectedStyle}
                            textSelectedStyleArr={item.textSelectedStyle}
                            onPress={item.setFunc}
                            btnText={item.text}
                        />
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

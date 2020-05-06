import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {
    MageButtonStyle as btn,
    MageButtonOutlineStyle as btnOut,
    MageButtonInvStyle as btnInv
} from '../../Styles'
import { SettingsContext, BotchOptions, getBotchText } from '../../SettingsData'
import { OptionButton } from './OptionButton';

export function BotchOption() {
    const styles = StyleSheet.create({
        container: {
        },
        btnContainer: {
            marginBottom: 20
        },
        header: {
            textAlign: 'center', fontSize: 20,
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
        botchOption, setBotchOption
    } = React.useContext(SettingsContext);

    const btnData = [
        {
            id: 'botch-' + BotchOptions.Original,
            isSelected: botchOption == BotchOptions.Original,
            setFunc: () => { setBotchOption(BotchOptions.Original) },
            text: getBotchText(BotchOptions.Original),
            btnStyle: [...btnArr, styles.firstBtn],
            btnUnselectedStyle: [btnOut.btn],
            btnSelectedStyle: [btn.btn],
            textUnselectedStyle: [...textUnselectedArr],
            textSelectedStyle: [...textSelectedArr]
        },
        {
            id: 'botch-' + BotchOptions.RevisedM20,
            isSelected: botchOption == BotchOptions.RevisedM20,
            setFunc: () => { setBotchOption(BotchOptions.RevisedM20) },
            text: getBotchText(BotchOptions.RevisedM20),
            btnStyle: [...btnArr, styles.middleBtn],
            btnUnselectedStyle: [btnOut.btn],
            btnSelectedStyle: [btn.btn],
            textUnselectedStyle: [...textUnselectedArr],
            textSelectedStyle: [...textSelectedArr]
        },
        {
            id: 'botch-' + BotchOptions.None,
            isSelected: botchOption == BotchOptions.None,
            setFunc: () => { setBotchOption(BotchOptions.None) },
            text: getBotchText(BotchOptions.None),
            btnStyle: [...btnArr, styles.lastBtn],
            btnUnselectedStyle: [btnOut.btn],
            btnSelectedStyle: [btn.btn],
            textUnselectedStyle: [...textUnselectedArr],
            textSelectedStyle: [...textSelectedArr]
        }
    ]

    return (
        <View styles={styles.container}>
            <Text style={styles.header}>{"Botch Type"}</Text>
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

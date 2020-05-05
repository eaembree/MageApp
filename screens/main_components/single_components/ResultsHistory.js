import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import {
    MageButtonStyle as btn,
    MageButtonInvStyle as btnInv,
    MagePurple, MageGold, MageGrey,
    BtnHeight, BtnWidth, BtnFontSize, BtnFontWeight
} from '../../../Styles'

export function ResultsHistory({ items, showHistory, clearHistory, toggleShowHistory }) {
    return (
        <View>
            <ShowAndClear showHistory={showHistory}
                clearHistory={clearHistory}
                toggleShowHistory={toggleShowHistory} />
            <HistoryPlaceholder items={items} showHistory={showHistory} />
        </View>
    )
}

function HistoryPlaceholder({ items, showHistory }) {
    let result = <View></View>

    if (showHistory) {
        result =
            <FlatList
                data={items}
                renderItem={({ item }) => <Text>{item.finalSuccesses}</Text>}
                keyExtractor={(item, index) => `history-item-${index}`}
            />
    }

    return result;
}

function ShowAndClear({ showHistory, clearHistory, toggleShowHistory }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Show showHistory={showHistory} toggleShowHistory={toggleShowHistory} />
            <Clear clearHistory={clearHistory} />
        </View>
    )
}

function Show({ showHistory, toggleShowHistory }) {
    let faIcon = showHistory ? "chevron-down" : "chevron-right";

    return (
        <TouchableOpacity style={[btn.btn, styles.smallBtn, { marginRight: 2 }]} onPress={() => toggleShowHistory()}>
            <Text style={[btn.textColor, btn.btnText, styles.smallBtnText]}>History <FontAwesome5 name={faIcon} onPress={() => toggleShowHistory()} /></Text>
        </TouchableOpacity>
    )
}

function Clear({ clearHistory }) {
    return (
        <TouchableOpacity style={[btn.btn, styles.smallBtn, { marginLeft: 2 }]}
            onPress={() => clearHistory()}>
            <Text style={[btn.textColor, btn.btnText, styles.smallBtnText]}>Clear History</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    smallBtn: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 25,
        width: 85
    },
    smallBtnText: {
        fontSize: 12
    }
})
